interface OutputLine {
  text: string;
  type: 'command' | 'output' | 'error';
}

const COMMANDS = {
  help: {
    description: 'Display available commands',
    action: (): OutputLine[] => [
      { text: '', type: 'output' },
      { text: 'Available Commands:', type: 'output' },
      { text: '═════════════════════════════════════════════════', type: 'output' },
      { text: '', type: 'output' },
      { text: '  help       - Display this help message', type: 'output' },
      { text: '  about      - Learn about CIKA Pattern', type: 'output' },
      { text: '  features   - View AI features', type: 'output' },
      { text: '  solana     - Display Solana integration info', type: 'output' },
      { text: '  stats      - Show CIKA statistics', type: 'output' },
      { text: '  docs       - View documentation', type: 'output' },
      { text: '  roadmap    - Check development roadmap', type: 'output' },
      { text: '  cluck      - Hear from CIKA', type: 'output' },
      { text: '  clear      - Clear the terminal', type: 'output' },
      { text: '', type: 'output' },
      { text: 'Tip: Use arrow keys to navigate command history', type: 'output' },
      { text: '', type: 'output' },
    ],
  },
  about: {
    description: 'Learn about CIKA Pattern',
    action: (): OutputLine[] => [
      { text: '', type: 'output' },
      { text: '╔══════════════════════════════════════════╗', type: 'output' },
      { text: '║         CIKA PATTERN v1.0                ║', type: 'output' },
      { text: '╚══════════════════════════════════════════╝', type: 'output' },
      { text: '', type: 'output' },
      { text: 'CIKA Pattern is an advanced AI-powered chicken', type: 'output' },
      { text: 'living on the Solana blockchain. Combining', type: 'output' },
      { text: 'artificial intelligence with blockchain', type: 'output' },
      { text: 'technology to create a unique digital entity.', type: 'output' },
      { text: '', type: 'output' },
      { text: '> Fast as lightning (thanks to Solana)', type: 'output' },
      { text: '> Smart as a neural network', type: 'output' },
      { text: '> Decentralized like true blockchain should be', type: 'output' },
      { text: '', type: 'output' },
    ],
  },
  features: {
    description: 'View AI features',
    action: (): OutputLine[] => [
      { text: '', type: 'output' },
      { text: 'AI Features:', type: 'output' },
      { text: '─────────────────────────────────────────', type: 'output' },
      { text: '', type: 'output' },
      { text: '🧠 Neural Pattern Recognition', type: 'output' },
      { text: '   Advanced AI algorithms for pattern detection', type: 'output' },
      { text: '', type: 'output' },
      { text: '⚡ Real-time Processing', type: 'output' },
      { text: '   Lightning-fast blockchain interactions', type: 'output' },
      { text: '', type: 'output' },
      { text: '🔮 Predictive Analytics', type: 'output' },
      { text: '   Machine learning powered insights', type: 'output' },
      { text: '', type: 'output' },
      { text: '🔐 Secure & Transparent', type: 'output' },
      { text: '   All operations on-chain and verifiable', type: 'output' },
      { text: '', type: 'output' },
    ],
  },
  solana: {
    description: 'Display Solana integration info',
    action: (): OutputLine[] => [
      { text: '', type: 'output' },
      { text: 'Solana Integration:', type: 'output' },
      { text: '─────────────────────────────────────────', type: 'output' },
      { text: '', type: 'output' },
      { text: 'Network:        Solana Mainnet', type: 'output' },
      { text: 'Speed:          65,000 TPS', type: 'output' },
      { text: 'Transaction:    < $0.001', type: 'output' },
      { text: 'Consensus:      Proof of History + PoS', type: 'output' },
      { text: '', type: 'output' },
      { text: 'Why Solana?', type: 'output' },
      { text: '• Ultra-fast transaction speeds', type: 'output' },
      { text: '• Low transaction costs', type: 'output' },
      { text: '• Scalable infrastructure', type: 'output' },
      { text: '• Growing ecosystem', type: 'output' },
      { text: '', type: 'output' },
    ],
  },
  stats: {
    description: 'Show CIKA statistics',
    action: (): OutputLine[] => {
      const uptime = Math.floor(Math.random() * 100) + 50;
      const predictions = Math.floor(Math.random() * 10000) + 5000;
      const accuracy = (Math.random() * 5 + 93).toFixed(2);

      return [
        { text: '', type: 'output' },
        { text: 'CIKA Statistics:', type: 'output' },
        { text: '═════════════════════════════════════════', type: 'output' },
        { text: '', type: 'output' },
        { text: `Uptime:              ${uptime} days`, type: 'output' },
        { text: `Predictions Made:    ${predictions.toLocaleString()}`, type: 'output' },
        { text: `Accuracy Rate:       ${accuracy}%`, type: 'output' },
        { text: `AI Model Version:    2.4.1`, type: 'output' },
        { text: `Active Users:        ${Math.floor(Math.random() * 1000) + 500}`, type: 'output' },
        { text: '', type: 'output' },
        { text: '[████████████████░░] Neural Network: 89%', type: 'output' },
        { text: '[████████████████░░] Processing Power: 87%', type: 'output' },
        { text: '[██████████████████] Blockchain Sync: 100%', type: 'output' },
        { text: '', type: 'output' },
      ];
    },
  },
  cluck: {
    description: 'Hear from CIKA',
    action: (): OutputLine[] => {
      const clucks = [
        'Cluck cluck! 🐔 Blockchain is the future!',
        'CLUCK! Processing patterns... *beep boop*',
        'Cluck? More like COMPUTE! ⚡',
        '*Digital chicken noises* CLUCK-CHAIN!',
        'Cluck cluck! AI + Blockchain = 🚀',
        'Error 404: Regular chicken not found. AI chicken active!',
        '*Clucks in binary* 01000011 01001100 01010101 01000011 01001011',
      ];

      const randomCluck = clucks[Math.floor(Math.random() * clucks.length)];

      return [
        { text: '', type: 'output' },
        { text: randomCluck, type: 'output' },
        { text: '', type: 'output' },
      ];
    },
  },
  docs: {
    description: 'View documentation',
    action: (): OutputLine[] => [
      { text: '', type: 'output' },
      { text: 'CIKA Pattern Documentation', type: 'output' },
      { text: '═════════════════════════════════════════════════', type: 'output' },
      { text: '', type: 'output' },
      { text: '📖 Getting Started', type: 'output' },
      { text: '   CIKA Pattern is an AI-powered agent built for Solana', type: 'output' },
      { text: '   It combines neural networks with blockchain technology', type: 'output' },
      { text: '', type: 'output' },
      { text: '🔧 Key Components', type: 'output' },
      { text: '   - Neural Pattern Engine', type: 'output' },
      { text: '   - Solana RPC Interface', type: 'output' },
      { text: '   - On-Chain Data Processor', type: 'output' },
      { text: '   - Machine Learning Model', type: 'output' },
      { text: '', type: 'output' },
      { text: '🚀 Quick Start', type: 'output' },
      { text: '   1. Connect your Solana wallet', type: 'output' },
      { text: '   2. Deploy CIKA to your program', type: 'output' },
      { text: '   3. Start processing patterns', type: 'output' },
      { text: '', type: 'output' },
    ],
  },
  roadmap: {
    description: 'Check development roadmap',
    action: (): OutputLine[] => [
      { text: '', type: 'output' },
      { text: 'Development Roadmap', type: 'output' },
      { text: '═════════════════════════════════════════════════', type: 'output' },
      { text: '', type: 'output' },
      { text: '✓ Q1 2024: Alpha Launch', type: 'output' },
      { text: '  - Core AI engine deployed', type: 'output' },
      { text: '  - Solana integration complete', type: 'output' },
      { text: '', type: 'output' },
      { text: '⏳ Q2 2024: Beta Features', type: 'output' },
      { text: '  - Advanced pattern recognition', type: 'output' },
      { text: '  - Community governance', type: 'output' },
      { text: '  - API enhancement', type: 'output' },
      { text: '', type: 'output' },
      { text: '📅 Q3 2024: Mainnet Release', type: 'output' },
      { text: '  - Full production deployment', type: 'output' },
      { text: '  - Token launch on Solana', type: 'output' },
      { text: '  - Partnership ecosystem', type: 'output' },
      { text: '', type: 'output' },
    ],
  },
  clear: {
    description: 'Clear the terminal',
    action: (): OutputLine[] => {
      return [];
    },
  },
};

export function executeCommand(input: string): OutputLine[] {
  const trimmedInput = input.trim().toLowerCase();

  if (trimmedInput === 'clear') {
    return [{ text: '', type: 'output' }];
  }

  if (trimmedInput in COMMANDS) {
    return COMMANDS[trimmedInput as keyof typeof COMMANDS].action();
  }

  return [
    { text: '', type: 'output' },
    { text: `Command not found: ${input}`, type: 'error' },
    { text: 'Type "help" for available commands', type: 'error' },
    { text: '', type: 'output' },
  ];
}
