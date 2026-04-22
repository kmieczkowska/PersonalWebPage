'use client'
import React from 'react'
import Link from 'next/link'
import { Nav } from './Nav'
import { Github, FileText, ArrowUp } from 'lucide-react'

const Header = () => {
  return (
    <div className="bg-[#0C0C0C] text-white text-sm py-6 relative">
      <div className="w-full max-w-5xl mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-3xl font-mono">
            KMieczkowska();
          </h1>
        </Link>

        {/* NAWIGACJA ŚRODKOWA */}
        <Nav />

        {/* IKONY PO PRAWEJ */}
        <div className="flex items-center gap-8">
          
      <div className="relative flex flex-col items-center z-50">
        <Link 
          href="/cv_tester_16.04.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FileText className="w-7 h-7 cursor-pointer !text-white hover:!text-yellow-400 transition-colors" />
        </Link>

        {/* POWIĘKSZONY WSKAŹNIK (Strzałka i tekst) */}
        <div className="absolute top-9 flex flex-col items-center pointer-events-none z-[60]">
          <ArrowUp className="w-6 h-6 text-yellow-400 animate-bounce" />
          
          {/* WIĘKSZY TEKST - dodano !text-yellow-400 i wyższy z-index */}
          <span className="!text-yellow-400 font-mono text-m uppercase font-bold tracking-tight whitespace-nowrap bg-[#0C0C0C] px-2 py-0.5 rounded-md border border-yellow-400/20 animate-bounce">
            get my cv
          </span>
        </div>
      </div>

          {/* GITHUB */}
          <a href='https://github.com/kmieczkowska'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform hover:scale-110'
          >
            <Github className="w-7 h-7 cursor-pointer hover:text-yellow-500 transition-colors" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Header