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
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const impactStats = [
  { number: "5,000+", label: "Children Supported", icon: Users },
  { number: "50+", label: "Schools & Centers", icon: BookOpen },
  { number: "200+", label: "Dedicated Volunteers", icon: Heart },
  { number: "15+", label: "Years of Service", icon: Star },
];

const programs = [
  {
    title: "Education",
    description:
      "Providing quality education, scholarships, and learning resources to underprivileged children.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Healthcare",
    description:
      "Ensuring access to healthcare, nutrition programs, and mental wellness support.",
    icon: Stethoscope,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Community Development",
    description:
      "Building stronger communities through skill development, women empowerment, and livelihood programs.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Child Welfare",
    description:
      "Protecting children's rights and providing safe spaces for growth and development.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
  },
];

const testimonials = [
  {
    quote:
      "Bal Sansar changed my life. I was struggling to go to school, but now I have a scholarship and dream of becoming a doctor.",
    name: "Priya S.",
    role: "Student Beneficiary",
  },
  {
    quote:
      "Volunteering with Bal Sansar has been the most rewarding experience. Seeing children thrive gives me hope for the future.",
    name: "Rahul M.",
    role: "Volunteer",
  },
  {
    quote:
      "The transparency and dedication of Bal Sansar is remarkable. Every rupee donated truly makes a difference in a child's life.",
    name: "Anita K.",
    role: "Donor",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-foreground via-secondary-dark to-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-light mb-6">
              Making a Difference Since 2009
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Children,{" "}
              <span className="text-primary-light">Transforming Futures</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We believe every child deserves access to education, healthcare, and a safe
              environment to grow. Join us in building a brighter tomorrow for
              India&apos;s children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all hover:shadow-xl"
              >
                <Heart className="h-5 w-5" />
                Donate Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Learn Our Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="What We Do"
            title="Our Programs"
            description="We run focused programs that create lasting impact in the lives of children and their communities."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${program.color} mb-4`}
                >
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tag="About Us"
                title="A Mission Rooted in Compassion"
                description=""
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                Bal Sansar India was founded with a simple yet powerful belief: that
                every child, regardless of their background, deserves a chance to
                thrive. Over the years, we have grown from a small community initiative
                to a trusted organization serving thousands of children across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach combines education, healthcare, and community development
                to create a holistic support system. We work closely with families,
                schools, and local governments to ensure sustainable, long-term impact.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-secondary text-white px-6 py-3 font-semibold hover:bg-secondary-dark transition-colors"
              >
                Read Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🤝</div>
                  <p className="text-gray-500 text-sm">
                    Add your team / mission photo here
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden sm:block">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-500">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Testimonials"
            title="Voices of Change"
            description="Hear from the people whose lives have been touched by Bal Sansar India."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Latest Updates"
            title="News & Stories"
            description="Stay updated with our latest initiatives, events, and success stories."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Day Celebration 2025",
                excerpt:
                  "Our children showcased incredible talent at the annual day celebration, with performances in dance, music, and drama.",
                date: "March 15, 2025",
                category: "Events",
              },
              {
                title: "New Learning Center Inauguration",
                excerpt:
                  "We opened our newest learning center, bringing quality education closer to 200 more children in rural areas.",
                date: "February 28, 2025",
                category: "Milestone",
              },
              {
                title: "Health Camp Reaches 500 Families",
                excerpt:
                  "Our quarterly health camp provided free check-ups, medicines, and nutritional counseling to underserved families.",
                date: "January 10, 2025",
                category: "Healthcare",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Featured Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
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
