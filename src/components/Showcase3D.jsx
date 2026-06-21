import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import { ArrowLeft, ArrowRight, ExternalLink, Monitor, Cpu } from 'lucide-react';
import * as THREE from 'three';
import Canvas3D from './ui/Canvas3D';

const projects = [
  {
    name: 'ATS Resume Checker',
    description: 'An intelligent resume analysis application developed as an internship milestone in collaboration with Digital Hero. It scores resume compatibility against job descriptions, identifies missing keywords, and outlines clear optimization suggestions to improve success rates.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    video: import.meta.env.VITE_ATS_RESUME_CHECKER_VIDEO_URL || 'video/ats_resume_checker.mp4',
    github: 'https://github.com/Arman-12338/Ats-resume-checker',
    demo: 'https://ats-resume-checker-lovat.vercel.app/'
  },
  {
    name: 'Connect Sphere',
    description: 'A real-time chat application featuring instant message transmission, private channel communication, client connection status tracking, and fluid modern dark theme.',
    tech: ['MERN Stack', 'Socket.io', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    video: import.meta.env.VITE_CONNECT_SPHERE_VIDEO_URL || 'video/chat1.mp4',
    github: 'https://github.com/Arman-12338/ConnectSphere',
    demo: 'https://connectsphere-weld.vercel.app'
  },
  {
    name: 'Weather App',
    description: 'A premium, real-time weather analytics application. Integrates global geolocation databases and OpenWeather APIs to produce real-time forecasts, atmospheric metrics, and sleek, weather-conditioned visual interfaces.',
    tech: ['React.js', 'Tailwind CSS', 'OpenWeather API', 'Lottie Animations', 'HTML5'],
    video: import.meta.env.VITE_WEATHER_APP_VIDEO_URL || 'video/Screen Recording 2025-10-02 115341.mp4',
    github: 'https://github.com/Arman-12338/weather',
    demo: null
  },
  {
    name: 'Expense Tracker',
    description: 'A group project resulting in a professional personal budgeting dashboard. Designed to handle expense tracking, transactions, and real-time dashboard statistics, with the codebase shared on GitHub.',
    tech: ['MERN Stack', 'Express.js', 'MongoDB', 'Chart.js Core', 'Tailwind CSS', 'Node.js'],
    video: import.meta.env.VITE_EXPENSE_TRACKER_VIDEO_URL || 'video/Screen Recording 2026-03-17 103114.mp4',
    github: 'https://github.com/Arman-12338/Expense-Tracker',
    demo: null
  },
  {
    name: 'Tic-Tac-Toe',
    description: 'An interactive, classic gameplay application built with clean HTML5 structure, responsive Bootstrap styling, and pure JavaScript logic controls.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    video: import.meta.env.VITE_TICTACTOE_VIDEO_URL || 'video/Screen Recording 2025-10-11 143523.mp4',
    github: 'https://github.com/Arman-12338/Tic-Tac-Toe-',
    demo: 'https://arman-12338.github.io/Tic-Tac-Toe-/'
  }
];


// Procedural 3D curved desktop monitor component using a single persistent video texture ref
function DesktopMonitor3D({ videoUrl }) {
  const monitorGroupRef = useRef(null);
  const videoRef = useRef(null);
  const [texture, setTexture] = useState(null);

  // Initialize a single HTML5 video element once on mount
  useEffect(() => {
    const vid = document.createElement('video');
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    
    videoRef.current = vid;

    // Memory cleanup on unmount
    return () => {
      vid.pause();
      vid.src = '';
      vid.load();
    };
  }, []);

  // When videoUrl changes, swap the source and recreate the video texture to update the GPU
  useEffect(() => {
    if (videoRef.current && videoUrl) {
      const vid = videoRef.current;
      vid.pause();
      
      const resolvedUrl = videoUrl.startsWith('http') || videoUrl.startsWith('/') || videoUrl.startsWith('blob:') 
        ? videoUrl 
        : `${import.meta.env.BASE_URL || '/'}${videoUrl}`;
        
      vid.src = resolvedUrl;
      vid.load();

      // Create new VideoTexture for the new source to trigger a React state change and GPU upload
      const tex = new THREE.VideoTexture(vid);
      tex.colorSpace = THREE.SRGBColorSpace; // preserve vibrant video colors
      setTexture(tex);
      
      vid.play().catch((err) => console.log('Video source swap error', err));

      return () => {
        tex.dispose();
      };
    }
  }, [videoUrl]);

  // Tilt model slightly towards the mouse pointer for immersive responsiveness
  useFrame((state) => {
    const { pointer } = state;
    if (monitorGroupRef.current) {
      monitorGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        monitorGroupRef.current.rotation.y,
        pointer.x * 0.35,
        0.05
      );
      monitorGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        monitorGroupRef.current.rotation.x,
        -pointer.y * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={monitorGroupRef} position={[0, -0.2, 0]}>
      {/* Immersive scene lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-5, 5, -5]} intensity={0.8} color="#a855f7" />

      {/* Cyber LED glow on back wall */}
      <pointLight position={[0, 0.45, -0.5]} intensity={2.0} color="#a855f7" distance={4} decay={2} />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
        <group>
          {/* Curved Widescreen Bezel */}
          <RoundedBox
            args={[3.45, 2.05, 0.08]}
            radius={0.06}
            smoothness={4}
            position={[0, 0.45, 0]}
          >
            <meshStandardMaterial color="#0b081c" roughness={0.1} metalness={0.9} />
          </RoundedBox>

          {/* Video Screen projecting our persistent VideoTexture */}
          <mesh position={[0, 0.45, 0.05]}>
            <planeGeometry args={[3.32, 1.92]} />
            {texture ? (
              <meshBasicMaterial map={texture} toneMapped={false} />
            ) : (
              <meshStandardMaterial color="#02000a" roughness={0.5} />
            )}
          </mesh>

          {/* Glowing Cyber LED frame outlines */}
          <mesh position={[0, 0.45, -0.05]}>
            <boxGeometry args={[3.48, 2.08, 0.02]} />
            <meshBasicMaterial color="#a855f7" wireframe />
          </mesh>

          {/* Sleek Column Stand */}
          <mesh position={[0, -0.7, -0.15]} rotation={[Math.PI / 18, 0, 0]}>
            <cylinderGeometry args={[0.07, 0.1, 0.7, 16]} />
            <meshStandardMaterial color="#3b3b4f" roughness={0.2} metalness={0.8} />
          </mesh>

          {/* Heavy Circular Metallic Base */}
          <mesh position={[0, -1.05, -0.15]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.55, 0.05, 32]} />
            <meshStandardMaterial color="#1c1930" roughness={0.3} metalness={0.9} />
          </mesh>

          {/* Tech decorative cubes on base */}
          <mesh position={[0.2, -1.0, -0.1]} scale={0.12}>
            <boxGeometry />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function Showcase3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex];

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-cyber-bgLight/40 border-y border-white/5">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Background neon ambient spot */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-cyber-primary/5 blur-[120px] top-1/4 left-1/4 animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyber-secondary/30 bg-cyber-secondary/10 text-cyber-secondary font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          >
            <Monitor size={12} />
            <span>PROJECT PREVIEW</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            3D Project <span className="text-gradient-purple-cyan font-extrabold">Showcase</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Dynamic Project Details */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-cyber-secondary">
                  <Cpu size={12} />
                  <span>PROJECT {currentIndex + 1} OF {projects.length}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
                  {activeProject.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {activeProject.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 font-mono text-[10px] sm:text-xs text-cyber-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Controls & Action Links */}
                <div className="flex flex-wrap items-center gap-6 pt-6">
                  {/* Left / Right Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevProject}
                      className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-cyber-secondary hover:text-cyber-secondary text-white transition-all duration-300 active:scale-95"
                      aria-label="Previous project"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-cyber-secondary hover:text-cyber-secondary text-white transition-all duration-300 active:scale-95"
                      aria-label="Next project"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-white/10 hover:border-cyber-primary text-white font-mono text-xs flex items-center gap-1.5 hover:bg-white/5 transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      <span>Repository</span>
                    </a>
                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 border border-cyber-secondary hover:from-cyber-primary hover:to-cyber-secondary text-white font-mono text-xs flex items-center gap-1.5 transition-all duration-500 shadow-md"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Block: 3D Monitor canvas */}
          <div className="lg:col-span-6 h-[400px] sm:h-[450px] relative w-full flex justify-center items-center rounded-2xl overflow-hidden glass-panel border-white/5">

            <div className="canvas-container">
              <Canvas3D camera={{ position: [0, 0, 4.2], fov: 45 }} fallbackType="monitor">
                <DesktopMonitor3D videoUrl={activeProject.video} />
              </Canvas3D>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
