'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, X, ChevronLeft, ChevronRight, Award } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      type: "project",
      title: "My personal website",
      description: "My personal website, created to display my profile, skills and projects. Built with a focus on modern UI/UX and clean code",
      tech: ["React", "CSS", "Next.js", "Tailwind CSS", "Framer Motion", "VSC"],
      images: ["/wpp1.png"],
      link: "#",
      github: "#",
      status: "green"
    },
    {
      type: "project",
      title: "Dźwiękowa Mapa Białegostoku",
      description: "Sounds of the City of Bialystok is a native Android application designed and implemented to provide an immersive auditory exploration of the urban environment through modern mobile devices.",
      tech: ["Java", "MVC", "Android studio"],
      images: ["/mapa.png", "/oproj.jpg", "/kontakt.jpg", "/pick.jpg", "/szczeg.jpg"],
      link: "https://dzwiekowamapabialegostoku.pb.edu.pl/",
      github: "https://github.com/kmieczkowska/SoundMapMobile",
      status: "green"
    },
    {
      type: "project",
      title: "PathFinderSoftware",
      description: "This project focuses on the analysis and comparison of image sensors and data processing architectures used in navigation systems. A mobile robot was employed as the main research platform, supported by a webcam and infrared sensors.",
      tech: ["Java OpenJDK 23", "OpenCv", "Jupyter", "Inteliij IDEA"],
      images: ["/robot.png"],
      link: "f",
      github: "https://github.com/kmieczkowska/PathFinderSofware",
      status: "green"
    },
    {
      type: "project",
      title: "TesterPathFinder",
      description: "The TesterPathFinder application was developed as a diagnostic and testing tool to support the development and verification of the robot's primary control system, PathFinderSoftware.",
      tech: ["Java", "Javafx", "SceneBuilder", "TCP", "Inteliij IDEA"],
      images: ["/connect_torobot.png"],
      link: "f",
      github: "https://github.com/kmieczkowska/TesterPathFinder",
      status: "green"
    },
    {
      type: "project",
      title: "Jajkolator",
      description: "A custom business application developed for a poultry farm company to calculate the profitability of chicken farming operations. The application uses operational and financial data to generate daily, weekly, and monthly profit estimates.",
      tech: ["Java", "Android studio"],
      images: ["/jajkulator.png", "/jajkolator2.png"],
      link: "f",
      github: "https://github.com/kmieczkowska/Jajkulator",
      status: "green"
    },
    {
      type: "project",
      title: "WeeksCalculator",
      description: "An application designed to calculate the number of weeks and days between selected dates. The application allows the user to choose a start date and an end date, then displays the time interval in a clear textual format.",
      tech: ["Java", "Android studio"],
      images: ["/weeksCalculator.png", "/wc2.png","/wc3.png","/wc4.png","/wc5.png"],
      link: "f",
      github: "https://github.com/kmieczkowska/WeeksCalculator",
      status: "green"
    },
    {
      type: "project",
      title: "Liczydlo",
      description: "This application automates merging and synchronizing data between two Excel files. It updates linked values and ensures data integrity by automatically appending missing columns to the destination file.",
      tech: ["C#", "Windows Forms"],
      images: ["/liczydlo.jpg"],
      link: "f",
      github: "https://github.com/kmieczkowska/AgaXcel",
      status: "green"
    }
  ];

  const certificates = [
    {
      type: 'certificate',
      title: "British Council EnglishScore - B2 Upper Intermediate",
      issuer: "British Council",
      date: "03.2023",
      description: "B2 | You can check it there: https://www.englishscore.com/verify/",
      images: ["/b2eng.jpg"],
      tech: ["English", "B2"]
    },
    {
      type: 'certificate',
      title: "Full Android Development Masterclass",
      issuer: "Udemy",
      date: "04.2026",
      description: "Master the art of building professional apps by learning Java and modern architecture through hands-on, industry-focused projects.",
      images: ["/android_course.png"],
      tech: ["Java", "Android Studio"]
    },
    {
      type: 'certificate',
      title: "Analiza i przetwarzanie obrazów biometrycznych",
      issuer: "NAVOICA",
      date: "01.2022",
      description: "Kurs analizy i przetwarzania obrazów biometrycznych",
      images: ["/biometria.png"],
      tech: ["Python", "MatLab"]
    },
    {
      type: 'certificate',
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "02.2025",
      description: "The course focuses on the practical configuration of switches, routers, and wireless networks.",
      images: ["/CCNA.png"],
      tech: ["Cisco"]
    }
  ];

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedItem?.images?.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
    }
  }, [selectedItem]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedItem?.images?.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  }, [selectedItem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (selectedItem.images?.length > 1) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, nextImage, prevImage]);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  return (
    <section className="w-full py-24 text-white bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight whitespace-nowrap">
            Past Project <span className="text-yellow-500">Experience</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm w-full">
            // A selection of my work where code meets quality assurance.
          </p>
          <div className="mt-6 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full" />
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${activeTab === 'projects' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              [ Projects ]
            </button>
            <button 
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${activeTab === 'certificates' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              [ Certificates ]
            </button>
          </div>
        </motion.div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(activeTab === 'projects' ? projects : certificates).map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#161616] border border-white/5 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(255,215,0,0.05)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-52 w-full overflow-hidden">
                {item.images?.[0] && (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {item.type === 'project' ? <Code2 size={16} className="text-yellow-500" /> : <Award size={16} className="text-yellow-500" />}
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors uppercase tracking-tighter">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2 font-mono">
                  {item.type === 'certificate' ? `${item.issuer} • ${item.date}` : item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-yellow-500/50 group-hover:text-yellow-500 transition-colors">
                        VIEW DETAILS →
                    </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#121212] w-full max-w-6xl max-h-[90vh] rounded-[2rem] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full md:w-3/5 h-[300px] md:h-auto bg-[#0a0a0a]">
                  <AnimatePresence mode="wait">
                    {selectedItem.images?.[currentImageIndex] && (
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <Image 
                          src={selectedItem.images[currentImageIndex]} 
                          alt="Preview"
                          fill
                          priority
                          className="object-contain p-4 md:p-8"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {selectedItem.images?.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button onClick={prevImage} className="p-3 rounded-full bg-black/50 hover:bg-yellow-500 transition-all"><ChevronLeft size={24} /></button>
                        <button onClick={nextImage} className="p-3 rounded-full bg-black/50 hover:bg-yellow-500 transition-all"><ChevronRight size={24} /></button>
                    </div>
                  )}
                </div>

                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col h-full overflow-y-auto">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-1">{selectedItem.title}</h2>
                        {selectedItem.issuer && <p className="text-yellow-500 font-mono text-sm">{selectedItem.issuer} | {selectedItem.date}</p>}
                    </div>
                    <button onClick={() => setSelectedItem(null)} className="p-3 bg-white/5 rounded-2xl hover:text-yellow-500"><X size={20} /></button>
                  </div>

                  <div className="space-y-8 flex-grow">
                    <section>
                      <h4 className="text-xs font-bold text-yellow-500/80 tracking-widest mb-4 uppercase">{selectedItem.type === 'project' ? 'Project Overview' : 'Certification Info'}</h4>
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">{selectedItem.description}</p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold text-yellow-500/80 tracking-widest mb-4 uppercase">Skills / Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tech.map((t, i) => (
                          <span key={i} className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-mono">{t}</span>
                        ))}
                      </div>
                    </section>
                  </div>

                  {selectedItem.type === 'project' && (
                    <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                        <a href={selectedItem.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 rounded-2xl text-xs font-mono"><Github size={16} /> Code</a>
                        {selectedItem.link !== "f" && (
                            <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 bg-yellow-500 text-black rounded-2xl font-bold text-xs"><ExternalLink size={16} /> Live</a>
                        )}
                    </div>
                  )}
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