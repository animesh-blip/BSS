import Link from "next/link";
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
import { HeroIllustration, FloatingShapes, WaveDivider } from "@/components/illustrations";
import { siteConfig } from "@/lib/site-config";

const impactStats = [
  { number: "50,000+", label: "Lives Impacted", icon: Heart, color: "text-rose-500 bg-rose-50" },
  { number: "32+", label: "Years of Service", icon: Star, color: "text-amber-500 bg-amber-50" },
  { number: "30+", label: "Gram Panchayats", icon: Globe, color: "text-blue-500 bg-blue-50" },
  { number: "15+", label: "Projects Completed", icon: Award, color: "text-purple-500 bg-purple-50" },
];

const focusAreas = [
  {
    title: "Quality Education",
    description:
      "Running the Bal Sansar Public School (BSPS) in Ajmer providing quality education to underprivileged children, with after-school programs and scholarship initiatives.",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    link: "/projects/bsps",
  },
  {
    title: "Skill Development",
    description:
      "SEDI (Skill & Entrepreneurship Development Institute) provides computer training, photography, sewing courses, and RS-CIT certification for rural women and youth.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    link: "/projects/sedi",
  },
  {
    title: "Public Health",
    description:
      "Health camps, nutrition programs, adolescent health awareness through the Taiyari programme, and HIV-AIDS prevention & care initiatives across Rajasthan.",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    link: "/projects/taiyari",
  },
  {
    title: "Women Empowerment",
    description:
      "Women's self-help groups, vocational training, financial literacy, and gender-focused programs empowering women to lead independent, dignified lives.",
    icon: Users,
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    link: "/projects",
  },
  {
    title: "Child Rights & Welfare",
    description:
      "Advocacy for child rights, safe spaces, counseling services, and community awareness campaigns to protect children from exploitation and neglect.",
    icon: Shield,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    link: "/projects",
  },
  {
    title: "Community Development",
    description:
      "Building stronger, self-reliant communities through capacity building, networking, research, and sustainable development programs across districts.",
    icon: HandHeart,
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    link: "/projects",
  },
];

const testimonials = [
  {
    quote:
      "Bal Sansar Sanstha has been instrumental in bringing quality education to children who had no access. Their dedication to every child is remarkable.",
    name: "Community Leader",
    role: "Ajmer District",
  },
  {
    quote:
      "The SEDI program gave me computer skills and confidence. I now work at a local business and support my family. BSS changed my life completely.",
    name: "SEDI Graduate",
    role: "Program Beneficiary",
  },
  {
    quote:
      "Through the Taiyari programme, I learned about health and my rights as an adolescent. The awareness sessions gave me courage to pursue my education.",
    name: "Taiyari Beneficiary",
    role: "Ajmer, Rajasthan",
  },
];

