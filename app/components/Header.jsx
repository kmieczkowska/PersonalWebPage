import React from 'react'
import Link from 'next/link'
import { Nav } from './Nav'

const Header = () => {
  return (
    <div className="bg-[#0C0C0C] text-white text-sm py-6">
      <div className="w-full max-w-5xl mx-auto px-4 flex items-center justify-between">
        <Link href="#main">
          <h1 className="text-3xl font-mono">
            KMieczkowska();
          </h1>
        </Link>
        <Nav />
      </div>
    </div>
  )
}

export default Header
