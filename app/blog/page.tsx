import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Resurgence of Analog Driving",
    excerpt: "In an increasingly digital world, the raw, unfiltered experience of analog cars is making a comeback.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 1, 2024",
    readTime: "7 min read",
    href: "/blog/analog-driving",
  },
  {
    title: "Electric Dreams: The Future of Hypercars",
    excerpt: "How electric powertrains are pushing the boundaries of speed and design in the hypercar segment.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 20, 2024",
    readTime: "10 min read",
    href: "/blog/electric-hypercars",
  },
  {
    title: "Behind the Lens: Capturing Speed",
    excerpt: "A look into the techniques and challenges of photographing high-speed motorsports.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 5, 2024",
    readTime: "9 min read",
    href: "/blog/capturing-speed",
  },
  {
    title: "The Art of Automotive Restoration",
    excerpt: "Exploring the meticulous process of bringing classic cars back to their former glory.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 18, 2024",
    readTime: "12 min read",
    href: "/blog/automotive-restoration",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Automotive blog and insights"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">BLOG & INSIGHTS</h1>
          <p className="text-xl mt-4">Deep dives into automotive culture and industry trends</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.href} className="group">
              <article className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
