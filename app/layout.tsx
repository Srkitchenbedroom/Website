import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "SR Kitchen & Bedroom | Premium Custom Furniture",
    template: "%s | SR Kitchen & Bedroom",
  },
  description:
    "SR Kitchen & Bedroom specializes in designing and building high-quality modular kitchens, wardrobes, and custom furniture tailored to modern homes.",
  keywords: ["modular kitchen", "bedroom furniture", "wardrobe", "TV unit", "custom furniture"],
  openGraph: {
    title: "SR Kitchen & Bedroom | Premium Custom Furniture",
    description: "Custom furniture crafted for modern homes.",
    type: "website",
    locale: "en_IN",
    siteName: "SR Kitchen & Bedroom",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
