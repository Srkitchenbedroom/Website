"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Clock, Wrench, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { stats } from "@/lib/data";

const values = [
  {
    icon: Award,
    title: "Premium Materials",
    desc: "We source only the finest wood, hardware, and finishes — materials that last decades, not years.",
  },
  {
    icon: Wrench,
    title: "Precision Craftsmanship",
    desc: "Every joint, every edge, every drawer is crafted with meticulous attention to detail.",
  },
  {
    icon: Users,
    title: "Custom Design",
    desc: "No two homes are alike. We design every project from scratch to match your space and vision.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your time. Every project is completed on schedule without compromising quality.",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "We visit your home, understand your needs, and take measurements." },
  { step: "02", title: "Design", desc: "Our team creates a custom 3D design tailored to your space and style." },
  { step: "03", title: "Approval", desc: "You review and approve the design with full transparency on pricing." },
  { step: "04", title: "Manufacturing", desc: "We craft your furniture in our workshop using premium materials." },
  { step: "05", title: "Installation", desc: "Our skilled team installs everything cleanly and efficiently." },
  { step: "06", title: "Handover", desc: "Final walkthrough, quality check, and keys to your transformed space." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
              <h1
                className="text-5xl md:text-6xl text-wood-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                More Than
                <br />
                Just Furniture
              </h1>
              <div className="w-12 h-0.5 bg-wood-400 mb-6" />
              <p
                className="text-wood-700/80 text-xl leading-relaxed mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                SR Kitchen & Bedroom specializes in designing and building high-quality modular
                kitchens, wardrobes, and custom furniture tailored to modern homes. Our focus is
                precision craftsmanship, durable materials, and elegant designs.
              </p>
              <p className="text-wood-600/70 text-base leading-relaxed mb-8">
                Founded over a decade ago, we&apos;ve had the privilege of transforming hundreds of
                homes across the region. Every project is personal to us — we treat your home with
                the same care we&apos;d give our own.
              </p>
              <ul className="space-y-2.5">
                {["ISO-certified manufacturing process", "Lifetime warranty on all hardware", "Post-installation support", "Free design consultation"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-wood-700 text-sm">
                    <CheckCircle size={15} className="text-wood-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Our workshop and craftsmanship"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#1a1614] rounded-2xl p-5 shadow-xl">
                <p
                  className="text-3xl text-wood-300 mb-0.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  200+
                </p>
                <p className="text-white/60 text-xs">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p
                    className="text-4xl text-wood-700 mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-wood-500 text-xs tracking-wide uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
              <h2
                className="text-4xl text-wood-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-wood-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-wood-700 transition-colors duration-300">
                    <v.icon size={22} className="text-wood-600 group-hover:text-wood-200 transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-lg text-wood-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-wood-600/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#1a1614] px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-wood-400 text-xs tracking-[0.3em] uppercase mb-3">How We Work</p>
              <h2
                className="text-4xl text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Process
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-wood-700/40 rounded-2xl p-6 hover:border-wood-500/60 transition-colors duration-300">
                  <p
                    className="text-4xl text-wood-700 mb-3 font-display"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.step}
                  </p>
                  <h3
                    className="text-lg text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <ScrollReveal>
          <h2
            className="text-4xl text-wood-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-wood-600 text-lg mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Book a free consultation and let us transform your space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-wood-700 hover:bg-wood-600 text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get In Touch <ArrowRight size={15} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
