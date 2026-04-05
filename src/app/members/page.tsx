import type { Metadata } from "next";
import Link from "next/link";
import { Award, ArrowRight, Heart, BookOpen, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { FloatingShapes } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Members",
  description: "Meet the dedicated team behind Bal Sansar Sanstha — the people driving change for vulnerable communities in Rajasthan.",
};

const leadership = [
  {
    name: "Dr. Priyamvada Singh",
    role: "Founder Chairperson & Chief Functionary",
    bio: "A committed social development professional with over three decades of experience in developing and implementing innovative, evidence-based, community-centric social development programme responses. Her experience spans education, health (RMNCH+A, nutrition, HIV-AIDS, family welfare), gender, and women empowerment.",
    achievement: "Rajasthan NGO Leadership Award 2018 — World CSR Day",
    featured: true,
  },
];

const executiveMembers = [
  {
    name: "Prof. Awant Veer Singh Madnawat",
    role: "General Body Member (Former Up Mantri)",
    bio: "Associated with BSS since July 1995. Served as Up Mantri until July 2017. Retired Professor & Head of Psychology Department, Rajasthan University, Jaipur.",
  },
  {
    name: "Dr. Pratibha Parashar",
    role: "Executive Committee Member",
    bio: "A valued member contributing to the governance and strategic direction of the organization.",
  },
  {
    name: "Smt. Prabha Kishore",
    role: "Executive Committee Member",
    bio: "A dedicated member supporting the organization's mission and community development initiatives.",
  },
];

const teamAreas = [
  { area: "Education & School Management", icon: BookOpen, description: "Teachers, coordinators, and mentors managing BSPS and learning programs." },
  { area: "Skill Development & Training", icon: Users, description: "Trainers delivering SEDI courses in computers, sewing, and photography." },
  { area: "Health & Community Outreach", icon: Heart, description: "Health workers and counselors running Taiyari and community health camps." },
  { area: "Administration & Operations", icon: Award, description: "Dedicated staff ensuring smooth operations across all offices and centers." },
];

export default function MembersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
            <Users className="h-4 w-4" />
            Our People
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Members & Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated individuals who drive Bal Sansar Sanstha&apos;s mission forward —
            from our visionary founder to the committed members on the ground.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Leadership" title="Founder & Chairperson" />
          {leadership.map((person) => (
            <div key={person.name} className="mt-12 rounded-3xl bg-gradient-to-br from-muted to-white border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
              <FloatingShapes />
              <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">
                <div className="text-center">
                  <div className="inline-flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-white shadow-xl text-6xl">
                    👤
                  </div>
                  <p className="text-gray-400 text-sm mt-4">Photo placeholder</p>
                </div>
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-bold text-foreground">{person.name}</h2>
                  <p className="text-primary font-semibold text-lg mb-4">{person.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{person.bio}</p>
                  <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-5 py-2.5">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800">{person.achievement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Governance"
            title="Executive Committee & Members"
            description="Experienced professionals guiding the strategic direction of BSS."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {executiveMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 card-hover border border-gray-100">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 mx-auto mb-5 flex items-center justify-center text-4xl">
                  👤
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Areas */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Team"
            title="The People on the Ground"
            description="Dedicated professionals and volunteers working across our programs and centers."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamAreas.map((team) => (
              <div key={team.area} className="flex items-start gap-5 rounded-2xl bg-white border border-gray-100 p-7 card-hover">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                  <team.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{team.area}</h3>
                  <p className="text-gray-600 text-sm">{team.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re always looking for passionate individuals to join our mission.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Involved <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
