"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils" // Assuming cn utility is available

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" }, // Renamed from Photography
    { name: "EDITORIAL", href: "/editorial" },
    { name: "CONSULTING", href: "/consulting" }, // Renamed from Services
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "BLOG", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "RESUME", href: "/resume" },
    { name: "MEDIA", href: "/media" },
    { name: "CASE STUDIES", href: "/case-studies" },
    { name: "NEWSLETTER", href: "/newsletter" },
  ]

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bebas font-black tracking-wider">
          CHAD LEWIS HOYT
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col py-4 px-6 space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block py-2 text-lg font-semibold tracking-wide hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
