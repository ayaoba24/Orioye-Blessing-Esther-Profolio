import { motion } from 'motion/react';
import { Database, BrainCircuit, Zap, Users, CheckCircle2, TrendingUp } from 'lucide-react';
import { Section } from '../types';

interface HomeProps {
  setSection: (section: Section) => void;
}

export default function Home({ setSection }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-10 px-4 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="md:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-4 text-accent-warm">
              <span className="w-12 h-[1px] bg-accent-warm"></span>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em]">PRECISION DATA ARCHITECTURE</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl text-on-surface leading-tight">
              Data Engineer, Project Manager & <span className="text-primary">AI Solutions</span> Enthusiast
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-on-surface-variant max-w-xl font-sans">
              Transforming complex data into practical digital solutions. Leveraging architectural precision and executive-level insight to build robust, scalable AI systems.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => setSection('projects')}
                className="bg-primary text-on-primary font-sans text-sm font-bold uppercase px-8 py-4 rounded-md hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
              >
                VIEW PROJECTS
              </button>
              <button 
                onClick={() => setSection('contact')}
                className="border border-primary text-primary font-sans text-sm font-bold uppercase px-8 py-4 rounded-md hover:bg-primary/5 transition-all transform hover:-translate-y-1"
              >
                CONTACT ME
              </button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:col-span-5 relative hidden md:block">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="glass-card p-1 aspect-square rounded-2xl overflow-hidden relative border border-primary/20 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYhPe2pOoKinC7wKOe0yUs7WE4dp4_xkHHiMkj6biSOZomeuuImT-3Mf07u-U6E9aIVEzl9QzB0D4hlgQdYKNY2EQ-ZDU2bJjYe-ePTChmXkM0P2GAtNmxpHf-1J6tMAp9N__OWGQ5xJPdzcHF42T-D9gYIFyuVHoHg04jP0-eQI9sGqy9gNc-nzIEhsygN0Yc4aOys2fpIbpz4_VCl3IQ48YogBJXX1ZnGeWEnl_KFlU-KnFzsC7kp6RhP3b_oTg1yXe_03ZTPQTF" 
                alt="Workspace"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-1.5 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto w-full">
        <div className="mb-12 flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl text-on-surface">Core Expertise</h2>
            <p className="text-on-surface-variant max-w-md">Strategic alignment of technical depth and project leadership.</p>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:block text-primary"
          >
            <TrendingUp size={48} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 group glass-card p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all shadow-sm hover:shadow-lg">
            <div className="flex justify-between items-start">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/5 flex items-center justify-center rounded-xl border border-primary/10">
                  <Database className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl text-primary font-bold">Data Engineering</h3>
                <p className="text-on-surface-variant max-w-lg leading-relaxed">
                  Designing resilient pipelines and scalable data architectures. Specialist in ETL orchestration, warehouse optimization, and maintaining data integrity at scale.
                </p>
              </div>
              <span className="text-accent-warm opacity-10 text-8xl font-black group-hover:opacity-20 transition-opacity">01</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {['PYTHON', 'SQL', 'APACHE SPARK', 'AWS'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-surface-container-high text-[10px] font-bold tracking-widest text-on-surface-variant rounded-full border border-outline-variant/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="group glass-card p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all shadow-sm hover:shadow-lg">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/5 flex items-center justify-center rounded-xl border border-primary/10">
                <BrainCircuit className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl text-primary font-bold">AI Systems</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Deploying robust machine learning models that solve real-world problems. Focused on LLM integration and predictive analytics.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <p className="text-[10px] font-bold tracking-widest text-accent-warm">KEY FOCUS: SYSTEM RELIABILITY</p>
            </div>
          </div>

          <div className="group glass-card p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all shadow-sm hover:shadow-lg">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/5 flex items-center justify-center rounded-xl border border-primary/10">
                <Zap className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl text-primary font-bold">Renewable Energy</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Applying data-driven insights to optimize energy distribution and sustainability metrics in the green tech sector.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <p className="text-[10px] font-bold tracking-widest text-accent-warm">DOMAINS: SOLAR & SMART GRIDS</p>
            </div>
          </div>

          <div className="md:col-span-2 group bg-primary/5 p-10 rounded-2xl border border-primary/10 flex flex-col md:flex-row gap-10 hover:border-primary transition-all shadow-sm">
            <div className="md:w-1/2 overflow-hidden rounded-xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSQHZ5LiG-EOpxRHejy5SccRVxGd2uCmwSqVgD0AFk0IO97Md4eG33jf6bVcSdMrTdkVidAfTuNL7UDKoFE7wj--x_V6yO8pIQNVRPxZuvzAEkGImQMaBpkvbl7MWOkdGiQMnDZqr9EkCHM7pMv9dcmm2S36utiFhCqmHGU8p4-0qm2s7umIeDO0z_gI0klZVkbqRlsgEqUZi6s83FDwLbBla9Vksynm71blu7ijFEIxKe8VnLQZhdKjw7lTFROSRWz0d8J7hyj09p" 
                alt="Strategy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl text-primary font-bold">Strategic Project Management</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Bridging the gap between technical execution and business goals. Experienced in leading cross-functional teams using Agile methodologies to deliver high-value digital products.
              </p>
              <div className="flex gap-3 items-center text-on-surface">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">Agile / Scrum Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Overview */}
      <section className="bg-surface-container-high/30 py-24 px-4 md:px-16 w-full">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-accent-warm uppercase">SELECTED WORK</span>
          <h2 className="text-4xl md:text-5xl text-on-surface">Architecting Tomorrow's Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 text-left">
            {[
              {
                title: 'Predictive Grid Monitor',
                category: 'AI-powered predictive maintenance for regional power grids.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0X8Sh9rVXdawjkH654fZpMj1yYj8TQpd1tILDdvYVR1NnRowxCmxQ0f6gvfQI6pdoFsj1ExKu5KZxvBY-QZbbLA6K8AEUjxsXgJhRXHq7HW7wrhLEU0a30nvJP-aqEeTEfwPZr3OTo8ebwilSzyHb-vVbyqSQv5WakuisUyamyWbGCkpkmdZOu9lQvzOdHAKu2i1J2Oh3zFf8lYNPC9_04o0h2LV7cu8VNTzXLHVvhcY-REoUctiucznhLFJpRxkzvWRE0ZLe2I3N'
              },
              {
                title: 'LLM Data Pipeline',
                category: 'Automated ingestion system for large-scale language model training.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7u5A3ZMGXnC9x3ylnK3ROo_IP9WVj7dwvIZTNhV0fkvurTo0R4SdqY4Pzga8jKgiDP01ki3G1cKejsrjJWp5dVw8Cg9XRbR51rVO4xJIIvl85UHVte7Uvz-ybMoHbVZXtwkpuFmUf2nUjQRqApHM4j2OrkTMZzOYtQFmez3SgDsyHxFPvZHWsr2zAlpWmc1Au7NWUDJwS1eRr1oawYBBZZKqhqpVpU76u3taOMWjzK43h6KVbAjhctylb0CRg33JxhsilKDlRapYL'
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer shadow-lg"
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-[#0F1729]/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-10 space-y-2">
                  <h4 className="text-2xl text-accent-warm font-bold">{project.title}</h4>
                  <p className="text-white text-sm font-sans opacity-90">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="pt-12">
            <button 
              onClick={() => setSection('projects')}
              className="px-10 py-4 border border-primary text-primary font-sans text-sm font-bold uppercase rounded-md hover:bg-primary hover:text-white transition-all"
            >
              EXPLORE FULL PORTFOLIO
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
