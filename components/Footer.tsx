"use client";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, ChevronRight } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/categories#kitchens", label: "Modular Kitchens" },
  { href: "/categories#bedrooms", label: "Bedroom Furniture" },
  { href: "/categories#wardrobes", label: "Wardrobes" },
  { href: "/categories#tvunits", label: "TV Units" },
  { href: "/categories#office", label: "Office Furniture" },
  { href: "/categories#dining", label: "Dining Tables" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1614] text-white/80">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p
                className="text-2xl font-display text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SR Kitchen
              </p>
              <p
                className="text-wood-400 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                & Bedroom
              </p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Crafting premium modular kitchens, wardrobes, and custom furniture for modern homes.
            </p>
            <a
              href="https://wa.me/447429018743?text=Hi%2C%20I%27m%20interested%20in%20your%20furniture%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm px-4 py-2.5 rounded-full transition-colors duration-200"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-display text-lg mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <div className="w-8 h-px bg-wood-500 mb-5" />
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-white/60 hover:text-wood-300 transition-colors duration-200"
                  >
                    <ChevronRight size={13} className="text-wood-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="text-white font-display text-lg mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Categories
            </h4>
            <div className="w-8 h-px bg-wood-500 mb-5" />
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="flex items-center gap-1.5 text-sm text-white/60 hover:text-wood-300 transition-colors duration-200"
                  >
                    <ChevronRight size={13} className="text-wood-500" />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-display text-lg mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h4>
            <div className="w-8 h-px bg-wood-500 mb-5" />
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+447429018743"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-wood-300 transition-colors duration-200"
                >
                  <Phone size={15} className="text-wood-500 mt-0.5 shrink-0" />
                  +91 99999 99999
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-wood-300 transition-colors duration-200"
                >
                  <MapPin size={15} className="text-wood-500 mt-0.5 shrink-0" />
                  217 High Street, West Drayton, England, UB7 7GN — United Kingdom
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447429018743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-green-400 transition-colors duration-200"
                >
                  <MessageCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SR Kitchen & Bedroom. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Premium Custom Furniture — Crafted with Care
          </p>
        </div>
      </div>
    </footer>
  );
}
