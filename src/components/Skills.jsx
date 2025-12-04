import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary-400">04.</span>
          Technical Skills
          <span className="h-px bg-dark-border flex-grow max-w-xs ml-4"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(data.skills).map(([category, skills], index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-6 border-b border-dark-border pb-2 inline-block">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400 group">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:text-primary-400 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;