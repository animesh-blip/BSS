import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Bal Sansar Sanstha — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
            <Shield className="h-4 w-4" /> Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">
            Bal Sansar Sanstha (&ldquo;BSS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of visitors to our website. This Privacy Policy describes how we collect, use, and safeguard your information.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and PAN number (for tax receipts) when you make a donation or submit a contact form.</li>
            <li><strong>Usage Data:</strong> Anonymous information about how you interact with our website, including pages visited, time spent, and browser type.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>To process donations and issue tax receipts (80G certificates)</li>
            <li>To respond to inquiries and contact form submissions</li>
            <li>To send newsletters and updates about our work (only if you opt in)</li>
            <li>To improve our website and services</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">3. Data Protection</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Payment information is processed through secure, PCI-compliant payment gateways and is never stored on our servers.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">4. Sharing of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>With payment processors to complete donations</li>
            <li>When required by law or government authorities</li>
            <li>To protect our rights, privacy, safety, or property</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">5. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">6. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">7. Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not knowingly collect personal information from children under 18. If a parent or guardian becomes aware that their child has provided us with personal information, please contact us and we will take steps to remove such information.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">8. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us using the details below.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="rounded-2xl bg-muted border border-gray-100 p-6 mt-4">
            <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-gray-600 text-sm mt-1">{siteConfig.address.line1}</p>
            <p className="text-gray-600 text-sm">{siteConfig.address.line2}, {siteConfig.address.state}</p>
            <p className="text-gray-600 text-sm mt-2">Email: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></p>
            <p className="text-gray-600 text-sm">Phone: <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">{siteConfig.phone}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
