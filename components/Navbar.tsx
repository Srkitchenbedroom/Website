"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fdf8f0]/95 backdrop-blur-md shadow-md shadow-wood-200/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span
              className="font-display text-xl font-700 text-wood-800 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SR Kitchen
            </span>
            <span
              className="font-display text-xs text-wood-500 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              & Bedroom
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-wood-600"
                    : "text-wood-800 hover:text-wood-500"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-wood-500 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href="https://wa.me/447429018743?text=Hi%2C%20I%27m%20interested%20in%20your%20furniture%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wood-600 hover:bg-wood-700 text-white text-sm px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-wood-300/30"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-wood-800 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#1a1614] flex flex-col pt-24 px-8 pb-10"
          >
            <div className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-display transition-colors duration-200 ${
                      pathname === link.href ? "text-wood-400" : "text-white hover:text-wood-300"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://wa.me/447429018743"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white text-lg px-6 py-4 rounded-2xl"
            >
              <MessageCircle size={20} />
              Contact on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}