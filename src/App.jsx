import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase3D from './components/Showcase3D';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const bootLogs = [
  'INITIALIZING SYSTEM CODES...',
  'FETCHING WEBGL GRAPHICS ENVIRONMENT...',
  'COMPILING 3D WORKSTATION GEOMETRIES...',
  'LINKING PORTFOLIO CHRONICLES...',
  'SYSTEM SECURITY ACTIVE // MERN LOADED',
  'BOOT COMPLETED SUCCESSFUL // STATUS: 100%'
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  // Simulated Boot Loader progress
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 15) + 5;
          return next > 100 ? 100 : next;
        });
      }, 120);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // Cycle boot status logs dynamically based on progress
  useEffect(() => {
    const step = Math.floor(bootLogs.length / 5);
    const index = Math.floor(progress / (20 * step));
    if (index < bootLogs.length) {
      setLogIndex(index);
    }
  }, [progress]);

  return (
    <div className="bg-cyber-bg text-slate-100 min-h-screen relative font-sans select-none selection:bg-cyber-secondary/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          // Cyber Boot Loader Screen
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-[#030014] flex flex-col items-center justify-center p-6 text-left"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="max-w-md w-full p-8 rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-xl shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>

              {/* Status Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 font-mono text-[11px] text-cyber-muted uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <Terminal size={14} className="text-cyber-secondary animate-pulse" />
                  <span>ARMAN_BOOT_UTILITY.sh</span>
                </div>
                <span>SYS_READY</span>
              </div>

              {/* Terminal Logs */}
              <div className="h-20 flex flex-col justify-end mb-8 text-left font-mono">
                <span className="text-[10px] text-cyber-muted">// PROCESS SIGNAL LOG</span>
                <motion.span 
                  key={logIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs sm:text-sm text-cyber-secondary font-bold font-mono tracking-wider mt-1 block"
                >
                  &gt; {bootLogs[logIndex]}
                </motion.span>
              </div>

              {/* Progress Tracker */}
              <div className="space-y-3">
                <div className="flex justify-between items-center px-1 font-mono text-[11px] text-cyber-muted">
                  <span>COMPILING CORES</span>
                  <span className="text-white font-bold">{progress}%</span>
                </div>
                {/* Visual Bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Glowing footer */}
              <div className="mt-8 flex items-center gap-2 justify-center font-mono text-[10px] text-cyber-muted">
                <Sparkles size={11} className="text-cyber-accent animate-spin-slow" />
                <span>ANTIGRAVITY SYSTEMS ONLINE</span>
              </div>
            </div>
          </motion.div>
        ) : (
          // Main Website Content (Fades in beautifully)
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Global background glow nodes */}
            <div className="fixed top-0 left-0 w-full h-full radial-spotlight pointer-events-none z-0"></div>
            <div className="fixed bottom-0 left-0 w-full h-full radial-spotlight-bottom pointer-events-none z-0"></div>

            <Navbar />
            
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Showcase3D />
              <Projects />
              <Experience />
              <Certifications />
              
              {/* Educational and academic details side-by-side spacing */}
              <Education />
              <Achievements />
              
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
