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
    <a href={href}>
    <div className={"hero container relative w-max h-max mx-auto pt-10 z-10 overflow-hidden" + className}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        
        <ParallaxHover strength={0} zoom={isHovered ? 1.12 : 1} className="relative rounded-lg">
            <FlickeringGrid className={`z-10 absolute inset-0 size-full ${isHovered ? 'opacity-0' : ''}`}
                squareSize={4}
                gridGap={6}
                color="#3182ce"
                maxOpacity={0.4}
                flickerChance={1}
                />
                <div className={`inset-0 transition-all duration-300 ${isHovered ? "brightness-75 scale-105" : "brightness-100 scale-100"}`}>
                    {children}
                </div>
                <div className={`absolute inset-0  ${isHovered ? 'bg-blue-500/50 -z-50' : 'bg-blue-400/50'} transition-all duration-200`}></div>
                <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? '-z-50' : ""}`}>
                  <h2 className={`bitcount-prop-single-ocebots text-8xl text-white ${isHovered ? "opacity-100 scale-110" : "opacity-60 scale-100"}  transition-all duration-200`}>{header}</h2>
            </div>
        </ParallaxHover>
    </div>
    </a>
    )
}