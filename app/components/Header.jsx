import React from 'react'
import Link from 'next/link'
import { Nav } from './Nav'
import { Github } from 'lucide-react'


const Header = () => {
  return (
    <div className="bg-[#0C0C0C] text-white text-sm py-6">
      <div className="w-full max-w-5xl mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-mono">
            KMieczkowska();
          </h1>
        </Link>
        <Nav />
        <a href='https://github.com/kmieczkowska'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-transform hover:scale-110'
        >
        <Github className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition-colors" />
        </a>
      </div>
    </div>
  )
}

export default Header
