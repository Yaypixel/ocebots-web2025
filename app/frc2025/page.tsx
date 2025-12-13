"use client";

import NavMenu from "@/components/ui/complete-menu";
import FRC2025Model from "@/components/ui/robot-3d";
import ScrollReveal from "@/components/ui/reveal-on-scroll";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";

export default function FRC2025Page() {
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
                  Stuart
                </h1>
                <p className="outfit-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                  Reefscape - FRC 2025
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FRC2025Model
              robotName="STUART"
              height="100in"
              weight="100lb"
              swerve="Max Swerve, NEO Drive & 550 Turning"
              scoring="L2, L3, & L4 scoring"
              endgame="Deep Climb (sometimes)"
            ></FRC2025Model>
          </ScrollReveal>
          <div className="h-12 md:h-20"></div>
        </div>
      </div>
    </>
  );
}
