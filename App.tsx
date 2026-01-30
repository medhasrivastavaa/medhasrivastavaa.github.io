
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-yellow-200">
        {/* Global Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#1a1a1a] origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

        {/* Minimal Footer */}
        <footer className="py-20 px-6 md:px-20 bg-[#1a1a1a] text-[#fdfdfd]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <p className="font-serif text-3xl mb-4">let's get me employed</p>
            </div>
            <div className="flex space-x-8 font-mono text-xs uppercase tracking-widest">
              <a href="https://github.com/medhasrivastavaa" className="hover:underline hover:text-yellow-200 transition-colors underline-offset-8">GitHub</a>
              <a href="https://www.linkedin.com/in/medha-srivastava/" className="hover:underline hover:text-yellow-200 transition-colors underline-offset-8">LinkedIn</a>
              <a href="mailto:medhasrivastavaa@gmail.com" className="hover:underline hover:text-yellow-200 transition-colors underline-offset-8">Email</a>
            </div>
          </div>
        </footer>

        {/* Aesthetic Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
    </Router>
  );
};

export default App;
