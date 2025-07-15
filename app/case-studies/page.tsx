import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Revitalizing a Classic Car Brand's Digital Presence",
    client: "Heritage Motors",
    challenge: "Outdated website and inconsistent brand messaging.",
    solution: "Developed a new content strategy, produced high-end photography, and redesigned their digital platform.",
    result: "200% increase in online engagement and significant boost in sales inquiries.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/case-studies/heritage-motors",
  },
  {
    title: "Launching an Electric Hypercar: A Global Media Campaign",
    client: "Volt Dynamics",
    challenge: "Introducing a new, disruptive product to a skeptical market.",
    solution:
      "Crafted a compelling narrative, managed international press events, and created immersive launch content.",
    result: "Achieved global media coverage and secured pre-orders exceeding expectations.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/case-studies/volt-dynamics",
  },
  {
    title: "Optimizing Content for Motorsports Sponsorships",
    client: "SpeedForce Racing",
    challenge: "Maximizing sponsor visibility and fan engagement through digital content.",
    solution: "Produced dynamic race photography, behind-the-scenes video series, and social media campaigns.",
    result: "Increased sponsor ROI by 30% and grew social media following by 50%.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/case-studies/speedforce-racing",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Automotive consulting case studies"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">CASE STUDIES</h1>
          <p className="text-xl mt-4">Real-world impact, measurable results</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link key={index} href={study.href} className="group">
              <article className="bg-white border border-gray-200 overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">Client: {study.client}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold">Solution:</span> {study.solution}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold">Result:</span> {study.result}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300 font-semibold">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
