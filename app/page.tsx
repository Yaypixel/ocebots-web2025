"use client"

import NavMenu from "@/components/ui/complete-menu";
import InfoBlock from "@/components/ui/info-block";
import ParallaxHover from "@/components/ui/parallax-hover";
import ScrollReveal from "@/components/ui/reveal-on-scroll";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";
import { useState } from "react";


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <> 
    <NavMenu />
    <div className="relative min-h-screen w-full bg-blue-300 overflow-hidden">
      <FlickeringGrid className="z-10 absolute inset-0 size-full"
      squareSize={4}
      gridGap={6}
      color="#63b3ed"
      maxOpacity={0.4}
      flickerChance={0.1} 
      />
    
     <ScrollReveal>
        <div className="hero container relative w-500 mx-auto pt-10 z-10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <ParallaxHover strength={0} zoom={isHovered ? 1.12 : 1} className="relative rounded-lg">
            <FlickeringGrid className={`z-10 absolute inset-0 size-full ${isHovered ? 'opacity-0' : ''}`}
            squareSize={7}
            gridGap={10}
            color="#3182ce"
            maxOpacity={0.4}
            flickerChance={1}
            />
            <img src="/BBOTS2025.jpg" className="w-full h-full object-cover"></img>
            <div className={`absolute inset-0  ${isHovered ? 'bg-transparent' : 'bg-blue-400/50'} transition-all duration-200`}></div>
            
            </ParallaxHover>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className={`bitcount-prop-single-ocebots text-8xl text-white ${isHovered ? 'scale-125' : ''}  transition-all duration-200`}>OCEBOTS</h2>
            </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex gap-10 justify-center items-center">
          <InfoBlock className="mx-auto" header="ABOUT US" href="/about">
            <img src="/charlie.png" className="w-150 h-100 object-cover"></img>
          </InfoBlock>
          <InfoBlock className="mx-auto" header="ROBOTS" href="/robots">
            <img src="/bbot25.png" className="w-150 h-100 object-cover"></img>
          </InfoBlock>
        </div>
      </ScrollReveal>
      </div>
    </>
  );
}