
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PAPERS } from '../constants';
import { BookOpen } from 'lucide-react';

const Library: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="mt-60 px-6 md:px-20 mb-60">
      <div className="flex items-center justify-between mb-20 border-b border-gray-200 pb-8">
        <h2 className="text-3xl md:text-5xl font-serif">The Library</h2>
        <span className="font-mono text-sm opacity-50 uppercase tracking-widest">Research & Papers</span>
      </div>

      <div className="space-y-0 relative">
        {PAPERS.map((paper) => (
          <div
            key={paper.id}
            className="group relative border-b border-gray-100 py-12 cursor-pointer transition-colors hover:bg-white"
            onMouseEnter={() => setHoveredId(paper.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <span className="font-mono text-xs opacity-40 uppercase mb-2 block">{paper.venue}</span>
                <h3 className="text-2xl md:text-4xl font-serif group-hover:pl-4 transition-all duration-300">
                  {paper.title}
                </h3>
              </div>
              <span className="font-mono text-lg opacity-40">{paper.year}</span>
            </div>

            {/* Abstract Preview Box */}
            <AnimatePresence>
              {hoveredId === paper.id && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="hidden lg:block absolute left-full ml-12 top-1/2 -translate-y-1/2 w-80 p-6 bg-white border border-gray-100 shadow-xl z-20 pointer-events-none"
                >
                  <p className="text-sm font-mono text-gray-400 mb-4 uppercase tracking-tighter flex items-center gap-2">
                    <BookOpen size={14} /> Abstract Preview
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "{paper.abstract}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Library;
