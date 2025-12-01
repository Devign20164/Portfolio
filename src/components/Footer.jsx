import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="mb-8 p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200 mx-auto"
          >
            <SafeIcon icon={FiArrowUp} className="w-6 h-6" />
          </motion.button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold mb-4">&lt;Portfolio/&gt;</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building the future, one line of code at a time. Let's create something amazing together.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Franco Luiz Romey . All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;