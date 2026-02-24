import React from 'react'
import Homelayout from '@/layouts/home/Homelayout'

function menu() {
  return (
    <Homelayout>
        <section className="relative h-screen w-full overflow-hidden text-white">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="anim-duration-1000 fixed top-0 z-0 h-full w-full animate-in overflow-hidden object-cover opacity-30 transition-all duration-1000 fade-in"
            >
                <source src="/images/Burger.mp4" type="video/mp4" />
            </video>
            <div className="fixed top-0 z-0 h-full w-full bg-linear-to-t from-[#1b1b18] via-black/40 to-black/80" />
            
            <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
                <h1 className="text-5xl font-bold tracking-tighter text-[#EFD9C3] sm:text-7xl">OUR MENU</h1>
                <p className="mt-4 text-xl text-[#A48E75]">Coming Soon</p>
            </div>
        </section>
    </Homelayout>
  )
}

export default menu