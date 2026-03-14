import type { Metadata } from "next"
import { LinksPage } from "@/components/sections/links-page"

export const metadata: Metadata = {
  title: "Links | Eper Consulting",
  description:
    "Connect with Eper Consulting — Dubai-based medical consultancy specialising in international patient coordination and premium aesthetic healthcare.",
  alternates: {
    canonical: "/links",
  },
  openGraph: {
    title: "Links | Eper Consulting",
    description:
      "Connect with Eper Consulting — Dubai-based medical consultancy specialising in international patient coordination and premium aesthetic healthcare.",
    images: [{ url: "/logo.png" }],
  },
}

export default function Links() {
  return <LinksPage />
}
