"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, BookOpen, Globe, Instagram } from "lucide-react"

const blogPosts = [
  {
    title: "Patient-First Approach to Aesthetic Healthcare",
    slug: "eper-consulting-patient-first-approach",
  },
  {
    title: "How to Effectively Communicate with Surgeons and Clinics Abroad",
    slug: "how-to-communicate-with-surgeons-abroad",
  },
  {
    title: "How to Prepare Financially for Cosmetic Surgery Abroad",
    slug: "preparing-financially-for-cosmetic-surgery-abroad",
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function LinksPage() {
  return (
    <div className="relative min-h-screen bg-background flex items-start justify-center px-4 py-16">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-300 via-sky-200 to-blue-100 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative w-full max-w-md flex flex-col items-center gap-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-3"
          {...fadeUp}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="Eper Consulting"
            width={80}
            height={80}
            className="object-contain"
          />
          <h1 className="text-3xl font-serif text-foreground">Eper Consulting</h1>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-muted-foreground text-center">
              We manage international patient experience
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Dubai-based medical consultancy
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Premium global aesthetic coordination
            </p>
          </div>
        </motion.div>

        {/* WhatsApp contact */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=971507036061"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-3.5 font-medium hover:opacity-90 transition-opacity"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MessageCircle className="w-5 h-5" />
          Contact us on WhatsApp
        </motion.a>

        {/* Blog posts */}
        <motion.div
          className="w-full flex flex-col gap-3"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Blog Posts
          </p>
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-3 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground hover:scale-[1.02] transition-transform"
              >
                <BookOpen className="w-4 h-4 shrink-0 text-muted-foreground" />
                {post.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-6 pt-4"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://eperlimited.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/eperltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
