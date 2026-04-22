'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Personal Website",
      description: "My personal website, created to display my profile, skills and projects. Built with a focus on modern UI/UX and clean code.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      image: "/me.png",
      link: "#",
      github: "#"
    },
    {
      title: "Sahabat Muslim",
      description: "A responsive web application designed to provide easy access to the Quran. Focused on accessibility and mobile-first design.",
      tech: ["VueJS 3", "Tailwind", "API"],
      image: "/me.png",
      link: "#",
      github: "#"
    },
    {
      title: "SISTEKDES",
      description: "Village Information System to assist local governments in administration and population data management.",
      tech: ["Laravel 9", "Bootstrap", "MySQL"],
      image: "/me.png",
      link: "#",
      github: "#"
    },
    {
      title: "test",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates alias vitae cum fuga explicabo, distinctio itaque voluptatum, eaque doloremque voluptatibus laborum, quaerat odit eius aliquam delectus accusantium perspiciatis amet.",
      tech: ["Laravel 9", "Bootstrap", "MySQL"],
      image: "/me.png",
      link: "#",
      github: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 text-white bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* NAGŁÓWEK SEKCI */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Past Project <span className="text-yellow-500">Experience</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-md mx-auto">
            // A selection of my work where code meets quality assurance.
          </p>
          <div className="mt-6 flex justify-center">
             <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full" />
          </div>
        </motion.div>

        {/* SIATKA PROJEKTÓW */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#161616] border border-white/5 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(255,215,0,0.1)] transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 size={16} className="text-yellow-500" />
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-15 line-clamp-3 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Github size={18} />
                    <span className="hidden group-hover/link:block">Code</span>
                  </a>
                  <a 
                    href={project.link} 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs font-mono text-yellow-500/80 hover:text-yellow-400 transition-colors group/link"
                  >
                    <ExternalLink size={18} />
                    <span className="hidden group-hover/link:block">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MODAL */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-[#161616] max-w-2xl w-full rounded-2xl p-8 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 font-mono leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;