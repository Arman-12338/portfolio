import React from 'react';
import { motion } from 'framer-motion';
import { Code, Box, HardDrive, Cpu, Compass, Layout } from 'lucide-react';
import Canvas3D from './ui/Canvas3D';
import SkillSphere3D from './SkillSphere3D';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'border-cyber-secondary/30 text-cyber-secondary',
    skills: [
      { name: 'HTML5', level: '95%' },
      { name: 'CSS3', level: '90%' },
      { name: 'Tailwind CSS', level: '95%' },
      { name: 'React.js', level: '92%' },
      { name: 'Bootstrap', level: '85%' },
    ]
  },
  {
    title: '3D Web Development',
    icon: Box,
    color: 'border-cyber-primary/30 text-cyber-primary',
    skills: [
      { name: 'Three.js', level: '85%' },
      { name: 'React Three Fiber', level: '85%' },
      { name: 'WebGL Core', level: '80%' },
      { name: '3D Math & Shaders', level: '75%' },
    ]
  },
  {
    title: 'MERN Stack & Tools',
    icon: HardDrive,
    color: 'border-cyber-accent/30 text-cyber-accent',
    skills: [
      { name: 'Node.js & Express.js', level: '88%' },
      { name: 'MongoDB', level: '85%' },
      { name: 'Git & GitHub', level: '90%' },
      { name: 'VS Code Editor', level: '95%' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background neon artifacts */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyber-primary/5 blur-[120px] top-1/3 right-10 animate-pulse-slow pointer-events-none"></div>

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
            <Cpu size={12} strokeWidth={2} />
            <span>TECHNOLOGY INDEX</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            My <span className="text-gradient-purple-cyan font-extrabold">Skills</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Drag-and-Interact 3D Skill Tag Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="lg:col-span-5 h-[400px] sm:h-[450px] relative w-full flex justify-center items-center rounded-2xl glass-panel border-white/5 order-2 lg:order-1"
          >
            {/* Grab Instructions Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[10px] font-mono text-cyber-muted tracking-wider select-none pointer-events-none">
              <Compass size={12} className="animate-spin-slow text-cyber-secondary" />
              <span>CLICK & DRAG TO SPIN WORDCLOUD</span>
            </div>

            <div className="canvas-container">
              <Canvas3D camera={{ position: [0, 0, 5.6], fov: 60 }} fallbackType="stars">
                <React.Suspense fallback={null}>
                  <SkillSphere3D />
                </React.Suspense>
              </Canvas3D>
            </div>
          </motion.div>

          {/* Right Side: Skill Progress Grid */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            {skillCategories.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                  className="glass-panel p-6 rounded-2xl border-white/10 text-left"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg border bg-white/5 ${category.color}`}>
                      <CategoryIcon size={18} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col">
                        <div className="flex justify-between items-center mb-1.5 px-1">
                          <span className="text-xs sm:text-sm font-medium text-slate-200 font-sans tracking-wide">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-cyber-secondary">
                            {skill.level}
                          </span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                            className="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
