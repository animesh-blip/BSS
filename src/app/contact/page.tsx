"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FloatingShapes } from "@/components/illustrations";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
              <Sparkles className="h-4 w-4" /> Reach Out
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have questions, want to volunteer, or interested in partnering with us?
              We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  We respond to all inquiries within 24-48 hours. Don&apos;t hesitate to reach out!
                </p>

                <div className="space-y-5">
                  <ContactItem icon={<MapPin className="h-5 w-5" />} title="Head Office">
                    <span>{siteConfig.address.line1}<br />{siteConfig.address.line2}<br />{siteConfig.address.state}</span>
                  </ContactItem>
                  <ContactItem icon={<Mail className="h-5 w-5" />} title="Email">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors block">{siteConfig.email}</a>
                    <a href={`mailto:${siteConfig.emailAlt}`} className="hover:text-primary transition-colors block text-xs mt-0.5 text-gray-400">{siteConfig.emailAlt}</a>
                  </ContactItem>
                  <ContactItem icon={<Phone className="h-5 w-5" />} title="Phone">
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
                  </ContactItem>
                  <ContactItem icon={<Clock className="h-5 w-5" />} title="Office Hours">
                    <span>Monday – Saturday<br />9:00 AM – 6:00 PM IST</span>
                  </ContactItem>
                  <ContactItem icon={<Globe className="h-5 w-5" />} title="Offices">
                    <span>Jaipur (HQ) &amp; Ajmer, Rajasthan</span>
                  </ContactItem>
                </div>

                {/* Registration badge */}
                <div className="rounded-2xl bg-muted border border-gray-100 p-5 mt-8">
                  <h3 className="font-semibold text-foreground text-sm mb-3">Registered Organization</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(siteConfig.registration).map((key) => (
                      <span key={key} className="text-[10px] font-medium bg-white text-gray-500 border border-gray-100 px-2 py-1 rounded">
                        {key} Registered
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-50 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-gray-600">We&apos;ve received your message and will get back to you within 24-48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input type="text" required placeholder="Your full name" className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                        <input type="email" required placeholder="your@email.com" className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                        <input type="tel" placeholder="Your phone number" className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                        <select required className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none">
                          <option value="">Select a subject</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donate">Donations</option>
                          <option value="partnership">Corporate Partnership / CSR</option>
                          <option value="media">Media Inquiry</option>
                          <option value="general">General Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea required rows={5} placeholder="Tell us how we can help or how you'd like to get involved..." className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-y" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3.5 font-semibold hover:shadow-lg transition-all">
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">{icon}</div>
      <div>
        <p className="font-medium text-foreground text-sm">{title}</p>
        <div className="text-gray-600 text-sm mt-0.5">{children}</div>
      </div>
    </div>
  );
}
