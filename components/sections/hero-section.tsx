"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
<motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex flex-col items-center gap-4">
          <Image src="/logo.png" alt="Eper Consulting" width={120} height={120} className="object-contain" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-foreground mix-blend-difference">
            Eper Consulting
          </h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We manage international patient experience
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Dubai-based medical consultancy
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Premium global aesthetic coordination
          </motion.p>
        </div>
      </motion.div>


    </section>
  )
}
