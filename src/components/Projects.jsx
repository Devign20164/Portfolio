import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import salesSystemImg from '../assets/sales-system.jpeg';
import ecommerceImg from '../assets/ecommerce.png';

const { FiExternalLink, FiGithub, FiShoppingCart, FiMessageSquare, FiBarChart3, FiCalendar } = FiIcons;

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = React.useRef();

  const projects = [
    {
      title: "Multi Tenant SaaS Platform",
      description: "Architected and built a scalable multi-tenant B2B SaaS platform (React, TypeScript, Supabase) supporting 512+ clients, featuring RLS-based RBAC, automated provisioning, and real-time inventory/order management that reduced processing time by 40%.Delivered a high-performance enterprise UI/UX using React, Tailwind, Shadcn UI, and React Query, achieving sub-second load times and enabling data-driven decision-making through interactive analytics dashboards.",
      image: salesSystemImg,
      technologies: ["React", "Supabase", "REST API", "RLS", "Tailwind CSS"],
      liveUrl: "https://b1-g-ordering-system-v2.vercel.app/login",
      credentials: {
        email: "test1@company.com",
        password: "tempPassword123!"
      },
      icon: FiShoppingCart,
      category: ["FrontEnd", "BackEnd"]
    },
    {
      title: "Quantum Care Medical",
      description: "Using Shopify, designed and implemented custom website layouts to enhance functionality and visual appeal. I also Conducted in-depth research on UI/UX strategies to optimize website performance and user experience. I delivered a more accessible and conversion-focused website that increased client inquiries, boosted online sales, and improved overall customer engagement.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      technologies: ["Shopify", "Liquid", "CSS", "UI/UX Design"],
      liveUrl: "https://quantumcaremedical.com/",
      icon: FiShoppingCart,
      category: ["FrontEnd", "E-Commerce"]
    },
    {
      title: "Full Stack E-Commerce",
      description: "A comprehensive e-commerce solution featuring separate portals for consumers and administrators. Includes secure authentication, product catalog management, cart functionality, and simulated payment processing for demonstration purposes.",
      image: ecommerceImg,
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "https://e-commerce-theta-drab-78.vercel.app/",
      credentials: {
        email: "Any email",
        password: "Any password"
      },
      icon: FiShoppingCart,
      category: ["E-Commerce", "FrontEnd"]
    },
    {
      title: "RFP Response Generator",
      description: "After researching Probolsky Research, I learned you respond to 200+ RFPs annually. I built an AI-powered tool that demonstrates how to reduce proposal writing time from 4+ hours to under 45 minutes.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
      technologies: ["React", "AI", "Tailwind CSS", "Vercel"],
      liveUrl: "https://rfpgenerator.vercel.app/",
      icon: FiBarChart3,
      category: ["Data"]
    }
  ];

  React.useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Here are some of the systems and applications I've built using modern technologies
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          ref={carousel}
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-12"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 px-4"
            style={{ width: "fit-content" }}
          >
            {projects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="min-w-[400px] w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex-shrink-0 flex flex-col h-auto"
              >
                {/* Project Image */}
                <div className="relative h-56 bg-gray-200 overflow-hidden group flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <SafeIcon icon={project.icon} className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col h-[480px]">
                  <div className="flex-col">
                    {/* Fixed Height Title Area to align description */}
                    <div className="h-16 mb-3 flex items-end">
                       <h3 className="text-2xl font-bold text-black leading-tight w-full line-clamp-2">{project.title}</h3>
                    </div>

                    {/* Fixed Height Description Area to align Technologies */}
                    <div className="h-[4.5rem] mb-6 overflow-hidden">
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies - Now consistently placed */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer to push Credentials/Button to bottom */}
                  <div className="flex-grow"></div>

                  <div className="space-y-4">
                     {/* Credentials - Full View */}
                     {project.credentials && (
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Demo Access</p>
                        <div className="space-y-1">
                          <p className="flex items-center gap-2 text-gray-700">
                            <span className="font-semibold text-gray-900 w-20">Email:</span> 
                            <span className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-gray-200">{project.credentials.email}</span>
                          </p>
                          <p className="flex items-center gap-2 text-gray-700">
                            <span className="font-semibold text-gray-900 w-20">Password:</span> 
                            <span className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-gray-200">{project.credentials.password}</span>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Project Links */}
                    <div className="">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 text-sm font-bold shadow-lg shadow-black/10"
                      >
                        <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                        <span>Launch Project</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;