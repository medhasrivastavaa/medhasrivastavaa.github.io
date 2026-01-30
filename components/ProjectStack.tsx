
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ProjectStack: React.FC = () => {
  const applications = PROJECTS.filter(p => p.category === 'application');
  const research = PROJECTS.filter(p => p.category === 'research');

  const renderProject = (project: typeof PROJECTS[0]) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
    >
      {/* Project Info */}
      <div className="lg:col-span-5 pb-8">
        <span className="font-mono text-xl md:text-2xl opacity-40 mb-4 block">
          {project.number}
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
          {project.title}
        </h2>
        {project.year && project.venue && (
          <p className="text-sm font-mono text-gray-500 mb-4">
            {project.venue} • {project.year}
          </p>
        )}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-100 text-xs font-mono rounded-full uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-6 flex-wrap">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-lg font-medium group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:bg-[#fef08a] transition-colors duration-300">
                View Demo
              </span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-lg font-medium group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:bg-[#fef08a] transition-colors duration-300">
                {project.category === 'research' ? 'View Research' : 'View Code'}
              </span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* Project Image/Poster/Video */}
      {(project.videoUrl || project.imageUrl || project.posterUrl) && (
        <div className="lg:col-span-7 relative group">
          {project.videoUrl ? (
            <div className="aspect-[16/10] bg-gray-100 overflow-hidden rounded-sm flex items-center justify-center">
              {project.videoUrl.includes('drive.google.com') ? (
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  className="w-full h-full object-contain"
                  poster={project.imageUrl}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            <div className="aspect-[16/10] bg-gray-100 overflow-hidden rounded-sm">
              <img
                src={project.posterUrl || project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <>
      {/* Projects Section */}
      {applications.length > 0 && (
        <section id="projects" className="mt-40">
          <div className="px-6 md:px-20 mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-4">Projects</h2>
            {/* <p className="text-xl text-gray-500 max-w-2xl">Personal projects and applications</p> */}
          </div>
          <div className="space-y-40 md:space-y-60">
            {applications.map(renderProject)}
          </div>
        </section>
      )}

      {/* Research Section */}
      {research.length > 0 && (
        <section id="research" className="mt-40">
          <div className="px-6 md:px-20 mb-20">
            {/* <h2 className="text-5xl md:text-7xl font-serif mb-4">Research Projects</h2> */}
            <p className="text-xl text-gray-500 max-w-2xl">Research Projects</p>
          </div>
          <div className="space-y-40 md:space-y-60">
            {research.map(renderProject)}
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectStack;
