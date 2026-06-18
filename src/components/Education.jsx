import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle, Lightbulb } from 'lucide-react';
import Card3D from './ui/Card3D';

const academicHighlights = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (OOPs)',
  'Database Management Systems (DBMS)',
  'Computer Networks & Web Systems',
  'Software Engineering Methodologies',
  'Agile Project Coordination'
];

const interests = [
  'Full Stack Web Development',
  'MERN Backend Engineering',
  'Generative AI Integrations',
  'Interactive 3D Web Spaces'
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-cyber-bgLight/30 border-y border-white/5">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

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
            <GraduationCap size={12} />
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Education & <span className="text-gradient-purple-cyan font-extrabold">Interests</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: B.Tech Major Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex"
          >
            <Card3D 
              className="w-full bg-slate-950/40 border-white/10 relative p-8 flex flex-col justify-between text-left"
              glowColor="rgba(6, 182, 212, 0.2)"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="px-3 py-1 rounded-md bg-cyber-secondary/10 border border-cyber-secondary/30 text-cyber-secondary font-mono text-[10px] sm:text-xs tracking-wider font-semibold">
                      DEGREE PROGRAM
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-sans leading-tight">
                      Bachelor of Technology (B.Tech)
                    </h3>
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-secondary shrink-0 shadow-inner">
                    <GraduationCap size={22} className="text-gradient-purple-cyan" />
                  </div>
                </div>

                <div className="space-y-2 border-b border-white/5 pb-6">
                  <span className="text-xs font-mono text-gradient-pink-purple uppercase tracking-wider">INSTITUTION</span>
                  <h4 className="text-lg font-bold text-slate-100 font-sans tracking-wide">
                    Kamala Institute of Technology & Science (KITS)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Building a deep foundational knowledge in engineering mathematics, computational sciences, and modern software paradigms.
                  </p>
                </div>

                {/* Coursework bullet listings */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider block">KEY ACADEMIC FOCUS</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {academicHighlights.map((course) => (
                      <div key={course} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-cyber-secondary shrink-0" />
                        <span className="text-xs text-slate-300 font-light font-sans">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyber-muted">
                <span>ESTABLISHED ACCREDITATION</span>
                <span className="text-cyber-secondary">B.TECH ENGINEERING</span>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Block: Core Tech Interests */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-2xl border-white/10 text-left relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-primary shadow-inner mb-2">
                <Lightbulb size={22} className="text-gradient-pink-purple animate-pulse" />
              </div>
              
              <h3 className="text-2xl font-bold font-sans tracking-wide text-white leading-tight">
                Primary Technical <span className="text-gradient-pink-purple font-bold">Interests</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed font-sans">
                Focused heavily on areas that combine highly scalable database architecture with visual front-end engineering. Continuous learning remains my standard paradigm.
              </p>

              {/* Interest Badges with hover micro-animations */}
              <div className="flex flex-col gap-3 pt-2">
                {interests.map((interest) => (
                  <div 
                    key={interest} 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-primary hover:bg-cyber-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyber-secondary group-hover:scale-125 transition-transform"></div>
                    <span className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wide font-sans">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyber-muted">
              <span>EXPLORE & GROW</span>
              <span className="text-cyber-primary">GEN AI READY</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
