import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', id: 'projects' },
    { label: 'Expertise', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}
      >
        <div className="container-wide flex justify-between items-center">
          <div 
            className="text-sm font-bold tracking-widest uppercase cursor-pointer z-50 mix-blend-difference text-black"
            onClick={() => scrollToSection('home')}
          >
            F.L. Romey
          </div>

          <div className="hidden md:flex gap-12">
             {navItems.map(item => (
               <button 
                 key={item.id}
                 onClick={() => scrollToSection(item.id)}
                 className="text-sm font-medium hover:text-gray-500 transition-colors"
               >
                 {item.label}
               </button>
             ))}
          </div>

          <button 
            className="md:hidden z-50 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
          >
             <div className="flex flex-col items-center gap-8">
                {navItems.map(item => (
                   <button 
                     key={item.id}
                     onClick={() => scrollToSection(item.id)}
                     className="text-4xl font-display text-black hover:italic transition-all"
                   >
                      {item.label}
                   </button>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;