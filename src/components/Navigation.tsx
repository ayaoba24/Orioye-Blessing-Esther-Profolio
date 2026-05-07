import { motion } from 'motion/react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setSection: (section: Section) => void;
}

export default function Navigation({ activeSection, setSection }: NavigationProps) {
  const navItems: { label: string; id: Section }[] = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-center h-20 px-4 md:px-16 max-w-7xl mx-auto">
        <div 
          className="font-display text-2xl font-bold tracking-tighter text-primary cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setSection('home')}
        >
          Orioye Blessing Esther
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`font-sans text-sm font-semibold tracking-wide transition-all relative py-1 ${
                activeSection === item.id 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </nav>

        <button className="bg-primary text-on-primary px-6 py-2.5 font-sans text-sm font-bold uppercase rounded-md hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
          RESUME
        </button>
      </div>
    </header>
  );
}
