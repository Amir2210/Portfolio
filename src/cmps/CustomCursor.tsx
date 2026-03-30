import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for the outer ring trailing effect
  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.5 });
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    // Hide the default cursor when this component mounts successfully
    document.body.classList.add('hide-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]') !== null;
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('hide-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_#22d3ee]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.4)] backdrop-blur-[2px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.15)' : 'rgba(0,0,0,0)',
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.5)' : 'rgba(168, 85, 247, 0.8)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      />
    </>
  );
}
