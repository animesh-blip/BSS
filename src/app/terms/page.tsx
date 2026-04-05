import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Bal Sansar Sanstha website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
            <FileText className="h-4 w-4" /> Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-gray-300">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">
            Welcome to the website of Bal Sansar Sanstha (&ldquo;BSS&rdquo;). By accessing and using this website, you agree to the following terms and conditions. If you do not agree, please do not use this website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By using this website, you agree to be bound by these Terms of Use and our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. We may update these terms at any time without prior notice. Continued use of the website constitutes acceptance of any changes.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">2. Use of Website</h2>
          <p className="text-gray-600 leading-relaxed">You agree to use this website only for lawful purposes and in a way that does not:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Infringe on the rights of others</li>
            <li>Restrict or inhibit anyone else&apos;s use of the website</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Transmit any harmful, threatening, or objectionable material</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this website — including text, images, logos, graphics, and design — is the property of Bal Sansar Sanstha or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or republish any content without prior written permission.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">4. Donations</h2>
          <p className="text-gray-600 leading-relaxed">
            Donations made through this website are voluntary contributions to Bal Sansar Sanstha. All donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961 (Registration: {siteConfig.registration["80G"]}). Tax receipts will be issued for all eligible donations. Refunds for donations are handled on a case-by-case basis; please contact us for any concerns.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">5. FCRA Compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            BSS is registered under the Foreign Contribution (Regulation) Act, 2010 (FCRA Registration: {siteConfig.registration.FCRA}). Foreign contributions are received and utilized in accordance with FCRA regulations.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">6. Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed">
            This website is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. BSS does not guarantee that the website will be uninterrupted, error-free, or free of viruses or other harmful components. Information on this website is for general informational purposes and should not be considered professional advice.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, BSS shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">8. External Links</h2>
          <p className="text-gray-600 leading-relaxed">
            This website may contain links to third-party websites. These links are provided for convenience only. BSS has no control over and assumes no responsibility for the content or practices of any linked websites.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">9. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">10. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For any questions regarding these terms, please contact us:
          </p>
          <div className="rounded-2xl bg-muted border border-gray-100 p-6 mt-4">
            <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-gray-600 text-sm mt-1">{siteConfig.address.line1}</p>
            <p className="text-gray-600 text-sm">{siteConfig.address.line2}, {siteConfig.address.state}</p>
            <p className="text-gray-600 text-sm mt-2">Email: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
