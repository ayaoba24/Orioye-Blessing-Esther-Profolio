import { motion } from 'motion/react';
import { Terminal, Download, Github, ExternalLink, FileJson, Layout } from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: 'Solar Energy Recommender System',
      description: 'A sophisticated recommendation engine leveraging historical meteorological data to optimize solar panel placement and capacity planning for urban infrastructure. Distills complex climate variables into actionable installation blueprints.',
      tags: ['Python', 'Scikit-Learn', 'Streamlit'],
      img: 'https://lh3.googleusercontent.com/aida/ADBb0ui2CSAemD4ysUymmgHbOOvq3b-kMUzrY0i0WjhG6ymFvZOFaATGKUTYb5830TogC2laUEv8xC2ZzULl4RRvjvsQ6Lj6hX7crNbmdyVssIIeUsRm6LsXKkLSs4EyfYoJe2I4DFNbPOozjTf0wXFSZDz6JrU1qAN-dSIPmSAkn5ReWRV5DOfAA_TdOyEYrjmphOOMrW0RZ2A1NKxY-8iP07O9SdFcf0das_SYYalgl30FvBo1jwa0sFQe3gZ90kiDSEJAF1b73ZzuY-U',
      icons: [<Terminal size={20} />, <Download size={20} />]
    },
    {
      title: 'EasyVisa Exploratory Data Analysis',
      description: 'An executive-level analysis of visa certification trends. Utilizes multivariate statistical methods to identify critical success factors for international workforce integration.',
      tags: ['Pandas', 'Seaborn', 'Statistics'],
      img: 'https://lh3.googleusercontent.com/aida/ADBb0ugxng7eG9GY3zi3QUlM7YDFDuYNyvnZq3XtsJ30NF6s_f2SgRxFoMHq3Vp2bnW4mw6oA7LGPDnVaanl6jEl3KUaS-U3iXGZyM-1I450YfvpB0XurhbmurPgM4CRd64NokbElXMkftjUJNdwFqpzwUsdYc_rb93M5HZodhoumVZIrooGvIJc8j4oi8-BhSN3dnbfB5YRJe2ur42pJTJiH-ZXIrdtl6eZMN-yIbtpnyE3ZOB1IHMkaaJ9NSXouPjJegX0KvfEIdHgkw',
      icons: [<Github size={20} />, <ExternalLink size={20} />],
      half: true
    },
    {
      title: 'Estonia Passenger Survival Analysis',
      description: 'A forensic data study investigating survival correlations in the MS Estonia tragedy. Applied rigorous demographic filtering to reveal anomalies in emergency evacuation outcomes.',
      tags: ['Matplotlib', 'EDA', 'Modeling'],
      img: 'https://lh3.googleusercontent.com/aida/ADBb0ugFhl79hhDLHoW-MMR_ZrK7P73f3bIbX5hO0Ng0sdRhMzlLbgprsv6Lf0EDh87N9cvl3boqrimQXy-ZIQWb6GYOLqwp5g-8ZnBaFB2nOv2ZgSRZsoqzJwnkEJQWTrLAVBI_v21-uAtonG6gsrnyg-WCBmHaffWWuigRg2JNqV4Z5LYLLkqd2Qgymh8Pkk4UjvHe4ouK8h-GQeTGzBxLi5ILt5Ay9-ggWQqE32V2oJXQhA09nhQwguxutQh5TTfCR3oNshd4Jis9QTU',
      icons: [<Terminal size={20} />, <FileJson size={20} />],
      half: true,
      badge: 'CRITICAL ANALYSIS'
    }
  ];

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen py-24 px-4 md:px-16 max-w-7xl mx-auto"
    >
      <header className="mb-16 space-y-4">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-primary"></span>
          <span className="text-sm font-bold text-primary tracking-widest">PORTFOLIO</span>
        </div>
        <h1 className="text-5xl text-primary leading-tight">Architecting Insights through Data Science</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl font-sans">
          Explore a curated selection of analytical frameworks and predictive models designed to optimize complex systems and uncover hidden survival patterns.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Projects Section */}
        <div className="md:col-span-8 flex flex-col gap-8">
          <motion.article variants={itemVariants} className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm">
            <div className="aspect-video bg-surface-container overflow-hidden">
              <img 
                src={projects[0].img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 mix-blend-multiply" 
                alt={projects[0].title}
              />
            </div>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">{projects[0].title}</h2>
                <div className="flex gap-4 text-on-surface-variant">
                  {projects[0].icons.map((icon, i) => (
                    <button key={i} className="hover:text-primary transition-colors">{icon}</button>
                  ))}
                </div>
              </div>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, idx) => (
              <motion.article key={idx} variants={itemVariants} className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all flex flex-col shadow-sm">
                <div className="h-64 relative bg-surface-container overflow-hidden">
                  <img src={project.img} className="w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                  {project.badge && (
                    <div className="absolute bottom-4 right-4 bg-accent-warm text-white px-3 py-1 text-[10px] font-bold rounded">
                      {project.badge}
                    </div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm font-sans text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-full border border-primary/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 border-t border-outline-variant/10 pt-4">
                      {project.icons.map((icon, i) => (
                        <button key={i} className="flex items-center gap-2 text-xs font-bold text-primary hover:underline transition-all">
                          {icon} {i === 0 ? 'GITHUB' : 'DRIVE'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-8">
          <motion.div variants={itemVariants} className="p-8 bg-surface-container-high rounded-2xl border border-outline-variant/20 space-y-6 shadow-sm">
            <div className="text-xs font-bold tracking-widest text-primary uppercase">TECHNICAL SPECIALIZATION</div>
            <p className="font-sans text-on-surface-variant leading-relaxed">Advanced Architectures in Data Science, focused on Predictive Modeling and Structural Analysis.</p>
            <div className="pt-4 divide-y divide-outline-variant/10">
              <div className="flex justify-between py-3">
                <span className="text-on-surface-variant text-xs">Methodology</span>
                <span className="text-primary text-xs font-bold">Bayesian Inference</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-on-surface-variant text-xs">Tools</span>
                <span className="text-primary text-xs font-bold">PyTorch, SQL</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="aspect-[4/5] glass-card rounded-2xl overflow-hidden relative border border-primary/10 shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0uinOAZSBftgmI3IQ40FiH5I_fLnmVo7MkAdOAN5BKR-z1e1UnOUWpXDCfeG5Tf_zw040jTYSasfdGOCBvPGkeuJbQBCm5Tbvu7j_218UZ1yujleVK2LK1IwuO4UqKNAvb0bqVgMVkV71OdJR6QmQw1nyPIx8vj-9lGGXY267ehhWk7U06cXEhrA5RgUFRMlq4BRVWvGWLLLLRLVrLOmnQToAXjQof5vx6rscZim5dqXPyrXXFxhe5GybwM36-Nn1lp-odtoLn-5GdY" 
              className="w-full h-full object-cover" 
              alt="Visa/Data" 
            />
          </motion.div>
        </aside>
      </div>

      <motion.section variants={itemVariants} className="mt-24 py-16 bg-surface-container-low border-y border-outline-variant/10 text-center rounded-3xl">
        <h2 className="text-3xl md:text-4xl text-on-surface mb-4">Discuss a Collaboration</h2>
        <p className="text-lg text-on-surface-variant max-w-xl mx-auto mb-8 font-sans">
          Seeking a data architect for your next high-stakes analytical project? Let's connect and define the strategy.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-10 py-4 bg-accent-warm text-white font-sans text-sm font-bold rounded hover:shadow-xl hover:shadow-accent-warm/20 transition-all">
            GET IN TOUCH
          </button>
          <button className="px-10 py-4 border border-primary text-primary font-sans text-sm font-bold rounded hover:bg-primary/5 transition-all">
            VIEW ARCHIVE
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
}
