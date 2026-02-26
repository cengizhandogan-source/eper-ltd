import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Eper Consulting",
  description: "Learn how Eper Consulting collects, uses, and protects your personal information in accordance with UAE data protection laws.",
  alternates: {
    canonical: "/privacy",
  },
}

const sections = [
  {
    title: "1. Who We Are",
    content: `Eper Consulting ("we", "us", "our") is a consulting firm incorporated and operating in Dubai, United Arab Emirates. We provide advisory services in the fields of medical tourism, aesthetic healthcare, and wellness facilitation.

For questions about this Privacy Policy, you may contact us at:
**Eper Consulting**
Dubai, United Arab Emirates
Email: hello@eperlimited.com`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect personal information that you voluntarily provide to us and information that is automatically generated when you interact with our website.

**Information you provide:**
- Name, email address, and phone number submitted through contact or newsletter forms
- Enquiry details, including health-related information you choose to share when seeking a referral
- Correspondence records when you communicate with us by email

**Information collected automatically:**
- IP address and approximate geolocation (country/city level)
- Browser type, device type, and operating system
- Pages visited, time spent on pages, and referral source
- Cookie identifiers and analytics data (see Section 6)`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We process your personal information for the following purposes:

- **Service delivery:** To respond to your enquiries and connect you with appropriate medical tourism providers or clinics
- **Communications:** To send you updates, newsletters, and relevant content you have requested
- **Website improvement:** To analyse how visitors use our website and enhance the user experience
- **Legal compliance:** To meet our obligations under applicable UAE laws and regulations
- **Business operations:** To manage our internal records and protect our legal interests

We rely on your consent as our lawful basis for processing data collected through newsletter sign-ups, and on our legitimate interests for website analytics and enquiry handling.`,
  },
  {
    title: "4. How We Share Your Information",
    content: `We do not sell your personal data. We may share your information with:

- **Referred healthcare providers:** With your explicit consent, we may pass your enquiry details to clinics, hospitals, or wellness facilities as part of our advisory service
- **Service providers:** Third-party vendors who help us operate our website and business (e.g., email delivery, analytics, hosting), bound by confidentiality obligations
- **Legal and regulatory authorities:** Where required by UAE law, court order, or regulatory obligation
- **Business transfers:** In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction

Any third party receiving your data is required to handle it lawfully and with appropriate security measures.`,
  },
  {
    title: "5. International Data Transfers",
    content: `Our website is hosted on infrastructure that may process data outside the UAE. Where data is transferred internationally, we take steps to ensure adequate protection is in place, consistent with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and applicable Dubai regulations.

By using our website, you acknowledge that your data may be transferred to and processed in other countries.`,
  },
  {
    title: "6. Cookies and Analytics",
    content: `We use cookies and similar tracking technologies to understand how visitors interact with our website.

**Types of cookies we use:**
- **Essential cookies:** Required for the website to function correctly
- **Analytics cookies:** We use Vercel Analytics to collect aggregated, anonymised data about page visits and usage patterns. No personally identifiable information is transmitted

You may disable cookies through your browser settings. Please note that disabling essential cookies may affect website functionality.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law:

- **Newsletter subscribers:** Until you unsubscribe or request deletion
- **Enquiry records:** Up to three (3) years from the date of last contact
- **Website analytics:** Aggregated data may be retained indefinitely; raw data is subject to provider retention policies

When data is no longer needed, it is securely deleted or anonymised.`,
  },
  {
    title: "8. Your Rights",
    content: `Subject to applicable UAE data protection legislation, you have the right to:

- **Access** the personal data we hold about you
- **Correct** inaccurate or incomplete information
- **Delete** your personal data (subject to legal retention obligations)
- **Withdraw consent** at any time, without affecting the lawfulness of prior processing
- **Object** to processing based on our legitimate interests
- **Portability** of your data in a structured, machine-readable format

To exercise any of these rights, please contact us at hello@eperlimited.com. We will respond within 30 days.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.`,
  },
  {
    title: "10. Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These measures include encrypted data transmission (HTTPS), access controls, and secure hosting infrastructure.

No method of electronic transmission or storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.`,
  },
  {
    title: "11. Third-Party Links",
    content: `Our website may contain links to third-party websites, including partner clinics and healthcare providers. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The most current version will always be available on this page, with the effective date noted at the top.

Material changes will be communicated via email (where we hold your address) or a prominent notice on our website.`,
  },
  {
    title: "13. Governing Law",
    content: `This Privacy Policy is governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates, including the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. Any disputes arising under this policy shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.`,
  },
  {
    title: "14. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us:

**Eper Consulting**
Dubai, United Arab Emirates
Email: hello@eperlimited.com`,
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
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
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
