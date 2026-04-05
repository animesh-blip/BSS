import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Globe, MessageCircle, Camera, Briefcase, Play } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Every Child Deserves a Bright Future
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Your support can change a child&apos;s life. Join us in our mission to empower
            underprivileged children through education and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                B
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <SocialLink href={siteConfig.social.facebook} icon={<Globe className="h-5 w-5" />} label="Facebook" />
              <SocialLink href={siteConfig.social.twitter} icon={<MessageCircle className="h-5 w-5" />} label="Twitter" />
              <SocialLink href={siteConfig.social.instagram} icon={<Camera className="h-5 w-5" />} label="Instagram" />
              <SocialLink href={siteConfig.social.linkedin} icon={<Briefcase className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href={siteConfig.social.youtube} icon={<Play className="h-5 w-5" />} label="YouTube" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}
