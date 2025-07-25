import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "RACING EVENTS",
    description: "High-octane moments from the track",
    image: "/carhome.jpg?height=400&width=600",
    href: "/portfolio/racing",
  },
  {
    title: "CLASSIC CARS",
    description: "Timeless automotive elegance",
    image: "/carhome.jpg?height=400&width=600",
    href: "/portfolio/classics",
  },
  {
    title: "EDITORIAL SHOOTS",
    description: "Professional automotive photography",
    image: "/carhome.jpg?height=400&width=600",
    href: "/portfolio/editorial",
  },
  {
    title: "WORKSHOPS",
    description: "Behind the scenes craftsmanship",
    image: "/carhome.jpg?height=400&width=600",
    href: "/portfolio/workshops",
  },
  {
    title: "STREET CULTURE",
    description: "Urban automotive lifestyle",
    image: "/carhome.jpg?height=400&width=600",
    href: "/portfolio/street",
  },
  {
    title: "MOTORSPORTS",
    description: "Professional racing photography",
    image: "/carhome.jpg?height=400&width=600",
    href: "/portfolio/motorsports",
  },
]

export default function PhotographyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Professional automotive photography portfolio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">PORTFOLIO</h1>
          <p className="text-xl mt-4">Showcasing a decade of automotive stories</p>
        </div>
      </section>

      {/* Photography Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative h-80 overflow-hidden bg-black">
                <Image
                  src={category.image || "/carhome.jpg"}
                  alt={category.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-xl font-bebas font-black tracking-wide mb-2">{category.title}</h2>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
