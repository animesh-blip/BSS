"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with Formspree or similar
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions, want to volunteer, or interested in partnering with us?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                We respond to all inquiries within 24-48 hours. Don&apos;t hesitate to
                reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-600 text-sm hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-gray-600 text-sm hover:text-primary transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Address</p>
                    <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Office Hours</p>
                    <p className="text-gray-600 text-sm">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ve received your message and will get back to you within
                      24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="Your phone number"
                          className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Subject *
                        </label>
                        <select
                          required
                          className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donate">Donations</option>
                          <option value="partnership">Corporate Partnership</option>
                          <option value="media">Media Inquiry</option>
                          <option value="general">General Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us how we can help or how you'd like to get involved..."
                        className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-y"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
