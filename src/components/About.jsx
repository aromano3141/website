import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const About = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary-400">01.</span>
          About Me
          <span className="h-px bg-dark-border flex-grow max-w-xs ml-4"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              I am currently a student at <span className="text-primary-400">Missouri University of Science and Technology</span>, 
              where I focus on the intersection of Computer Science and Physics. My academic journey is driven by a deep curiosity 
              about how fundamental physical principles can inform and improve modern computational systems.
            </p>
            <p>
              My research interests lie primarily in <span className="text-primary-400">Multimodal Learning</span> and <span className="text-primary-400">Natural Language Processing (NLP)</span>. 
              I enjoy tackling complex problems that require a rigorous mathematical approach and high-performance computing techniques. 
              Whether it's optimizing training cycles for deep learning models or engineering scalable architectures for data-intensive applications, 
              I am always looking for ways to push the boundaries of what's possible.
            </p>
            <p>
              I thrive on optimization, having previously reduced manual operations by 90% through automated hyperparameter sweeps and achieved 5x speedups in data preprocessing pipelines. 
              When I'm not coding or reading papers, I'm likely exploring new technologies or working on personal projects that challenge my understanding of systems design.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-primary-500 rounded-lg transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative bg-dark-surface rounded-lg p-6 border border-dark-border h-full flex flex-col justify-center items-center text-center">
                 <div className="w-24 h-24 bg-dark-bg rounded-full flex items-center justify-center mb-4 border border-primary-500/30">
                    <span className="text-4xl">👨‍💻</span>
                 </div>
                 <h3 className="text-white font-medium text-xl mb-2">CS & Physics</h3>
                 <p className="text-gray-500 text-sm">Missouri S&T</p>
                 <p className="text-primary-400 text-sm mt-1">Class of 2027</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;