import Image from "next/image"
import Link from "next/link"
import { PlayCircle } from "lucide-react"

const mediaFeatures = [
  {
    type: "Video",
    title: "Interview: The Art of Automotive Storytelling",
    source: "Auto Insights TV",
    date: "March 2024",
    thumbnail: "/placeholder.svg?height=300&width=500",
    link: "#", // Placeholder for video link
  },
  {
    type: "Article",
    title: "Featured Photographer: Chad Lewis Hoyt's Racing Portfolio",
    source: "Motorsport Monthly",
    date: "February 2024",
    thumbnail: "/placeholder.svg?height=300&width=500",
    link: "#", // Placeholder for article link
  },
  {
    type: "Podcast",
    title: "Guest Speaker: Future of Electric Vehicles",
    source: "The Car Talk Show",
    date: "January 2024",
    thumbnail: "/placeholder.svg?height=300&width=500",
    link: "#", // Placeholder for podcast link
  },
  {
    type: "Press Release",
    title: "Chad Lewis Hoyt Joins Advisory Board of AutoTech Summit",
    source: "PR Newswire",
    date: "December 2023",
    thumbnail: "/placeholder.svg?height=300&width=500",
    link: "#", // Placeholder for press release link
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Media and press features of Chad Lewis Hoyt"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">MEDIA & PRESS</h1>
          <p className="text-xl mt-4">Where I've been featured</p>
        </div>
      </section>

      {/* Media Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaFeatures.map((feature, index) => (
            <Link key={index} href={feature.link} className="group" target="_blank" rel="noopener noreferrer">
              <article className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.thumbnail || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {feature.type === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                      <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {feature.type}
                  </span>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    {feature.source} • {feature.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
