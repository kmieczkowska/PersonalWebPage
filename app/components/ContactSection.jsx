'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Copy, Check } from 'lucide-react';

const ContactSection = () => {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const socials = [
    { 
      Icon: Mail, 
      href: "mailto:klaudia.mieczkowska01@gmail.com", 
      label: "Gmail" 
    },
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/klaudia-mieczkowska01/", 
      label: "LinkedIn" 
    },
    { 
      Icon: Github, 
      href: "https://github.com/kmieczkowska", 
      label: "GitHub" 
    }
  ];


  // icon animations -> one after other
  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full py-20 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* animation from the top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-12"
        >
          <h2 className="text-3xl font-mono font-bold tracking-tighter">
            Get In Touch<span className="text-[#FFD700]">();</span>
          </h2>
          <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#FFD700] to-transparent opacity-30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* animation from the left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Let's talk about your project</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                I'm currently available for freelance work and full-time positions. 
                If you have any questions, just send me a message.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { Icon: Phone, label: "Call Me", val: "+48 574 163 987", href: "tel:+48574163987" },
                { Icon: Mail, label: "Email Me", val: "klaudia.mieczkowska01@gmail.com", href: "mailto:klaudia.mieczkowska01@gmail.com" },
                { Icon: MapPin, label: "Location", val: "Białystok, Poland", workMode: "Office / Remote / Hybrid (Warszawa)", href: null },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 group relative"
                >
                  {/* Main icon */}
                  <div className="p-3 bg-[#121212] border border-white/5 rounded-lg group-hover:border-[#FFD700]/50 transition-colors">
                    <item.Icon className="text-[#FFD700] w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                    <div className="flex flex-col"> 
                      <div className="flex items-center gap-2">
                        {item.href ? (
                          <a href={item.href} className="text-gray-200 hover:text-[#FFD700] transition-colors font-medium">
                            {item.val}
                          </a>
                        ) : (
                          <p className="text-gray-200 font-medium">{item.val}</p>
                        )}

                        {item.label !== "Location" && (
                          <button
                            onClick={() => handleCopy(item.val)}
                            className="p-1.5 rounded-md hover:bg-white/10 text-gray-500 hover:text-[#FFD700] transition-all relative"
                          >
                            {copiedText === item.val ? (
                              <Check size={14} className="text-green-500" />
                            ) : (
                              <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </button>
                        )}
                      </div>
                      {item.workMode && (
                        <p className="text-[11px] text-[#FFD700]/70 font-mono mt-0.5">
                          {item.workMode}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* icons animation */}
            <div className="flex gap-4 pt-4">
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a 
                  key={i} 
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={href} 
                  target={label === "Gmail" ? "_self" : "_blank"} 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] border border-white/5 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-lg"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* animation from the right */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* background setup */}
            <div className="absolute -inset-4 bg-[#FFD700]/5 rounded-3xl blur-2xl" />
            
            <form className="relative bg-[#121212] border border-white/10 p-8 rounded-2xl shadow-2xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-mono">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FFD700]/50 transition-colors text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-mono">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FFD700]/50 transition-colors text-sm"
                    placeholder="yourEmail@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-mono">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FFD700]/50 transition-colors text-sm resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#FFD700] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ffdf33] transition-all group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;