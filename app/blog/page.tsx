import Image from "next/image"
import Link from "next/link"

const blogPosts = [

  {
    title: "Old-School Cool, New-Age Tech: Why Motorcycle Brands Are Embracing Nostalgia with Modern Tech",
    excerpt: "In an age of rapid innovation, where electric bikes, adaptive cruise control and TFT dashboards are becoming the norm, motorcycle manufacturers are increasingly looking backward for inspiration. Brands like Triumph, Yamaha, Royal Enfield and Honda are embracing retro aesthetics while integrating cutting-edge technology, creating a new category of bikes that fuse timeless style with 21st-century performance.",
    image: "/carhome.jpg?height=300&width=500",
    date: "April 20, 2025",
    readTime: "7 min read",
    href: "/blog/Old-School Cool_New_Age_Tech",
  },
  {
    title: "Are EV Muscle Cars Like the Charger Daytona SRT the Future – or Just a Phase?Electric Dreams: The Future of Hypercars",
    excerpt: "For decades, muscle cars were defined by three things: big displacement, rear-wheel drive and a snarling V8 soundtrack. But the future is coming fast – and it’s electric. Leading the charge (literally) is Dodge, the most unapologetically aggressive muscle brand in America. With the unveiling of the Dodge Charger Daytona SRT EV, the company isn’t just introducing a new car – it’s launching an entirely new muscle era.",
    image: "/carhome.jpg?height=300&width=500",
    date: "June 18, 2025",
    readTime: "10 min read",
    href: "/blog/Are_EV_Muscle_Cars_Like_the_Charger_Daytona_SRT_the_Future_or_Just_a_Phase",
  },
  {
    title: "The Forgotten Supercars: Hidden Icons That Deserve More Love in 2025",
    excerpt: "Everyone knows the names: Ferrari LaFerrari, McLaren P1, Bugatti Chiron. But for every hypercar poster child, there’s a lesser-known supercar – a beautifully engineered machine that didn’t get the spotlight it deserved. Maybe it launched at the wrong time, got overshadowed by flashier rivals or never made it to the U.S. market. In 2025, as car culture becomes increasingly digital, it’s the perfect time to revisit these forgotten supercars – and give them the credit they’re due.",
    image: "/carhome.jpg?height=300&width=500",
    date: "July 5, 2025",
    readTime: "9 min read",
    href: "/blog/The_Forgotten_Supercars_Hidden_Icons_That_Deserve_More_Love_in_2025",

  },
  {
    title: "The Art of Automotive Restoration",
    excerpt: "Exploring the meticulous process of bringing classic cars back to their former glory.",
    image: "/carhome.jpg?height=300&width=500",
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
          src="/carhome.jpg?height=400&width=1920"
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
                    src={post.image || "/carhome.jpg"}
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
