import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Generate stable random points for cosmic space dust
function generateParticles(count = 350) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  return positions;
}

export default function Workstation3D() {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const particleRef = useRef(null);
  const positionArray = generateParticles(350);

  // Animate elements and handle cursor parallax
  useFrame((state) => {
    const { pointer } = state;
    const time = state.clock.getElapsedTime();

    // Buttery-smooth mouse interpolation for parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.4,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.4,
        0.05
      );
    }

    // Spin the shiny central geometric crystal
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.2;
      coreRef.current.rotation.y = time * 0.3;
    }

    // Slowly rotate the floating space dust
    if (particleRef.current) {
      particleRef.current.rotation.y = time * 0.03;
      particleRef.current.rotation.x = time * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Immersive space lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
      
      {/* Central pulsing cyber-core light */}
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#a855f7" distance={8} decay={2} />

      {/* Floating Procedural Workstation Platform */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group>
          {/* Main Central Tech Crystal (Procedural Workstation centerpiece) */}
          <mesh ref={coreRef} position={[0, 0, 0]}>
            <dodecahedronGeometry args={[1.3, 0]} />
            <MeshDistortMaterial
              color="#8b5cf6"
              roughness={0.1}
              metalness={0.9}
              clearcoat={1.0}
              clearcoatRoughness={0.1}
              distort={0.25}
              speed={1.5}
            />
          </mesh>

          {/* Outer Orbital Glowing Glass Plate 1 */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[2.0, 0.05, 16, 100]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={1.2}
              roughness={0.1}
            />
          </mesh>

          {/* Outer Orbital Glowing Glass Plate 2 */}
          <mesh position={[0, 0, 0]} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.5, 0.03, 8, 80]} />
            <meshStandardMaterial
              color="#ec4899"
              emissive="#ec4899"
              emissiveIntensity={1.0}
              roughness={0.2}
            />
          </mesh>

          {/* Floating 'Node' Cubes (MERN Layers) */}
          <mesh position={[1.8, 1.2, -0.5]} scale={0.35}>
            <boxGeometry />
            <meshPhysicalMaterial
              color="#06b6d4"
              transmission={0.9}
              opacity={1}
              roughness={0.1}
              metalness={0.1}
              thickness={0.5}
              ior={1.5}
            />
          </mesh>

          <mesh position={[-1.6, -1.0, 0.8]} scale={0.4}>
            <boxGeometry />
            <meshPhysicalMaterial
              color="#a855f7"
              transmission={0.9}
              opacity={1}
              roughness={0.1}
              metalness={0.1}
              thickness={0.5}
              ior={1.5}
            />
          </mesh>

          {/* Glowing orbital moons */}
          <mesh position={[1.4, -1.5, -1.0]} scale={0.2}>
            <sphereGeometry />
            <meshBasicMaterial color="#ec4899" />
          </mesh>
        </group>
      </Float>

      {/* Floating Particles (Space Dust) */}
      <Points ref={particleRef} positions={positionArray} stride={3}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.045}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Secondary Cyan Particles for contrast */}
      <Points positions={positionArray.map(p => p * 0.95)} stride={3}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}
