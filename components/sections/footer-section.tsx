"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-300 via-sky-200 to-blue-100 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl md:text-8xl font-serif text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Eper Consulting
        </motion.h2>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Eper Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-clickable>
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-clickable>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
