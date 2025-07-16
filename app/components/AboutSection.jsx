import React from 'react'
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="bg-[#111f3e] rounded-2xl p-10 flex flex-col gap-10 shadow-md border border-[#EEB76B]">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white title-section whitespace-nowrap font-mono">
            About Me
          </h2>
          <div className="ml-4 h-[2px] flex-grow max-w-[260px] bg-amber-200" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="pl-4 pr-4 md:pl-8 md:pr-0">
            <div className="w-90 h-90 relative">
              <Image
                src="/me.png"
                alt="Avatar"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="text-gray-100 font-mono text-base leading-relaxed max-w-2xl">
            <p>
              Hi everyone! My name is Bagas Rakha Putra. I’m a web developer from Bogor, West Java.
              I have 1 year of experience in back-end web development. I really enjoy what I do right now.
              In my opinion, creating programs is not just a job, but also an art that has aesthetic value.
            </p>
            <p className="mt-4">
              My job is to build your website to be functional and user-friendly yet still attractive.
              In addition, I provide a personal touch to your product to ensure the website catches attention
              and is easy to use. My goal is to convey your message and identity in the most creative way.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <div className="flex items-center mb-4 ">
          <h2 className="text-2xl font-bold text-white title-section whitespace-nowrap font-mono">
            Skills
          </h2>
          <div className="ml-4 self-center h-[2px] flex-grow max-w-[260px] bg-amber-200" />

        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "HTML", "CSS", "PHP", "Javascript",
            "Laravel", "CodeIgniter", "VueJS", "AlpineJS",
          ].map(skill => (
            <div
              key={skill}
              className="bg-[#1e2a47] rounded-lg text-center py-3 px-2 font-medium text-white shadow hover:bg-[#2a3a5f] transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
