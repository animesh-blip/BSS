import type { Metadata } from "next";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bal Sansar India's mission, vision, and the dedicated team working to empower underprivileged children across India.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every action we take is driven by genuine care for children and their families.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain complete transparency in our operations and financial management.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We serve all children regardless of caste, religion, or economic background.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do for our beneficiaries.",
  },
];

const team = [
  { name: "Founder", role: "Founder & President", bio: "Visionary leader dedicated to child welfare for over 15 years." },
  { name: "Director", role: "Executive Director", bio: "Oversees programs and operations across all centers." },
  { name: "Head of Education", role: "Education Lead", bio: "Designs and implements our education curriculum and scholarship programs." },
  { name: "Head of Healthcare", role: "Healthcare Lead", bio: "Manages health camps, nutrition programs, and wellness initiatives." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Bal Sansar India
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            For over 15 years, we have been working tirelessly to create a world where
            every child has the opportunity to learn, grow, and succeed.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower underprivileged children in India through quality education,
                comprehensive healthcare, and holistic development programs that nurture
                their potential and build a foundation for a brighter future.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-4">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every child, regardless of their socio-economic background,
                has equal access to education, healthcare, and opportunities to thrive —
                creating empowered individuals who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Values"
            title="What Guides Us"
            description="These core values shape every decision we make and every program we run."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Journey"
            title="Milestones That Define Us"
            description="From humble beginnings to a thriving organization serving thousands."
          />
          <div className="mt-12 max-w-3xl mx-auto space-y-8">
            {[
              { year: "2009", title: "Founded", desc: "Bal Sansar India was established with a vision to uplift underprivileged children." },
              { year: "2012", title: "First Learning Center", desc: "Opened our first dedicated learning center, serving 100 children." },
              { year: "2015", title: "Healthcare Initiative", desc: "Launched our healthcare program with quarterly health camps." },
              { year: "2018", title: "Expansion", desc: "Expanded to multiple cities, reaching 2,000+ children annually." },
              { year: "2021", title: "Digital Learning", desc: "Introduced digital learning tools during the pandemic to ensure uninterrupted education." },
              { year: "2024", title: "5,000+ Lives Touched", desc: "Crossed the milestone of supporting over 5,000 children across India." },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {i < 5 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Team"
            title="The People Behind the Mission"
            description="A dedicated team of professionals and volunteers united by a common goal."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
