'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion'; // animation
import { 
  FileCode, 
  Terminal, 
  Layers, 
  Database, 
  Globe, 
  Cpu, 
  Github, 
  GitBranch,
  Settings,
  ShieldCheck,
  Zap,
  Box,
  BarChart3,
  Smartphone,
  Code2,
  Container,
  Layout,
  Monitor,
  Cloud,
  Laptop,
  PenTool, 
  Workflow,
  Server
} from 'lucide-react';

const AboutSection = () => {
  
  const [activeTab, setActiveTab] = useState('tech');
  
  const levelWeight = {
    "Advanced": 1,
    "Intermediate": 2,
    "Basic": 3
  }

  const techStack = [
    { name: "Python", level: "Intermediate", icon: <FileCode className="text-blue-300" /> },
    { name: "Java", level: "Advanced", icon: <Code2 className="text-red-400" /> },
    { name: "C#", level: "Advanced", icon: <Terminal className="text-purple-500" /> },
    { name: "C++", level: "Basic", icon: <Cpu className="text-blue-600" /> },
    { name: "Javascript", level: "Intermediate", icon: <FileCode className="text-yellow-400" /> },
    { name: "React", level: "Advanced", icon: <Zap className="text-cyan-400" /> },
    { name: "Android", level: "Advanced", icon: <Smartphone className="text-green-400" /> },
    { name: "SQL", level: "Intermediate", icon: <Database className="text-blue-400" /> },
    { name: "Django", level: "Basic", icon: <Server className="text-green-600" /> },
  ];

  const tools = [
    { name: "Jira", level: "Intermediate", icon: <Settings className="text-blue-500" /> },
    { name: "Confluence", level: "Intermediate", icon: <Layers className="text-blue-400" /> },
    { name: "TestLink", level: "Advanced", icon: <ShieldCheck className="text-green-500" /> },
    { name: "XRay", level: "Advanced", icon: <Zap className="text-orange-400" /> },
    { name: "BrowserStack", level: "Advanced", icon: <Globe className="text-indigo-400" /> },
    { name: "Postman", level: "Advanced", icon: <Zap className="text-orange-500" /> },
    { name: "REST API", level: "Intermediate", icon: <Globe className=" text-blue-400" /> },
    { name: "JMeter", level: "Intermediate", icon: <BarChart3 className="text-red-400" /> },
    { name: "Cypress", level: "Intermediate", icon: <ShieldCheck className="text-emerald-500" /> },
    { name: "Jenkins", level: "Basic", icon: <Settings className="text-red-600" /> },
    { name: "Docker", level: "Basic", icon: <Container className="text-blue-400" /> },
    { name: "Git", level: "Advanced", icon: <GitBranch className="text-orange-500" /> },
    { name: "GitHub", level: "Advanced", icon: <Github className="text-white" /> },
    { name: "Grafana", level: "Basic", icon: <BarChart3 className="text-yellow-500" /> },
    { name: "UML", level: "Intermediate", icon: <Workflow className="text-emerald-400" /> },
  ];

  const software = [
    { name: "VS Code", level: "Advanced", icon: <Layout className="text-blue-400" /> },
    { name: "Visual Studio", level: "Advanced", icon: <Layout className="text-purple-500" /> },
    { name: "Android Studio", level: "Advanced", icon: <Smartphone className="text-green-500" /> },
    { name: "IntelliJ", level: "Advanced", icon: <Code2 className="text-pink-500" /> },
    { name: "PyCharm", level: "Advanced", icon: <Code2 className="" /> },
    { name: "pgAdmin", level: "Basic", icon: <Database className="text-blue-300" /> },
    { name: "DBeaver", level: "Basic", icon: <Database className="text-orange-300" /> },
    { name: "SQLDeveloper", level: "Intermediate", icon: <Database className="text-red-400" /> },
    { name: "VMware", level: "Advanced", icon: <Box className="text-gray-400" /> },
    { name: "Azure", level: "Basic", icon: <Cloud className="text-blue-500" /> },
    { name: "Windows", level: "Advanced", icon: <Monitor className="text-blue-400" /> },
    { name: "Linux", level: "Advanced", icon: <Laptop className="text-yellow-600" /> },
    { name: "Figma", level: "Intermediate", icon: <PenTool className="text-pink-400" /> },
  ];

  const tabs = {
    tech: techStack,
    tools: tools,
    software: software
  };

  const currentSkills = [...tabs[activeTab]].sort((a, b) => {
    if (levelWeight[a.level] !== levelWeight[b.level]) {
      return levelWeight[a.level] - levelWeight[b.level];
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="w-full overflow-hidden px-1 py-4">
      {/* about me animation - from the right */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#121212] rounded-2xl p-10 flex flex-col gap-10 border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)]"
      >
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white title-section whitespace-nowrap font-mono tracking-tight">
            About Me
          </h2>
          <div className="ml-6 h-[2px] flex-grow max-w-[260px] bg-gradient-to-r from-[#FFD700] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="shrink-0">
            <div className="w-44 h-44 md:w-60 md:h-60 relative border-2 border-[#FFD700]/30 rounded-full overflow-hidden bg-[#1a1a1a] shadow-2xl">
          <Image
          src="/ja.png"
          alt="Avatar"
          width={1284}
          height={2282}
          className="object-cover w-full h-full object-[center_25%]"
          priority
        />
            </div>
          </div>

<div className="text-white text-l leading-relaxed max-w-4xl">
  <p>
    Hi! I'm <span className="text-[#FFD700] font-bold">Klaudia Mieczkowska</span>, 
    a <span className="text-[#FFD700] font-bold">Full-stack Developer</span> transitioning into 
    <span className="text-[#FFD700] font-bold"> Quality Assurance </span> with a 
    <span className="font-bold underline decoration-[#FFD700]/40"> Master of Engineering in Computer Science</span>.
  </p>
  
<p className="mt-6">
  Graduating from <span className="font-bold">Bialystok University of Technology</span> and spending 
  <span className="font-bold"> a year as a Full-stack Developer</span> has shaped my 
  <span className="text-[#FFD700] font-semibold"> 'developer's mindset.'</span> I don't just execute test cases -
  <br />I approach Quality Assurance with an analytical, engineering-driven perspective.
</p>
  
  <p className="mt-6">
    Having built applications from scratch, I can <span className="font-bold">pinpoint exactly where logic might fail and why</span>. 
    My background allows me to bridge the technical gap between testing and development, translating complex bugs into actionable insights for the dev team.
  </p>

  <p className="mt-6 border-l-2 border-[#FFD700] pl-4 italic text-gray-400">
              "My mission is simple: to help build digital products that are as <span className="text-[#FFD700]">reliable</span> as they are beautiful."
    </p>
</div>
        </div>
      </motion.div>

      {/* skills animation - from down */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white title-section whitespace-nowrap font-mono">
              Skills
            </h2>
            <div className="ml-4 h-[1px] w-12 bg-[#FFD700]/40" />
          </div>

          <div className="flex bg-[#121212] p-1 rounded-xl border border-white/5 self-start overflow-x-auto max-w-full">
            {['tech', 'tools', 'software'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab 
                  ? 'bg-[#FFD700] text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'tech' ? 'Tech Stack' : tab === 'tools' ? 'Tools' : 'Software'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#121212] border border-white/5 rounded-xl flex items-center gap-4 p-4 hover:border-[#FFD700]/60 hover:bg-[#1a1a1a] transition-all duration-300 group relative overflow-hidden h-20"
            >
              <div className="bg-[#0a0a0a] p-2.5 rounded-lg group-hover:shadow-[0_0_10px_rgba(255,215,0,0.2)] transition-all shrink-0">
                {skill.icon}
              </div>
              
              <div className="flex flex-col justify-center overflow-hidden">
                <span className="text-gray-300 font-mono text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                
                <span className="text-[#FFD700] font-mono text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;