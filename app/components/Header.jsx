import React from 'react'
import Link from 'next/link'
import { Nav } from './Nav'

const Header = () => {
  return (
      <div className="bg-blue-300 text-white text-sm py-6">
        <div className="container mx-auto flex items-center justify-start">
          <Link href="/">
            <h1 className="text-4xl">
              Klaudia
            </h1>
          </Link>
          <Nav/>
        </div>
      </div>
  )
}

export default Header