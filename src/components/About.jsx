import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-24 border-b border-gray-100">
       <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
             
             {/* Left Column: Profile Stats */}
             <div className="lg:col-span-3 space-y-12">
                <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Location</h3>
                   <p className="text-base font-medium">Manila, Philippines</p>
                </div>
                <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Role</h3>
                   <p className="text-base font-medium">Junior Full Stack Developer</p>
                </div>
                <div>
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Status</h3>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <p className="text-base font-medium">Available for Projects</p>
                   </div>
                </div>
             </div>

             {/* Middle Column: Narrative */}
             <div className="lg:col-span-5">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">Professional Summary</h3>
                <div className="space-y-6">
                   <p className="text-xl leading-relaxed font-light text-gray-800">
                      I am a developer driven by the challenge of solving complex problems through elegant code. My background combines technical rigor with a deep appreciation for user-centric design.
                   </p>
                   <p className="text-base leading-relaxed text-gray-500 font-sans">
                      Starting with a curiosity for how systems work, I have cultivated a skillset that spans the entire development lifecycle. From architecting database schemas to refining pixel-perfect interfaces, I aim to build applications that are resilient, scalable, and intuitive.
                   </p>
                </div>
             </div>

             {/* Right Column: Philosophy */}
             <div className="lg:col-span-4 bg-gray-50 p-8 lg:p-10 rounded-sm">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black mb-8">Operating Principles</h3>
                <ul className="space-y-6">
                   <li className="flex gap-4 items-start">
                      <span className="text-xs font-mono text-gray-400 mt-1">01</span>
                      <div>
                         <h4 className="text-sm font-bold mb-1">User First</h4>
                         <p className="text-xs text-gray-600 leading-relaxed">Technology serves people. Every line of code should ultimately improve the end-user experience.</p>
                      </div>
                   </li>
                   <li className="flex gap-4 items-start">
                      <span className="text-xs font-mono text-gray-400 mt-1">02</span>
                      <div>
                         <h4 className="text-sm font-bold mb-1">Clean Architecture</h4>
                         <p className="text-xs text-gray-600 leading-relaxed">Maintainability is key. I prioritize readable, modular, and well-documented code.</p>
                      </div>
                   </li>
                   <li className="flex gap-4 items-start">
                      <span className="text-xs font-mono text-gray-400 mt-1">03</span>
                      <div>
                         <h4 className="text-sm font-bold mb-1">Continuous Growth</h4>
                         <p className="text-xs text-gray-600 leading-relaxed">The tech landscape never settles, and neither do I. I am committed to constant learning.</p>
                      </div>
                   </li>
                </ul>
             </div>

          </div>
       </div>
    </section>
  );
};

export default About;