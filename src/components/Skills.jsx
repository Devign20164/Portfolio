import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24 md:py-32">
       <div className="container-wide">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black pb-8">
             <div className="max-w-xl">
               <h2 className="text-display text-4xl md:text-5xl mb-4">Technical Ecosystem</h2>
               <p className="text-gray-500 font-light">
                  A curated stack of technologies I use to build robust, scalable applications.
               </p>
             </div>
             <div className="mt-8 md:mt-0">
                <span className="text-xs font-mono bg-black text-white px-3 py-1 rounded-full">UPDATED 2026</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Engineering Stack */}
             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-6">01 / Development</h3>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { name: "React & Next.js", desc: "UI Architecture" },
                     { name: "TypeScript", desc: "Type Safety" },
                     { name: "Node.js", desc: "Server Runtime" },
                     { name: "PostgreSQL", desc: "Relational Data" },
                     { name: "REST API", desc: "Communication" },
                     { name: "GraphQL", desc: "Data Querying" },
                     { name: "Tailwind CSS", desc: "Styling Engine" },
                     { name: "Python", desc: "Scripting / Backend" }
                   ].map((skill, idx) => (
                      <div key={idx} className="border border-gray-200 p-4 hover:border-black transition-colors group">
                         <h4 className="font-bold text-sm mb-1 group-hover:text-black transition-colors">{skill.name}</h4>
                         <span className="text-[10px] uppercase tracking-wide text-gray-400">{skill.desc}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Tools & Workflow */}
             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-6">02 / Infrastructure & Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { name: "Figma", desc: "Design Systems" },
                     { name: "Docker", desc: "Containerization" },
                     { name: "Vercel", desc: "Deployment" },
                     { name: "Git", desc: "Version Control" },
                   ].map((skill, idx) => (
                      <div key={idx} className="border border-gray-200 p-4 hover:border-black transition-colors group bg-gray-50">
                         <h4 className="font-bold text-sm mb-1 group-hover:text-black transition-colors">{skill.name}</h4>
                         <span className="text-[10px] uppercase tracking-wide text-gray-400">{skill.desc}</span>
                      </div>
                   ))}
                </div>
                
                {/* Additional Context Box */}
                <div className="mt-12 p-6 bg-black text-white">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Focus</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                       My current technical focus is on building type-safe, full-stack applications using the "T3" stack philosophy, ensuring end-to-end type safety and developer productivity.
                    </p>
                </div>
             </div>

          </div>

       </div>
    </section>
  );
};

export default Skills;