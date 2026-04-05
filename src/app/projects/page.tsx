import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Lightbulb, Stethoscope, Heart, Users, Radio, Shield, BookOpen, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Bal Sansar Sanstha's current and completed projects in education, skill development, health, and community empowerment across Rajasthan.",
};

const currentProjects = [
  {
    title: "Bal Sansar Public School (BSPS)",
    location: "Ajmer, Rajasthan",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    description: "Quality pre-primary and primary education for rural children in Ajmer district, focusing on holistic development and multiple intelligences. Plans for expansion to elementary and senior secondary levels.",
    link: "/projects/bsps",
    status: "Active",
  },
  {
    title: "SEDI — Skill & Entrepreneurship Development Institute",
    location: "Ajmer District",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    description: "Addressing skill-building needs of rural women and youth through computer education, photography, sewing courses, and RKCL-approved RS-CIT and RS-CFA certification programmes.",
    link: "/projects/sedi",
    status: "Active",
  },
  {
    title: "Taiyari — Adolescent Health & Empowerment",
    location: "Ajmer & Tonk Districts",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    description: "Adolescent health awareness and empowerment programme covering 30 Gram Panchayats across Srinagar block (Ajmer) and Tonk block (Tonk). Impacting 1,800 directly and 20,000 indirectly.",
    link: "/projects/taiyari",
    status: "Active",
  },
];

const completedProjects = [
  {
    title: "Sambal Community Care Center (CCC)",
    period: "2008–2013",
    icon: Heart,
    description: "A 10-bedded facility for people living with and affected by HIV and AIDS in Hathikhera, Ajmer.",
    link: "/projects/completed",
  },
  {
    title: "Babli Boli",
    period: "Completed",
    icon: Radio,
    description: "NACO-conceptualized, UNDP-funded project forming 100 Rural Women Listeners Clubs with 14,670 members in Ajmer district.",
    link: "/projects/completed",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
            <Sparkles className="h-4 w-4" />
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Projects & Programmes</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From quality education and skill development to public health and community empowerment
            — our projects create comprehensive, lasting change across Rajasthan.
          </p>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Active"
            title="Current Projects"
            description="Ongoing programmes creating real impact on the ground."
          />
          <div className="mt-14 space-y-8">
            {currentProjects.map((project, i) => (
              <Link
                key={project.title}
                href={project.link}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl bg-white border border-gray-100 p-8 card-hover"
              >
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <div className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl ${project.bg}`}>
                    <project.icon className="h-10 w-10 text-foreground/70" />
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Details <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Accomplished"
            title="Completed Projects"
            description="Past programmes that have created lasting impact in communities."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="group rounded-2xl bg-white border border-gray-100 p-8 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-500 shrink-0">
                    <project.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">{project.period}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects/completed"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Completed Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Areas of Work"
            title="Our Focus Areas"
            description="Comprehensive programmes spanning education, health, skill development, and community empowerment."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Quality Education", icon: GraduationCap },
              { label: "Skill Development", icon: Lightbulb },
              { label: "Public Health", icon: Stethoscope },
              { label: "HIV-AIDS Care", icon: Shield },
              { label: "Women Empowerment", icon: Users },
              { label: "Child Rights", icon: Heart },
            ].map((area) => (
              <div key={area.label} className="rounded-2xl bg-white border border-gray-100 p-5 text-center card-hover">
                <area.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-xs font-medium text-gray-700">{area.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
