import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Personal Website",
      description: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
      tech: "VueJS 3, Tailwind",
      image: "/me.png",
      link: "#",
      github: "#"
    },
    {
      title: "Sahabat Muslim",
      description: "A website that has a responsive display to make it easier for Muslims to read the Quran from anywhere.",
      tech: "VueJS 3, Tailwind",
      image: "/me.png",
      link: "#",
      github: "#"
    },
    {
      title: "SISTEKDES",
      description: "Sistem Informasi dan Teknologi Desa, a web application to assist village government work in administration, population data, etc.",
      tech: "Laravel 9, Bootstrap",
      image: "/me.png",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="w-full py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* NAGŁÓWEK SEKCI */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Past Project Experience</h2>
          <p className="text-gray-400 font-mono text-sm">
            Explore the projects I've worked on so far
          </p>
          <div className="mt-4 flex justify-center">
             <div className="h-1 w-12 bg-yellow-500 rounded-full" />
          </div>
        </div>

        {/* SIATKA PROJEKTÓW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 group shadow-xl"
            >
              {/* Obrazek projektu */}
              <div className="relative h-48 w-full bg-[#1a1a1a] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Treść karty */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Footer karty - Technologie i Linki */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-gray-500 italic">
                    {project.tech}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-yellow-500 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;