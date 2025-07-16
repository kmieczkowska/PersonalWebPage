'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const words = ['Full-stack Engineer', 'Coding Instructor']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150) // ms per letter

  useEffect(() => {
    let timer
    if (!isDeleting && charIndex <= words[wordIndex].length) {
      // Pisanie literek
      setText(words[wordIndex].substring(0, charIndex))
      timer = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed)
    } else if (isDeleting && charIndex >= 0) {
      // Usuwanie literek
      setText(words[wordIndex].substring(0, charIndex))
      timer = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2)
    } else if (!isDeleting && charIndex > words[wordIndex].length) {
      // Przerwa po napisaniu całego słowa, potem zaczynamy usuwać
      timer = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && charIndex < 0) {
      // Przerwa po usunięciu, zmiana słowa i pisanie od nowa
      setIsDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section id="main" className="scroll-mt-32 bg-[#0C0C0C] min-h-screen flex items-center justify-center  text-white px-4 mx-auto pb-80">
      <div className="max-w-xl space-y-4 mr-20">
        <p className="text-sm text-yellow-400">Hello World, I’m</p>
        <h1 className="text-4xl text-white font-bold">Klaudia Mieczkowska </h1>
        <h2 className="text-2xl text-yellow-400 font-mono">
          {text}
          <span className="border-r-2 border-yellow-400 animate-blink ml-1" />
        </h2>
        <p className="text-sm text-gray-400">Welcome to my personal website.</p>
      </div>

      <div className="relative">
        <div className="w-100 h-100 rounded-full border-4 border-[#EEB76B] overflow-hidden shadow-[0_0_60px_20px_#EEB76B]">
          <Image
            src="/me.png"
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
