import { motion } from 'motion/react';
import { Mail, Phone, Network, Send, Github, Linkedin, MapPin, Share2 } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen py-24 px-4 md:px-16 max-w-7xl mx-auto"
    >
      {/* Asymmetric Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-7 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-sm font-bold text-primary tracking-widest uppercase">Connectivity & Collaboration</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-on-surface leading-tight font-display">
            Let's <span className="text-primary italic font-sans font-medium">Connect</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl font-sans leading-relaxed">
            Whether you're looking to discuss a high-stakes data architecture project, explore research opportunities, or simply share a technical insight, I'm always open to meaningful dialogue.
          </p>
        </div>
        <div className="md:col-span-5 relative h-80 rounded-2xl overflow-hidden shadow-2xl group border border-outline-variant/30">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui2CSAemD4ysUymmgHbOOvq3b-kMUzrY0i0WjhG6ymFvZOFaATGKUTYb5830TogC2laUEv8xC2ZzULl4RRvjvsQ6Lj6hX7crNbmdyVssIIeUsRm6LsXKkLSs4EyfYoJe2I4DFNbPOozjTf0wXFSZDz6JrU1qAN-dSIPmSAkn5ReWRV5DOfAA_TdOyEYrjmphOOMrW0RZ2A1NKxY-8iP07O9SdFcf0das_SYYalgl30FvBo1jwa0sFQe3gZ90kiDSEJAF1b73ZzuY-U" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt="Collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl border-l-[6px] border-primary shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
                <Mail className="text-primary" size={20} />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-sans">Email Address</span>
            </div>
            <a href="mailto:orioyeesther2019@gmail.com" className="text-2xl font-display font-semibold text-on-surface hover:text-primary transition-colors break-all leading-snug">
              orioyeesther2019@gmail.com
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl border-l-[6px] border-accent-warm shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-warm/5 rounded-xl border border-accent-warm/10">
                <Phone className="text-accent-warm" size={20} />
              </div>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-sans">Mobile</span>
            </div>
            <p className="text-on-surface font-sans">Phone number available upon request.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl flex justify-between items-center shadow-sm">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-sans">Ecosystem</span>
              <span className="text-xs font-bold text-primary">0110_NETWORK</span>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-all bg-white shadow-sm">
                <Network size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-all bg-white shadow-sm">
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
          
          {/* Decorative motif */}
          <div className="hidden lg:grid grid-cols-8 gap-2 p-4 opacity-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 7 === 0 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
            ))}
          </div>
        </aside>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <motion.form variants={itemVariants} className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-sm border border-primary/5">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 col-span-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-sans">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/50 border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none p-4 text-on-surface font-sans transition-all"
                />
              </div>
              <div className="space-y-2 col-span-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-sans">Email Subject</label>
                <input 
                  type="text" 
                  placeholder="Strategy Inquiry"
                  className="w-full bg-white/50 border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none p-4 text-on-surface font-sans transition-all"
                />
              </div>
              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-sans">Your Message</label>
                <textarea 
                  placeholder="Detail your project or query here..."
                  rows={6}
                  className="w-full bg-white/50 border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none p-4 text-on-surface font-sans transition-all resize-none"
                ></textarea>
                <div className="flex justify-end pt-1">
                  <span className="text-[10px] font-sans font-bold text-outline-variant uppercase tracking-[0.2em]">COORD: 6.52 / 3.37</span>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-accent-warm text-white font-sans text-sm font-bold rounded-lg hover:shadow-xl hover:shadow-accent-warm/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  TRANSMIT MESSAGE
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Nodes Section */}
      <section className="mt-24 space-y-8">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl font-display font-bold text-on-surface whitespace-nowrap">External <span className="text-primary italic">Nodes</span></h2>
          <div className="flex-grow h-px bg-outline-variant/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Open Source Repository', title: 'GitHub', icon: <Github size={24} />, color: 'primary' },
            { label: 'Professional Network', title: 'LinkedIn', icon: <Linkedin size={24} />, color: 'primary' }
          ].map((node, i) => (
            <motion.a 
              key={i}
              whileHover={{ y: -5 }}
              href="#" 
              className="flex items-center p-8 glass-card rounded-2xl group transition-all hover:bg-primary/5 hover:border-primary/30"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl border border-outline-variant group-hover:border-primary transition-colors shadow-sm">
                <span className="text-primary">{node.icon}</span>
              </div>
              <div className="ml-8">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">{node.label}</p>
                <p className="text-2xl font-display font-bold text-on-surface">{node.title}</p>
              </div>
              <div className="ml-auto opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                <Share2 size={24} className="text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Map Teaser Section */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-12">
        <div className="order-2 md:order-1 rounded-3xl overflow-hidden h-96 grayscale hover:grayscale-0 shadow-2xl transition-all duration-1000 cursor-crosshair">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0uinOAZSBftgmI3IQ40FiH5I_fLnmVo7MkAdOAN5BKR-z1e1UnOUWpXDCfeG5Tf_zw040jTYSasfdGOCBvPGkeuJbQBCm5Tbvu7j_218UZ1yujleVK2LK1IwuO4UqKNAvb0bqVgMVkV71OdJR6QmQw1nyPIx8vj-9lGGXY267ehhWk7U06cXEhrA5RgUFRMlq4BRVWvGWLLLLRLVrLOmnQToAXjQof5vx6rscZim5dqXPyrXXFxhe5GybwM36-Nn1lp-odtoLn-5GdY" 
            className="w-full h-full object-cover" 
            alt="Global Network" 
          />
        </div>
        <motion.div variants={itemVariants} className="order-1 md:order-2 md:pl-12 space-y-6">
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-primary" />
            <span className="text-xs font-bold text-primary tracking-widest uppercase">LAT: 6.5244 / LONG: 3.3792</span>
          </div>
          <h2 className="text-4xl text-on-surface">Global Availability</h2>
          <p className="text-lg text-on-surface-variant font-sans leading-relaxed">
            While based in Nigeria, I operate on a global scale, serving clients and collaborating with teams across time zones. Remote collaboration is a core pillar of my workflow.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Currently Available for High-Impact Projects</span>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
