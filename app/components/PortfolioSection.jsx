'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
  {
    title: "My personal website",
    description: "My personal website, created to display my profile, skills and projects. Built with a focus on modern UI/UX and clean code",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "VSC"],
    images: ["/wpp1.png"],
    link: "#",
    github: "#",
    status: "green" 
  },
  {
    title: "Dźwiękowa Mapa Białegostoku",
    description: "Sounds of the City of Bialystok is a native Android application designed and implemented to provide an immersive auditory exploration of the urban environment through modern mobile devices.", 
    tech: ["Java", "MVC", "Android studio"],
    images: ["/mapa.png"],
    link: "https://dzwiekowamapabialegostoku.pb.edu.pl/",
    github: "https://github.com/kmieczkowska/SoundMapMobile",
    status: "green"
  },
  {
    title: "PathFinderSoftware",
    description: "This project focuses on the analysis and comparison of image sensors and data processing architectures used in navigation systems. A mobile robot was employed as the main research platform, supported by a webcam and infrared sensors.",
    tech: ["Java OpenJDK 23", "OpenCv","Jupyter", "Inteliij IDEA"],
    images: ["/robot.png"],
    link: "f",
    github: "https://github.com/kmieczkowska/PathFinderSofware",
    status: "green"
  },
  {
    title: "TesterPathFinder",
    description: "The TesterPathFinder application was developed as a diagnostic and testing tool to support the development and verification of the robot's primary control system, PathFinderSoftware.",
    tech: ["Java", "Javafx","SceneBuilder","TCP", "Inteliij IDEA"],
    images: ["/connect_torobot.png"],
    link: "f",
    github: "https://github.com/kmieczkowska/TesterPathFinder",
    status: "green"
  },
  {
    title: "Jajkolator",
    description: "A custom business application developed for a poultry farm company to calculate the profitability of chicken farming operations. The application uses operational and financial data to generate daily, weekly, and monthly profit estimates.",
    tech: ["Java", "Android studio"],
    images: ["/jajkulator.png", "/me.png"],
    link: "f",
    github: "https://github.com/kmieczkowska/Jajkulator",
    status: "green"
  },
  {
    title: "WeeksCalculator",
    description: "An application designed to calculate the number of weeks and days between selected dates. The application allows the user to choose a start date and an end date, then displays the time interval in a clear textual format.",
    tech: ["Java", "Android studio"],
    images: ["/weeksCalculator.png"],
    link: "f",
    github: "https://github.com/kmieczkowska/WeeksCalculator",
    status: "green"
  },
  {
    title: "Liczydlo",
    description: "This application automates merging and synchronizing data between two Excel files. It updates linked values and ensures data integrity by automatically appending missing columns to the destination file.",
    tech: ["C#", "Windows Forms"],
    images: ["/liczydlo.jpg"],
    link: "f",
    github: "https://github.com/kmieczkowska/AgaXcel",
    status: "green"
  }
];

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') setSelectedProject(null);
      if (selectedProject.images.length > 1) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section className="w-full py-24 text-white bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
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

        {/* Grid projektów */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const isGreen = project.status === "green";
            const statusColor = isGreen ? "text-green-500 hover:text-green-400" : "text-red-500 hover:text-red-400";
            const showLiveDemo = project.link !== "f";

            return (
              <motion.div 
                key={index} 
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#161616] border border-white/5 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(255,215,0,0.05)] transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={16} className="text-yellow-500" />
                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2 font-mono">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && <span className="text-[10px] text-gray-600">+{project.tech.length - 3}</span>}
                  </div>
                  <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/5">
                    <a 
                      href={project.github} 
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-2 text-xs font-mono transition-colors group/link ${statusColor}`}
                    >
                      <Github size={18} />
                      <span className="hidden group-hover/link:block font-bold tracking-tight">Code</span>
                    </a>
                    {showLiveDemo && (
                      <a 
                        href={project.link} 
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-2 text-xs font-mono transition-colors group/link ${statusColor}`}
                      >
                        <ExternalLink size={18} />
                        <span className="hidden group-hover/link:block font-bold tracking-tight">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal Galeria */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#121212] w-full max-w-6xl max-h-[90vh] rounded-[2rem] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Galeria zdjęć */}
                <div className="relative w-full md:w-3/5 h-[300px] md:h-auto bg-[#0a0a0a]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full p-4 flex items-center justify-center"
                    >
                      <Image 
                        src={selectedProject.images[currentImageIndex]} 
                        alt="Project screenshot"
                        fill
                        className="object-contain p-4 md:p-8"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {selectedProject.images.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-yellow-500 text-white transition-all border border-white/5 shadow-lg"><ChevronLeft size={24} /></button>
                      <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-yellow-500 text-white transition-all border border-white/5 shadow-lg"><ChevronRight size={24} /></button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, i) => (
                          <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-8 bg-yellow-500' : 'w-2 bg-white/20'}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Opis projektu */}
                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col h-full overflow-y-auto bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-3xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                    <button onClick={() => setSelectedProject(null)} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors text-gray-400 hover:text-white">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-8 flex-grow">
                    <section>
                      <h4 className="text-xs font-bold text-yellow-500/80 tracking-widest mb-4">Project Overview</h4>
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold text-yellow-500/80 tracking-widest mb-4">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all font-mono text-xs tracking-widest"
                    >
                      <Github size={16} /> Source Code
                    </a>
                    {selectedProject.link !== "f" && (
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-yellow-500 hover:bg-yellow-400 text-[#0c0c0c] rounded-2xl transition-all font-bold text-xs tracking-widest shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PortfolioSection;