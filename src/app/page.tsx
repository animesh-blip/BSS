import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  BookOpen,
  Stethoscope,
  Users,
  GraduationCap,
  ArrowRight,
  Quote,
  Star,
  Shield,
  Target,
  Sparkles,
  ChevronDown,
  Award,
  Globe,
  Lightbulb,
  HandHeart,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { HeroIllustration, FloatingShapes } from "@/components/illustrations";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import TestimonialsCarousel from "./TestimonialsCarousel";
import NewsCarousel from "./NewsCarousel";

const impactStats = [
  { number: 50000, suffix: "+", label: "Lives Impacted", icon: Heart, color: "text-rose-500 bg-rose-50" },
  { number: 32, suffix: "+", label: "Years of Service", icon: Star, color: "text-amber-500 bg-amber-50" },
  { number: 30, suffix: "+", label: "Gram Panchayats", icon: Globe, color: "text-blue-500 bg-blue-50" },
  { number: 15, suffix: "+", label: "Projects Completed", icon: Award, color: "text-purple-500 bg-purple-50" },
];

const focusAreas = [
  {
    title: "Quality Education",
    description: "Running BSPS in Ajmer — quality education for underprivileged children with focus on multiple intelligences and holistic development.",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    link: "/projects/bsps",
    image: images.programs.education,
  },
  {
    title: "Skill Development",
    description: "SEDI provides computer training, photography, sewing courses, and RKCL-approved RS-CIT/RS-CFA certification for rural women and youth.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    link: "/projects/sedi",
    image: images.programs.skills,
  },
  {
    title: "Public Health",
    description: "Health camps, nutrition programs, Taiyari adolescent health awareness impacting 20,000+ across 30 Gram Panchayats in Rajasthan.",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    link: "/projects/taiyari",
    image: images.programs.health,
  },
  {
    title: "Women Empowerment",
    description: "Women's self-help groups, vocational training, financial literacy, and gender-focused programs for independent, dignified lives.",
    icon: Users,
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    link: "/projects",
    image: images.programs.women,
  },
  {
    title: "Child Rights",
    description: "Advocacy for child rights, safe spaces, counseling services, and community awareness campaigns to protect children.",
    icon: Shield,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    link: "/projects",
    image: images.programs.children,
  },
  {
    title: "Community Development",
    description: "Building stronger, self-reliant communities through capacity building, networking, research, and sustainable development.",
    icon: HandHeart,
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    link: "/projects",
    image: images.programs.community,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.hero.main}
            alt={images.hero.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>

        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float animation-delay-300" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-primary-light mb-8 border border-white/10">
                <Sparkles className="h-4 w-4" />
                Transforming Lives Since {siteConfig.founded}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Empowering Communities,{" "}
                <span className="text-gradient">Building Futures</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                {siteConfig.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Heart className="h-5 w-5" />
                  Donate Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Our Story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="mt-12 flex flex-wrap gap-3">
                {["80G Certified", "FCRA Registered", "CSR Approved", "12A Registered"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full">
                    <Shield className="h-3 w-3 text-green-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
          <ChevronDown className="h-6 w-6 text-white/40" />
        </div>
      </section>

      {/* ===================== IMPACT STATS ===================== */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center card-hover">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.color} mx-auto mb-3`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MISSION BANNER ===================== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-muted to-white border border-gray-100 p-10 sm:p-14 overflow-hidden">
              <FloatingShapes />
              <div className="relative">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Mission</span>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                  &ldquo;{siteConfig.mission}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <div className="h-1 w-6 bg-secondary rounded-full" />
                  <div className="h-1 w-3 bg-accent rounded-full" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== FOCUS AREAS ===================== */}
      <section className="py-20 sm:py-28 bg-muted relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              tag="What We Do"
              title="Our Focus Areas"
              description="Building effective responses on critical issues affecting children, women, adolescents, and vulnerable communities across Rajasthan."
            />
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.08}>
                <Link
                  href={area.link}
                  className="group relative rounded-2xl bg-white border border-gray-100 overflow-hidden card-hover block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm`}>
                      <area.icon className="h-5 w-5 text-foreground/70" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading tag="About Us" title="Three Decades of Dedicated Service" centered={false} />
                <div className="mt-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Established in <strong>1992</strong>, Bal Sansar Sanstha is headquartered in <strong>Jaipur, Rajasthan</strong>. For over three decades, we have empowered vulnerable communities — especially children, women, and youth.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We have directly reached <strong>50,000+ adolescents and women</strong>, impacting their lives through Education, Health, and Life Skills programmes across multiple districts.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl bg-secondary/5 border border-secondary/10 p-6">
                  <h3 className="font-bold text-secondary mb-2 flex items-center gap-2"><Target className="h-5 w-5" />Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{siteConfig.vision}</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-secondary text-white px-6 py-3 font-semibold hover:bg-secondary-dark transition-colors">
                    Read Our Full Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={images.about.team}
                    alt="BSS team working together"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">Award Winner</div>
                      <div className="text-xs text-gray-500">NGO Leadership 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS CAROUSEL ===================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              tag="Voices of Change"
              title="Impact That Speaks"
              description="Hear from the people whose lives have been transformed through our programmes."
              light
            />
          </ScrollReveal>
          <div className="mt-14">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* ===================== NEWS CAROUSEL ===================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              tag="Latest Updates"
              title="News & Stories"
              description="Stay updated with our latest initiatives, events, and impact from the field."
            />
          </ScrollReveal>
          <div className="mt-14">
            <NewsCarousel />
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View All Updates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== OBJECTIVES ===================== */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading tag="Our Objectives" title="What We Stand For" description="Building effective responses on the most critical issues facing vulnerable communities." />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.objectives.map((obj, i) => (
              <ScrollReveal key={obj} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl bg-white p-5 border border-gray-100 card-hover h-full">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{obj}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
