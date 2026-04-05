import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Stethoscope,
  Users,
  Heart,
  BookOpen,
  Utensils,
  Home,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Bal Sansar India's programs in education, healthcare, community development, and child welfare.",
};

const programs = [
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    description:
      "We provide quality education to underprivileged children through our learning centers, after-school programs, and scholarship initiatives. Our curriculum focuses on academic excellence, life skills, and creative development.",
    highlights: [
      "After-school tutoring and homework help",
      "Scholarship programs for meritorious students",
      "Digital literacy and computer training",
      "Library and reading programs",
    ],
    color: "bg-blue-50 text-blue-600 border-blue-100",
    stat: "2,000+",
    statLabel: "Students enrolled",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Nutrition",
    description:
      "Our healthcare program ensures that children and their families have access to basic medical care, preventive health services, and nutritious meals through regular health camps and nutrition programs.",
    highlights: [
      "Quarterly health camps and check-ups",
      "Mid-day meal and nutrition programs",
      "Mental health and counseling support",
      "Health awareness workshops",
    ],
    color: "bg-green-50 text-green-600 border-green-100",
    stat: "500+",
    statLabel: "Families served quarterly",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "We work with communities to build sustainable development through women empowerment, skill-building workshops, and livelihood programs that create lasting economic impact.",
    highlights: [
      "Women's self-help groups",
      "Vocational training programs",
      "Financial literacy workshops",
      "Community awareness campaigns",
    ],
    color: "bg-purple-50 text-purple-600 border-purple-100",
    stat: "50+",
    statLabel: "Communities reached",
  },
  {
    icon: Heart,
    title: "Child Protection & Welfare",
    description:
      "Ensuring children grow up in safe, nurturing environments through child rights advocacy, counseling services, and creating safe spaces for learning and play.",
    highlights: [
      "Child rights awareness and advocacy",
      "Safe spaces for children",
      "Counseling and emotional support",
      "Anti-child labor initiatives",
    ],
    color: "bg-rose-50 text-rose-600 border-rose-100",
    stat: "1,000+",
    statLabel: "Children protected",
  },
  {
    icon: BookOpen,
    title: "Arts & Cultural Programs",
    description:
      "We nurture creativity and cultural expression through dance, music, drama, and art programs that build confidence and provide an outlet for self-expression.",
    highlights: [
      "Dance, music, and drama workshops",
      "Annual cultural events and performances",
      "Art therapy sessions",
      "Sports and physical education",
    ],
    color: "bg-amber-50 text-amber-600 border-amber-100",
    stat: "800+",
    statLabel: "Children in arts programs",
  },
  {
    icon: Lightbulb,
    title: "Digital & STEM Learning",
    description:
      "Preparing children for the future through technology education, coding workshops, and STEM learning programs that spark curiosity and innovation.",
    highlights: [
      "Basic computer training",
      "Introduction to coding",
      "Science experiment workshops",
      "Innovation and maker spaces",
    ],
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    stat: "300+",
    statLabel: "Students in STEM programs",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive programs designed to address every aspect of a child&apos;s
            development — from education and health to creativity and life skills.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${program.color} mb-4`}>
                  <program.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{program.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-600">
                      <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className={`rounded-2xl border ${program.color.split(" ")[0]} p-10 text-center`}>
                  <div className="text-5xl font-bold text-foreground mb-2">{program.stat}</div>
                  <div className="text-gray-500">{program.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Support Our Programs</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your contribution helps us expand our programs and reach more children.
            Every donation, no matter how small, makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors"
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
