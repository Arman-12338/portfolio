import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Card3D({ children, className = '', glowColor = 'rgba(168, 85, 247, 0.15)' }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Motion Values for cursor coordinates
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Springs for buttery-smooth animation interpolation
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // Glare overlay coordinate transforms
  const glareX = useTransform(rotateY, [-10, 10], ['0%', '100%']);
  const glareY = useTransform(rotateX, [-10, 10], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Cursor position relative to center of card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (max 10 degrees)
    const rY = (mouseX / (width / 2)) * 10;
    const rX = -(mouseY / (height / 2)) * 10;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Interactive Cyber Spotlight Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: hovered
            ? `radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 80%)`
            : 'none',
          opacity: hovered ? 1 : 0,
        }}
      />
      
      {/* Glare Reflection Sheet */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-overlay"
        style={{
          x: glareX,
          y: glareY,
          opacity: hovered ? 0.6 : 0,
        }}
      />

      <div style={{ transform: 'translateZ(20px)' }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
