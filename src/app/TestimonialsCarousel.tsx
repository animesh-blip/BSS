"use client";

import { Quote } from "lucide-react";
import Carousel from "@/components/Carousel";

const testimonials = [
  {
    quote: "Bal Sansar Sanstha has been instrumental in bringing quality education to children who had no access. Their dedication to every child is remarkable.",
    name: "Community Leader",
    role: "Ajmer District",
  },
  {
    quote: "The SEDI program gave me computer skills and confidence. I now work at a local business and support my family. BSS changed my life completely.",
    name: "SEDI Graduate",
    role: "Program Beneficiary",
  },
  {
    quote: "Through the Taiyari programme, I learned about health and my rights as an adolescent. The awareness sessions gave me courage to pursue my education.",
    name: "Taiyari Beneficiary",
    role: "Ajmer, Rajasthan",
  },
  {
    quote: "The Babli Boli listeners club empowered our entire village. We learned about our rights, health, and together we brought real change to our community.",
    name: "Women's Club Leader",
    role: "Ajmer District",
  },
  {
    quote: "My child couldn't read or write before joining BSPS. Now she helps other children with their homework. Education truly transforms lives.",
    name: "Parent",
    role: "Ajmer, Rajasthan",
  },
];

export default function TestimonialsCarousel() {
  return (
    <Carousel autoPlay autoPlayInterval={6000}>
      {testimonials.map((t) => (
        <div key={t.name + t.role} className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
          <div className="absolute -top-3 left-8">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Quote className="h-5 w-5 text-white" />
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mt-4 mb-6 italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-white font-bold">
              {t.name[0]}
            </div>
            <div>
              <div className="font-semibold text-white text-sm">{t.name}</div>
              <div className="text-gray-400 text-xs">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
