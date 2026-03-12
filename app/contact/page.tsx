"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}.\nPhone: ${form.phone}\n\n${form.message || "I'm interested in your furniture services."}`
    );
    window.open(`https://wa.me/447429018743?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream-100 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-wood-500 text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h1
              className="text-5xl md:text-6xl text-wood-900 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-wood-400 to-wood-200 mx-auto mb-5" />
            <p
              className="text-wood-600/80 text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to start your project? Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <ScrollReveal direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-wood-200/20 border border-wood-100">
              <h2
                className="text-2xl text-wood-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <p className="text-wood-900 text-lg font-medium mb-2">Message Sent!</p>
                  <p className="text-wood-600 text-sm">We&apos;ve opened WhatsApp with your message. We&apos;ll respond shortly!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-wood-500 text-sm underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWhatsApp} className="space-y-5">
                  <div>
                    <label className="block text-xs text-wood-600 tracking-wide uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 text-wood-900 placeholder-wood-300 focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all text-sm bg-cream-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-wood-600 tracking-wide uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+44 7429018743"
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 text-wood-900 placeholder-wood-300 focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all text-sm bg-cream-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-wood-600 tracking-wide uppercase mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project (e.g., modular kitchen for 2BHK flat)..."
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 text-wood-900 placeholder-wood-300 focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all text-sm bg-cream-50 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba58] text-white py-3.5 rounded-xl text-sm font-medium transition-colors duration-200"
                    >
                      <MessageCircle size={16} />
                      Send via WhatsApp
                    </button>
                    <a
                      href={`https://wa.me/447429018743`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-wood-700 hover:bg-wood-600 text-white py-3.5 rounded-xl text-sm font-medium transition-colors duration-200"
                    >
                      <Send size={15} />
                      Direct WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl text-wood-900 mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Information
                </h2>

                <div className="space-y-5">
                  <a
                    href="https://wa.me/447429018743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                      <MessageCircle size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-wood-500 uppercase tracking-wide mb-0.5">WhatsApp</p>
                      <p className="text-wood-800 font-medium">+44 74290 18743</p>
                    </div>
                  </a>

                  <a
                    href="tel:+447429018743"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 bg-wood-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-wood-200 transition-colors">
                      <Phone size={18} className="text-wood-600" />
                    </div>
                    <div>
                      <p className="text-xs text-wood-500 uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="text-wood-800 font-medium">+44 74290 18743</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-wood-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-wood-600" />
                    </div>
                    <div>
                      <p className="text-xs text-wood-500 uppercase tracking-wide mb-0.5">Location</p>
                      <p className="text-wood-800">Your City, State</p>
                      <p className="text-wood-600 text-sm">India — 000 000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-cream-100 rounded-2xl p-6">
                <h3
                  className="text-lg text-wood-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Working Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-wood-700">
                    <span>Monday – Saturday</span>
                    <span className="text-wood-500">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-wood-700">
                    <span>Sunday</span>
                    <span className="text-wood-500">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-wood-200 h-52 bg-wood-100 flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241317.11609818658!2d72.74109995016095!3d19.082502419986555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="SR Kitchen & Bedroom Location"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
