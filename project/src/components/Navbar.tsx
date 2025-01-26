import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a192f]/90 backdrop-blur-lg shadow-lg py-4' : 'bg-[#0a192f] py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2 text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
          >
            <Code2 className="w-8 h-8" />
            <span className="text-xl font-bold">Naman Verma</span>
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-sm font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};