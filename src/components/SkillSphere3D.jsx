import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'React.js', 
  'Three.js', 'R3F', 'MERN', 'Node.js', 
  'Express.js', 'MongoDB', 'Git', 'GitHub', 'VS Code', 
  'Gen AI', 'JavaScript', 'APIs'
];

function SkillWord({ word, index, count, radius }) {
  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Distribute words evenly over the sphere surface
  const phi = Math.acos(-1 + (2 * index) / count);
  const theta = Math.sqrt(count * Math.PI) * phi;

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  // Make text always face the camera
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Text
      ref={textRef}
      position={[x, y, z]}
      fontSize={hovered ? 0.32 : 0.25}
      color={hovered ? '#06b6d4' : index % 3 === 0 ? '#a855f7' : index % 3 === 1 ? '#ec4899' : '#f8fafc'}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
      outlineWidth={hovered ? 0.04 : 0}
      outlineColor={hovered ? 'rgba(6,182,212,0.3)' : 'transparent'}
    >
      {word}
    </Text>
  );
}

export default function SkillSphere3D() {
  const mainGroup = useRef(null);
  
  // High-frequency pointer coordinate references to avoid triggering React renders
  const pointerState = useRef({
    isDown: false,
    startX: 0,
    startY: 0
  });

  const rotationVelocity = useRef({
    x: 0.003,
    y: 0.003
  });

  // Smooth frame updates entirely in WebGL
  useFrame(() => {
    if (mainGroup.current) {
      mainGroup.current.rotation.y += rotationVelocity.current.y;
      mainGroup.current.rotation.x += rotationVelocity.current.x;

      // Decay velocity back to standard slow auto-spin if not active dragging
      if (!pointerState.current.isDown) {
        rotationVelocity.current.x = THREE.MathUtils.lerp(rotationVelocity.current.x, 0.003, 0.05);
        rotationVelocity.current.y = THREE.MathUtils.lerp(rotationVelocity.current.y, 0.003, 0.05);
      }
    }
  });

  // Track click & drag events using direct Ref modification
  useEffect(() => {
    const handleDown = (e) => {
      pointerState.current.isDown = true;
      pointerState.current.startX = e.clientX || (e.touches && e.touches[0].clientX);
      pointerState.current.startY = e.clientY || (e.touches && e.touches[0].clientY);
    };

    const handleMove = (e) => {
      if (!pointerState.current.isDown) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const deltaX = clientX - pointerState.current.startX;
      const deltaY = clientY - pointerState.current.startY;

      // Update ref velocities directly (zero state-setting, zero React re-renders!)
      rotationVelocity.current.y = deltaX * 0.008;
      rotationVelocity.current.x = deltaY * 0.008;

      pointerState.current.startX = clientX;
      pointerState.current.startY = clientY;
    };

    const handleUp = () => {
      pointerState.current.isDown = false;
    };

    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchstart', handleDown, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchstart', handleDown);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <group ref={mainGroup}>
      {skills.map((skill, index) => (
        <SkillWord
          key={skill}
          word={skill}
          index={index}
          count={skills.length}
          radius={2.0} // Perfect centering/bounds safety padding
        />
      ))}
    </group>
  );
}
