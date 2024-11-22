import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-8 h-8 border-t-2 border-purple-600 dark:border-purple-400 rounded-full" />
        </motion.div>
      </div>
      <span className="text-2xl font-bold gradient-text">Walk This Web</span>
    </motion.div>
  );
};

export default Logo;