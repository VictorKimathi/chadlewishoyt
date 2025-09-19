"use client"
import { useState } from 'react'
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react'

interface PDFViewerModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title: string
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  const [zoom, setZoom] = useState<number>(100)

  if (!isOpen) return null

  const handleZoomIn = (): void => setZoom(prev => Math.min(prev + 25, 200))
  const handleZoomOut = (): void => setZoom(prev => Math.max(prev - 25, 50))
  
  const handleDownload = (): void => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-6xl h-5/6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <button
              onClick={handleZoomOut}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-sm text-gray-600 min-w-[60px] text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded"
              title="Download PDF"
            >
              <Download size={20} />
            </button>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div className="flex justify-center">
            <iframe
              src={`${pdfUrl}#zoom=${zoom}`}
              className="border border-gray-300 shadow-lg"
              style={{
                width: `${zoom}%`,
                height: '800px',
                minHeight: '600px'
              }}
              title={title}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  type: 'article' | 'pdf'
  pdfUrl?: string
}

interface PDFModalState {
  isOpen: boolean
  url: string
  title: string
}

// Updated Blog Component with PDF Modal
const BlogPageWithPDFViewer: React.FC = () => {
  const [pdfModal, setPdfModal] = useState<PDFModalState>({ isOpen: false, url: '', title: '' })

  const blogPosts: BlogPost[] = [
    {
      id: "old-school-cool-new-age-tech",
      title: "Old-School Cool, New-Age Tech: Why Motorcycle Brands Are Embracing Nostalgia with Modern Tech",
      excerpt: "In an age of rapid innovation, where electric bikes, adaptive cruise control and TFT dashboards are becoming the norm, motorcycle manufacturers are increasingly looking backward for inspiration.",
      image: "/MOTOR1.jpg?height=300&width=500",
      date: "April 20, 2025",
      readTime: "7 min read",
      type: "article"
    },
    {
      id: "are-ev-muscle-cars-future-or-phase",
      title: "Are EV Muscle Cars Like the Charger Daytona SRT the Future – or Just a Phase?",
      excerpt: "For decades, muscle cars were defined by three things: big displacement, rear-wheel drive and a snarling V8 soundtrack. But the future is coming fast – and it's electric.",
      image: "/ev.jpg?height=300&width=500",
      date: "June 18, 2025",
      readTime: "10 min read",
      type: "pdf",
      pdfUrl: "/Are_EV_Muscle_Cars_Like_the_Charger_Daytona_SRT_the_Future_or_Just_a_Phase.pdf"
    },
    {
      id: "forgotten-supercars-hidden-icons",
      title: "The Forgotten Supercars: Hidden Icons That Deserve More Love in 2025",
      excerpt: "Everyone knows the names: Ferrari LaFerrari, McLaren P1, Bugatti Chiron. But for every hypercar poster child, there's a lesser-known supercar.",
      image: "/carhome.jpg?height=300&width=500",
      date: "July 5, 2025",
      readTime: "9 min read",
      type: "article"
    }
  ]

  const handlePostClick = (post: BlogPost): void => {
    if (post.type === 'pdf' && post.pdfUrl) {
      setPdfModal({
        isOpen: true,
        url: post.pdfUrl,
        title: post.title
      })
    } else {
      // Handle regular article navigation
      window.location.href = `/blog/${post.id}`
    }
  }

  const closePdfModal = (): void => {
    setPdfModal({ isOpen: false, url: '', title: '' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src="/carhome.jpg?height=400&width=1920"
          alt="Automotive blog and insights"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider">BLOG & INSIGHTS</h1>
          <p className="text-xl mt-4">Deep dives into automotive culture and industry trends</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              onClick={() => handlePostClick(post)}
              className="group cursor-pointer"
            >
              <article className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/carhome.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* PDF Badge */}
                  {post.type === 'pdf' && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      PDF
                    </div>
                  )}
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
            </div>
          ))}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={pdfModal.isOpen}
        onClose={closePdfModal}
        pdfUrl={pdfModal.url}
        title={pdfModal.title}
      />
    </div>
  )
}

export default BlogPageWithPDFViewer