import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-[var(--header-height)] bg-white flex flex-col justify-center relative overflow-hidden">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
       
       <div className="container-wide relative z-10">
          <div className="max-w-6xl mx-auto">
             
             {/* Header Identity */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="flex items-center gap-4 mb-12 border-b border-black/10 pb-6"
             >
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-black">Franco Luiz Romey</span>
                <span className="h-px flex-1 bg-black/10"></span>
                <span className="text-sm font-mono text-gray-500">FULL STACK DEVELOPER</span>
             </motion.div>

             {/* Main Headline */}
             <div className="overflow-hidden mb-8">
               <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                 className="text-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-black tracking-tight"
               >
                 Building Scalable<br/>
                 <span className="text-gray-400">Digital Systems.</span>
               </motion.h1>
             </div>

             {/* Value Prop & CTA */}
             <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 md:mt-24">
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 0.6 }}
                   className="md:col-span-6 lg:col-span-5"
                >
                   <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                      I specialize in engineering high-performance web applications. My work focuses on clean architecture, seamless user experiences, and robust backend integrations.
                   </p>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 0.8 }}
                   className="md:col-span-6 lg:col-span-7 flex flex-col md:items-end justify-between"
                >
                   <div className="flex gap-12 text-xs font-mono text-gray-400 uppercase tracking-widest mb-8 md:mb-0">
                      <span>Manila, PH</span>
                      <span>Open for Work</span>
                   </div>

                   <button 
                     onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                     className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors"
                   >
                      <span className="w-8 h-[1px] bg-black group-hover:w-12 transition-all duration-300"></span>
                      View Selected Works
                   </button>
                </motion.div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default Hero;