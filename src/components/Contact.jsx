import React from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-gray-100">
       <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 block">Next Steps</span>
              
              <h2 className="text-display text-6xl md:text-8xl lg:text-9xl mb-12">
                 Let's Talk.
              </h2>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                 <a 
                   href="mailto:contact@francoromey.com" 
                   className="text-xl md:text-2xl border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-all flex items-center gap-2"
                 >
                    contact@francoromey.com <FiArrowUpRight />
                 </a>
              </div>
              
              <div className="mt-20 flex justify-center gap-12 text-gray-500">
                 <a href="#" className="hover:text-black transition-colors"><FiGithub className="w-6 h-6" /></a>
                 <a href="#" className="hover:text-black transition-colors"><FiLinkedin className="w-6 h-6" /></a>
                 <a href="#" className="hover:text-black transition-colors"><FiMail className="w-6 h-6" /></a>
              </div>
              
              <div className="mt-32 text-xs font-mono text-gray-400 uppercase tracking-widest">
                 &copy; 2026 Franco Luiz Romey. All Rights Reserved.
              </div>
          </div>
       </div>
    </section>
  );
};

export default Contact;