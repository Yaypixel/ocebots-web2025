import { useAnimate, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface Props {
    images: string[]
}

export default function ScrollingImages({
    images
}: Props) {
    const validBaseImages = images.filter(src => src && typeof src === 'string' && src.trim().length > 0);
    const imagesToDesplay = [...validBaseImages, ...validBaseImages]
    const [scope, animate] = useAnimate()
    const contentRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
      if (!contentRef.current) return

      const distanceToScroll = contentRef.current.clientHeight
      const duration = distanceToScroll / 50

        const animationControls = animate (
          scope.current,
          {translateY: -distanceToScroll},
          {
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0
          }
        )

      return () => {
        animationControls.stop()
      }
    }, [animate, scope])

    return (
    <div className="h-300 w-100 overflow-hidden relative bg-blue-400 border-5 border-blue-400 rounded-lg">
      <motion.div ref={scope} className="absolute inset-0">
        <div ref={contentRef}>
          {imagesToDesplay.map((src, index) => (
            <div key={index} className="mb-4">
              <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="block w-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
          {validBaseImages.map((src, index) => (
            <div key={`dup-${index}`} className="mb-4">
              <Image 
                  src={src} 
                  alt={`Image ${index + 1} duplicate`} 
                  width={200} 
                  height={200} 
                  className="block w-full object-cover rounded-lg shadow-md"
                  priority={true}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    )
}