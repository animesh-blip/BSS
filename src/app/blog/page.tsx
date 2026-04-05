import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, Sparkles, BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { FloatingShapes } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest news, stories, and updates from Bal Sansar Sanstha's work across Rajasthan.",
};

const posts = [
  {
    slug: "ngo-leadership-award-2018",
    title: "Dr. Priyamvada Singh Receives Rajasthan NGO Leadership Award",
    excerpt: "Dr. Priyamvada Singh, Founder Chairperson of BSS, was honored with the prestigious Rajasthan NGO Leadership Award at the World CSR Day ceremony for her outstanding contributions to community development.",
    date: "2018",
    author: "BSS Team",
    category: "Achievement",
    readTime: "3 min read",
    featured: true,
  },
  {
    slug: "taiyari-programme-milestone",
    title: "Taiyari Programme Reaches 20,000 Individuals",
    excerpt: "The adolescent health awareness programme has now impacted 1,800 individuals directly and 20,000 indirectly across 30 Gram Panchayats in Ajmer and Tonk districts.",
    date: "Recent",
    author: "Health Team",
    category: "Milestone",
    readTime: "4 min read",
  },
  {
    slug: "sedi-rkcl-approval",
    title: "BSS Approved as RKCL Training Centre",
    excerpt: "Bal Sansar Sanstha has been approved as a registered Training Centre by Rajasthan Knowledge Corporation Ltd for RS-CIT and RS-CFA certification courses at SEDI.",
    date: "Recent",
    author: "SEDI Team",
    category: "Education",
    readTime: "3 min read",
  },
  {
    slug: "babli-boli-impact",
    title: "Babli Boli: 100 Women's Clubs, 14,670 Members",
    excerpt: "The NACO-UNDP funded Babli Boli project successfully formed and strengthened 100 Rural Women Listeners Clubs in Ajmer district, empowering women through community organizing.",
    date: "Completed",
    author: "Community Team",
    category: "Impact",
    readTime: "5 min read",
  },
  {
    slug: "bsps-school-expansion",
    title: "BSPS Plans Expansion to Senior Secondary Level",
    excerpt: "Bal Sansar Public School in Ajmer is planning a gradual expansion from primary education to elementary and senior secondary levels, aiming to serve more rural children.",
    date: "Upcoming",
    author: "Education Team",
    category: "Education",
    readTime: "3 min read",
  },
  {
    slug: "community-health-camps",
    title: "Health Camps Serve Hundreds of Families",
    excerpt: "Our regular health camps continue to provide free check-ups, medicines, and nutritional counseling to underserved families across rural Rajasthan.",
    date: "Ongoing",
    author: "Health Team",
    category: "Healthcare",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
            <BookOpen className="h-4 w-4" />
            News & Updates
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Updates from the field, milestones, event recaps, and insights from our
            work across Rajasthan.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl border border-gray-100 bg-white overflow-hidden card-hover">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                <div className="text-center p-8">
                  <Sparkles className="h-12 w-12 text-primary/30 mx-auto mb-3" />
                  <span className="text-gray-400">Featured Image</span>
                </div>
                <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit mb-4">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-3">{posts[0].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><User className="h-4 w-4" />{posts[0].author}</span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </article>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="rounded-2xl border border-gray-100 bg-white overflow-hidden card-hover group">
                <div className="aspect-[16/9] bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-gray-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
