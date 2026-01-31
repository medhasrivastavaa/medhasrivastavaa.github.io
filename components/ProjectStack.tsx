
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
        <span className="font-mono text-base md:text-lg opacity-40 mb-3 block">
          {project.number}
        </span>
        <h2 className="text-2xl md:text-4xl font-serif mb-4 leading-tight">
          {project.title}
        </h2>
        {project.year && project.venue && (
          <p className="text-xs font-mono text-gray-500 mb-3">
            {project.venue} • {project.year}
          </p>
        )}
        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-0.5 bg-gray-100 text-[10px] font-mono rounded-full uppercase tracking-wider">
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
              className="inline-flex items-center space-x-2 text-sm font-medium group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:bg-[#fef08a] transition-colors duration-300">
                View Demo
              </span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-medium group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:bg-[#fef08a] transition-colors duration-300">
                {project.category === 'research' ? 'View Research' : 'View Code'}
              </span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
        <section id="projects" className="mt-32">
          <div className="px-6 md:px-20 mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-3">Projects</h2>
            {/* <p className="text-xl text-gray-500 max-w-2xl">Personal projects and applications</p> */}
          </div>
          <div className="space-y-32 md:space-y-40">
            {applications.map(renderProject)}
          </div>
        </section>
      )}

      {/* Research Section */}
      {research.length > 0 && (
        <section id="research" className="mt-32">
          <div className="px-6 md:px-20 mb-16">
            {/* <h2 className="text-3xl md:text-5xl font-serif mb-3">Research Projects</h2> */}
            <p className="text-lg text-gray-500 max-w-2xl">Research Projects</p>
          </div>
          <div className="space-y-32 md:space-y-40">
            {research.map(renderProject)}
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectStack;
