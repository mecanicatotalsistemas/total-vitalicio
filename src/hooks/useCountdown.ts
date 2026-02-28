import { useState, useEffect } from 'react';

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem('countdown');
    return saved ? parseInt(saved) : 23 * 3600 + 47 * 60;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev > 0 ? prev - 1 : 0;
        sessionStorage.setItem('countdown', next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return { hours, minutes, seconds, timeLeft };
};
