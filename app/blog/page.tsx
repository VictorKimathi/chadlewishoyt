// pages/blog/index.tsx

import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "../../lib/blogData";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Automotive blog and insights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">BLOG & INSIGHTS</h1>
          <p className="text-lg md:text-xl mt-4">Deep dives into automotive culture and industry trends</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{blogPosts.map((post) => (
  <article
    key={post.id}
    className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 hover:-translate-y-2"
  >
    <div className="relative h-48 overflow-hidden">
      <Link href={`/blog/${post.id}`}>
        <a>
          <Image
            src={post.image || "/carhome.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </a>
      </Link>
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>
      <Link href={`/blog/${post.id}`}>
        <a className="text-xl font-bold mb-3 block hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </a>
      </Link>
      <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

      {/* Read Article Button with explicit href */}
      <Link href={`/blog/${post.id}`}>
        <a
          className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          aria-label={`Read full article: ${post.title}`}
        >
          Read Article →
        </a>
      </Link>
    </div>
  </article>
))}

        </div>
      </section>
    </div>
  );
}