import { useRef, useCallback } from 'react';

interface Use3DEffectProps {
  intensity?: number;
  perspective?: number;
  smooth?: number;
}

export const use3DEffect = ({
  intensity = 20,
  perspective = 1000,
  smooth = 0.1
}: Use3DEffectProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const rotateX = ((y - rect.height / 2) / rect.height) * intensity;
      const rotateY = ((x - rect.width / 2) / rect.width) * intensity;

      ref.current.style.transform = `perspective(${perspective}px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      ref.current.style.transition = `transform ${smooth}s ease-out`;
    },
    [intensity, perspective, smooth]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
  }, [perspective]);

  return { ref, handleMouseMove, handleMouseLeave };
};