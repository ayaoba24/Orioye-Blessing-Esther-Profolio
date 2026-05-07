import { Section } from '../types';

interface FooterProps {
  setSection: (section: Section) => void;
}

export default function Footer({ setSection }: FooterProps) {
  const links = [
    { label: 'GitHub', href: 'https://github.com/ayaoba24' },
    { label: 'Email', href: 'mailto:orioyeesther2019@gmail.com' },
    { label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-white w-full py-12 border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-8 max-w-7xl mx-auto">
        <div 
          className="font-display text-2xl font-bold tracking-tighter text-primary cursor-pointer"
          onClick={() => setSection('home')}
        >
          Orioye Blessing Esther
        </div>

        <div className="text-on-surface-variant font-sans text-sm opacity-90 text-center">
          © {new Date().getFullYear()} Orioye Blessing Esther. Data Architect & Scientist.
        </div>

        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-sans text-sm font-semibold uppercase text-on-surface-variant hover:text-primary transition-all hover:translate-y-[-2px]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
