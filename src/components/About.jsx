import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCode, FiDatabase, FiServer, FiSmartphone } = FiIcons;

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces"
    },
    {
      icon: FiServer,
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs"
    },
    {
      icon: FiDatabase,
      title: "Database Design",
      description: "Designing efficient and scalable database solutions"
    },
    {
      icon: FiSmartphone,
      title: "Mobile-First",
      description: "Developing with mobile-first responsive design principles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About Me</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-black mb-4">
              Crafting Digital Experiences
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Junior Full Stack Developer with a love for creating 
              innovative web applications. My journey in software development started 
              with curiosity and has evolved into a dedicated pursuit of excellence 
              in both frontend and backend technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date 
              with the latest industry trends. My goal is to build applications that 
              not only function flawlessly but also provide exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;