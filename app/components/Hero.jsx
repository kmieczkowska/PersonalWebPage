'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, ArrowUp } from 'lucide-react'

const Hero = () => {
  const words = ['Manual Tester', 'Programming Trainer']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timer
    if (!isDeleting && charIndex <= words[wordIndex].length) {
      setText(words[wordIndex].substring(0, charIndex))
      timer = setTimeout(() => setCharIndex(charIndex + 1), 150)
    } else if (isDeleting && charIndex >= 0) {
      setText(words[wordIndex].substring(0, charIndex))
      timer = setTimeout(() => setCharIndex(charIndex - 1), 75)
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

      {/* info */}
      <div className="max-w-xl space-y-6 flex flex-col justify-center text-center md:text-left z-10">
        <div className="space-y-2">
          <p className="text-base text-yellow-400 font-mono tracking-widest">Hello World, I’m</p>
          <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tight">
            Klaudia <span className="text-white">Mieczkowska</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-yellow-400 font-mono h-[40px] flex items-center justify-center md:justify-start">
            {text}
            <span className="border-r-2 border-yellow-400 animate-pulse ml-1" />
          </h2>
        </div>
      </div>

      {/* avatar */}
      <div className="relative shrink-0">
        <div className="w-80 h-80 md:w-100 md:h-100 rounded-full border-4 border-yellow-400 overflow-hidden shadow-[0_0_60px_20px_rgba(250,204,21,0.5)]">
          <Image
            src="/raven.jpg"
            alt="Avatar"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-yellow-400/10 blur-[120px] rounded-full"></div>
      </div>

    </section>
  )
}

export default Hero