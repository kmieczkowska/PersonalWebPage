'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "My personal website",
      description: "My personal website, created to display my profile, skills and projects. Built with a focus on modern UI/UX and clean code",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/wpp1.png",
      link: "#",
      github: "#",
      status: "green" 
    },
    {
      title: "PathFinderSoftware",
      description: "This project focuses on the analysis and comparison of image sensors and data processing architectures used in navigation systems. A mobile robot was employed as the main research platform, supported by a webcam and infrared sensors. The study included optimization of image quality and sensor data accuracy, followed by the development and testing of various image processing strategies. The results were used to compare the effectiveness of individual solutions in navigation applications.",
      tech: ["Java", "Jupyter Notebook"],
      image: "/connect_torobot.png",
      link: "f",
      github: "https://github.com/kmieczkowska/PathFinderSofware",
      status: "green"
    },
    {
      title: "Jajkolator",
      description: "An application designed to calculate the profitability of chicken farming. The application accepts input data such as: egg price, number of eggs, hatch rate (%), feed tonnage, feed price per ton, and other operating costs. Based on this data, the application calculates the daily profit, as well as the weekly and monthly profit.",
      tech: ["Java"],
      image: "/jajkulator.png",
      link: "f",
      github: "https://github.com/kmieczkowska/Jajkulator",
      status: "green"
    },
    {
      title: "WeeksCalculator",
      description: "An application designed to calculate the number of weeks and days between selected dates. The application allows the user to choose a start date and an end date, then displays the time interval in a clear textual format (for example: 3 weeks and 4 days).",
      tech: ["Java"],
      image: "/weeksCalculator.png",
      link: "f",
      github: "https://github.com/kmieczkowska/WeeksCalculator",
      status: "green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 text-white bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section header */}
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

        {/* Projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => {
            const isGreen = project.status === "green";
            const statusColor = isGreen 
              ? "text-green-500 hover:text-green-400" 
              : "text-red-500 hover:text-red-400";
            const showLiveDemo = project.link !== "f";

            return (
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

                  {/* Links */}
                  <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/5">
                    <a 
                      href={project.github} 
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-2 text-xs font-mono transition-colors group/link ${statusColor}`}
                    >
                      <Github size={18} />
                      <span className="hidden group-hover/link:block">Code</span>
                    </a>
                    {showLiveDemo && (
                      <a 
                        href={project.link} 
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-2 text-xs font-mono transition-colors group/link ${statusColor}`}
                      >
                        <ExternalLink size={18} />
                        <span className="hidden group-hover/link:block">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* modal */}
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
                  Close
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