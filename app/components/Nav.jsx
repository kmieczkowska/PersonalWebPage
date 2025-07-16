'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export const Nav = () => {
  // const navItems = ['Main', 'Info', 'Portfolio', 'Contact']
  const navItems = [
  { name: 'Main', href: '/' },
  { name: 'Info', href: '/info' },
  { name: 'Portfolio', href: '/Portfolio' },
  { name: 'Contact', href: '/Contact' }
]
  const [active, setActive] = useState('main')

  return (
    <nav className="space-x-8 text-white text-lg font-mono ml-30">
      {navItems.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="relative transition duration-200
            after:content-[''] after:absolute after:-bottom-1 after:left-0
            after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400
            hover:after:transition-all hover:after:duration-300
          "
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}