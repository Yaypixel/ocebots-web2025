"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react";
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
    const containerRef = useRef<HTMLAnchorElement | null>(null);
    const [scale, setScale] = useState(1);
    const BASE_WIDTH = 600;
    const MIN_SCALE = 0.7;
    const MAX_SCALE = 1.5;

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => {
            const rect = el.getBoundingClientRect();
            const width = rect.width || BASE_WIDTH;
            const computed = width / BASE_WIDTH;
            const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, computed));
            setScale(clamped);
        };

        update();

        const ro = new ResizeObserver(() => {
            // throttle to next frame for smoothness
            requestAnimationFrame(update);
        });

        ro.observe(el);

        return () => ro.disconnect();
    }, []);
    const hoverMultiplier = isHovered ? 1.08 : 1;
    const combinedScale = scale * hoverMultiplier;

    const textWrapperStyle: React.CSSProperties = {
        transform: `scale(${combinedScale})`,
        transformOrigin: "center top",
        transition: "transform 180ms ease",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
    <a
      ref={containerRef}
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
            <div style={textWrapperStyle} className="text-center">
              <h2
                className="outfit-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white opacity-100"
                aria-hidden={false}
              >
                {header}
              </h2>
            </div>
          </div>
        </ParallaxHover>
      </div>
    </a>
    )
}