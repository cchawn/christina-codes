import React, { useState, useEffect } from 'react';

const Emojis = () => {
  const EMOJIS = ['✨', '🌚', '✌️', '📚', '⚡️', '🐱', '💻'];

  const [emoji, setEmoji] = useState('✨');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(EMOJIS[index]);
      setIndex((index + 1) % EMOJIS.length);
    }, 500);

    return () => clearInterval(interval);
  }, [emoji, index, EMOJIS]);

  return <span aria-hidden>{emoji}</span>;
};

export default Emojis;
