import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 🚗 Your original automotive services, refactored with consistent keys & formatting
const services = [
  {
    title: "Automotive Journalism",
    description:
      "Professional, publish-ready articles covering everything from breaking automotive news and in-depth car reviews to industry insights and trend pieces. With 15+ years of experience, I bring a deep knowledge of the car world and a sharp eye for what readers want to know.",
    features: [
      "Breaking news coverage with accuracy and speed",
      "Long-form car reviews and road test analysis",
      "Supercar and concept vehicle write-ups",
      "Timely reporting on electric and hybrid trends",
      "Original reporting and interview-based content",
    ],
  },
  {
    title: "SEO-Driven Automotive Content",
    description:
      "I create SEO-optimized blog posts, guides, and landing pages that help brands rank and readers engage. Structured for maximum clarity, performance, and searchability, without losing the human voice readers trust.",
    features: [
      "Keyword research and integration",
      "Meta descriptions and header formatting",
      "Content structured for search and user readability",
      "Rich internal linking and cross-topic authority",
      "Tone alignment with brand voice",
    ],
  },
  {
    title: "Tuning & Enthusiast Culture Writing",
    description:
      "Content that speaks directly to the car enthusiast community—those who live and breathe mods, engine swaps, and dyno results. Whether you're launching a new aftermarket product or sharing expert takes, I deliver content that builds trust with gearheads.",
    features: [
      "Explainers on tuning packages and upgrades",
      "Profiles on iconic builds and tuning shops",
      "Performance part roundups and reviews",
      "Drift, off-road, and track-focused content",
      "Insight into car meet culture and enthusiast trends",
    ],
  },
  {
    title: "Brand Voice & Campaign Copywriting",
    description:
      "I help automotive brands and media platforms develop a clear, consistent tone across digital channels—from landing pages to social ads. My writing combines precision with energy, tailored to resonate with car lovers and first-time readers alike.",
    features: [
      "Copy for product launches and model rollouts",
      "Social media captions and promotional blurbs",
      "Brand tone development and voice guides",
      "Ad copy for dealership promotions or OEM partners",
      "Email and newsletter content for campaigns",
    ],
  },
]

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* 🚀 Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Automotive consulting and brand strategy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">CONSULTING</h1>
          <p className="text-xl mt-4">Strategic expertise for automotive brands</p>
        </div>
      </section>

      {/* 🚗 Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Elevating Automotive Brands</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          With over a decade of experience in automotive journalism and brand strategy, I help automotive companies tell
          their stories with authenticity and impact. From emerging startups to established manufacturers, I provide
          strategic guidance that drives engagement and builds lasting connections with automotive enthusiasts.
        </p>
      </section>

      {/* 🛠️ Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-600 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bebas tracking-wide">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ✉️ Contact Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas font-black tracking-wider mb-4">LET'S WORK TOGETHER</h2>
            <p className="text-lg text-gray-600">
              Ready to elevate your automotive brand? Let’s discuss your project.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <Input id="name" type="text" required className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <Input id="email" type="email" required className="w-full" />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-semibold mb-2">
                Project Details *
              </label>
              <Textarea
                id="project"
                rows={6}
                required
                className="w-full"
                placeholder="Tell me about your project, goals, and how I can help..."
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
