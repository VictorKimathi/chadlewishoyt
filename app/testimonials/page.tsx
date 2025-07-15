import Image from "next/image"

const testimonials = [
  {
    quote:
      "Chad's ability to capture the essence of our brand through his photography and writing is unparalleled. He truly understands the automotive spirit.",
    author: "Sarah Chen",
    title: "Marketing Director, Apex Motors",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "His strategic insights transformed our content approach. Chad is a true expert in automotive storytelling.",
    author: "David Lee",
    title: "CEO, Velocity Auto Group",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with Chad on our event was seamless. His professionalism and passion shine through in every detail.",
    author: "Emily White",
    title: "Event Manager, Grand Prix Series",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Chad's articles are always insightful and engaging. He has a unique voice that resonates with our readers.",
    author: "Michael Brown",
    title: "Editor-in-Chief, Auto Enthusiast Magazine",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Testimonials from automotive industry professionals"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">TESTIMONIALS</h1>
          <p className="text-xl mt-4">What clients and collaborators say</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-lg border border-gray-200">
              <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={`Avatar of ${testimonial.author}`}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
