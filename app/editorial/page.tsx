import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "The Future of Electric Supercars",
    excerpt:
      "Exploring how electric powertrains are revolutionizing the supercar landscape, from Tesla's Roadster to Rimac's C_Two.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2024",
    readTime: "8 min read",
    href: "/editorial/electric-supercars",
  },
  {
    title: "Inside Formula 1's Technical Revolution",
    excerpt: "A deep dive into the aerodynamic innovations that are reshaping modern Formula 1 racing.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 28, 2024",
    readTime: "12 min read",
    href: "/editorial/f1-technical-revolution",
  },
  {
    title: "Classic Car Restoration: Art Meets Engineering",
    excerpt: "Following master craftsmen as they bring vintage automotive legends back to life.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 10, 2024",
    readTime: "10 min read",
    href: "/editorial/classic-restoration",
  },
  {
    title: "The Rise of Hypercar Culture",
    excerpt: "How limited-production hypercars are pushing the boundaries of automotive engineering and design.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 22, 2024",
    readTime: "15 min read",
    href: "/editorial/hypercar-culture",
  },
  {
    title: "Sustainable Racing: The Green Revolution",
    excerpt: "Examining how motorsports are adapting to environmental challenges while maintaining competitive edge.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 8, 2024",
    readTime: "9 min read",
    href: "/editorial/sustainable-racing",
  },
  {
    title: "Digital Transformation in Automotive Design",
    excerpt: "How virtual reality and AI are revolutionizing the way cars are designed and developed.",
    image: "/placeholder.svg?height=300&width=500",
    date: "December 15, 2023",
    readTime: "11 min read",
    href: "/editorial/digital-transformation",
  },
]

export default function EditorialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Editorial writing and automotive journalism"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">EDITORIAL</h1>
          <p className="text-xl mt-4">Stories that drive the automotive world forward</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={article.href} className="group">
              <article className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
