"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "PHOTOGRAPHY", href: "/photography" },
  { name: "EDITORIAL", href: "/editorial" },
  { name: "CONSULTING", href: "/consulting" },
  { name: "ABOUT", href: "/about" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bebas font-black tracking-wider">
            CHAD LEWIS HOYT
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors duration-300",
                  pathname === item.href ? "text-red-600 border-b-2 border-red-600" : "text-black hover:text-red-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
