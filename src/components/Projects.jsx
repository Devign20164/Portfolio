import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiGithub, FiShoppingCart, FiMessageSquare, FiBarChart3, FiCalendar } = FiIcons;

const Projects = () => {
  const projects = [
    {
      title: "Multi Tenant SaaS Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: FiShoppingCart
    },
    {
      title: "GoBill-Invoice Management System",
      description: "A responsive chat application with real-time messaging, user rooms, and file sharing capabilities. Features include typing indicators and message encryption.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: FiMessageSquare
    },
    {
      title: "Quantum Care Medical",
      description: "Using Shopify, designed and implemented custom website layouts to enhance functionality and visual appeal. I also Conducted in-depth research on UI/UX strategies to optimize website performance and user experience. I delivered a more accessible and conversion-focused website that increased client inquiries, boosted online sales, and improved overall customer engagement.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      technologies: ["Shopify", "Liquid", "CSS", "UI/UX Design"],
      liveUrl: "https://quantumcaremedical.com/",
      icon: FiShoppingCart
    },
    {
      title: "RFP Response Generator",
      description: "After researching Probolsky Research, I learned you respond to 200+ RFPs annually. I built an AI-powered tool that demonstrates how to reduce proposal writing time from 4+ hours to under 45 minutes.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
      technologies: ["React", "AI", "Tailwind CSS", "Vercel"],
      liveUrl: "https://rfpgenerator.vercel.app/",
      icon: FiBarChart3
    }
  ];

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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are some of the systems and applications I've built using modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <SafeIcon icon={project.icon} className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      <SafeIcon icon={FiGithub} className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;