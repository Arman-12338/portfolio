import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Compass, Users, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import Card3D from './ui/Card3D';

const achievementsList = [
  {
    title: 'Google Student Ambassador',
    highlight: 'Final Round Selection',
    desc: 'Excelled throughout Google\'s competitive student representative evaluations, proving leadership, communication, and technological coordination.',
    icon: Trophy,
    glow: 'rgba(236, 72, 153, 0.2)'
  },
  {
    title: 'Hackathon Collaborator',
    highlight: 'Multi-Event Participant',
    desc: 'Contributed key software architectures and UI designs in high-speed team hackathons, building MVP applications that resolve real-world problems.',
    icon: Compass,
    glow: 'rgba(6, 182, 212, 0.2)'
  },
  {
    title: 'React Project Team Leader',
    highlight: 'Agile Systems Lead',
    desc: 'Successfully coordinated task structures, scheduled milestones, and led integration for complex responsive React web applications.',
    icon: Users,
    glow: 'rgba(168, 85, 247, 0.2)'
  },
  {
    title: 'Continuous Tech Learning',
    highlight: '3D & AI Integration Focus',
    desc: 'Unwavering commitment to learning modern web systems. Consistently building test beds combining React, Node, Three.js, and Generative AI APIs.',
    icon: Sparkles,
    glow: 'rgba(6, 182, 212, 0.2)'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
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
            <Trophy size={12} />
            <span>EXCELLENCE TRACK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Key <span className="text-gradient-purple-cyan font-extrabold">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {achievementsList.map((ach, idx) => {
            const AchIcon = ach.icon;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex"
              >
                <Card3D
                  className="w-full bg-slate-950/40 border border-white/5 p-8 text-left flex gap-6 items-start"
                  glowColor={ach.glow}
                >
                  {/* Glowing Icon Shield */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-secondary shrink-0 shadow-inner">
                    <AchIcon size={22} className="text-gradient-purple-cyan animate-pulse" />
                  </div>

                  {/* Copy details */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-wide">
                        {ach.title}
                      </h3>
                      
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 font-mono text-[9px] text-cyber-secondary font-bold uppercase tracking-wider">
                        {ach.highlight}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed font-sans">
                      {ach.desc}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] font-mono text-cyber-muted tracking-wider pt-2">
                      <ShieldCheck size={12} className="text-green-500" />
                      <span>VERIFIED CREDENTIAL</span>
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
