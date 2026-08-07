import React, { useEffect, useRef } from 'react';

interface CosmicCanvasProps {
  interactive?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export const CosmicCanvas: React.FC<CosmicCanvasProps> = ({
  interactive = true,
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    interface Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      speed: number;
      phase: number;
      color: string;
      vx: number;
      vy: number;
    }

    let stars: Star[] = [];
    const countFactor = intensity === 'low' ? 60 : intensity === 'medium' ? 130 : 200;

    const colors = [
      '248, 250, 252', // Bone white
      '220, 38, 38',   // Crimson
      '168, 85, 247',  // Purple / Violet
      '245, 158, 11',  // Amber
      '99, 102, 241'   // Deep Indigo
    ];

    const initStars = () => {
      stars = [];
      const totalStars = Math.floor((width * height) / (20000 / (countFactor / 100)));

      for (let i = 0; i < totalStars; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.3,
          baseAlpha: Math.random() * 0.6 + 0.2,
          alpha: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
          color,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
        });
      }
    };

    initStars();

    let time = 0;

    const render = () => {
      time += 0.01;
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render cosmic background radial gradient attached gently to mouse
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.75
      );
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.06)');
      gradient.addColorStop(0.3, 'rgba(185, 28, 28, 0.03)');
      gradient.addColorStop(0.7, 'rgba(7, 8, 12, 0.4)');
      gradient.addColorStop(1, 'rgba(5, 6, 9, 0.95)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.phase += star.speed;
        star.alpha = star.baseAlpha + Math.sin(star.phase) * 0.25;

        // Subtle motion & mouse gravity pull
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (200 - dist) / 200;
          star.x -= (dx / dist) * force * 0.6;
          star.y -= (dy / dist) * force * 0.6;
        }

        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${star.color}, ${Math.max(0.1, star.alpha)})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby stars with delicate laser lines
        if (i % 6 === 0) {
          for (let j = i + 1; j < Math.min(i + 5, stars.length); j++) {
            const other = stars[j];
            const d = Math.hypot(star.x - other.x, star.y - other.y);
            if (d < 80) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - d / 80)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};
