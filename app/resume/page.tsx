import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Chad Lewis Hoyt professional resume and CV"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">RESUME / CV</h1>
          <p className="text-xl mt-4">A detailed look at my professional journey</p>
        </div>
      </section>

      {/* Resume Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Chad Lewis Hoyt</h2>
          <p className="text-lg text-gray-600">Automotive Journalist, Photographer, and Consultant</p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="w-5 h-5 mr-2" /> Download Full Resume (PDF)
          </Button>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bebas font-black tracking-wide mb-6 border-b pb-2">EXPERIENCE</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold">Lead Automotive Journalist & Photographer</h4>
                <p className="text-gray-600">AutoWorld Magazine | 2015 - Present</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Authored over 200 articles on vehicle reviews, industry trends, and motorsports.</li>
                  <li>Led photography for major automotive events, including F1, Le Mans, and Concours d'Elegance.</li>
                  <li>Managed editorial calendar and contributed to content strategy.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Automotive Brand Consultant</h4>
                <p className="text-gray-600">Freelance | 2018 - Present</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Provided strategic content and brand positioning advice to luxury automotive brands.</li>
                  <li>Developed and executed content production plans for digital and print campaigns.</li>
                  <li>Consulted on event planning and media relations for new vehicle launches.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bebas font-black tracking-wide mb-6 border-b pb-2">EDUCATION</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold">Master of Arts in Journalism</h4>
                <p className="text-gray-600">Columbia University | 2013 - 2015</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Bachelor of Fine Arts in Photography</h4>
                <p className="text-gray-600">Rhode Island School of Design (RISD) | 2009 - 2013</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bebas font-black tracking-wide mb-6 border-b pb-2">SKILLS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <span>Automotive Journalism</span>
              <span>Professional Photography</span>
              <span>Brand Strategy</span>
              <span>Content Production</span>
              <span>Motorsports Coverage</span>
              <span>Editorial Planning</span>
              <span>Digital Marketing</span>
              <span>Event Management</span>
              <span>Adobe Creative Suite</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
