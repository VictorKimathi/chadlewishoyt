import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of automotive content do you specialize in?",
    answer:
      "I specialize in car reviews, tuning guides, automotive news, EV industry coverage, and motorcycle journalism. I also write SEO-optimized blog posts, landing pages, and brand campaigns. Whether you're launching a new model or explaining aftermarket upgrades, I can help your readers stay informed and engaged.",
  },
  {
    question: "Are you familiar with car tuning and performance upgrades?",
    answer:
      "Yes. I’ve written extensively about tuning culture—everything from bolt-on mods and ECU remaps to full engine swaps and suspension setups. I understand the technical details but also how to make them accessible to readers at different levels of experience.",
  },
  {
    question: "Do you write content that’s ready to publish?",
    answer:
      "Absolutely. I take pride in delivering clean, publish-ready work that requires little to no editing. I follow brand guidelines closely, format my copy for CMS, and meet deadlines without needing to be chased.",
  },
  {
    question: "Can you match the tone and voice of my publication?",
    answer:
      "Yes. I’ve written for performance brands, enthusiast blogs, and mainstream news outlets. Whether you need a technical, energetic, or conversational tone, I can adapt quickly to match your voice and audience.",
  },
  {
    question: "What’s your process for new assignments?",
    answer:
      "I start by reviewing your brief, tone guidelines, and any reference materials. I’ll do my own research to ensure accuracy, draft the piece with SEO and structure in mind, and deliver it on time. If revisions are needed, I handle those promptly.",
  },
  {
    question: "Do you cover electric vehicles and sustainable tech?",
    answer:
      "Definitely. I’ve written about emerging EVs, hybrid powertrains, charging networks, and sustainable design trends. I stay current on regulatory shifts and consumer adoption rates so your content stays relevant.",
  },
  {
    question: "Can you provide samples or a writing test?",
    answer:
      "Yes. My portfolio is available here, and I’m open to short test assignments if needed. I want you to feel confident that my style fits your needs.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Frequently asked questions about automotive journalism and content"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">FAQ</h1>
          <p className="text-xl mt-4">Your questions, answered</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
