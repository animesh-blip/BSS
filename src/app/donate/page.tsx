"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Shield, CreditCard, Landmark, QrCode, Check, CheckCircle2, Award, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { FloatingShapes } from "@/components/illustrations";
import ScrollReveal from "@/components/ScrollReveal";

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactLevels = [
  { amount: "₹500", impact: "Provides school supplies for one child for a month" },
  { amount: "₹1,000", impact: "Funds mid-day meals for 10 children for a week" },
  { amount: "₹2,500", impact: "Sponsors a child's education for one month" },
  { amount: "₹5,000", impact: "Supports a family through health camp services" },
  { amount: "₹10,000", impact: "Funds a SEDI skill-development course for a woman" },
  { amount: "₹25,000", impact: "Sponsors a child's full year of education at BSPS" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const donationAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-15">
          <Image src={images.donate} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Make a Difference Today
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your generous contribution directly empowers children, women, and
              communities across Rajasthan. Every rupee counts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Choose Your Donation
                </h2>

                {/* One-time / Monthly Toggle */}
                <div className="flex rounded-full bg-gray-100 p-1 mb-8 max-w-xs">
                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`flex-1 rounded-full py-2.5 text-sm font-medium transition-colors ${
                      !isMonthly ? "bg-white shadow text-foreground" : "text-gray-500"
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`flex-1 rounded-full py-2.5 text-sm font-medium transition-colors ${
                      isMonthly ? "bg-white shadow text-foreground" : "text-gray-500"
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                      className={`rounded-xl py-3.5 text-sm font-semibold transition-all ${
                        selectedAmount === amount && !customAmount
                          ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg"
                          : "bg-white text-foreground border border-gray-200 hover:border-primary card-hover"
                      }`}
                    >
                      ₹{amount.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Or enter a custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="number" placeholder="Enter amount" value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                      className="w-full rounded-xl border border-gray-200 py-3.5 pl-8 pr-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                {/* Donor Info */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-foreground">Your Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                    <input type="email" placeholder="Email Address" className="rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                  <input type="text" placeholder="PAN Number (for 80G tax receipt)" className="w-full rounded-xl border border-gray-200 py-3 px-4 text-foreground placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>

                {/* Submit */}
                <button className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white py-4 font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 animate-pulse-glow">
                  <Heart className="h-5 w-5" />
                  Donate {donationAmount ? `₹${donationAmount.toLocaleString("en-IN")}` : ""}{" "}
                  {isMonthly ? "Monthly" : ""}
                </button>

                {/* Trust */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-green-500" /> Secure Payment</span>
                  <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> 80G Tax Exemption</span>
                  <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> FCRA Registered</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Impact Info */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="rounded-2xl bg-muted p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" /> Your Impact
                  </h3>
                  <div className="space-y-4">
                    {impactLevels.map((level) => (
                      <div key={level.amount} className="flex items-start gap-3">
                        <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs shrink-0">
                          {level.amount}
                        </div>
                        <p className="text-gray-600 text-sm">{level.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registration Info */}
                <div className="rounded-2xl border border-gray-100 p-8">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" /> Registration Details
                  </h3>
                  <div className="space-y-3 text-sm">
                    {Object.entries(siteConfig.registration).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500 font-medium">{key} Registration</span>
                        <span className="text-foreground font-mono text-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tax Benefits */}
                <div className="rounded-2xl bg-green-50 border border-green-100 p-6">
                  <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" /> Tax Benefits under 80G
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    All donations to Bal Sansar Sanstha are eligible for tax deduction
                    under Section 80G of the Income Tax Act (Reg: {siteConfig.registration["80G"]}).
                    You will receive a tax receipt via email after your donation.
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-bold text-foreground mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600"><CreditCard className="h-5 w-5 text-primary" /><span className="text-sm">Credit / Debit Card</span></div>
                    <div className="flex items-center gap-3 text-gray-600"><QrCode className="h-5 w-5 text-primary" /><span className="text-sm">UPI (GPay, PhonePe, Paytm)</span></div>
                    <div className="flex items-center gap-3 text-gray-600"><Landmark className="h-5 w-5 text-primary" /><span className="text-sm">Net Banking</span></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
