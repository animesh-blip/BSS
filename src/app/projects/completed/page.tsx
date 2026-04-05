"use client";

import Link from "next/link";
import { ArrowRight, Heart, Radio, Users, MapPin, Calendar, BarChart3, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const completedProjects = [
  {
    title: "Sambal Community Care Center (CCC)",
    period: "June 2008 – March 2013",
    location: "Hathikhera, Ajmer, Rajasthan",
    icon: Heart,
    color: "bg-rose-50 border-rose-100",
    description: "Sambal was a 10-bedded Community Care Center providing comprehensive care and support for people living with and affected by HIV and AIDS. The center offered medical care, nutritional support, counseling, and a safe environment for patients and their families.",
    highlights: [
      "10-bedded residential care facility",
      "Medical care and treatment support",
      "Nutritional support and counseling",
      "Family support and awareness programmes",
      "Located in Hathikhera, Ajmer",
    ],
    impact: "Provided critical care and support to hundreds of individuals living with HIV-AIDS during its 5-year operation.",
    stat: { number: 10, label: "Beds" },
  },
  {
    title: "Babli Boli",
    period: "Completed",
    location: "Ajmer District, Rajasthan",
    icon: Radio,
    color: "bg-purple-50 border-purple-100",
    description: "Babli Boli was a pioneering project conceptualized and approved by the National AIDS Control Organization (NACO), funded by UNDP, managed by Population Foundation of India (PFI), and implemented by Bal Sansar Sanstha in Ajmer district.",
    highlights: [
      "Conceptualized by NACO",
      "Funded by UNDP",
      "Managed by Population Foundation of India",
      "100 Rural Women Listeners Clubs formed",
      "14,670 club members reached",
      "All 100 Club Leaders trained",
    ],
    impact: "Created a powerful network of 100 Rural Women Listeners Clubs with 14,670 members, empowering women through health education and community organizing.",
    stat: { number: 14670, label: "Members Reached" },
  },
];

export default function CompletedProjectsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Projects
          </Link>
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
              <Sparkles className="h-4 w-4" /> Accomplished
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Completed Projects</h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Past programmes that have created lasting impact and demonstrated BSS&apos;s
              commitment to community development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {completedProjects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.2}>
              <div className={`rounded-3xl border ${project.color} p-8 sm:p-10`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${project.color}`}>
                        <project.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-foreground">{project.title}</h2>
                        <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5">
                          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{project.period}</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                    <div className="space-y-2">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white p-6 border border-gray-100 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        <AnimatedCounter end={project.stat.number} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-500">{project.stat.label}</div>
                    </div>
                    <div className="rounded-2xl bg-white p-6 border border-gray-100">
                      <BarChart3 className="h-6 w-6 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-2">Impact</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">View Our Current Projects</h2>
            <p className="text-gray-600 mb-8">See what we&apos;re working on now and how you can support our active programmes.</p>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors">
              Current Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
