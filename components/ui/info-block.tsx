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
                <div className={`inset-0 transition-all duration-300 ${isHovered ? "brightness-75 scale-105" : "brightness-100 scale-100"}`}>
                    {children}
                </div>
                <div className={`absolute inset-0  ${isHovered ? 'bg-blue-500/50 -z-50' : 'bg-blue-400/50'} transition-all duration-200`}></div>
                <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? '-z-50' : ""}`}>
                  <h2 className={`bitcount-prop-single-ocebots text-8xl text-white ${isHovered ? "scale-110" : "scale-100"}  opacity-100 transition-all duration-200`}>{header}</h2>
                </div>
        </ParallaxHover>
    </div>
    </a>
    )
}