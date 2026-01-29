import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiTerminal } = FiIcons;

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-white text-black relative overflow-hidden pt-20">
      
      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gray-50 mix-blend-multiply filter blur-3xl opacity-70"
        />
        {/* Second offset circle */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gray-100 mix-blend-multiply filter blur-3xl opacity-60"
        />
        {/* Thin geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="black" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
            
            {/* Main Title - Serif & Minimal */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative mb-8"
            >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight text-black leading-[0.9] mb-4">
                    Full Stack<br/>
                    <span className="italic text-gray-800">Developer</span>
                </h1>
                
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-1 bg-black mx-auto mt-8"
                />
            </motion.div>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed mb-10"
            >
                I am <strong className="text-black font-medium">Franco Luiz Romey.</strong> I engineer robust digital systems with a focus on performance, scalability, and clean architecture.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-5 items-center"
            >
                <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-10 py-4 bg-black text-white text-sm font-bold tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-200/50"
                >
                    VIEW SELECTED WORK
                </button>
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-transparent text-black text-sm font-bold tracking-widest border border-gray-200 hover:border-black transition-colors duration-300"
                >
                    GET IN TOUCH
                </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-16 flex gap-6"
            >
                {[
                    { icon: FiGithub, href: "https://github.com" },
                    { icon: FiLinkedin, href: "https://linkedin.com" },
                    { icon: FiMail, href: "mailto:john@example.com" }
                ].map((item, index) => (
                    <a 
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors duration-300 hover:scale-110 transform"
                    >
                        <SafeIcon icon={item.icon} className="w-6 h-6" />
                    </a>
                ))}
            </motion.div>
        </div>
      </div>

      {/* Bottom Tech Bar - Minimalist */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full py-6 bg-white/80 backdrop-blur-sm border-t border-gray-100"
      >
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex flex-wrap justify-between items-center text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                 <span className="hidden md:inline text-black">Tech Stack</span>
                 <span className="cursor-default hover:text-black transition-colors">React</span>
                 <span className="cursor-default hover:text-black transition-colors">Node.js</span>
                 <span className="cursor-default hover:text-black transition-colors">TypeScript</span>
                 <span className="cursor-default hover:text-black transition-colors">Next.js</span>
                 <span className="cursor-default hover:text-black transition-colors">PostgreSQL</span>
             </div>
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;