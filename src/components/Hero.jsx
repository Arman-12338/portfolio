import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Award, Monitor, User } from 'lucide-react';
import Canvas3D from './ui/Canvas3D';
import Workstation3D from './Workstation3D';

// Typing effect configuration
const roles = ['MERN Stack Developer', 'React Developer', 'Three.js Enthusiast', 'Generative AI Learner'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [viewMode, setViewMode] = useState('photo'); // 'photo' or '3d'

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const getResumeUrl = () => {
    const url = import.meta.env.VITE_RESUME_URL || 'resume/Arman_Resume_Updated.pdf';
    if (url.startsWith('http') || url.startsWith('/') || url.startsWith('data:')) {
      return url;
    }
    return `${import.meta.env.BASE_URL || '/'}${url}`;
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden radial-spotlight">
      {/* Cyberpunk ambient grids & spotlights */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyber-primary/10 blur-[100px] top-1/4 left-1/10 animate-pulse-slow"></div>
      <div className="absolute w-[450px] h-[450px] rounded-full bg-cyber-secondary/10 blur-[120px] bottom-1/4 right-1/10 animate-pulse-slow delay-2000"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Pitch and Branding */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-secondary font-mono text-xs tracking-wider mb-6 w-fit"
          >
            <Terminal size={14} className="animate-pulse" />
            <span>SYSTEM ON // PORTFOLIO INITIALIZED</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
          >
            Mohammad <span className="text-gradient-purple-cyan font-extrabold">Arman</span>
          </motion.h1>

          {/* Typing Role Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-10 text-xl sm:text-2xl font-mono text-cyber-secondary font-semibold mb-6 flex items-center gap-1.5"
          >
            <span>I build</span>
            <span className="text-gradient-pink-purple font-mono font-bold border-r-2 border-cyber-accent pr-1 animate-pulse">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-light"
          >
            Passionate B.Tech student focused on building modern web applications, interactive user experiences, and innovative digital products using React and Three.js. Continuously learning new technologies and creating impactful projects.
          </motion.p>

          {/* Recruiter Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mb-12"
          >
            <a
              href="#showcase"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-primary to-cyber-secondary text-white font-mono text-sm tracking-wider font-semibold shadow-neon-purple hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href={getResumeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-white/10 hover:border-cyber-primary bg-white/5 hover:bg-cyber-primary/5 text-white font-mono text-sm tracking-wider font-medium transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Get Resume</span>
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform text-cyber-secondary" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl border border-cyber-secondary/30 hover:border-cyber-secondary text-cyber-secondary hover:text-white font-mono text-sm tracking-wider font-medium hover:bg-cyber-secondary/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>Contact Me</span>
              <Mail size={16} />
            </a>
          </motion.div>

          {/* Quick Metrics (Recruiter Wow Factors) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-lg"
          >
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient-purple-cyan flex items-center gap-1">
                KITS
              </span>
              <span className="text-xs text-cyber-muted font-mono tracking-widest uppercase">B.Tech Student</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient-pink-purple">
                3D +
              </span>
              <span className="text-xs text-cyber-muted font-mono tracking-widest uppercase">Three.js Tech</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                MERN
              </span>
              <span className="text-xs text-cyber-muted font-mono tracking-widest uppercase">Stack Focus</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Immersive Visual Experience (Photo or 3D Workstation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 h-[400px] sm:h-[500px] relative w-full flex justify-center items-center rounded-2xl overflow-hidden glass-panel border-white/5"
        >
          {/* Internal neon glows behind the content */}
          <div className="absolute inset-0 bg-radial-spotlight-purple opacity-40"></div>
          
          {/* View Mode Toggle Button */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-950/90 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setViewMode(prev => prev === 'photo' ? '3d' : 'photo')}
              className="text-[10px] font-mono text-cyan-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-1 transition-colors focus:outline-none"
            >
              {viewMode === 'photo' ? (
                <>
                  <Monitor size={12} className="animate-pulse text-cyan-400" />
                  <span>VIEW 3D SPACE</span>
                </>
              ) : (
                <>
                  <User size={12} className="text-cyber-secondary" />
                  <span>VIEW PHOTO</span>
                </>
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'photo' ? (
              <motion.div
                key="photo-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative flex items-center justify-center p-6 sm:p-8"
              >
                {/* Tech scanline grid inside photo container */}
                <div className="absolute inset-0 cyber-grid opacity-[0.06] pointer-events-none"></div>

                {/* Glowing profile photo container with premium border */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-cyber-secondary/30 shadow-2xl shadow-cyber-primary/20 group/profile">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent z-10"></div>
                  
                  <img
                    src={(() => {
                      const photoUrl = import.meta.env.VITE_HERO_PHOTO_URL || 'photo/WhatsApp Image 2026-06-21 at 11.10.30 AM.jpeg';
                      if (photoUrl.startsWith('http') || photoUrl.startsWith('/') || photoUrl.startsWith('data:')) {
                        return photoUrl;
                      }
                      return `${import.meta.env.BASE_URL || '/'}${photoUrl}`;
                    })()}
                    alt="Mohammad Arman"
                    className="w-full h-full object-cover group-hover/profile:scale-105 transition-transform duration-700"
                  />

                  {/* Corner styling elements */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyber-secondary/60 z-20"></div>
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyber-secondary/60 z-20"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyber-secondary/60 z-20"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyber-secondary/60 z-20"></div>
                  
                  {/* Digital overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                    <span className="text-[9px] font-mono text-cyan-400 tracking-[0.2em] uppercase block">DEVELOPER PROFILE</span>
                    <h3 className="text-lg font-bold text-white font-sans tracking-wide">MOHAMMAD ARMAN</h3>
                    <p className="text-[10px] text-slate-300 font-mono">B.TECH STUDENT / DEVELOPER</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="3d-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <div className="canvas-container">
                  <Canvas3D
                    camera={{ position: [0, 0, 5.5], fov: 45 }}
                    fallbackType="stars"
                  >
                    <Workstation3D />
                  </Canvas3D>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
