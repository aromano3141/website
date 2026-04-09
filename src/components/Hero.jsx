import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import { data } from '../data';

const Hero = () => {
  const { name, title, bio, location, email, github, linkedin } = data.profile;
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= bio.length) {
        setText(bio.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 18);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [bio]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-primary-400 font-medium mb-8">
          {title}
        </h2>

        <div className="flex flex-wrap gap-6 text-gray-400 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
          >
            <Mail size={18} />
            <span>{email}</span>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-lg p-6 font-mono text-sm md:text-base leading-relaxed text-gray-300 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-8 bg-dark-bg/50 border-b border-dark-border flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-2 text-xs text-gray-500 flex items-center gap-1">
              <Terminal size={12} />
              <span>bash</span>
            </div>
          </div>
          <div className="pt-8">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-400 mr-2">~</span>
            <span className="text-gray-400">cat bio.txt</span>
            <br />
            <br />
            {text}
            <span
              className={`inline-block w-2 h-5 ml-1 bg-primary-400 align-middle ${
                showCursor ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-100`}
            ></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;