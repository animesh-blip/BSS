"use client";

import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Heart, Users, Award, Shield, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { FloatingShapes } from "@/components/illustrations";

const values = [
  { icon: Heart, title: "Compassion", description: "Genuine care for the most vulnerable members of our society drives every action we take." },
  { icon: Shield, title: "Integrity", description: "Complete transparency in operations and finances, earning the trust of our donors and communities." },
  { icon: Users, title: "Inclusivity", description: "No discrimination based on gender, religion, caste, creed, social, cultural or economic status." },
  { icon: Award, title: "Excellence", description: "Evidence-based, community-centric approaches with innovative, sustainable programme responses." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
                <Sparkles className="h-4 w-4" />
                Since {siteConfig.founded}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About <span className="text-gradient">Bal Sansar Sanstha</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                A registered non-profit voluntary organization established in 1992,
                dedicated to empowering vulnerable community groups — especially women,
                children, and youth — to lead a life with dignity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading tag="Our Story" title="Three Decades of Impact" centered={false} />
                <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong>Bal Sansar Sanstha (BSS)</strong> was founded in <strong>1992</strong> with
                    its headquarters in Jaipur, Rajasthan. The organization was born from a
                    deep commitment to addressing social inequalities, particularly those
                    affecting children, youth, and women.
                  </p>
                  <p>
                    Under the visionary leadership of <strong>Dr. Priyamvada Singh</strong>,
                    Founder Chairperson, BSS has grown into a trusted organization active in
                    Quality Education, Skill Development, Public Health, HIV-AIDS Prevention
                    &amp; Care, Women and Children&apos;s Education and Development, and
                    Adolescents &amp; Youth issues.
                  </p>
                  <p>
                    Over the years, BSS has directly reached out to more than <strong>50,000
                    adolescents and women</strong>, impacting their lives through education,
                    health, and empowerment programmes. Our work spans across multiple
                    districts in Rajasthan, including Jaipur, Ajmer, and Tonk.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {Object.entries(siteConfig.registration).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">{key}: {value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={images.about.team}
                    alt="BSS team working together"
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="mt-8 rounded-3xl bg-gradient-to-br from-primary/5 via-muted to-secondary/5 p-10 border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-primary">
                        <AnimatedCounter end={1992} duration={2} />
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Year Founded</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-secondary">
                        <AnimatedCounter end={50000} suffix="+" duration={2.5} />
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Lives Impacted</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-purple-600">
                        <AnimatedCounter end={30} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Gram Panchayats</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-amber-600">
                        <AnimatedCounter end={5} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Districts Served</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-foreground">NGO Leadership Award 2018</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-muted relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="rounded-3xl bg-white border border-gray-100 p-10 card-hover h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white mb-6 shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  &ldquo;{siteConfig.mission}&rdquo;
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-white border border-gray-100 p-10 card-hover h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark text-white mb-6 shadow-lg">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  {siteConfig.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              tag="Our Objectives"
              title="Building Effective Responses"
              description="We work across multiple domains to create comprehensive, lasting impact."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.objectives.map((obj, i) => (
              <ScrollReveal key={obj} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-2xl bg-white border border-gray-100 p-5 card-hover h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-2">{obj}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              tag="Our Values"
              title="What Guides Us"
              description="These core values shape every decision and every programme we undertake."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 text-center card-hover border border-gray-100 h-full">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-foreground to-secondary-dark p-10 sm:p-14 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full blur-[100px]" />
              </div>
              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                <div className="lg:col-span-2">
                  <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-light mb-3">
                    Leadership
                  </span>
                  <h2 className="text-3xl font-bold mb-4">Dr. Priyamvada Singh</h2>
                  <p className="text-xl text-gray-300 mb-2">Founder Chairperson</p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    A committed social development professional with over three decades of experience
                    in developing and implementing innovative, evidence-based, community-centric
                    social development programme responses. Her expertise spans education, health
                    (RMNCH+A, nutrition, HIV-AIDS), gender, and women empowerment.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-sm text-gray-300">Rajasthan NGO Leadership Award 2018 — World CSR Day</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                    <Image
                      src={images.about.mission}
                      alt="Dr. Priyamvada Singh - Founder Chairperson"
                      width={200}
                      height={200}
                      className="h-40 w-40 object-cover"
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-4">Founder Chairperson, BSS</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              tag="Our Journey"
              title="Milestones That Define Us"
              description="From humble beginnings in 1992 to a trusted organization impacting 50,000+ lives."
            />
          </ScrollReveal>
          <div className="mt-12 max-w-3xl mx-auto space-y-0">
            {[
              { year: "1992", title: "Founded", desc: "Bal Sansar Sanstha established in Jaipur, Rajasthan by Dr. Priyamvada Singh." },
              { year: "1995", title: "Growing Team", desc: "Prof. Awant Veer Singh Madnawat and other dedicated members join the mission." },
              { year: "2008", title: "Sambal CCC", desc: "Launched the Sambal Community Care Center — a 10-bedded HIV-AIDS care facility in Ajmer." },
              { year: "2013", title: "Expanding Impact", desc: "Babli Boli project with NACO/UNDP forms 100 Rural Women Listeners Clubs with 14,670 members." },
              { year: "2018", title: "Recognition", desc: "Dr. Priyamvada Singh receives the Rajasthan NGO Leadership Award at World CSR Day." },
              { year: "2020", title: "SEDI Launch", desc: "Skill & Entrepreneurship Development Institute opens, approved as RKCL Training Centre." },
              { year: "Now", title: "50,000+ Lives", desc: "Continuing to empower communities through BSPS, SEDI, Taiyari, and more across Rajasthan." },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-xs shadow-lg shrink-0">
                      {item.year}
                    </div>
                    {i < 6 && <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent min-h-[40px]" />}
                  </div>
                  <div className="pb-10">
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
            <p className="text-gray-600 mb-8">
              Whether you donate, volunteer, or spread the word — every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors">
                <Heart className="h-5 w-5" /> Donate
              </Link>
              <Link href="/get-involved" className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors">
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
