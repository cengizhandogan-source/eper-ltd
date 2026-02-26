import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Eper Consulting`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Eper Consulting" }],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Eper Consulting`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${slug}`,
      images: [{ url: "/logo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Eper Consulting`,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Eper Consulting",
      url: "https://eperlimited.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Eper Consulting",
      url: "https://eperlimited.com",
    },
  }

  return (
    <main className="bg-background min-h-screen px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Insights
        </Link>

        <div className="mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">{post.category}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </main>
  )
}
