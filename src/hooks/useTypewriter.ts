import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseTypewriterOptions {
  lines: string[];
  charDelay?: number;   // ms per character
  lineDelay?: number;   // extra ms pause between lines
  startDelay?: number;  // ms before typing begins
}

interface UseTypewriterResult {
  text: string;
  isDone: boolean;
}

export function useTypewriter({
  lines,
  charDelay = 28,
  lineDelay = 120,
  startDelay = 800,
}: UseTypewriterOptions): UseTypewriterResult {
  const reduced = useReducedMotion();
  const fullText = lines.join('\n');

  const [visibleChars, setVisibleChars] = useState(reduced ? fullText.length : 0);
  const isDone = visibleChars >= fullText.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced) {
      setVisibleChars(fullText.length);
      return;
    }

    setVisibleChars(0);

    // Build a per-character delay schedule (extra pause at newlines)
    let charIndex = 0;
    let accumulatedDelay = startDelay;

    function scheduleNext() {
      if (charIndex >= fullText.length) return;
      const char = fullText[charIndex];
      const delay = char === '\n' ? lineDelay : charDelay;
      timerRef.current = setTimeout(() => {
        charIndex++;
        setVisibleChars(charIndex);
        scheduleNext();
      }, delay);
      accumulatedDelay += delay;
    }

    // Suppress unused warning
    void accumulatedDelay;

    timerRef.current = setTimeout(() => {
      scheduleNext();
    }, startDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [fullText, charDelay, lineDelay, startDelay, reduced]);

  return {
    text: fullText.slice(0, visibleChars),
    isDone,
  };
}
