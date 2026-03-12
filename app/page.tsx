"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, Award, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryImages, categories, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  const featuredImages = galleryImages.slice(0, 6);
  const featuredCategories = categories.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="SR Kitchen & Bedroom hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block border border-wood-400/60 text-wood-300 text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full backdrop-blur-sm">
              Premium Custom Furniture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SR Kitchen
            <br />
            <span className="italic text-wood-300">&amp; Bedroom</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 mb-10 font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Custom Furniture Crafted for Modern Homes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/work"
              className="flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-wood-900/30 hover:-translate-y-0.5"
            >
              View Our Work <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/447429018743?text=Hi%2C%20I%27m%20interested%20in%20custom%20furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba58] text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={16} /> Contact on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a1614] py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <p
                    className="text-4xl md:text-5xl text-wood-300 mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs tracking-wide uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">Portfolio</p>
            <h2
              className="text-4xl md:text-5xl text-wood-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured Projects
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-wood-400 to-wood-200 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredImages.map((img, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-wood-100 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`relative overflow-hidden ${i === 0 || i === 3 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-wood-300 text-xs tracking-widest uppercase">{img.category}</span>
                  <p className="text-white font-display text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border-2 border-wood-500 text-wood-600 hover:bg-wood-600 hover:text-white px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300"
            >
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">What We Do</p>
              <h2
                className="text-4xl md:text-5xl text-wood-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Categories
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-wood-400 to-wood-200 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link href={`/categories#${cat.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-wood-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        {cat.count}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="text-xl text-wood-800 group-hover:text-wood-600 transition-colors duration-200 mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-wood-600/70 text-sm line-clamp-2">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BRAND */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/about.jpg"
                    alt="Our craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-wood-800 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-display mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>12+</p>
                  <p className="text-xs text-wood-300 tracking-wide">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
                <h2
                  className="text-4xl md:text-5xl text-wood-900 mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Craftsmanship You Can
                  <span className="italic text-wood-500"> Trust</span>
                </h2>
                <div className="w-12 h-0.5 bg-wood-400 mb-6" />
                <p
                  className="text-wood-700/80 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  SR Kitchen & Bedroom specializes in designing and building high-quality modular
                  kitchens, wardrobes, and custom furniture tailored to modern homes. Our focus is
                  precision craftsmanship, durable materials, and elegant designs.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Premium Grade Materials", "Custom Design Approach", "12+ Years Experience", "On-Time Delivery"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-wood-700 text-sm">
                      <CheckCircle size={16} className="text-wood-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-wood-700 hover:bg-wood-600 text-white px-7 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-wood-900/20"
                >
                  Learn More About Us <ArrowRight size={15} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-wood-800">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-wood-300 text-xs tracking-[0.3em] uppercase mb-3">Customer Reviews</p>
              <h2
                className="text-4xl md:text-5xl text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Happy Families
              </h2>
              <div className="w-16 h-0.5 bg-wood-400 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-wood-700/50 border border-wood-600/30 rounded-2xl p-7 backdrop-blur-sm">
                  <div className="flex gap-0.5 mb-4">
                    {Array(t.rating).fill(null).map((_, j) => (
                      <Star key={j} size={14} className="fill-wood-300 text-wood-300" />
                    ))}
                  </div>
                  <p
                    className="text-white/80 text-lg leading-relaxed mb-5 italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-wood-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Award size={36} className="text-wood-400 mx-auto mb-5" />
            <h2
              className="text-4xl md:text-5xl text-wood-900 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Transform
              <br />
              <span className="italic text-wood-500">Your Home?</span>
            </h2>
            <p className="text-wood-600 text-lg mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Get a free consultation and quote for your dream furniture project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/447429018743?text=Hi%2C%20I%27m%20interested%20in%20custom%20furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-[#20ba58] hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle size={16} /> Get Free Quote on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-wood-500 text-wood-600 hover:bg-wood-600 hover:text-white px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300"
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
