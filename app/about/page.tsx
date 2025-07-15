import Image from "next/image"
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Chad Lewis Hoyt automotive journalist and photographer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">ABOUT</h1>
          <p className="text-xl mt-4">The story behind the storyteller</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Chad Lewis Hoyt portrait in automotive setting"
                width={500}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bebas font-black tracking-wider mb-6">PASSION MEETS PRECISION</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  For over a decade, I've been immersed in the world of automotive excellence, capturing stories that
                  celebrate the intersection of engineering, design, and human passion. My journey began with a simple
                  fascination for the machines that move us, and has evolved into a career dedicated to telling the
                  stories behind automotive innovation.
                </p>

                <p>
                  As an automotive journalist, I've had the privilege of driving some of the world's most extraordinary
                  vehicles, from cutting-edge hypercars to meticulously restored classics. My photography work has taken
                  me to racing circuits around the globe, capturing the raw emotion and technical precision that defines
                  motorsports.
                </p>

                <p>
                  Through my consulting work, I help automotive brands craft narratives that resonate with enthusiasts
                  and newcomers alike. I believe that every car has a story to tell, and every brand has the potential
                  to create meaningful connections with their audience.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bebas font-black tracking-wide mb-4">MY PHILOSOPHY</h3>
              <p className="text-gray-700 leading-relaxed">
                "Automotive culture is about more than just machines—it's about the dreams, innovation, and human
                stories that drive us forward. My mission is to capture and share these stories with authenticity,
                passion, and technical precision."
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@chadlewishoyt</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                  <span>@chadhoyt</span>
                </a>
                <a
                  href="mailto:chad@chadlewishoyt.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
