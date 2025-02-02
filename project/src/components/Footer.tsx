import { motion } from 'framer-motion';

export function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`py-6 ${
        darkMode 
          ? 'bg-[#0a192f]' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className={`text-sm ${
            darkMode 
              ? 'text-[#8892b0]' 
              : 'text-black/70'
          }`}>
            Designed & Built by Naman Verma
          </p>
          <p className={`text-sm ${
            darkMode 
              ? 'text-[#8892b0]' 
              : 'text-black/70'
          }`}>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
} 