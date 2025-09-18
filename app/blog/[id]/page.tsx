import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

import { getBlogPost, getAllBlogPosts } from "../../../lib/blogData"
import MarkdownRenderer from "../../../components/MarkdownRenderer"
import ShareButton from "../../../components/ShareButton"

// Props interface for the page component
interface BlogPostPageProps {
  params: {
    id: string
  }
}

// This function generates static pages at build time for better performance.
// It gets all post IDs and tells Next.js to pre-render them.
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    id: post.id,
  }))
}

// The main page component, now a clean Server Component
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.id)

  // If no post is found for the given ID, render the 404 page.
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header with back navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Image Section */}
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority // Prioritize loading the main article image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Meta Information (Date, Read Time, Share Button) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 text-sm text-gray-500">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            {/* The ShareButton is a Client Component handling its own state and events */}
            <ShareButton title={post.title} text={post.excerpt} />
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Article Body - Rendered by the MarkdownRenderer component */}
          <MarkdownRenderer content={post.content} />

          {/* Additional Images Section (if any) */}
          {post.images && post.images.length > 0 && (
            <div className="mt-12 space-y-8">
              {post.images.map((img, index) => (
                <figure key={index} className="text-center">
                  <div className="relative h-96 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-3 text-sm text-gray-600 italic">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                About the Author
              </h3>
              <p className="text-gray-700">
                Our team brings decades of combined experience in automotive
                journalism, engineering, and industry analysis to deliver
                insightful content about the latest trends and innovations in
                the automotive world.
              </p>
            </div>
          </div>

          {/* Navigation to other posts */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <Link
                href="/blog"
                className="group block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Explore More Articles
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover more insights and analysis from our automotive blog.
                </p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
