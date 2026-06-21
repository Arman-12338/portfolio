import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, CloudSun, DollarSign, Swords, MessageSquare } from 'lucide-react';
import Card3D from './ui/Card3D';

const projects = [
  {
    name: 'Connect Sphere',
    icon: MessageSquare,
    desc: 'A real-time chat application featuring instant message transmission, private channel communication, client connection status tracking, and fluid modern dark theme.',
    features: [
      'Real-time messages via Socket.io',
      'Secure MongoDB message history caching',
      'Responsive, glassmorphic layout'
    ],
    tech: ['MERN Stack', 'Socket.io', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Arman-12338/ConnectSphere',
    demo: 'https://connectsphere-weld.vercel.app',
    glow: 'rgba(168, 85, 247, 0.2)'
  },
  {
    name: 'Weather App',
    icon: CloudSun,
    desc: 'Provides real-time forecasts, geocoding lookups, and atmospheric forecasts dynamically synced with active geolocation lookups.',
    features: [
      'Real-time weather analytics',
      'Geocoding search integration',
      'Responsive, modern forecast layout'
    ],
    tech: ['React.js', 'Tailwind CSS', 'OpenWeather API', 'Lottie-React'],
    github: 'https://github.com/Arman-12338/weather',
    demo: null,
    glow: 'rgba(6, 182, 212, 0.15)'
  },
  {
    name: 'Expense Tracker',
    icon: DollarSign,
    desc: 'A group-developed personal financial registry mapping transactional ledger logs and expense analytics. (Group project; repository code shared on GitHub)',
    features: [
      'Expense entry ledger',
      'Interactive budget breakdowns',
      'Visual statistics dashboard'
    ],
    tech: ['MERN Stack', 'Express', 'MongoDB', 'Chart.js', 'Node.js'],
    github: 'https://github.com/Arman-12338/Expense-Tracker',
    demo: null,
    glow: 'rgba(168, 85, 247, 0.15)'
  },
  {
    name: 'Tic-Tac-Toe',
    icon: Swords,
    desc: 'An interactive dual-player game built with responsive layout styling, game state tracking, and clear Win/Draw condition checks.',
    features: [
      'Responsive grid board setup',
      'Dynamic win and draw logic checks',
      'Aesthetic CSS layout styling'
    ],
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Arman-12338/Tic-Tac-Toe-',
    demo: 'https://arman-12338.github.io/Tic-Tac-Toe-/',
    glow: 'rgba(236, 72, 153, 0.15)'
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyber-accent/30 bg-cyber-accent/10 text-cyber-accent font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          >
            <Briefcase size={12} />
            <span>DEVELOPMENT LEDGER</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Featured <span className="text-gradient-purple-cyan font-extrabold">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex"
              >
                <Card3D 
                  className="w-full flex flex-col justify-between text-left bg-slate-950/40 relative group"
                  glowColor={project.glow}
                >
                  <div className="space-y-6">
                    {/* Header: Title & Icon */}
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-secondary shadow-inner">
                        <ProjectIcon size={22} className="text-gradient-purple-cyan group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 font-mono text-[9px] text-cyber-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>VITE BUILD</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-sans tracking-wide">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                        {project.desc}
                      </p>

                      {/* Bullet Features */}
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-slate-300 font-light font-sans">
                            <span className="text-cyber-secondary font-bold mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack and links */}
                  <div className="space-y-6 pt-6 border-t border-white/5">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 font-mono text-[9px] sm:text-[10px] text-cyber-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className={project.demo ? "grid grid-cols-2 gap-3 pt-2" : "grid grid-cols-1 pt-2"}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 rounded-xl border border-white/10 hover:border-cyber-primary text-white font-mono text-xs flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 transition-all duration-300"
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span>Source Code</span>
                      </a>
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 rounded-xl bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 border border-cyber-secondary hover:from-cyber-primary hover:to-cyber-secondary text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-all duration-500 shadow-md"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
