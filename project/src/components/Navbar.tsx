import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Achievements'];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-[#0a192f]/90 backdrop-blur-lg shadow-lg' 
            : 'bg-white/90 backdrop-blur-lg shadow-md'
          : darkMode 
            ? 'bg-[#0a192f]' 
            : 'bg-white'
      } py-4`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`cursor-pointer flex items-center gap-2 ${
              darkMode 
                ? 'text-[#ccd6f6] hover:text-[#64ffda]' 
                : 'text-black hover:text-blue-600'
            } transition-colors duration-300`}
          >
            <Code2 className="w-8 h-8" />
            <span className="text-xl font-bold">Naman Verma</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer text-sm font-mono ${
                    darkMode 
                      ? 'text-[#ccd6f6] hover:text-[#64ffda]' 
                      : 'text-black hover:text-blue-600'
                  } transition-colors duration-300`}
                >
                  <span className={darkMode ? 'text-[#64ffda]' : 'text-emerald-700'}>
                    0{index + 1}.{' '}
                  </span>
                  {item}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-[#112240] hover:bg-[#233554]' 
                  : 'bg-blue-50 hover:bg-blue-100'
              } transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#64ffda]" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-[#112240] hover:bg-[#233554]' 
                  : 'bg-blue-50 hover:bg-blue-100'
              } transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#64ffda]" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-700" />
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                darkMode 
                  ? 'text-[#ccd6f6] hover:text-[#64ffda]' 
                  : 'text-black hover:text-blue-600'
              } transition-colors duration-300`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 space-y-4 p-4 rounded-lg ${
              darkMode 
                ? 'bg-[#112240]' 
                : 'bg-white shadow-lg'
            }`}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`block cursor-pointer text-sm font-mono ${
                    darkMode 
                      ? 'text-[#ccd6f6] hover:text-[#64ffda]' 
                      : 'text-black hover:text-blue-600'
                  } transition-colors duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={darkMode ? 'text-[#64ffda]' : 'text-emerald-700'}>
                    0{index + 1}.{' '}
                  </span>
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};