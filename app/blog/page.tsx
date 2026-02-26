import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Insights | Eper Consulting",
  description:
    "Expert guides and insights on aesthetic healthcare, cosmetic surgery abroad, and medical tourism — from the team at Eper Consulting.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const categories = Array.from(new Set(posts.map((p) => p.category)))

  return (
    <main className="bg-background min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Eper Consulting
        </Link>

        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Insights</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Guides for patients considering cosmetic surgery abroad
        </h1>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
          Evidence-based articles to help you make informed decisions about aesthetic healthcare and medical tourism.
        </p>

        {categories.map((category) => {
          const categoryPosts = posts.filter((p) => p.category === category)
          return (
            <section key={category} className="mb-16">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 border-b border-border pb-3">
                {category}
              </p>
              <div className="divide-y divide-border">
                {categoryPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start justify-between py-6 gap-4 hover:pl-2 transition-all duration-200"
                  >
                    <div className="flex-1">
                      <h2 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{post.description}</p>
                      <p className="text-xs text-muted-foreground mt-3">{post.readTime}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
