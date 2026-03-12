"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryImages } from "@/lib/data";

const filters = ["All", "Kitchens", "Bedrooms", "Wardrobes", "TV Units", "Custom Furniture", "Office"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">Portfolio</p>
            <h1
              className="text-5xl md:text-6xl text-wood-900 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Work
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-wood-400 to-wood-200 mx-auto mb-5" />
            <p
              className="text-wood-600/80 text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Every project is a testament to our commitment to quality, precision, and elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[60px] z-30 bg-[#fdf8f0]/95 backdrop-blur-sm border-b border-wood-200/50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-wood-700 text-white shadow-md"
                    : "bg-wood-100 text-wood-700 hover:bg-wood-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Gallery images={filtered} masonry />
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-wood-400">
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-100 text-center px-6">
        <ScrollReveal>
          <p
            className="text-2xl text-wood-700 mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Like what you see?
          </p>
          <h2
            className="text-3xl md:text-4xl text-wood-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Build Your Dream Space
          </h2>
          <a
            href="https://wa.me/447429018743?text=Hi%2C%20I%27m%20interested%20in%20custom%20furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm hover:bg-[#20ba58] transition-colors duration-200"
          >
            Get a Free Quote on WhatsApp
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
