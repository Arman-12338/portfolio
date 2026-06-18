import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Monitor, GraduationCap, Award, Mail, Sparkles, User, Briefcase } from 'lucide-react';

const navItems = [
  { name: 'Hero', href: '#hero', icon: Sparkles },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Showcase', href: '#showcase', icon: Monitor },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Experience', href: '#experience', icon: GraduationCap },
  { name: 'Certificates', href: '#certificates', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active highlights
      const scrollPosition = window.scrollY + 150; // offset
      for (const item of navItems) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-cyber-bgLight/75 backdrop-blur-md border-white/10 shadow-lg py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="px-6 mx-auto flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-primary to-cyber-secondary flex items-center justify-center font-mono font-bold text-lg text-white shadow-neon-purple group-hover:scale-105 transition-transform duration-300">
              A
              <div className="absolute inset-0 rounded-lg border border-white/20 animate-pulse"></div>
            </div>
            <span className="font-sans font-bold text-lg tracking-wider text-white relative overflow-hidden">
              ARMAN
              <span className="text-cyber-secondary">.</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-cyber-primary to-cyber-secondary group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:text-white rounded-lg ${
                    isActive ? 'text-cyber-secondary font-semibold' : 'text-cyber-muted'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg shadow-inner z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Call / Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 hover:from-cyber-primary hover:to-cyber-secondary border border-cyber-primary/50 text-white font-mono text-sm tracking-wide font-medium shadow-sm transition-all duration-500 overflow-hidden group flex items-center gap-2"
            >
              <span className="relative z-10">Hire Me</span>
              <Sparkles size={14} className="group-hover:rotate-12 transition-transform relative z-10" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-secondary to-cyber-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-cyber-muted hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-lg rounded-2xl border border-white/10 bg-cyber-bgLight/95 backdrop-blur-xl shadow-2xl p-6 lg:hidden"
          >
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-cyber-primary/10 border-cyber-primary/30 text-cyber-secondary font-semibold' 
                        : 'bg-white/5 border-transparent text-cyber-muted hover:border-white/10 hover:text-white'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-cyber-secondary' : 'text-cyber-muted'} />
                    <span className="text-sm font-medium tracking-wide">{item.name}</span>
                  </a>
                );
              })}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <a 
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-primary to-cyber-secondary text-white font-mono text-center font-semibold text-sm tracking-widest shadow-neon-purple flex items-center justify-center gap-2"
              >
                <span>HIRE ME</span>
                <Sparkles size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