const currentProjects = [
  {
    title: "Bal Sansar Public School (BSPS)",
    location: "Ajmer, Rajasthan",
    description: "Quality pre-primary and primary education for rural children with focus on multiple intelligences and holistic development.",
    tag: "Education",
    link: "/projects/bsps",
  },
  {
    title: "SEDI",
    location: "Ajmer District",
    description: "Skill & Entrepreneurship Development Institute offering computer, photography, sewing, and RS-CIT/RS-CFA certification courses.",
    tag: "Skill Development",
    link: "/projects/sedi",
  },
  {
    title: "Taiyari",
    location: "Ajmer & Tonk Districts",
    description: "Adolescent health awareness and empowerment programme impacting 1,800 directly and 20,000 indirectly across 30 Gram Panchayats.",
    tag: "Health & Awareness",
    link: "/projects/taiyari",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[100px] animate-float animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        {/* Hero illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-40">
          <HeroIllustration className="w-full h-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-primary-light mb-8 border border-white/10">
                <Sparkles className="h-4 w-4" />
                Transforming Lives Since {siteConfig.founded}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
              Empowering Communities,{" "}
              <span className="text-gradient">Building Futures</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
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

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up animation-delay-500">
              {["80G Certified", "FCRA Registered", "CSR Approved", "12A Registered"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <Shield className="h-3 w-3 text-green-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
          <ChevronDown className="h-6 w-6 text-white/40" />
        </div>
      </section>

      {/* ===================== IMPACT STATS ===================== */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl shadow-xl p-6 text-center card-hover animate-counter animation-delay-${(i + 1) * 100}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.color} mx-auto mb-3`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MISSION BANNER ===================== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl bg-gradient-to-br from-muted to-white border border-gray-100 p-10 sm:p-14 overflow-hidden">
            <FloatingShapes />
            <div className="relative">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Our Mission
              </span>
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
        </div>
      </section>

      {/* ===================== FOCUS AREAS ===================== */}
      <section className="py-20 sm:py-28 bg-muted relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="What We Do"
            title="Our Focus Areas"
            description="Building effective responses on critical issues affecting children, women, adolescents, and vulnerable communities across Rajasthan."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <Link
                key={area.title}
                href={area.link}
                className="group relative rounded-2xl bg-white border border-gray-100 p-7 card-hover overflow-hidden"
              >
                {/* Hover gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${area.bg} mb-5`}>
                  <area.icon className="h-7 w-7 text-foreground/70" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="About Us"
                title="Three Decades of Dedicated Service"
                centered={false}
              />
              <div className="mt-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Established in <strong>1992</strong>, Bal Sansar Sanstha is a registered non-profit
                  voluntary organization headquartered in <strong>Jaipur, Rajasthan</strong>. For over
                  three decades, we have been working tirelessly to empower vulnerable
                  communities — especially children, women, and youth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We have directly reached out to more than <strong>50,000 adolescents and women</strong>,
                  impacting their lives through Education, Health, HIV-AIDS and Sexual &
                  Reproductive Health, and Life Skills programmes across multiple districts.
                </p>
              </div>

              {/* Vision */}
              <div className="mt-8 rounded-2xl bg-secondary/5 border border-secondary/10 p-6">
                <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {siteConfig.vision}
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary text-white px-6 py-3 font-semibold hover:bg-secondary-dark transition-colors"
                >
                  Read Our Full Story <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/members"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary text-secondary px-6 py-3 font-semibold hover:bg-secondary hover:text-white transition-colors"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center card-hover">
                    <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">BSPS</div>
                    <div className="text-xs text-gray-500 mt-1">Bal Sansar Public School</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 p-8 text-center card-hover">
                    <Stethoscope className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">Taiyari</div>
                    <div className="text-xs text-gray-500 mt-1">Health & Empowerment</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 text-center card-hover">
                    <Lightbulb className="h-10 w-10 text-amber-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">SEDI</div>
                    <div className="text-xs text-gray-500 mt-1">Skill Development</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 text-center card-hover">
                    <Users className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-xs text-gray-500 mt-1">Lives Touched</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Award Winner</div>
                    <div className="text-xs text-gray-500">Rajasthan NGO Leadership 2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CURRENT PROJECTS ===================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Current Projects"
            title="Active Programmes"
            description="Our ongoing initiatives creating real impact on the ground across Rajasthan."
            light
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentProjects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all hover:-translate-y-2"
              >
                <span className="inline-block text-xs font-medium text-primary-light bg-primary/20 px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs mb-3">{project.location}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary-light font-semibold text-sm group-hover:gap-2 transition-all">
                  View Project <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 font-semibold hover:text-white hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Voices of Change"
            title="Impact That Speaks"
            description="Hear from the people whose lives have been transformed through our programmes."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative rounded-2xl bg-white border border-gray-100 p-8 card-hover"
              >
                {/* Quote mark */}
                <div className="absolute -top-3 left-8">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OBJECTIVES ===================== */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Objectives"
            title="What We Stand For"
            description="Building effective responses on the most critical issues facing vulnerable communities."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.objectives.map((obj, i) => (
              <div
                key={obj}
                className="flex items-start gap-3 rounded-xl bg-white p-5 border border-gray-100 card-hover"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-gray-700">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEWS PREVIEW ===================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Latest Updates"
            title="News & Stories"
            description="Stay updated with our latest initiatives, events, and impact from the field."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Rajasthan NGO Leadership Award 2018",
                excerpt:
                  "Dr. Priyamvada Singh, Founder Chairperson, received the prestigious Rajasthan NGO Leadership Award at the World CSR Day ceremony.",
                date: "2018",
                category: "Achievement",
              },
              {
                title: "Taiyari Programme Reaches 20,000",
                excerpt:
                  "The adolescent health awareness programme has now impacted 1,800 directly and 20,000 indirectly across 30 Gram Panchayats in Ajmer and Tonk.",
                date: "Recent",
                category: "Milestone",
              },
              {
                title: "SEDI Approved as RKCL Training Centre",
                excerpt:
                  "BSS has been approved as a registered Training Centre by Rajasthan Knowledge Corporation Ltd for RS-CIT and RS-CFA courses.",
                date: "Recent",
                category: "Education",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden card-hover"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center relative">
                  <div className="text-center p-4">
                    <Sparkles className="h-8 w-8 text-primary/30 mx-auto mb-2" />
                    <span className="text-gray-400 text-xs">Featured Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Updates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
