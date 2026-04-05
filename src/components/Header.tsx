"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              B
              <div className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-accent rounded-full border-2 border-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground leading-tight block">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                Since {siteConfig.founded}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {siteConfig.nav.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Donate Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all animate-pulse-glow"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Donate Now</span>
              <span className="sm:hidden">Donate</span>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white/98 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-base font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </Link>
                {"children" in item &&
                  item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-8 py-2 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
