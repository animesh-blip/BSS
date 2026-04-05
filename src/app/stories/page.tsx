import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Quote, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { FloatingShapes } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Impact Stories",
  description: "Read inspiring stories of individuals and communities transformed through Bal Sansar Sanstha's programmes in education, health, and skill development.",
};

const stories = [
  {
    name: "SEDI Graduate",
    location: "Ajmer",
    title: "From Homemaker to Computer Professional",
    summary: "A rural woman who had never touched a computer enrolled in the RS-CIT course at SEDI. After completing her certification, she now works at a local business center and teaches other women basic computer skills.",
    quote: "I never imagined I could work with computers. SEDI gave me not just skills, but the confidence to earn my own livelihood and support my family.",
    program: "SEDI — Skill Development",
  },
  {
    name: "Taiyari Beneficiary",
    location: "Srinagar Block, Ajmer",
    title: "Knowledge That Saved a Life",
    summary: "A 16-year-old girl in a remote village learned about nutrition and health through the Taiyari programme. She identified signs of severe anemia in her younger sister and sought medical help in time.",
    quote: "Before Taiyari, we didn't know what anemia was. The health sessions taught me to recognize the signs. My sister is healthy now because of what I learned.",
    program: "Taiyari — Health Awareness",
  },
  {
    name: "BSPS Student",
    location: "Ajmer",
    title: "First in the Family to Read",
    summary: "A child from a migrant labor family enrolled at Bal Sansar Public School. Within two years, he not only learned to read and write but also began teaching his parents basic literacy at home.",
    quote: "My teacher says I am good at studies. I want to become a teacher too, so I can help other children like me who don't have books at home.",
    program: "BSPS — Education",
  },
  {
    name: "Babli Boli Listener",
    location: "Ajmer District",
    title: "A Voice for Rural Women",
    summary: "Through the Babli Boli rural women listeners' club, a group of women in a remote village gained access to health information and community organizing skills. The club leader went on to advocate for better sanitation facilities.",
    quote: "The listeners' club gave us a voice. We learned about our rights and health, and together we convinced the panchayat to build toilets in our village.",
    program: "Babli Boli — Community",
  },
  {
    name: "SEDI Tailoring Student",
    location: "Ajmer",
    title: "Stitching a New Future",
    summary: "A young widow with two children learned tailoring through SEDI's sewing course. She started taking orders from her neighborhood and now earns enough to send both children to school.",
    quote: "Every stitch I make is a step towards my children's future. SEDI didn't just teach me sewing — they gave me hope and independence.",
    program: "SEDI — Skill Development",
  },
  {
    name: "Community Health Worker",
    location: "Tonk District",
    title: "Reaching 20,000 Through One Programme",
    summary: "The Taiyari programme trained community health workers who then spread awareness across 30 Gram Panchayats. One worker's efforts alone reached over 500 adolescent girls with reproductive health education.",
    quote: "When I see young girls making informed decisions about their health, I know our work matters. Taiyari has changed how this entire community thinks about health.",
    program: "Taiyari — Health Awareness",
  },
];

export default function StoriesPage() {
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
            Real Lives, Real Change
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Impact Stories</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every number in our reports represents a real person with real dreams.
            Here are some of the lives transformed through BSS programmes.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <article
                key={story.title}
                className="rounded-3xl border border-gray-100 bg-white overflow-hidden card-hover"
              >
                <div className="aspect-[16/7] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">📸</div>
                    <span className="text-gray-400 text-sm">Photo placeholder</span>
                  </div>
                  <span className="absolute top-4 left-4 text-xs font-semibold text-primary bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    {story.program}
                  </span>
                </div>
                <div className="p-7">
                  <h2 className="text-xl font-bold text-foreground mb-2">{story.title}</h2>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    {story.name} — {story.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-5">{story.summary}</p>
                  <blockquote className="relative bg-muted rounded-xl p-5">
                    <Quote className="absolute -top-2 -left-1 h-6 w-6 text-primary/30" />
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Help Write More Success Stories
          </h2>
          <p className="text-gray-600 mb-8">
            Your support creates the next chapter in someone&apos;s life.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3.5 font-semibold hover:shadow-lg transition-all"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
