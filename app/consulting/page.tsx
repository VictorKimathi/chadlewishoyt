import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Brand Strategy",
    description: "Develop compelling automotive brand narratives that resonate with enthusiasts and drive engagement.",
    features: ["Brand positioning", "Content strategy", "Market analysis", "Competitive research"],
  },
  {
    title: "Content Production",
    description:
      "Create high-quality editorial content, photography, and multimedia that captures automotive excellence.",
    features: ["Editorial writing", "Photography", "Video production", "Social media content"],
  },
  {
    title: "Event Planning",
    description: "Design and execute automotive events that create memorable experiences and build community.",
    features: ["Launch events", "Track days", "Media events", "Brand activations"],
  },
]

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920"
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

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Elevating Automotive Brands</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          With over a decade of experience in automotive journalism and brand strategy, I help automotive companies tell
          their stories with authenticity and impact. From emerging startups to established manufacturers, I provide
          strategic guidance that drives engagement and builds lasting connections with automotive enthusiasts.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
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

      {/* Contact Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas font-black tracking-wider mb-4">LET'S WORK TOGETHER</h2>
            <p className="text-lg text-gray-600">Ready to elevate your automotive brand? Let's discuss your project.</p>
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
