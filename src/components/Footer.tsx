import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Globe, MessageCircle, Camera, Briefcase, Play } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative">
      {/* CTA Banner */}
      <section className="relative bg-gradient-to-r from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Every Child Deserves a Chance to Thrive
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Join us in empowering vulnerable communities across Rajasthan.
            Your support creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-8 py-3.5 font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3.5 font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-lg">
                  B
                </div>
                <div>
                  <span className="text-base font-bold block">{siteConfig.name}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    Est. {siteConfig.founded}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {siteConfig.mission}
              </p>
              {/* Registration badges */}
              <div className="flex flex-wrap gap-2">
                {Object.keys(siteConfig.registration).map((key) => (
                  <span
                    key={key}
                    className="text-[10px] font-medium bg-gray-800 text-gray-400 px-2 py-1 rounded"
                  >
                    {key} Registered
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-gray-300">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Our Projects", href: "/projects" },
                  { label: "Members", href: "/members" },
                  { label: "Impact Stories", href: "/stories" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Blog", href: "/blog" },
                  { label: "Donate", href: "/donate" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-gray-300">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>
                    {siteConfig.address.line1}<br />
                    {siteConfig.address.line2}<br />
                    {siteConfig.address.state}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <div>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors block">
                      {siteConfig.email}
                    </a>
                    <a href={`mailto:${siteConfig.emailAlt}`} className="hover:text-primary transition-colors block text-xs mt-0.5">
                      {siteConfig.emailAlt}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social + Newsletter */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-gray-300">
                Connect With Us
              </h3>
              <div className="flex gap-3 mb-6">
                <SocialLink href={siteConfig.social.facebook} icon={<Globe className="h-5 w-5" />} label="Facebook" />
                <SocialLink href={siteConfig.social.twitter} icon={<MessageCircle className="h-5 w-5" />} label="Twitter" />
                <SocialLink href={siteConfig.social.instagram} icon={<Camera className="h-5 w-5" />} label="Instagram" />
                <SocialLink href={siteConfig.social.linkedin} icon={<Briefcase className="h-5 w-5" />} label="LinkedIn" />
                <SocialLink href={siteConfig.social.youtube} icon={<Play className="h-5 w-5" />} label="YouTube" />
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-300">
                Stay Updated
              </h3>
              <p className="text-gray-500 text-xs mb-3">
                Get updates about our work and impact stories.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}
