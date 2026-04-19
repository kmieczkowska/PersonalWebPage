'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Importujemy hook do sprawdzania ścieżki

export const Nav = () => {
  const pathname = usePathname() // Pobieramy aktualny adres URL

  const navItems = [
    { name: 'Main', href: '/' },
    { name: 'Info', href: '/info' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="space-x-8 text-white text-lg font-mono ml-30">
      {navItems.map(({ name, href }) => {
        const isActive = pathname === href
        return (
          <Link
            key={name}
            href={href}
            className={`relative transition duration-200 
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300
              ${isActive ? 'after:w-full text-yellow-400' : 'after:w-0 hover:after:w-full'}
            `}
          >
            {name}
          </Link>
        )
      })}
    </nav>
    
  )
}