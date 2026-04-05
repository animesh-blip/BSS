"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import { FloatingShapes } from "@/components/illustrations";
import { images } from "@/lib/images";

const categories = ["All", ...Array.from(new Set(images.gallery.map((img) => img.category)))];
const aspects = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered =
    activeCategory === "All"
      ? images.gallery
      : images.gallery.filter((img) => img.category === activeCategory);

  const openLightbox = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1a2a3e] to-secondary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-light mb-6 border border-white/10">
              <Camera className="h-4 w-4" /> Our Moments
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Gallery</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A glimpse into the lives we touch — from classrooms to health camps, skill centers to community gatherings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.src + i} delay={i * 0.04}>
                <div
                  className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer card-hover"
                  onClick={() => openLightbox(i)}
                >
                  <div className={`relative ${aspects[i % 3]} overflow-hidden`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                        <p className="text-white font-medium text-sm">{item.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered.map((img) => ({ src: img.src, alt: img.alt }))}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % filtered.length)}
      />
    </>
  );
}
