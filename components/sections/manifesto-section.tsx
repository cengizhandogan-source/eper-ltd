"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center text-foreground/10">
          Dubai-based. Patient-focused.
          <br />
          Globally connected.
        </h2>

        {/* Gradient mask reveal text */}
        <motion.h2
          className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent"
          style={{ clipPath }}
        >
          Dubai-based. Patient-focused.
          <br />
          Globally connected.
        </motion.h2>

        {/* Subtext block */}
        <motion.div
          className="mt-16 text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-base md:text-lg">EPER is a Dubai-based health consultancy company.</p>
          <p className="text-muted-foreground text-base md:text-lg">We manage international marketing and patient acquisition.</p>
          <p className="text-muted-foreground text-base md:text-lg">We provide patient coordination and medical travel planning.</p>
          <p className="text-muted-foreground text-sm italic mt-4">We do not provide medical treatment directly.</p>
        </motion.div>
      </div>
    </section>
  )
}
