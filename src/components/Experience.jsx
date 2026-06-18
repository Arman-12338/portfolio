import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Users, Sparkles, Terminal, Rocket, CheckCircle2 } from 'lucide-react';

const timelineEntries = [
  {
    role: 'Google Student Ambassador Program',
    company: 'Google Developer Community',
    duration: 'Selected Candidate - Final Round',
    icon: Award,
    color: 'from-blue-500 to-red-500',
    bullets: [
      'Advanced to the highly selective Final Round of evaluations.',
      'Represented academic technology interests, collaborating on developmental roadmaps.',
      'Organized mock technical surveys, demonstrating alignment with developer community paradigms.'
    ]
  },
  {
    role: 'Hackathon Contributor & Collaborator',
    company: 'Various Tech Hackathons',
    duration: 'Active Participant',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    bullets: [
      'Participated in multiple collaborative high-speed hackathons, building MVP solutions under tight timelines.',
      'Partnered in multi-functional teams of developers and designers, drafting tech architectures.',
      'Designed mock server nodes and responsive interface blocks, resolving real-world problems.'
    ]
  },
  {
    role: 'Development Team Leader',
    company: 'Academic React Projects',
    duration: 'Project Team Leader',
    icon: Users,
    color: 'from-cyan-500 to-green-500',
    bullets: [
      'Served as Team Leader for a major responsive React web application project.',
      'Managed agile task distribution, planning, and progress tracking workflows for core members.',
      'Coordinated integration activities and conducted code reviews, leading to a highly successful completion.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-bgLight/30 border-y border-white/5">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyber-secondary/30 bg-cyber-secondary/10 text-cyber-secondary font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          >
            <Compass size={12} className="animate-spin-slow" />
            <span>CAREER CHRONICLE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Experience & <span className="text-gradient-purple-cyan font-extrabold">Leadership</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-16 py-4">
          {timelineEntries.map((entry, idx) => {
            const EntryIcon = entry.icon;
            return (
              <div key={entry.role} className="relative pl-10 sm:pl-16 text-left">
                
                {/* Timeline Dot Indicator */}
                <motion.div
                  initial={{ scale: 0.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`absolute -left-[20px] top-1 w-10 h-10 rounded-xl bg-slate-900 border-2 border-white/10 flex items-center justify-center text-white shadow-lg shadow-black/50 z-10`}
                >
                  <div className={`absolute inset-[2.5px] rounded-lg bg-gradient-to-tr ${entry.color} opacity-20`}></div>
                  <EntryIcon size={18} className="relative z-10 text-slate-200" />
                </motion.div>

                {/* Entry Card Content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b ${entry.color}`}></div>
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-wide">
                        {entry.role}
                      </h3>
                      <span className="text-sm font-semibold text-gradient-purple-cyan">
                        {entry.company}
                      </span>
                    </div>

                    <span className="px-3.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-cyber-muted w-fit">
                      {entry.duration}
                    </span>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="space-y-4">
                    {entry.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-cyber-secondary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed font-sans">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
