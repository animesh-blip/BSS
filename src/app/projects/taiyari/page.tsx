import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Heart, ArrowRight, CheckCircle2, MapPin, Users, Target, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Taiyari — Adolescent Health & Empowerment",
  description: "The Taiyari programme is an adolescent health awareness and empowerment initiative covering 30 Gram Panchayats in Ajmer and Tonk districts, Rajasthan.",
};

export default function TaiyariPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-green-900 to-foreground py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-green-500/15 rounded-full blur-[100px]" /></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 backdrop-blur-sm border border-green-400/20">
              <Stethoscope className="h-8 w-8 text-green-300" />
            </div>
            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">Active Project</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Taiyari</h1>
          <p className="text-xl text-green-200 mb-2">Adolescent Health Awareness &amp; Empowerment Programme</p>
          <p className="text-lg text-gray-300 flex items-center gap-2"><MapPin className="h-4 w-4" /> Jaipur &amp; Ajmer, Rajasthan</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { number: "1,800", label: "Direct Beneficiaries", icon: Users },
              { number: "20,000", label: "Indirect Impact", icon: BarChart3 },
              { number: "30", label: "Gram Panchayats", icon: MapPin },
              { number: "2", label: "Districts Covered", icon: Target },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-green-50 border border-green-100 p-6 text-center">
                <s.icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{s.number}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">About Taiyari</h2>
              <p>
                <strong>Taiyari</strong> is an Adolescent Health Awareness &amp; Empowerment
                Programme operating in Jaipur and Ajmer districts of Rajasthan. The programme
                focuses on building awareness about health, nutrition, reproductive health,
                and life skills among adolescents — particularly girls in rural areas.
              </p>
              <p>
                The project covers <strong>30 Gram Panchayats</strong> with 15 in
                Srinagar block of Ajmer district and 15 in Tonk block of Tonk district.
                It has directly impacted <strong>1,800 individuals</strong> and indirectly
                reached <strong>20,000 individuals</strong> through community awareness activities.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">Programme Focus Areas</h3>
              <div className="space-y-2">
                {[
                  "Adolescent health awareness and education",
                  "Sexual and Reproductive Health (SRH) information",
                  "Nutrition and hygiene awareness",
                  "Life skills development for adolescents",
                  "Community health awareness campaigns",
                  "Empowerment of adolescent girls",
                  "Training of community health workers",
                  "Engagement with Gram Panchayats and local governance",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span className="text-sm">{f}</span></div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8">Coverage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-green-50 border border-green-100 p-5">
                  <h4 className="font-bold text-foreground text-sm mb-1">Srinagar Block, Ajmer</h4>
                  <p className="text-xs text-gray-500">15 Gram Panchayats</p>
                </div>
                <div className="rounded-xl bg-green-50 border border-green-100 p-5">
                  <h4 className="font-bold text-foreground text-sm mb-1">Tonk Block, Tonk</h4>
                  <p className="text-xs text-gray-500">15 Gram Panchayats</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-green-50 border border-green-100 p-6">
                <h3 className="font-bold text-foreground mb-4">Quick Facts</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-green-600" /> Ajmer &amp; Tonk Districts</div>
                  <div className="flex items-center gap-3"><Users className="h-5 w-5 text-green-600" /> 1,800 direct beneficiaries</div>
                  <div className="flex items-center gap-3"><BarChart3 className="h-5 w-5 text-green-600" /> 20,000 indirect impact</div>
                  <div className="flex items-center gap-3"><Target className="h-5 w-5 text-green-600" /> 30 Gram Panchayats</div>
                </div>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Support Taiyari</h3>
                <p className="text-gray-600 text-sm mb-4">Help us reach more adolescents with health awareness.</p>
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
