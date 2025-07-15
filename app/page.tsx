import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Iconic sports car on racing track"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-4">CHAD LEWIS HOYT</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">AUTOMOTIVE STORYTELLER & CONSULTANT</p>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Photography Card */}
          <Link href="/photography" className="group">
            <div className="relative h-96 overflow-hidden bg-black">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional automotive photography showcase"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-black uppercase tracking-wide mb-2">PHOTOGRAPHY</h2>
                <p className="text-sm opacity-90">Capturing the soul of automotive excellence</p>
              </div>
            </div>
          </Link>

          {/* Editorial Card */}
          <Link href="/editorial" className="group">
            <div className="relative h-96 overflow-hidden bg-black">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Editorial writing and automotive journalism"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-black uppercase tracking-wide mb-2">EDITORIAL</h2>
                <p className="text-sm opacity-90">Stories that drive the automotive world</p>
              </div>
            </div>
          </Link>

          {/* Consulting Card */}
          <Link href="/consulting" className="group">
            <div className="relative h-96 overflow-hidden bg-black">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Automotive consulting and brand strategy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-black uppercase tracking-wide mb-2">CONSULTING</h2>
                <p className="text-sm opacity-90">Strategic expertise for automotive brands</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
