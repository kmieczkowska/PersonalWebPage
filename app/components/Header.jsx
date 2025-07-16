import React from 'react'
import Link from 'next/link'
import { Nav } from './Nav'

const Header = () => {
  return (
      <div className="bg-[#0C0C0C] text-white text-sm py-6">
        <div className="container  flex items-center justify-around">
          <Link href="#main">
            <h1 className="text-3xl font-mono">
              KMieczkowska();
            </h1>
          </Link>
          <Nav/>
        </div>
      </div>
  )
}

export default Header