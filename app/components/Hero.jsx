import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between text-white px-4 container mx-auto">
      Tekst
      <div className="max-w-xl space-y-4">
        <p className="text-sm text-gray-400">Hello World, I’m</p>
        <h1 className="text-5xl text-black font-bold">Klaudia </h1>
        <h2 className="text-2xl text-yellow-400">Full-stack Engineer</h2>
        <p className="text-sm text-gray-400">Welcome to my personal website.</p>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div className="w-72 h-72 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg">
          <Image
            src={"/kok.jpg"}
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