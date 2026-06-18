import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, X, ShieldCheck, Cpu, Database, Globe, Terminal } from 'lucide-react';
import Card3D from './ui/Card3D';

const certs = [
  {
    title: 'Generative AI',
    issuer: 'Google Cloud / Leading Providers',
    desc: 'Deep exploration of large language models, prompting architecture, semantic vector search integration, and neural weights.',
    icon: Cpu,
    glow: 'rgba(236, 72, 153, 0.25)'
  },
  {
    title: 'MERN Stack Development',
    issuer: 'Professional Development Series',
    desc: 'Full-stack mastery covering MongoDB architectures, Express API middleware, React state contexts, and Node backends.',
    icon: Database,
    glow: 'rgba(168, 85, 247, 0.25)'
  },
  {
    title: 'Web Development Core',
    issuer: 'Industry Standard Training',
    desc: 'Advanced modern web architectures, focusing on semantic HTML5 coding, styling schemas, performance, and cross-browser testing.',
    icon: Globe,
    glow: 'rgba(6, 182, 212, 0.25)'
  },
  {
    title: 'Full Stack Engineering',
    issuer: 'KITS Engineering Program',
    desc: 'Comprehensive systems engineering covering structured design principles, algorithm complexity, data models, and team delivery.',
    icon: Terminal,
    glow: 'rgba(59, 130, 246, 0.25)'
  }
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-secondary font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          >
            <Award size={12} />
            <span>ACCREDITATION INDEX</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Certifications & <span className="text-gradient-purple-cyan font-extrabold">Credentials</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {certs.map((cert, idx) => {
            const CertIcon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex"
              >
                <Card3D
                  className="w-full bg-slate-950/40 border border-white/5 relative overflow-hidden flex flex-col sm:flex-row gap-6 p-6 items-center text-left"
                  glowColor={cert.glow}
                >
                  {/* Certificate Digital Badge Thumbnail Container */}
                  <div 
                    className="relative w-full sm:w-[150px] aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shrink-0 cursor-pointer group/thumb bg-slate-950/80 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-cyber-secondary/30"
                    onClick={() => setActiveCert(cert)}
                  >
                    {/* Abstract Grid Overlays */}
                    <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                    {/* Animated Glow Border Frame */}
                    <div className="absolute inset-x-3 inset-y-3 border border-white/5 rounded-lg flex items-center justify-center">
                      <CertIcon 
                        size={36} 
                        className="text-cyber-secondary group-hover/thumb:scale-110 transition-transform duration-500" 
                        style={{ filter: `drop-shadow(0 0 8px ${cert.glow})` }}
                      />
                    </div>
                    
                    {/* Hover overlay mask */}
                    <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-xs text-cyber-secondary font-mono font-bold">
                      <Eye size={14} />
                      <span>VERIFY RECORD</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between h-full space-y-4 flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-cyber-secondary shrink-0" />
                        <h3 className="text-lg font-bold text-white font-sans tracking-wide leading-tight">
                          {cert.title}
                        </h3>
                      </div>
                      
                      <span className="text-[11px] font-mono text-gradient-pink-purple uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      
                      <p className="text-xs text-slate-300 font-light leading-relaxed font-sans line-clamp-2">
                        {cert.desc}
                      </p>
                    </div>

                    {/* Click to open Lightbox Link */}
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="w-fit text-[11px] font-mono font-semibold tracking-wider text-cyber-secondary hover:text-white flex items-center gap-1 transition-colors border-b border-cyber-secondary/20 hover:border-white/20 pb-0.5 pt-1 focus:outline-none"
                    >
                      <span>VIEW DECRYPTED RECORD</span>
                      <ShieldCheck size={10} />
                    </button>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Glassmorphic Lightbox Overlay */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveCert(null)}
          >
            {/* Close Trigger Button */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyber-primary text-white hover:text-cyber-primary transition-all duration-300 z-50"
              onClick={() => setActiveCert(null)}
              aria-label="Close viewer"
            >
              <X size={20} />
            </motion.button>

            {/* Premium Digital Certificate Design Card */}
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative max-w-xl w-full bg-slate-950/95 border border-cyber-secondary/30 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent overlay closing on click
            >
              {/* Futuristic scanline grid background */}
              <div className="absolute inset-0 cyber-grid opacity-[0.07] pointer-events-none"></div>
              
              {/* Glowing decorative backing */}
              <div className="absolute w-64 h-64 rounded-full blur-[100px] pointer-events-none -z-10" style={{ backgroundColor: activeCert.glow, opacity: 0.2 }}></div>

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyber-secondary/40"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyber-secondary/40"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyber-secondary/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyber-secondary/40"></div>
              
              {/* Big central icon */}
              {React.createElement(activeCert.icon, {
                size: 56,
                className: "text-cyber-secondary mb-5 animate-pulse",
                style: { filter: `drop-shadow(0 0 12px ${activeCert.glow})` }
              })}
              
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-cyber-muted tracking-[0.25em] uppercase block">PORTFOLIO ACCREDITATION RECORD</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide font-sans leading-tight">
                  {activeCert.title}
                </h3>
                <span className="inline-block px-3 py-1.5 rounded-full border border-cyber-primary/20 bg-cyber-primary/5 text-cyber-secondary font-mono text-[10px] tracking-wider uppercase mt-2">
                  ISSUER: {activeCert.issuer}
                </span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>

              <p className="text-sm text-slate-300 font-light leading-relaxed font-sans max-w-md">
                {activeCert.desc}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>

              <div className="space-y-2.5 font-mono mt-4">
                <div className="text-[10px] text-cyber-secondary font-bold tracking-widest uppercase flex items-center justify-center gap-1.5">
                  <ShieldCheck size={14} className="text-cyber-secondary" />
                  <span>SECURE DIGITAL ACCREDITATION VERIFIED</span>
                </div>
                <div className="text-[8px] text-cyber-muted uppercase tracking-wider">
                  STATUS: COMPLETED // SIGNED & VERIFIED BY DEVELOPER PORTFOLIO
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

