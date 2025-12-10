"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxHoverProps {
  children: ReactNode;
  strength?: number; // how far the image shifts
  zoom?: number;     // scale amount
  className?: string;
}

export default function ParallaxHover({
  children,
  strength = 20,
  zoom = 1.1,
  className = "",
}: ParallaxHoverProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Move within constraints
  const moveX = useTransform(x, [-50, 50], [-strength, strength]);
  const moveY = useTransform(y, [-50, 50], [-strength, strength]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className + " overflow-hidden"} // keeps it inside the div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 600 }} // gives depth but keeps it controlled
    >
      <motion.div
        style={{
          x: moveX,
          y: moveY,
          scale: zoom,
          transition: "all 0.2s ease-out",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
