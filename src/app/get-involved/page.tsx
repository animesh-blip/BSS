import type { Metadata } from "next";
import Link from "next/link";
import {
  HandHeart,
  Users,
  Building2,
  Megaphone,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Bal Sansar India as a volunteer, partner, or advocate. There are many ways to make a difference in children's lives.",
};

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Give your time and skills to directly impact children's lives. Whether you can teach, mentor, or help organize events — every contribution matters.",
    actions: [
      "Teach at our learning centers",
      "Mentor students one-on-one",
      "Help organize events and camps",
      "Provide professional skills (design, IT, etc.)",
      "Weekend and flexible commitments available",
    ],
    cta: "Apply to Volunteer",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    description:
      "Partner with us for CSR initiatives, employee engagement programs, or cause-related marketing that creates real social impact.",
    actions: [
      "CSR program collaboration",
      "Employee volunteering programs",
      "Sponsor a specific program or center",
      "Cause-related marketing campaigns",
      "Skill-based volunteering from your team",
    ],
    cta: "Become a Partner",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description:
      "Help amplify our mission by sharing our work on social media, writing about us, or organizing awareness campaigns in your community.",
    actions: [
      "Share our stories on social media",
      "Organize a fundraiser in your community",
      "Write about our work on your blog",
      "Refer potential donors and volunteers",
      "Host an awareness event",
    ],
    cta: "Start Advocating",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Heart,
    title: "Monthly Giving",
    description:
      "Become a sustaining donor with a monthly contribution. Regular giving helps us plan better and create lasting programs for children.",
    actions: [
      "Predictable support for our programs",
      "Tax benefits under Section 80G",
      "Regular impact reports and updates",
      "Exclusive invitations to events",
      "Cancel or modify anytime",
    ],
    cta: "Start Monthly Giving",
    color: "bg-rose-50 text-rose-600",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-dark to-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light mb-4">
            Join Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get Involved</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            There are many ways to support our mission. Whether you can give your time,
            skills, resources, or voice — every contribution helps change a child&apos;s life.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((way) => (
              <div
                key={way.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${way.color} mb-4`}
                >
                  <way.icon className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">{way.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{way.description}</p>
                <ul className="space-y-2 mb-6">
                  {way.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  {way.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form CTA */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Fill out our volunteer interest form and our team will get back to you
            within 48 hours to discuss how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <Heart className="h-5 w-5" />
              Donate Instead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
