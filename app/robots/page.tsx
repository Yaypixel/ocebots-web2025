"use client"

import NavMenu from "@/components/ui/complete-menu";
import ScrollReveal from "@/components/ui/reveal-on-scroll";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";

export default function RobotsPage() {
  return (
    <>
      <NavMenu />
      <div className="relative min-h-screen w-full bg-blue-300 overflow-x-hidden">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#63b3ed"
          maxOpacity={0.4}
          flickerChance={0.1}
        />

        <div className="relative z-10">
          <ScrollReveal>
            <div className="container mx-auto px-4 py-12 md:py-20">
              <div className="text-center">
                <h1 className="outfit-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
                  Our Robots
                </h1>
                <p className="outfit-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                  Years of Innovation
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="container mx-auto px-4 pb-12">
            <ScrollReveal>
              <div className="bg-white/95 backdrop-blur rounded-lg p-6 md:p-10 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-6">
                  Robot Gallery
                </h2>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                  Content coming soon...
                </p>
                <p className="text-lg text-gray-600">
                  This page is under construction. Check back soon for our robot showcase!
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="h-12 md:h-20"></div>
        </div>
      </div>
    </>
  );
}