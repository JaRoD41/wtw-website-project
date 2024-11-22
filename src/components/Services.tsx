import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Layout, Database } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: t('services.webDev'),
      description: t('services.webDevDesc')
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: t('services.frontend'),
      description: t('services.frontendDesc')
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('services.backend'),
      description: t('services.backendDesc')
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-purple-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;