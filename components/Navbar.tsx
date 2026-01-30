
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-12 py-8 flex justify-between items-center text-white">
      <Link to="/" className="font-serif text-2xl tracking-tighter">MS.</Link>
      <div className="flex space-x-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">
        <Link to="/resume" className="hover:opacity-50 transition-opacity">Resume</Link>
        <Link to="/#projects" className="hover:opacity-50 transition-opacity">Projects</Link>
        <Link to="/#research" className="hover:opacity-50 transition-opacity">Research</Link>
      </div>
    </nav>
  );
};

export default Navbar;
