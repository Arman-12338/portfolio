import React from 'react';
import { Sparkles, ChevronUp, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const footerNavs = [
  { name: 'Hero', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Credentials', href: '#certificates' },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden border-t border-white/5 bg-cyber-bgLight/45">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Left Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyber-primary to-cyber-secondary flex items-center justify-center font-mono font-bold text-sm text-white shadow-neon-purple group-hover:scale-105 transition-transform duration-300">
                A
              </div>
              <span className="font-sans font-bold text-base tracking-wider text-white">
                ARMAN<span className="text-cyber-secondary">.</span>
              </span>
            </a>
            <p className="text-xs text-cyber-muted font-light max-w-xs font-sans leading-relaxed">
              B.Tech Student & Developer constructing premium MERN products and interactive 3D WebGL web spaces.
            </p>
          </div>

          {/* Quick Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerNavs.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-cyber-muted hover:text-white tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/mohammad-arman-667a01387"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-cyber-secondary hover:text-cyber-secondary text-cyber-muted flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="https://github.com/Arman-12338"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-cyber-primary hover:text-cyber-primary text-cyber-muted flex items-center justify-center transition-all duration-300"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>

            {/* Scroll back to top */}
            <button
              onClick={handleScrollToTop}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-cyber-accent hover:text-cyber-accent text-cyber-muted flex items-center justify-center transition-all duration-300 focus:outline-none"
              title="Scroll to Top"
            >
              <ChevronUp size={16} />
            </button>
          </div>

        </div>

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-center sm:text-left text-[11px] font-mono text-cyber-muted">
          <div className="flex items-center gap-1.5">
            <Terminal size={12} className="text-cyber-secondary" />
            <span>DESIGNED BY MOHAMMAD ARMAN // 2026</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Sparkles size={11} className="text-cyber-accent animate-pulse" />
            <span>SYSTEM ON: FULL RESPONSIVE 3D PORTFOLIO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
