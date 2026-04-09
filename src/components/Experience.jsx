import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary-400">02.</span>
          Experience & Publications
          <span className="h-px bg-dark-border flex-grow max-w-xs ml-4"></span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-white">
              <Briefcase className="text-primary-400" size={20} />
              Research Experience
            </h3>
            <div className="space-y-12 border-l border-dark-border pl-8 relative">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-dark-bg border-2 border-primary-500"></span>
                  <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                  <div className="text-primary-400 text-sm mb-2">{exp.company}</div>
                  <div className="text-xs text-gray-500 font-mono mb-4">{exp.period}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-white">
              <BookOpen className="text-primary-400" size={20} />
              Publications
            </h3>
            <div className="space-y-6 mb-12">
              {data.publications.map((pub, index) => (
                <div 
                  key={index} 
                  className="bg-dark-surface p-6 rounded-lg border border-dark-border hover:border-primary-500/50 transition-colors group"
                >
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3 italic">
                    {pub.conference}
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    {pub.authors}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-white">
              <Award className="text-primary-400" size={20} />
              Honors & Awards
            </h3>
            <div className="flex flex-wrap gap-3">
              {['NSF REU Fellowship', 'Presidential Scholarship', 'Kummer Vanguard Scholar'].map((award, index) => (
                <span key={index} className="bg-primary-900/20 border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;