import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FiArrowUpRight, FiLock } from 'react-icons/fi';
import salesSystemImg from '../assets/sales-system.jpeg';
import ecommerceImg from '../assets/ecommerce.png';
import workflowSystemImg from '../assets/workflow-system.jpg';

const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const projects = [
    {
      title: "Workflow Automation",
      description: "Enterprise-grade internal web application reducing approval times by 60% through digitizing workflows.",
      image: workflowSystemImg,
      technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "https://workflow-flame-six.vercel.app/auth",
      credentials: null,
      id: "01"
    },
    {
      title: "Multi Tenant SaaS",
      description: "Scalable B2B platform supporting 500+ clients. Handles real-time inventory and tenant isolation.",
      image: salesSystemImg,
      technologies: ["React", "Supabase", "RLS", "Tailwind"],
      liveUrl: "https://b1-g-ordering-system-v2.vercel.app/login",
      credentials: { email: "test1@company.com", pass: "tempPassword123!" },
      id: "02"
    },
    {
      title: "Quantum Care Medical",
      description: "High-conversion Shopify implementation focused on accessibility and performance optimization.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      technologies: ["Shopify", "Liquid", "CSS", "UI/UX"],
      liveUrl: "https://quantumcaremedical.com/",
      credentials: null,
      id: "03"
    },
    {
      title: "Full Stack E-Commerce",
      description: "Comprehensive shopping solution with cart logic, payment simulation, and product management.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://e-commerce-theta-drab-78.vercel.app/",
      credentials: { email: "Any email", pass: "Any password" },
      id: "04"
    },
    {
      title: "RFP Response Gen AI",
      description: "AI-powered tool that reduces proposal writing time using LLMs for context-aware responses.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
      technologies: ["React", "OpenAI API", "Tailwind", "Vercel"],
      liveUrl: "https://rfpgenerator.vercel.app/",
      credentials: null,
      id: "05"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      {/* Static Intro Section - moved outside sticky container */}
      <div className="container-wide py-12 md:py-24">
         <h2 className="text-display text-5xl md:text-7xl mb-4 text-black">Selected<br/>Works</h2>
         <p className="text-sm font-bold tracking-widest uppercase text-gray-500">Scroll to Explore &rarr;</p>
      </div>

      <div ref={targetRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 pl-[10vw] pr-24">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col justify-center"
              >
                 {/* Image Container */}
                 <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-8 relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                    {/* Removed grayscale class */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Floating Credentials Box */}
                    {project.credentials && (
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-lg z-20 border-l-4 border-black">
                          <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                             <FiLock className="w-3 h-3" /> Access Credentials
                          </div>
                          <div className="grid grid-cols-[auto_1fr] gap-x-4 text-xs font-mono text-black">
                             <span className="text-gray-400">ID:</span>
                             <span className="select-all">{project.credentials.email}</span>
                             <span className="text-gray-400">PW:</span>
                             <span className="select-all">{project.credentials.pass}</span>
                          </div>
                      </div>
                    )}
                 </div>

                 {/* Project Info */}
                 <div>
                    <div className="flex items-center justify-between mb-4 border-b border-black pb-2">
                       <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">{project.id}</span>
                       <div className="flex gap-2">
                          {project.technologies.slice(0, 3).map(tech => (
                             <span key={tech} className="text-[10px] uppercase font-bold border border-gray-200 px-2 py-0.5 rounded-full text-gray-500">{tech}</span>
                          ))}
                       </div>
                    </div>
                    
                    <h3 className="text-display text-3xl md:text-5xl mb-4 leading-tight group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
                    >
                       View Live Site <FiArrowUpRight />
                    </a>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProjects;