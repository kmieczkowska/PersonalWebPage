'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// ZMIENIONA IKONA TUTAJ
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const words = ['Manual Tester', 'Programming Trainer']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  // TEKST CV
  const contactFullText = "Click me to get my CV();"
  const [contactText, setContactText] = useState('')
  const [contactCharIndex, setContactCharIndex] = useState(0)

  // Efekt pisania dla ról (bez zmian)
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

  // Efekt pisania dla tekstu CV (bez zmian)
  useEffect(() => {
    if (contactCharIndex <= contactFullText.length) {
      const timer = setTimeout(() => {
        setContactText(contactFullText.substring(0, contactCharIndex))
        setContactCharIndex(contactCharIndex + 1)
      }, 100) 
      return () => clearTimeout(timer)
    }
  }, [contactCharIndex, contactFullText])

  return (

<section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center bg-[#0C0C0C] text-white px-4 gap-20 overflow-hidden">
  {/* TEKST */}
  <div className="max-w-xl space-y-4 flex flex-col justify-center text-center md:text-left">
    <p className="text-base text-yellow-400">Hello World, I’m</p>
    <h1 className="text-4xl text-white font-bold">Klaudia Mieczkowska</h1>
    <h2 className="text-2xl text-yellow-400 font-mono h-[32px]">
      {text}
      <span className="border-r-2 border-yellow-400 animate-blink ml-1" />
    </h2>
    {/* <p className="text-sm text-gray-400">Welcome to my personal website.</p> */}
  </div>

  {/* AVATAR */}
  <div className="relative shrink-0">
    <div className="w-100 h-100 rounded-full border-4 border-[#EEB76B] overflow-hidden shadow-[0_0_60px_20px_#EEB76B]">
      <Image
        src="/raven.jpg"
        alt="Avatar"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>

{/* OVERLAY CTA */}
  <Link
    href="/cv.pdf"
    target="_blank"
    className="absolute inset-0 flex flex-col items-center justify-center text-center cursor-pointer"
  >
    <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 animate-pulse group-hover:scale-110 transition">
      
      <span className="text-yellow-400 font-mono text-lg">
        get my cv
      </span>

      <ArrowRight className="text-yellow-400 w-5 h-5" />
    </div>
  </Link>


    <Link
      href="/cv.pdf"
      target="_blank"
      className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-all whitespace-nowrap"
    >
    </Link>
  </div>

</section>
  )
}

export default Hero