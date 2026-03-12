"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { categories, galleryImages } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-[#1a1614] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/kitchen1.jpg" alt="bg" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/80 to-[#1a1614]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-wood-400 text-xs tracking-[0.3em] uppercase mb-3">Explore</p>
            <h1
              className="text-5xl md:text-6xl text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Categories
            </h1>
            <div className="w-16 h-0.5 bg-wood-500 mx-auto mb-5" />
            <p
              className="text-white/60 text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Explore our full range of custom furniture solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-wood-200/30 transition-shadow duration-400 border border-wood-100">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-wood-700/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {cat.count}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl text-wood-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-wood-600/70 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(cat.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs px-4 py-2 rounded-full hover:bg-[#20ba58] transition-colors"
                    >
                      <MessageCircle size={13} />
                      Get Quote
                    </a>
                    <Link
                      href="/work"
                      className="flex items-center gap-1.5 text-wood-600 text-xs hover:text-wood-400 transition-colors"
                    >
                      See Projects <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Example projects showcase */}
      <section className="py-16 bg-cream-100 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">Recent Work</p>
              <h2
                className="text-4xl text-wood-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Example Projects
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    <p className="text-wood-300 text-xs">{img.category}</p>
                    <p className="text-white text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
