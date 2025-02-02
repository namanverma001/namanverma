import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export function ThemeToggle({ darkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed top-6 right-6 p-3 rounded-full z-[100] shadow-lg transition-colors duration-300 bg-red-500 ${
        darkMode 
          ? 'bg-[#112240] hover:bg-[#233554]' 
          : 'bg-white hover:bg-gray-100'
      }`}
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-[#64ffda]" />
      ) : (
        <Moon className="w-6 h-6 text-emerald-600" />
      )}
    </motion.button>
  );
}