
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6 md:px-20 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Document Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 border-b pb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">Medha Srivastava</h2>
            <p className="text-base text-gray-400 uppercase tracking-[0.2em] font-light">Data Scientist | Software Engineer</p>
          </div>
          <div className="flex flex-col md:items-end justify-end space-y-2 font-mono text-xs opacity-60">
            <a href="mailto:medhasrivastavaa@gmail.com" className="hover:text-black flex items-center gap-2">
              medhasrivastavaa@gmail.com <Mail size={12} />
            </a>
            <a href="https://www.linkedin.com/in/medha-srivastava/" className="hover:text-black flex items-center gap-2">
              linkedin.com/in/medha-srivastava <Linkedin size={12} />
            </a>
            <div className="flex items-center gap-2">
              Boston, MA <MapPin size={12} />
            </div>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8">Work Experience</h3>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-serif mb-4">{exp.company}</h4>
                {exp.roles.map((role, j) => (
                  <div key={j} className={j > 0 ? 'mt-8' : ''}>
                    <div className="flex justify-between items-baseline mb-3">
                      <p className="text-xs font-mono uppercase tracking-wider text-gray-500">{role.title}</p>
                      <span className="font-mono text-[10px] opacity-40 italic">{role.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {role.bullets.map((bullet, k) => (
                        <li key={k} className="text-sm text-gray-600 flex gap-3 leading-relaxed">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8">Technical Skillset</h3>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-3">
              <li className="text-sm text-gray-600 flex gap-3 leading-relaxed">
                <span className="text-gray-300">•</span>
                Agentic AI & Prompt Engineering (LLM agents, LangChain, OpenAI API, RAG)
              </li>
              <li className="text-sm text-gray-600 flex gap-3 leading-relaxed">
                <span className="text-gray-300">•</span>
                Python, R, Java, Typescript/Javascript, HTML, CSS, AWS, Database Management (SQL/MySQL, MongoDB, Postgres)
              </li>
              <li className="text-sm text-gray-600 flex gap-3 leading-relaxed">
                <span className="text-gray-300">•</span>
                Machine Learning Libraries: scikit-learn, PyTorch, Tensorflow, Keras, BERT
              </li>
              <li className="text-sm text-gray-600 flex gap-3 leading-relaxed">
                <span className="text-gray-300">•</span>
                Model Monitoring, Data Pipeline Automation, Predictive Analytics, Feature Engineering
              </li>
            </ul>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8">Education</h3>
          </div>
          <div className="lg:col-span-8 space-y-10">
            {EDUCATION.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="text-xl font-serif">{edu.institution}</h4>
                  <span className="font-mono text-[10px] opacity-40 italic">{edu.period}</span>
                </div>
                <p className="text-xs font-mono mb-3 text-gray-500">{edu.degree}</p>
                {edu.details && (
                  <ul className="space-y-2">
                    {edu.details.map((detail, j) => (
                      <li key={j} className="text-sm text-gray-600 flex gap-3 leading-relaxed">
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
