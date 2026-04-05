import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Heart, ArrowRight, CheckCircle2, MapPin, Users, BookOpen, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Bal Sansar Public School (BSPS)",
  description: "BSPS provides quality pre-primary and primary education to rural children in Ajmer district, Rajasthan, focusing on multiple intelligences and holistic development.",
};

export default function BSPSPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-900 to-foreground py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/15 rounded-full blur-[100px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/20">
              <GraduationCap className="h-8 w-8 text-blue-300" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">Active Project</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Bal Sansar Public School</h1>
          <p className="text-lg text-gray-300 flex items-center gap-2"><MapPin className="h-4 w-4" /> Ajmer, Rajasthan</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">About BSPS</h2>
              <p>
                The <strong>Bal Sansar Public School (BSPS)</strong> is committed to delivering
                high-quality pre-primary and primary education to rural children within
                the Ajmer district of Rajasthan. The school implements a comprehensive
                pre-school education program focused on preparing children for school
                and fostering the development of multiple intelligences.
              </p>
              <p>
                BSPS provides quality, equitable education to poor and underprivileged
                children up to 8th class, with plans for gradual expansion to elementary
                and senior secondary levels. The curriculum emphasizes not just academic
                excellence, but holistic child development.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Quality pre-primary & primary education",
                  "Focus on multiple intelligences",
                  "Holistic child development approach",
                  "Serving underprivileged rural children",
                  "Plans for expansion to senior secondary",
                  "Equitable education for all",
                  "Experienced and trained teachers",
                  "Safe and nurturing environment",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
                <h3 className="font-bold text-foreground mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /><span className="text-sm text-gray-600">Ajmer District, Rajasthan</span></div>
                  <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-blue-600" /><span className="text-sm text-gray-600">Pre-primary to 8th Class</span></div>
                  <div className="flex items-center gap-3"><Users className="h-5 w-5 text-blue-600" /><span className="text-sm text-gray-600">Rural underprivileged children</span></div>
                  <div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-blue-600" /><span className="text-sm text-gray-600">Multiple intelligences focus</span></div>
                </div>
              </div>

              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Support This Project</h3>
                <p className="text-gray-600 text-sm mb-4">Help us provide quality education to more children.</p>
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors w-full">
                  <Heart className="h-4 w-4" /> Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
