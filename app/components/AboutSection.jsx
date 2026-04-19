import React from 'react';
import Image from "next/image";
import { 
  FileCode, 
  Terminal, 
  Layers, 
  Database, 
  Globe, 
  Cpu, 
  Github, 
  GitBranch 
} from 'lucide-react';

const AboutSection = () => {
  const techStack = [
    { name: "Javascript", icon: <FileCode className="text-yellow-400" /> },
    { name: "PHP", icon: <Layers className="text-indigo-400" /> },
    { name: "Laravel", icon: <Terminal className="text-red-500" /> },
    { name: "VueJS", icon: <Globe className="text-emerald-400" /> },
    { name: "MySQL", icon: <Database className="text-blue-400" /> },
    { name: "GitHub", icon: <Github className="text-white" /> },
    { name: "Git", icon: <GitBranch className="text-orange-500" /> },
    { name: "AlpineJS", icon: <Cpu className="text-cyan-400" /> },
  ];

  return (
    <section className="w-full">
      <div className="bg-[#121212] rounded-2xl p-10 flex flex-col gap-10 border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)]">
        {/* Nagłówek - Złota linia o większym nasyceniu */}
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white title-section whitespace-nowrap font-mono tracking-tight">
            About Me
          </h2>
          <div className="ml-6 h-[2px] flex-grow max-w-[260px] bg-gradient-to-r from-[#FFD700] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Avatar z cienką złotą obwódką */}
          <div className="shrink-0">
            <div className="w-44 h-44 md:w-60 md:h-60 relative border-2 border-[#FFD700]/30 rounded-full overflow-hidden bg-[#1a1a1a] shadow-2xl">
              <Image
                src="/raven.jpg"
                alt="Avatar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-gray-300 font-mono text-sm md:text-base leading-relaxed max-w-2xl">
            <p className="mb-4">
              Hi everyone! My name is <span className="text-[#FFD700] font-bold">Klaudia Mieczkowska</span>. 
              I’m a manual tester from Poland, Białystok.
            </p>
            <p>
              I have 1 year of experience as a full-stack developer. I really enjoy what I do right now. 
              In my opinion, creating programs is not just a job, but also an art that ma aesthetic value.
            </p>
            <p className="mt-4 border-l-2 border-[#FFD700] pl-4 italic text-gray-400">
              "My goal is to build your website to be functional and user-friendly yet still attractive."
            </p>
          </div>
        </div>
      </div>

      {/* --- SEKCJA SKILLS --- */}
      <div className="mt-16">
        <div className="flex items-center mb-8">
          <h2 className="text-xl font-bold text-white title-section whitespace-nowrap font-mono">
            Skills
          </h2>
          <div className="ml-4 h-[1px] flex-grow max-w-[100px] bg-[#FFD700]/40" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#121212] border border-white/5 rounded-xl flex items-center gap-4 p-4 hover:border-[#FFD700]/60 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="bg-[#0a0a0a] p-2.5 rounded-lg group-hover:shadow-[0_0_10px_rgba(255,215,0,0.2)] transition-all">
                {skill.icon}
              </div>
              <span className="text-gray-300 font-mono text-sm font-medium group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;