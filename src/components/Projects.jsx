import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { data } from '../data';

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary-400">03.</span>
          Featured Projects
          <span className="h-px bg-dark-border flex-grow max-w-xs ml-4"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-surface p-8 rounded-xl border border-dark-border hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder size={40} className="text-primary-400" />
                <a
                  href={project.link}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={24} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-primary-300 bg-primary-900/20 px-3 py-1 rounded-full border border-primary-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;