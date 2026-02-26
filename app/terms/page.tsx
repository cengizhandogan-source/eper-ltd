import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Eper Consulting",
  description: "Read the Terms of Service governing your use of the Eper Consulting website and advisory services.",
  alternates: {
    canonical: "/terms",
  },
}

const sections = [
  {
    title: "1. About These Terms",
    content: `These Terms of Service ("Terms") govern your access to and use of the Eper Consulting website located at eperlimited.com ("Website") and any advisory or facilitation services we provide ("Services").

By accessing our Website or engaging our Services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use of our Website immediately.

These Terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates.`,
  },
  {
    title: "2. Who We Are",
    content: `Eper Consulting is a consulting firm incorporated and operating in Dubai, United Arab Emirates. We act as intermediaries and advisors in the medical tourism and aesthetic healthcare industry, connecting clients with vetted clinics and healthcare providers.

**Important:** Eper Consulting is not a licensed medical practitioner, hospital, or healthcare provider. We do not provide medical diagnosis, treatment, or clinical advice.`,
  },
  {
    title: "3. Our Services",
    content: `Eper Consulting offers the following advisory and facilitation services:

- **Medical tourism consulting:** Guidance on destinations, clinics, procedures, and logistics for treatment abroad
- **Clinic referrals:** Introductions to partner clinics and healthcare providers based on your stated needs
- **Information resources:** Articles, guides, and educational content about medical tourism and aesthetic procedures
- **Newsletter and updates:** Periodic communications on trends and insights in medical travel

All referrals and recommendations are provided in good faith based on available information. We do not guarantee the availability, quality, or outcome of any third-party services.`,
  },
  {
    title: "4. Not Medical Advice",
    content: `**This is not medical advice.** All content on this Website — including articles, guides, procedure descriptions, and any information provided through our Services — is for general informational and educational purposes only.

Nothing on this Website or provided through our Services constitutes:
- A medical diagnosis or assessment
- A recommendation to undergo any specific medical procedure
- A substitute for consultation with a qualified, licensed medical professional

You must consult a qualified healthcare professional before making any decisions about medical treatment. Your health decisions are your own responsibility.`,
  },
  {
    title: "5. Eligibility",
    content: `You must be at least 18 years of age to use our Website or engage our Services. By using our Website, you represent and warrant that you are 18 years of age or older and have the legal capacity to enter into these Terms.

If you are using the Website on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.`,
  },
  {
    title: "6. User Conduct",
    content: `When using our Website or Services, you agree not to:

- Use the Website for any unlawful purpose or in violation of UAE law
- Provide false, misleading, or fraudulent information
- Attempt to gain unauthorised access to any part of the Website or our systems
- Engage in scraping, crawling, or automated data collection without our prior written consent
- Upload or transmit any malicious code, viruses, or harmful content
- Impersonate any person or entity or misrepresent your affiliation

We reserve the right to suspend or terminate access for any user who violates these conditions.`,
  },
  {
    title: "7. Third-Party Providers",
    content: `Our Services involve introducing you to independent third-party clinics, hospitals, and healthcare providers ("Providers"). We are not responsible for:

- The quality, safety, or outcomes of any medical procedure performed by a Provider
- The conduct, licensing status, or malpractice of any Provider
- Disputes between you and a Provider, including billing, cancellation, or treatment complications
- The content, availability, or practices of third-party websites we link to

Any agreement for medical services is entered into directly between you and the Provider. We encourage you to conduct your own due diligence before committing to any procedure.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on this Website — including text, graphics, logos, images, blog posts, and design — is the property of Eper Consulting or its licensors and is protected by UAE copyright law and applicable international treaties.

You may access and read content on this Website for personal, non-commercial use. You may not:

- Reproduce, copy, distribute, or republish any content without our written permission
- Use our trademarks, trade names, or branding without prior authorisation
- Create derivative works based on our content

To request permission to use our content, contact hello@eperlimited.com.`,
  },
  {
    title: "9. Disclaimer of Warranties",
    content: `To the fullest extent permitted by UAE law, this Website and our Services are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied.

We do not warrant that:
- The Website will be uninterrupted, error-free, or secure
- The information on the Website is accurate, complete, or up to date
- Any referral or recommendation will result in a satisfactory outcome
- The Website is free of viruses or other harmful components

Your use of the Website and Services is entirely at your own risk.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, Eper Consulting and its directors, employees, affiliates, and agents shall not be liable for any:

- Indirect, incidental, special, or consequential damages
- Loss of profits, revenue, data, or goodwill
- Medical complications, adverse outcomes, or harm arising from procedures arranged through our referrals
- Losses arising from your reliance on information provided on this Website

In no event shall our total liability to you exceed the amount actually paid by you to Eper Consulting in the three (3) months preceding the claim. Nothing in these Terms excludes liability that cannot be excluded under UAE law.`,
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Eper Consulting, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:

- Your use of the Website or Services
- Your breach of these Terms
- Your violation of any applicable law or regulation
- Any false or misleading information you provide to us`,
  },
  {
    title: "12. Privacy",
    content: `Your use of our Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and protection of your personal information.`,
  },
  {
    title: "13. Changes to These Terms",
    content: `We reserve the right to update or modify these Terms at any time. The revised Terms will be posted on this page with an updated effective date. Your continued use of the Website following any changes constitutes your acceptance of the updated Terms.

We recommend reviewing these Terms periodically.`,
  },
  {
    title: "14. Termination",
    content: `We reserve the right to suspend or terminate your access to the Website or Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, third parties, or our business interests.

Upon termination, all provisions of these Terms that by their nature should survive will continue to apply, including intellectual property rights, disclaimers, and limitations of liability.`,
  },
  {
    title: "15. Governing Law and Dispute Resolution",
    content: `These Terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates.

Any dispute arising out of or in connection with these Terms or your use of our Services shall first be submitted to good-faith negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.`,
  },
  {
    title: "16. Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us:

**Eper Consulting**
Dubai, United Arab Emirates
Email: hello@eperlimited.com`,
  },
]

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Home
        </Link>

        <div className="mb-12">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">Effective date: 26 February 2026</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl text-foreground mb-3">{section.title}</h2>
              <div className="space-y-3">
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.+?)\*\*/g, "<strong class=\"text-foreground\">$1</strong>")
                        .replace(/\n- /g, "<br />• ")
                        .replace(/^- /, "• "),
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Eper Consulting. All rights reserved.{" "}
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
