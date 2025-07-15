import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Newsletter signup for automotive insights"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">NEWSLETTER</h1>
          <p className="text-xl mt-4">Stay updated with the latest automotive stories and insights</p>
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Inner Circle</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get exclusive content, early access to new photography, and deep dives into the automotive world delivered
          directly to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
            required
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2">
            SUBSCRIBE
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </section>
    </div>
  )
}
