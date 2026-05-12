'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion' // Importujemy motion
import { FileText, ArrowUp } from 'lucide-react'

const Hero = () => {
  const words = ['Software tester', 'Programming Trainer', 'Full-stack Developer']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timer
    if (!isDeleting && charIndex <= words[wordIndex].length) {
      setText(words[wordIndex].substring(0, charIndex))
      timer = setTimeout(() => setCharIndex(charIndex + 1), 80)
    } else if (isDeleting && charIndex >= 0) {
      setText(words[wordIndex].substring(0, charIndex))
      timer = setTimeout(() => setCharIndex(charIndex - 1), 40)
    } else if (!isDeleting && charIndex > words[wordIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
      setCharIndex(0)
    }
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center bg-[#0C0C0C] text-white px-6 gap-12 md:gap-24 overflow-hidden">
      
      {/* Kontener info - wjazd z lewej strony */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl space-y-6 flex flex-col justify-center text-center md:text-left z-10"
      >
        <div className="space-y-2">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base text-yellow-400 font-mono tracking-widest"
          >
            Hello World, I’m
          </motion.p>
          
          <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tight">
            Klaudia <span className="text-white">Mieczkowska</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-yellow-400 font-mono h-[40px] flex items-center justify-center md:justify-start">
            {text}
            <span className="border-r-2 border-yellow-400 animate-pulse ml-1" />
          </h2>
        </div>
      </motion.div>

      {/* Kontener avatar - wjazd z prawej + efekt skali */}
      <motion.div 
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative shrink-0"
      >
        {/* Blask w tle */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-yellow-400/20 blur-[120px] rounded-full"
        />

        {/* Okrągły kontener */}
      <div className="w-80 h-80 md:w-100 md:h-100 rounded-full border-4 border-yellow-400 overflow-hidden shadow-[0_0_60px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_80px_30px_rgba(250,204,21,0.5)] transition-shadow duration-500 bg-[#0C0C0C]">
        <Image
          src="/ja.jpg"
          alt="Avatar"
          width={1284}
          height={2282}
          className="object-cover w-full h-full object-[center_25%]" // Kluczowa zmiana tutaj
          priority
        />
      </div>
      </motion.div>

    </section>
  )
}

export default Hero