import { useState } from 'react';
import { Zap, Brain, Code, Gift } from 'lucide-react';

interface CommandButtonsProps {
  onQuickCommand: (command: string) => void;
}

function CommandButtons({ onQuickCommand }: CommandButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttons = [
    { id: 'about', label: 'About', command: 'about', icon: Brain },
    { id: 'features', label: 'Features', command: 'features', icon: Zap },
    { id: 'solana', label: 'Solana', command: 'solana', icon: Code },
    { id: 'stats', label: 'Stats', command: 'stats', icon: Gift },
  ];

  return (
    <div className="border-t-2 border-green-500 px-4 py-4 bg-black flex flex-wrap gap-3 justify-center">
      {buttons.map((btn) => {
        const IconComponent = btn.icon;
        return (
          <button
            key={btn.id}
            onClick={() => onQuickCommand(btn.command)}
            onMouseEnter={() => setHoveredButton(btn.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-mono text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              hoveredButton === btn.id
                ? 'border-green-300 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.6)] bg-green-900 bg-opacity-20'
                : 'border-green-500 text-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]'
            }`}
          >
            <IconComponent className={`w-4 h-4 transition-transform duration-300 ${hoveredButton === btn.id ? 'rotate-180' : ''}`} />
            {btn.label}
          </button>
        );
      })}
    </div>
  );
}

export default CommandButtons;
