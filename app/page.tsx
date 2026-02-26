import type { Metadata } from "next"
import { LenisProvider } from "@/components/lenis-provider"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { FooterSection } from "@/components/sections/footer-section"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const posts = getAllPosts()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eper Consulting",
    url: "https://eperlimited.com",
    description:
      "Dubai-based medical consultancy specialising in international patient coordination and premium aesthetic healthcare management for medical tourism.",
  }

  return (
    <LenisProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-background">
        <HeroSection />
        <section id="about">
          <ManifestoSection />
        </section>
        <section id="services">
          <FeaturesSection />
        </section>
        <InsightsSection posts={posts} />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}
