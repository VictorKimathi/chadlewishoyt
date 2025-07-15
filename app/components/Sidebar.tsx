"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  // { name: "PORTFOLIO", href: "/portfolio" }, // Renamed from Photography
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
  
export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed top-0 left-0 h-full bg-black text-white p-6 z-50">
      <div className="flex-shrink-0 mb-10 mt-4">
        <Link href="/" className="text-3xl font-bebas font-black tracking-wider text-white">
          CHAD LEWIS HOYT
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "block py-2 text-lg font-semibold tracking-wide transition-colors duration-300",
                  pathname === item.href
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-white hover:text-blue-600",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-shrink-0 mt-10 pt-6 border-t border-gray-800">
        <div className="flex space-x-4 justify-center">
          <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
