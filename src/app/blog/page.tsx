import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest news, stories, and updates from Bal Sansar India.",
};

const posts = [
  {
    slug: "annual-day-celebration-2025",
    title: "Annual Day Celebration 2025: A Night of Talent and Joy",
    excerpt:
      "Our children showcased incredible talent at the annual day celebration with performances in dance, music, and drama that left everyone in awe.",
    date: "March 15, 2025",
    author: "Bal Sansar Team",
    category: "Events",
    readTime: "4 min read",
  },
  {
    slug: "new-learning-center",
    title: "New Learning Center Inauguration in Rural Rajasthan",
    excerpt:
      "We opened our newest learning center, bringing quality education closer to 200 more children in one of Rajasthan's most underserved villages.",
    date: "February 28, 2025",
    author: "Bal Sansar Team",
    category: "Milestone",
    readTime: "3 min read",
  },
  {
    slug: "health-camp-reaches-500",
    title: "Quarterly Health Camp Reaches 500 Families",
    excerpt:
      "Our latest health camp provided free check-ups, medicines, and nutritional counseling to underserved families in three districts.",
    date: "January 10, 2025",
    author: "Healthcare Team",
    category: "Healthcare",
    readTime: "5 min read",
  },
  {
    slug: "digital-literacy-initiative",
    title: "Digital Literacy Initiative: Teaching Kids to Code",
    excerpt:
      "Our new STEM program is introducing children to the world of technology. From basic computer skills to simple coding — they're learning it all.",
    date: "December 5, 2024",
    author: "Education Team",
    category: "Education",
    readTime: "4 min read",
  },
  {
    slug: "womens-empowerment-success",
    title: "Women's Empowerment: 50 Micro-Businesses and Counting",
    excerpt:
      "Our women's self-help groups have helped launch over 50 small businesses in the past year, transforming families and communities.",
    date: "November 18, 2024",
    author: "Community Team",
    category: "Community",
    readTime: "6 min read",
  },
  {
    slug: "volunteer-spotlight-rahul",
    title: "Volunteer Spotlight: Rahul's Journey of Giving Back",
    excerpt:
      "Rahul Mehra, a software engineer from Bangalore, has been volunteering with us every weekend for two years. Here's his inspiring story.",
    date: "October 22, 2024",
    author: "Bal Sansar Team",
    category: "Volunteer Stories",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            News & Updates
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Updates from the field, success stories, event recaps, and insights from
            our work on the ground.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-gray-400">Featured Image</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-3">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {posts[0].author}
                  </span>
                  <span>{posts[0].readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Featured Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
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
