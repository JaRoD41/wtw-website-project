import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Languages, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'services', 'projects', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    whileHover={{ y: -2 }}
                    className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                    href={`#${item}`}
                  >
                    {t(`nav.${item}`)}
                  </motion.a>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLanguage}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Languages className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-gray-200" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;