import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Read inspiring stories of children and families whose lives have been transformed through Bal Sansar India's programs.",
};

const stories = [
  {
    name: "Priya Sharma",
    age: 14,
    location: "Delhi",
    title: "From Street to Classroom",
    summary:
      "Priya was selling flowers on the roadside when our volunteers found her. Today, she is a top student in her class and dreams of becoming a doctor.",
    quote:
      "Bal Sansar gave me books instead of flowers. Now I help my mother with my scholarship money, and I am the first in my family to go to school.",
    program: "Education & Scholarships",
  },
  {
    name: "Arjun Patel",
    age: 12,
    location: "Mumbai",
    title: "Coding His Way to the Future",
    summary:
      "Arjun discovered computers at our digital learning center. From never having touched a computer, he now builds simple websites and teaches other kids.",
    quote:
      "I never knew what a computer could do. Now I can create things with code, and I want to build apps that help people like me.",
    program: "Digital & STEM Learning",
  },
  {
    name: "Meera Devi",
    age: 35,
    location: "Rajasthan",
    title: "A Mother's Transformation",
    summary:
      "Through our women's self-help group, Meera learned tailoring and financial management. She now runs a small business and sends all three of her children to school.",
    quote:
      "I used to depend on daily wages. Now I have my own sewing machine and a small shop. My children will have a better life than mine.",
    program: "Community Development",
  },
  {
    name: "Rohit Kumar",
    age: 10,
    location: "Bihar",
    title: "Healing Through Health Camps",
    summary:
      "Rohit suffered from chronic malnutrition until our health camp identified his condition. With regular nutrition support and medical care, he's now a healthy, active boy.",
    quote:
      "The doctors at the health camp told my mother what food I needed. Now I can run and play like other children!",
    program: "Healthcare & Nutrition",
  },
  {
    name: "Ananya Singh",
    age: 16,
    location: "Uttar Pradesh",
    title: "Dancing Into Confidence",
    summary:
      "Ananya was extremely shy and withdrawn. Through our arts program, she discovered a passion for dance. She recently performed at a state-level competition.",
    quote:
      "Dancing taught me that I have something special inside me. When I perform on stage, I forget all my worries and feel truly free.",
    program: "Arts & Cultural Programs",
  },
  {
    name: "Vikram & Sita",
    age: 0,
    location: "Maharashtra",
    title: "A Community Reborn",
    summary:
      "An entire village community came together through our development program. What started as a small literacy drive turned into a thriving community center with regular education, health, and skill-building activities.",
    quote:
      "Our village has changed completely. Children go to school, women have jobs, and we all look out for each other.",
    program: "Community Development",
  },
];

export default function StoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            Real Lives, Real Change
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Impact Stories</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every number in our reports represents a real child with real dreams. Here
            are some of the lives that have been transformed through your support.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <article
                key={story.name}
                className="rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/7] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo of {story.name}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {story.program}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mt-3 mb-2">
                    {story.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {story.name}
                    {story.age > 0 && `, age ${story.age}`} — {story.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.summary}</p>
                  <blockquote className="border-l-4 border-primary/30 pl-4 italic text-gray-500 text-sm">
                    <Quote className="h-4 w-4 text-primary/40 mb-1" />
                    &ldquo;{story.quote}&rdquo;
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
            Your support creates the next chapter in a child&apos;s life. Donate today and be
            part of a story of transformation.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
