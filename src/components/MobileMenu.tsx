import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
  const menuItems = ['home', 'services', 'projects', 'contact'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
            
            <nav className="px-4 py-2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={onClose}
                  className="block py-3 text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;