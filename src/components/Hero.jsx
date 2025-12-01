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
    <section id="home" className="min-h-screen flex flex-col justify-center bg-black text-white relative overflow-hidden pt-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gray-800 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-start">
            
           

            {/* Main Title */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
            >
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-none">
                    Jr FULL<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">STACK</span>
                </h1>
                
                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "120px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-2 bg-white mb-8"
                />
            </motion.div>

            {/* Description & CTAs */}
            <div className="grid md:grid-cols-2 gap-12 w-full items-end mt-8">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-6">
                        I am <strong className="text-white">Franco Luiz Romey </strong>. I engineer robust digital systems with a focus on performance, scalability, and clean architecture.
                    </p>
                    
                    <div className="flex gap-4">
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
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <SafeIcon icon={item.icon} className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 md:justify-end"
                >
                    <button 
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        <SafeIcon icon={FiTerminal} className="w-4 h-4" />
                        VIEW WORK
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-4 border border-white text-white font-bold hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        CONTACT ME
                    </button>
                </motion.div>
            </div>
        </div>
      </div>

      {/* Bottom Tech Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 w-full border-t border-gray-800 bg-black/50 backdrop-blur-sm py-4 md:py-6"
      >
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex flex-wrap justify-between items-center text-gray-500 font-mono text-xs md:text-sm tracking-widest">
                 <span className="hidden md:inline">CURRENT STACK:</span>
                 <span className="hover:text-white transition-colors duration-300 cursor-default">REACT</span>
                 <span className="hover:text-white transition-colors duration-300 cursor-default">NODE.JS</span>
                 <span className="hover:text-white transition-colors duration-300 cursor-default">TYPESCRIPT</span>
                 <span className="hover:text-white transition-colors duration-300 cursor-default">NEXT.JS</span>
                 <span className="hover:text-white transition-colors duration-300 cursor-default">POSTGRESQL</span>
             </div>
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;