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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f]/90 backdrop-blur-lg shadow-lg py-4' : 'bg-[#0a192f] py-6'
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
          <div className="hidden md:flex space-x-8">
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
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
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
                  className="block cursor-pointer text-sm font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};