"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "Education", "Healthcare", "Events", "Community", "Arts"];

const galleryItems = [
  { id: 1, title: "Children learning at our center", category: "Education", aspect: "landscape" },
  { id: 2, title: "Health camp in progress", category: "Healthcare", aspect: "portrait" },
  { id: 3, title: "Annual Day celebration", category: "Events", aspect: "landscape" },
  { id: 4, title: "Art class workshop", category: "Arts", aspect: "square" },
  { id: 5, title: "Community meeting", category: "Community", aspect: "landscape" },
  { id: 6, title: "Students with scholarships", category: "Education", aspect: "portrait" },
  { id: 7, title: "Nutrition program", category: "Healthcare", aspect: "landscape" },
  { id: 8, title: "Dance performance", category: "Arts", aspect: "landscape" },
  { id: 9, title: "Women's self-help group", category: "Community", aspect: "square" },
  { id: 10, title: "Republic Day celebration", category: "Events", aspect: "landscape" },
  { id: 11, title: "Computer training class", category: "Education", aspect: "landscape" },
  { id: 12, title: "Sports day activities", category: "Events", aspect: "portrait" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            Our Moments
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the lives we touch and the moments that make our work
            meaningful.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div
                  className={`relative bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center ${
                    item.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : item.aspect === "square"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
