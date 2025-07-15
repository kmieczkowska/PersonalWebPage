import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  const navItems = ['Main', 'Info', 'Portfolio', 'Contact']

  return (
    <nav className="space-x-8 text-white text-sm font-medium ml-8">
      {navItems.map((item) => (
        <Link key={item} href={`#${item.toLowerCase()}`} className="">
          {item}
        </Link>
      ))}
    </nav>
  )
}
