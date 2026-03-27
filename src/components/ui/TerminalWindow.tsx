export function TerminalWindow({ text, isDone }: { text: string; isDone: boolean }) {
  return (
    <div style={{
      background: 'rgba(8, 8, 14, 0.93)',
      border: '1px solid rgba(0, 212, 255, 0.38)',
      borderRadius: '10px',
      boxShadow: '0 0 48px rgba(0, 212, 255, 0.12), 0 0 90px rgba(123, 47, 255, 0.07), 0 20px 60px rgba(0,0,0,0.6)',
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: '13px',
      lineHeight: '1.65',
      overflow: 'hidden',
      userSelect: 'none',
    }}>
      {/* Title bar */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(0, 212, 255, 0.18)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ marginLeft: 10, color: 'rgba(144,144,176,0.7)', fontSize: '11px', letterSpacing: '0.04em' }}>
          portfolio.jar — terminal
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', minHeight: '220px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {text.split('\n').map((line, i) => {
          const isCommand = line.startsWith('$');
          const isLabel = line.startsWith('>');
          return (
            <div key={i} style={{
              color: isCommand ? '#e8e8ff' : isLabel ? '#00ff88' : 'rgba(144,144,176,0.5)',
              minHeight: '1.65em',
            }}>
              {line || '\u00a0'}
            </div>
          );
        })}
        {/* Blinking cursor */}
        <span style={{
          display: 'inline-block',
          width: 8,
          height: 15,
          background: isDone ? '#00d4ff' : 'transparent',
          verticalAlign: 'text-bottom',
          animation: isDone ? 'blink 1s step-end infinite' : 'none',
          marginLeft: 1,
        }} />
      </div>
    </div>
  );
}
