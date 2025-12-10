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
      <div className="relative min-h-screen w-full bg-blue-300 overflow-x-hidden">
        <FlickeringGrid className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#63b3ed"
          maxOpacity={0.4}
          flickerChance={0.1}
        />

        <ScrollReveal>
          <div className="hero container relative max-w-7xl mx-auto pt-6 md:pt-10 px-4 z-10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ParallaxHover strength={0} zoom={isHovered ? 1.12 : 1} className="relative rounded-lg overflow-hidden">
              <img src="/BBOTS2025.jpg" alt="Ocebots Team" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${isHovered ? 'bg-transparent' : 'bg-blue-400/50'} transition-all duration-200`}></div>
            </ParallaxHover>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h2 className={`bitcount-prop-single-ocebots text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white ${isHovered ? 'scale-110 md:scale-125' : ''} transition-all duration-200 text-center`}>OCEBOTS</h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
              <InfoBlock className="" header="ABOUT US" href="/about">
                <img src="/charlie.png" alt="About Us" className="w-full h-64 md:h-80 object-cover" />
              </InfoBlock>
              <InfoBlock className="" header="ROBOTS" href="/robots">
                <img src="/bbot25.png" alt="Our Robots" className="w-full h-64 md:h-80 object-cover" />
              </InfoBlock>
              <InfoBlock className="md:col-span-2 lg:col-span-1" header="OUTREACH" href="/outreach">
                <img src="/outreach4.png" alt="Outreach Programs" className="w-full h-64 md:h-80 object-cover object-[25%_75%]" />
              </InfoBlock>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="w-full lg:w-[45%] p-6 md:p-8 lg:p-12 bg-blue-400 rounded-lg flex flex-col justify-center">
                <h2 className="bitcount-prop-single-ocebots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6">Inspiring A New Generation Of STEM Leaders</h2>
                <p className="jetbrains-mono-ocebots text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ligula ac nulla aliquam volutpat. Integer eu erat aliquam lacus interdum eleifend in vel ipsum. Sed consequat sollicitudin iaculis. Donec convallis sit amet mauris in cursus. Integer facilisis finibus nisl, molestie mattis nibh vulputate et. In urna augue, viverra a molestie at, porta non diam. Proin vitae blandit tellus, vitae lobortis dui. Nulla quam enim, semper at tincidunt venenatis, volutpat in quam.
                </p>
              </div>
              <div className="w-full lg:w-[55%] h-64 md:h-80 lg:h-auto">
                <ScrollingImages images={scrollImages} />
              </div>
            </div>
            <ScrollingImages images={scrollImages} direction="down"></ScrollingImages>
          </div>
        </ScrollReveal>

        <div className="h-12 md:h-20"></div>
      </div>
    </>
  );
}