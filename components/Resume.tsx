
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section className="bg-white py-40 px-6 md:px-20 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Document Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 border-b pb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Medha Srivastava</h2>
            <p className="text-xl text-gray-400 uppercase tracking-[0.2em] font-light">Data Scientist | Software Engineer</p>
          </div>
          <div className="flex flex-col md:items-end justify-end space-y-3 font-mono text-sm opacity-60">
            <a href="mailto:medhasrivastavaa@gmail.com" className="hover:text-black flex items-center gap-2">
              medhasrivastavaa@gmail.com <Mail size={14} />
            </a>
            <a href="https://www.linkedin.com/in/medha-srivastava/" className="hover:text-black flex items-center gap-2">
              linkedin.com/in/medha-srivastava <Linkedin size={14} />
            </a>
            <div className="flex items-center gap-2">
              Boston, MA <MapPin size={14} />
            </div>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] opacity-40 mb-10">Work Experience</h3>
          </div>
          <div className="lg:col-span-8 space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="group">
                <h4 className="text-2xl font-serif mb-6">{exp.company}</h4>
                {exp.roles.map((role, j) => (
                  <div key={j} className={j > 0 ? 'mt-10' : ''}>
                    <div className="flex justify-between items-baseline mb-4">
                      <p className="text-sm font-mono uppercase tracking-wider text-gray-500">{role.title}</p>
                      <span className="font-mono text-xs opacity-40 italic">{role.period}</span>
                    </div>
                    <ul className="space-y-4">
                      {role.bullets.map((bullet, k) => (
                        <li key={k} className="text-gray-600 flex gap-4 leading-relaxed">
                          <span className="text-gray-300">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] opacity-40 mb-10">Technical Skillset</h3>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-4">
              <li className="text-gray-600 flex gap-4 leading-relaxed">
                <span className="text-gray-300">•</span>
                Agentic AI & Prompt Engineering (LLM agents, LangChain, OpenAI API, RAG)
              </li>
              <li className="text-gray-600 flex gap-4 leading-relaxed">
                <span className="text-gray-300">•</span>
                Python, R, Java, Typescript/Javascript, HTML, CSS, AWS, Database Management (SQL/MySQL, MongoDB, Postgres)
              </li>
              <li className="text-gray-600 flex gap-4 leading-relaxed">
                <span className="text-gray-300">•</span>
                Machine Learning Libraries: scikit-learn, PyTorch, Tensorflow, Keras, BERT
              </li>
              <li className="text-gray-600 flex gap-4 leading-relaxed">
                <span className="text-gray-300">•</span>
                Model Monitoring, Data Pipeline Automation, Predictive Analytics, Feature Engineering
              </li>
            </ul>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] opacity-40 mb-10">Education</h3>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {EDUCATION.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-2xl font-serif">{edu.institution}</h4>
                  <span className="font-mono text-xs opacity-40 italic">{edu.period}</span>
                </div>
                <p className="text-sm font-mono mb-4 text-gray-500">{edu.degree}</p>
                {edu.details && (
                  <ul className="space-y-2">
                    {edu.details.map((detail, j) => (
                      <li key={j} className="text-gray-600 flex gap-4 leading-relaxed">
                        <span className="text-gray-300">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
