"use client"

import React, { ReactNode, useState } from "react";
import ParallaxHover from "./parallax-hover";
import { FlickeringGrid } from "./shadcn-io/flickering-grid";

interface Props {
    children: ReactNode
    header?: string
    body?: string
    href?: string
    className?: string
}

export default function InfoBlock({
    children,
    href = "/",
    header = "Header Goes Here",
    body = "Body paragraph Body paragraph Body paragraph Body paragraph Body paragraph Body paragraph Body paragraph Body paragraph",
    className = ""
}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <a
      href={href}
      className={`block w-full max-w-md mx-auto ${className}`}
      aria-label={`Navigate to ${header}`}
    >
      <div
        className="relative w-full h-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ParallaxHover
          strength={0}
          zoom={isHovered ? 1.08 : 1}
          className="relative rounded-lg overflow-hidden"
        >
          <div className={`transition-all duration-300 ${isHovered ? "brightness-75 scale-105" : "brightness-100 scale-100"}`}>
            {children}
          </div>
          <div className={`absolute inset-0 ${isHovered ? 'bg-blue-500/50' : 'bg-blue-400/50'} transition-all duration-200`}></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className={`bitcount-prop-single-ocebots text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center ${isHovered ? "scale-110" : "scale-100"} opacity-100 transition-all duration-200`}>
              {header}
            </h2>
          </div>
        </ParallaxHover>
      </div>
    </a>
    )
}