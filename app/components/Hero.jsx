'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownLeft } from 'lucide-react'

const Hero = () => {
  const words = ['Manual Tester', 'Programming Trainer']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const contactFullText = "Contact me here();"
  const [contactText, setContactText] = useState('')
  const [contactCharIndex, setContactCharIndex] = useState(0)

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

  useEffect(() => {
    if (contactCharIndex <= contactFullText.length) {
      const timer = setTimeout(() => {
        setContactText(contactFullText.substring(0, contactCharIndex))
        setContactCharIndex(contactCharIndex + 1)
      }, 100) 
      return () => clearTimeout(timer)
    }
  }, [contactCharIndex])

  return (
    <section id="main" className="scroll-mt-32 bg-[#0C0C0C] min-h-screen flex items-center justify-center text-white px-4 mx-auto pb-40">
      <div className="max-w-xl space-y-4 mr-20 relative">
        <p className="text-sm text-yellow-400">Hello World, I’m</p>
        <h1 className="text-4xl text-white font-bold">Klaudia Mieczkowska </h1>
        <h2 className="text-2xl text-yellow-400 font-mono h-[32px]">
          {text}
          <span className="border-r-2 border-yellow-400 animate-blink ml-1" />
        </h2>
        <p className="text-sm text-gray-400">Welcome to my personal website.</p>

        <Link 
          href="/contact" 
          className="absolute -bottom-32 left-0 flex flex-col items-start group cursor-pointer transition-all"
        >
          <div className="flex items-center gap-2">
            <ArrowDownLeft className={`text-yellow-400 w-8 h-8 transition-opacity duration-500 ${contactText.length > 0 ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
            <span className="text-yellow-400 font-mono text-lg tracking-tighter">
              {contactText}
            </span>
          </div>
          
          <div className="w-24 group-hover:w-32 h-[1px] bg-gradient-to-r from-yellow-400 to-transparent mt-1 transition-all duration-500" />
        </Link>
      </div>

      <div className="relative">
        <div className="w-100 h-100 rounded-full border-4 border-[#EEB76B] overflow-hidden shadow-[0_0_60px_20px_#EEB76B]">
          <Image
            src="/raven.jpg"
            alt="Avatar"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero