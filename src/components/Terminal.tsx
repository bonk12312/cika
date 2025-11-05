import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { executeCommand } from '../utils/commands';
import CommandButtons from './CommandButtons';

function TwitterLogo() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.02 14.02 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

interface OutputLine {
  text: string;
  type: 'command' | 'output' | 'error';
}

function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([
    { text: 'Welcome to CIKA PATTERN Terminal v1.0', type: 'output' },
    { text: 'AI Chicken for Solana Chain', type: 'output' },
    { text: '', type: 'output' },
    { text: 'Type "help" for available commands', type: 'output' },
    { text: '', type: 'output' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setOutput((prev) => [...prev, { text: `$ ${input}`, type: 'command' }]);

    const result = executeCommand(input.trim());
    setOutput((prev) => [...prev, ...result]);

    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleQuickCommand = (command: string) => {
    setInput(command);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      <a
        href="https://x.com/CikaPattern"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 text-green-500 hover:text-green-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] p-2 rounded-lg border border-green-500 hover:border-green-300 group"
      >
        <TwitterLogo />
      </a>

      <div className="w-full max-w-4xl">
        <div className="mb-6 text-center">
          <div className="inline-block border-2 border-green-500 rounded-lg px-6 py-3 bg-black shadow-[0_0_30px_rgba(34,197,94,0.2)] mb-4">
            <h1 className="text-4xl font-bold text-green-500 font-mono tracking-widest animate-pulse">
              CIKA PATTERN
            </h1>
            <p className="text-green-400 font-mono text-sm mt-2">AI Chicken for Solana</p>
          </div>
        </div>

        <div className="bg-black border-2 border-green-500 rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden">
          <div className="bg-black border-b-2 border-green-500 px-4 py-2 flex items-center gap-2">
            <TerminalIcon className="w-5 h-5 text-green-500" />
            <span className="text-green-500 font-mono text-sm">CIKA_PATTERN@solana:~</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>

          <div
            ref={terminalRef}
            onClick={handleTerminalClick}
            className="p-4 h-[500px] overflow-y-auto cursor-text font-mono text-sm scrollbar-thin scrollbar-track-black scrollbar-thumb-green-500"
          >
            {output.map((line, i) => (
              <div
                key={i}
                className={`mb-1 animate-fadeIn ${
                  line.type === 'command'
                    ? 'text-green-400 font-bold'
                    : line.type === 'error'
                    ? 'text-green-300'
                    : 'text-green-500'
                }`}
              >
                {line.text}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-500 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-green-500 outline-none caret-green-500"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>

          <CommandButtons onQuickCommand={handleQuickCommand} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard title="Speed" value="65,000 TPS" icon="⚡" />
          <InfoCard title="Network" value="Solana" icon="🔗" />
          <InfoCard title="Status" value="Active" icon="✓" />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="border border-green-500 rounded-lg p-4 bg-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:border-green-400 group cursor-pointer">
      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="text-green-600 font-mono text-xs">{title}</div>
      <div className="text-green-500 font-mono text-lg font-bold">{value}</div>
    </div>
  );
}

export default Terminal;
