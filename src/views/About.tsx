import { motion } from 'motion/react';
import { Section } from '../types';

interface AboutProps {
  setSection: (section: Section) => void;
}

export default function About({ setSection }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen py-24 px-4 md:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column - Biography */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-sm font-bold text-primary tracking-widest uppercase">Principal Architect</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-on-surface font-display leading-[1.1]">
              Orioye Blessing <span className="text-primary italic">Esther</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl text-on-surface-variant font-sans leading-relaxed">
              I am a data-driven technology enthusiast with a specialized focus on architecting robust analytical frameworks. My expertise lies at the intersection of high-scale data processing and executive-level strategic insight.
            </p>
            <p className="text-lg text-on-surface-variant font-sans leading-relaxed mt-6">
              By distilling complex datasets into high-value narratives, I empower organizations to navigate the modern digital landscape with precision. My methodology integrates the rigor of statistical analysis with the agility of modern AI, ensuring that every architectural decision is grounded in empirical evidence and forward-looking innovation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 glass-card rounded-2xl border-l-4 border-primary">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Philosophy</h3>
                <p className="text-lg text-on-surface font-display font-medium">
                  "Rigorous analytical precision meets executive-level sophistication."
                </p>
              </div>
              <div className="p-8 glass-card rounded-2xl border-l-4 border-accent-warm">
                <h3 className="text-sm font-bold text-accent-warm uppercase tracking-widest mb-4">The Goal</h3>
                <p className="text-lg text-on-surface font-display font-medium">
                  "The goal is to turn data into information, and information into insight."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Stats & Image */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-all"></div>
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYhPe2pOoKinC7wKOe0yUs7WE4dp4_xkHHiMkj6biSOZomeuuImT-3Mf07u-U6E9aIVEzl9QzB0D4hlgQdYKNY2EQ-ZDU2bJjYe-ePTChmXkM0P2GAtNmxpHf-1J6tMAp9N__OWGQ5xJPdzcHF42T-D9gYIFyuVHoHg04jP0-eQI9sGqy9gNc-nzIEhsygN0Yc4aOys2fpIbpz4_VCl3IQ48YogBJXX1ZnGeWEnl_KFlU-KnFzsC7kp6RhP3b_oTg1yXe_03ZTPQTF" 
                alt="Orioye Blessing Esther"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Core Competencies</h3>
              <div className="flex-grow h-px bg-outline-variant/30"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {['DATA ARCHITECTURE', 'STATISTICAL MODELING', 'NEURAL NETWORKS', 'AI SOLUTIONS', 'PROJECT MANAGEMENT'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-surface-container-high text-[10px] font-bold tracking-widest text-primary border border-primary/10 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <button 
              onClick={() => setSection('contact')}
              className="w-full py-5 bg-primary text-on-primary font-sans text-sm font-bold uppercase rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3"
            >
              LET'S COLLABORATE
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
