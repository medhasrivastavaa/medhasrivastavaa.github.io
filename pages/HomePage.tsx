import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectStack from '../components/ProjectStack';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to hash on page load
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />

      <div id="projects">
        <ProjectStack />
      </div>
    </main>
  );
};

export default HomePage;
