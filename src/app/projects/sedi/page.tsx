"use client";

import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Heart, ArrowRight, CheckCircle2, MapPin, Monitor, Scissors, Camera, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

export default function SEDIPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-900 to-foreground py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/15 rounded-full blur-[100px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Projects
          </Link>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 backdrop-blur-sm border border-amber-400/20">
                <Lightbulb className="h-8 w-8 text-amber-300" />
              </div>
              <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">Active Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">SEDI</h1>
            <p className="text-xl text-amber-200 mb-2">Skill &amp; Entrepreneurship Development Institute</p>
            <p className="text-lg text-gray-300 flex items-center gap-2"><MapPin className="h-4 w-4" /> Ajmer District, Rajasthan</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div className="rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={images.programs.skills}
                    alt="Skill development training at SEDI"
                    width={800}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-foreground">About SEDI</h2>
                <p>
                  The <strong>Skill and Entrepreneurship Development Institute (SEDI)</strong> aims
                  to address the skill-building needs of rural women and youth for their
                  overall development, livelihood, and quality survival. The institute
                  operates in the Ajmer district of Rajasthan.
                </p>
                <p>
                  BSS has been approved as a <strong>registered Training Centre by the Rajasthan
                  Knowledge Corporation Ltd. (RKCL)</strong> for running two certification courses:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-amber-50 border border-amber-100 p-5">
                    <Award className="h-6 w-6 text-amber-600 mb-2" />
                    <h4 className="font-bold text-foreground text-sm">RS-CIT</h4>
                    <p className="text-xs text-gray-500 mt-1">Rajasthan State Certificate Course in Information Technology</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-100 p-5">
                    <Award className="h-6 w-6 text-amber-600 mb-2" />
                    <h4 className="font-bold text-foreground text-sm">RS-CFA</h4>
                    <p className="text-xs text-gray-500 mt-1">Rajasthan State Certificate Course in Financial Accounting</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mt-8">Courses Offered</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white border border-gray-100 p-6 text-center card-hover">
                    <Monitor className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                    <h4 className="font-bold text-foreground text-sm">Computer Education</h4>
                    <p className="text-xs text-gray-500 mt-1">RS-CIT & basic computer training</p>
                  </div>
                  <div className="rounded-xl bg-white border border-gray-100 p-6 text-center card-hover">
                    <Camera className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                    <h4 className="font-bold text-foreground text-sm">Photography</h4>
                    <p className="text-xs text-gray-500 mt-1">Professional photography skills</p>
                  </div>
                  <div className="rounded-xl bg-white border border-gray-100 p-6 text-center card-hover">
                    <Scissors className="h-8 w-8 text-rose-500 mx-auto mb-3" />
                    <h4 className="font-bold text-foreground text-sm">Sewing &amp; Tailoring</h4>
                    <p className="text-xs text-gray-500 mt-1">Vocational sewing courses</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mt-8">Who Benefits</h3>
                <ul className="space-y-2">
                  {[
                    "Rural women seeking livelihood skills",
                    "Youth needing employable certifications",
                    "Aspiring entrepreneurs in rural areas",
                    "Women from self-help groups",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span className="text-sm">{b}</span></li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
                  <h3 className="font-bold text-foreground mb-4">Quick Facts</h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-600" /> Ajmer District</div>
                    <div className="flex items-center gap-3"><Lightbulb className="h-5 w-5 text-amber-600" /> 3+ courses offered</div>
                    <div className="flex items-center gap-3"><Award className="h-5 w-5 text-amber-600" /> RKCL-approved centre</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Support SEDI</h3>
                  <p className="text-gray-600 text-sm mb-4">Help us empower more women and youth with skills.</p>
                  <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors w-full">
                    <Heart className="h-4 w-4" /> Donate
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
