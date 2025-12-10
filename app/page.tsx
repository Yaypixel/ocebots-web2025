"use client"

import NavMenu from "@/components/ui/complete-menu";
import InfoBlock from "@/components/ui/info-block";
import ParallaxHover from "@/components/ui/parallax-hover";
import ScrollReveal from "@/components/ui/reveal-on-scroll";
import ScrollingImages from "@/components/ui/scrolling-images";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";
import { useState } from "react";


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollImages = [
    "/scroll-images/robot-work2.jpg",
    "/scroll-images/xavi-cutting.jpg",
    "/scroll-images/eric-explain.jpg",
    "/scroll-images/robot-work.jpg",
    "/scroll-images/intake-testing.jpg",
    "/scroll-images/discussion.jpg",
    "/scroll-images/robot-work3.jpg",
    "/scroll-images/xavi-sam-cart.jpg",
    "/scroll-images/robot-work4.jpg",
    "/scroll-images/bumpers.jpg"
  ]
  return (
    <> 
    <NavMenu />
    <div className="relative min-h-screen w-full bg-blue-300 overflow-hidden">
      <FlickeringGrid className="z-0 absolute inset-0 size-full"
      squareSize={4}
      gridGap={6}
      color="#63b3ed"
      maxOpacity={0.4}
      flickerChance={0.1} 
      />
    
     <ScrollReveal>
        <div className="hero container relative w-500 mx-auto pt-10 z-10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <ParallaxHover strength={0} zoom={isHovered ? 1.12 : 1} className="relative rounded-lg">
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
          <InfoBlock className="mx-auto" header="OUTREACH" href="/outreach">
            <img src="/outreach4.png" className="w-150 h-100 object-[25%_75%]"></img>
          </InfoBlock>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="h-300 z-10 pt-30 pl-30 flex">
          <div className="w-[35%] pl-15 pt-15 pb-15 bg-blue-400 rounded-lg flex flex-col justify-center">
            <h2 className="bitcount-prop-single-ocebots text-7xl text-white">Inspiring A New Generation Of STEM Leaders</h2>
            <p className="jetbrains-mono-ocebots text-3xl w-120 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ligula ac nulla aliquam volutpat. Integer eu erat aliquam lacus interdum eleifend in vel ipsum. Sed consequat sollicitudin iaculis. Donec convallis sit amet mauris in cursus. Integer facilisis finibus nisl, molestie mattis nibh vulputate et. In urna augue, viverra a molestie at, porta non diam. Proin vitae blandit tellus, vitae lobortis dui. Nulla quam enim, semper at tincidunt venenatis, volutpat in quam.</p>
          </div>
          <div className="w-[45%] h-300 pb-15 pl-15">
            <ScrollingImages images={scrollImages}></ScrollingImages>
          </div>
        </div>
      </ScrollReveal>

      <div className="heign">

      </div>
      </div>
    </>
  );
}