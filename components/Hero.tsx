
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [pulseIndex, setPulseIndex] = useState(0);
  const statuses = [
    "Exploring agentic workflows...",
    "Researching AI fairness...",
    "Designing ML pipelines...",
    "Crafting elegant code...",
    "Fine-tuning transformers..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tight">
          Medha <br />
        </h1>

        <div className="mt-8 md:mt-12 flex items-center space-x-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <p className="font-mono text-xs md:text-sm opacity-70">
            <span className="text-[#1a1a1a]">{statuses[pulseIndex]}</span>
            <span className="inline-block w-2 h-4 bg-[#1a1a1a] ml-2 animate-blink" />
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
