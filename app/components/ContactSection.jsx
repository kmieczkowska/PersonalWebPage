import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  // Konfiguracja social mediów
  const socials = [
    { 
      Icon: Mail, 
      href: "mailto:klaudia.mieczkowska01@gmail.com", 
      label: "Gmail" 
    },
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/klaudia-mieczkowska-b6a1862a7/", 
      label: "LinkedIn" 
    },
    { 
      Icon: Github, 
      href: "https://github.com/kmieczkowska", 
      label: "GitHub" 
    }
  ];

  return (
    <section className="w-full py-20 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* NAGŁÓWEK */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-mono font-bold tracking-tighter">
            Get In Touch<span className="text-[#FFD700]">();</span>
          </h2>
          <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#FFD700] to-transparent opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEWA KOLUMNA - INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Let's talk about your project</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                I'm currently available for freelance work and full-time positions. 
                If you have any questions, just send me a message.
              </p>
            </div>

            <div className="space-y-4">
              {/* TELEFON */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#121212] border border-white/5 rounded-lg group-hover:border-[#FFD700]/50 transition-colors">
                  <Phone className="text-[#FFD700] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Call Me</p>
                  <a href="tel:+48123456789" className="text-gray-200 hover:text-[#FFD700] transition-colors">
                    +48 574 163 987
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#121212] border border-white/5 rounded-lg group-hover:border-[#FFD700]/50 transition-colors">
                  <Mail className="text-[#FFD700] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Me</p>
                  <a href="mailto:klaudia.mieczkowska01@gmail.com" className="text-gray-200 hover:text-[#FFD700] transition-colors">
                    klaudia.mieczkowska01@gmail.com
                  </a>
                </div>
              </div>

              {/* LOKALIZACJA */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#121212] border border-white/5 rounded-lg group-hover:border-[#FFD700]/50 transition-colors">
                  <MapPin className="text-[#FFD700] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-gray-200">Białystok, Poland</p>
                </div>
              </div>
            </div>

            {/* IKONY SOCIAL MEDIA */}
            <div className="flex gap-4 pt-4">
              {socials.map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={label === "Gmail" ? "_self" : "_blank"} 
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-[#121212] border border-white/5 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* PRAWA KOLUMNA - FORMULARZ */}
          <div className="relative">
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

              <button 
                type="submit"
                className="w-full bg-[#FFD700] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ffdf33] active:scale-[0.98] transition-all group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;