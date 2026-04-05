"use client";

import Image from "next/image";
import { Sparkles, Calendar } from "lucide-react";
import Carousel from "@/components/Carousel";
import { images } from "@/lib/images";

const news = [
  {
    title: "Rajasthan NGO Leadership Award 2018",
    excerpt: "Dr. Priyamvada Singh received the prestigious award at the World CSR Day ceremony.",
    date: "2018",
    category: "Achievement",
    image: images.blog[0],
  },
  {
    title: "Taiyari Programme Reaches 20,000",
    excerpt: "Adolescent health programme impacts 1,800 directly and 20,000 indirectly across 30 Gram Panchayats.",
    date: "Recent",
    category: "Milestone",
    image: images.blog[1],
  },
  {
    title: "BSS Approved as RKCL Training Centre",
    excerpt: "Now offering RS-CIT and RS-CFA certification at SEDI.",
    date: "Recent",
    category: "Education",
    image: images.blog[2],
  },
  {
    title: "Babli Boli: 14,670 Members Strong",
    excerpt: "100 Rural Women Listeners Clubs successfully formed in Ajmer district.",
    date: "Completed",
    category: "Impact",
    image: images.blog[3],
  },
  {
    title: "Health Camps Serve Hundreds",
    excerpt: "Regular health camps provide free check-ups and medicines to underserved families.",
    date: "Ongoing",
    category: "Healthcare",
    image: images.blog[4],
  },
];

export default function NewsCarousel() {
  return (
    <Carousel autoPlay autoPlayInterval={4000}>
      {news.map((post) => (
        <article key={post.title} className="group rounded-2xl bg-white border border-gray-100 overflow-hidden card-hover h-full">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
            </div>
            <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </Carousel>
  );
}
