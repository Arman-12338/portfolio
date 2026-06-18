import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, Sparkles, BookOpen, Layers } from 'lucide-react';
import Card3D from './ui/Card3D';

const cards = [
  {
    icon: GraduationCap,
    title: 'B.Tech Student',
    desc: 'Pursuing my Bachelor of Technology degree at Kamala Institute of Technology & Science (KITS). Excelling in academic engineering paradigms.',
    glow: 'rgba(168, 85, 247, 0.2)'
  },
  {
    icon: Code2,
    title: 'MERN Stack & React',
    desc: 'Deeply passionate about modern web engineering. Specialized in constructing highly responsive, data-driven apps with MongoDB, Express, React, & Node.',
    glow: 'rgba(6, 182, 212, 0.2)'
  },
  {
    icon: Cpu,
    title: 'Generative AI & Tech',
    desc: 'Continuously researching advanced AI integrations, vector embeddings, and LLM orchestration to build next-generation smart user interfaces.',
    glow: 'rgba(236, 72, 153, 0.2)'
  },
  {
    icon: Layers,
    title: 'Interactive 3D Web',
    desc: 'Enthusiastic about Three.js and React Three Fiber. Striving to transform standard 2D web interfaces into breathtaking 3D physical spaces.',
    glow: 'rgba(168, 85, 247, 0.2)'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-bgLight/30 border-y border-white/5">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Glow balls */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-cyber-secondary/5 blur-[90px] bottom-10 left-10 animate-pulse-slow"></div>

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
            <BookOpen size={12} />
            <span>STUDENT PROFILE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            About <span className="text-gradient-purple-cyan font-extrabold">Me</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Professional Summary Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-2xl border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-left">
              <Sparkles className="text-cyber-secondary mb-6 animate-pulse" size={32} />
              
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-wide text-white mb-6 leading-tight">
                Engineering <span className="text-gradient-pink-purple font-bold">Immersive</span> Experiences
              </h3>
              
              <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
                <p>
                  As a B.Tech student studying at <span className="text-white font-semibold">Kamala Institute of Technology & Science</span>, I have directed my focus toward bridging visual design with robust software architecture.
                </p>
                <p>
                  My development stack focuses heavily on the <span className="text-cyber-secondary font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) combined with modern responsive styling systems like Tailwind CSS.
                </p>
                <p>
                  By introducing <span className="text-cyber-primary font-semibold">Three.js</span> and <span className="text-cyber-primary font-semibold">React Three Fiber</span>, I construct interactive portfolios that wow recruiters and provide memorable visual feedback.
                </p>
                <p>
                  I'm constantly sharpening my skills, exploring vector integrations with Generative AI, and developing clean products ready for commercial environments.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyber-primary to-cyber-secondary flex items-center justify-center font-bold font-mono text-white text-xs">
                MA
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white tracking-wide">Mohammad Arman</span>
                <span className="text-[10px] text-cyber-muted font-mono tracking-wider">MERN & 3D Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Interactive Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex"
                >
                  <Card3D 
                    className="w-full flex flex-col justify-start text-left bg-slate-950/40"
                    glowColor={card.glow}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-secondary mb-5 shadow-inner">
                      <Icon size={22} className="text-gradient-purple-cyan animate-pulse" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2 font-sans tracking-wide">
                      {card.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
