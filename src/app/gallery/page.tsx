"use client";

import { useState } from "react";
import { Camera, Sparkles, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { FloatingShapes } from "@/components/illustrations";

const categories = ["All", "Education", "Healthcare", "Events", "Skill Development", "Community", "School"];

const galleryItems = [
  { id: 1, title: "BSPS classroom activities", category: "Education", aspect: "landscape" },
  { id: 2, title: "Health camp check-ups", category: "Healthcare", aspect: "portrait" },
  { id: 3, title: "Annual Day celebration", category: "Events", aspect: "landscape" },
  { id: 4, title: "SEDI computer training", category: "Skill Development", aspect: "square" },
  { id: 5, title: "Community awareness meeting", category: "Community", aspect: "landscape" },
  { id: 6, title: "Children at BSPS", category: "School", aspect: "portrait" },
  { id: 7, title: "Taiyari health session", category: "Healthcare", aspect: "landscape" },
  { id: 8, title: "Sewing training at SEDI", category: "Skill Development", aspect: "landscape" },
  { id: 9, title: "Women's self-help group", category: "Community", aspect: "square" },
  { id: 10, title: "Republic Day celebration", category: "Events", aspect: "landscape" },
  { id: 11, title: "Photography course", category: "Skill Development", aspect: "portrait" },
  { id: 12, title: "Children learning at school", category: "Education", aspect: "landscape" },
  { id: 13, title: "NGO Leadership Award 2018", category: "Events", aspect: "landscape" },
  { id: 14, title: "Rural women listeners club", category: "Community", aspect: "square" },
  { id: 15, title: "Student scholarship ceremony", category: "School", aspect: "landscape" },
  { id: 16, title: "Nutrition awareness camp", category: "Healthcare", aspect: "portrait" },
];

const gradients = [
  "from-primary/15 to-secondary/10",
  "from-blue-100/50 to-purple-100/50",
  "from-green-100/50 to-teal-100/50",
  "from-amber-100/50 to-orange-100/50",
  "from-rose-100/50 to-pink-100/50",
  "from-cyan-100/50 to-blue-100/50",
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
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
            <Camera className="h-4 w-4" />
            Our Moments
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the lives we touch — from classrooms to health camps,
            skill centers to community gatherings.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer card-hover"
              >
                <div
                  className={`relative bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center ${
                    item.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : item.aspect === "square"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <div className="text-center p-6">
                    <Camera className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm font-medium">{item.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                      <p className="text-white font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-6 py-3 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-primary" />
              Replace these placeholders with your actual photos
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
