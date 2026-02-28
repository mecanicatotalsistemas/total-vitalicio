import { useState, useEffect, useRef } from 'react';

export const useCountUp = (target: number, duration: number = 800) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      if (hasStarted) return;
      setHasStarted(true);

      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutQuad * target);

        setCount(currentCount);

        if (progress >= 1) {
          setCount(target);
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      const element = ref.current;
      observer.observe(element);

      if (element.getBoundingClientRect().top < window.innerHeight) {
        startAnimation();
      }
    }

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return { count, ref };
};
