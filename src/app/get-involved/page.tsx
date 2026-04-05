"use client";

import Link from "next/link";
import { HandHeart, Users, Building2, Megaphone, Heart, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { FloatingShapes } from "@/components/illustrations";

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Give your time and skills to directly impact lives. Whether you can teach, mentor, or help organize events — every contribution matters.",
    actions: [
      "Teach at BSPS or our learning centers",
      "Mentor students and SEDI trainees",
      "Help organize health camps and events",
      "Provide professional skills (IT, design, etc.)",
      "Weekend and flexible commitments available",
    ],
    cta: "Apply to Volunteer",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Corporate Partnership / CSR",
    description: "Partner with us for CSR initiatives. BSS is CSR-1 registered (CSR00058152) and offers structured partnership programmes.",
    actions: [
      "CSR programme collaboration",
      "Employee volunteering programmes",
      "Sponsor a specific project or center",
      "Skill-based volunteering from your team",
      "CSR-1 registered organization",
    ],
    cta: "Become a Partner",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description: "Help amplify our mission by sharing our work on social media, writing about us, or organizing awareness campaigns.",
    actions: [
      "Share our stories on social media",
      "Organize a fundraiser in your community",
      "Write about our work",
      "Refer potential donors and volunteers",
      "Host an awareness event",
    ],
    cta: "Start Advocating",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Heart,
    title: "Monthly Giving",
    description: "Become a sustaining donor with a monthly contribution. Regular giving helps us plan better and sustain long-term programmes.",
    actions: [
      "Predictable support for programmes",
      "Tax benefits under Section 80G",
      "Regular impact reports and updates",
      "Exclusive invitations to events",
      "Cancel or modify anytime",
    ],
    cta: "Start Monthly Giving",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
              <Sparkles className="h-4 w-4" />
              Join Our Mission
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get Involved</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              There are many ways to support our mission. Whether you give your time,
              skills, resources, or voice — every contribution helps empower vulnerable communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((way, i) => (
              <ScrollReveal key={way.title} delay={i * 0.12}>
                <div className="rounded-3xl border border-gray-100 bg-white p-8 card-hover relative overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${way.color}`} />
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${way.bg} mb-5`}>
                    <way.icon className="h-7 w-7 text-foreground/70" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">{way.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{way.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {way.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {way.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us and our team will get back to you within 48 hours to discuss
              how you can contribute to empowering communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3.5 font-semibold hover:shadow-lg transition-all">
                Contact Us
              </Link>
              <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-8 py-3.5 font-semibold hover:bg-primary hover:text-white transition-colors">
                <Heart className="h-5 w-5" /> Donate Instead
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
