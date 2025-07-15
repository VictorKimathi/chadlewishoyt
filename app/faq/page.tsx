import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of automotive photography do you specialize in?",
    answer:
      "I specialize in a wide range of automotive photography, including racing events, classic car portraits, editorial shoots for magazines, and behind-the-scenes workshop photography. My goal is to capture the unique character and story of each vehicle.",
  },
  {
    question: "Can you help with content strategy for my automotive brand?",
    answer:
      "Absolutely. My consulting services include comprehensive brand strategy and content strategy development. I work with clients to define their brand narrative, identify target audiences, and create compelling content plans that resonate with automotive enthusiasts.",
  },
  {
    question: "Do you offer services for private car collectors?",
    answer:
      "Yes, I offer bespoke photography services for private collectors who wish to document their vehicles with high-quality, artistic imagery. This can include studio shoots, on-location sessions, or event coverage.",
  },
  {
    question: "What is your process for editorial writing assignments?",
    answer:
      "My editorial process typically involves initial research and interviews, outlining the article, drafting, and then several rounds of revisions based on client feedback. I focus on delivering engaging, well-researched, and accurate automotive stories.",
  },
  {
    question: "How can I commission a project or request a quote?",
    answer:
      "You can reach out through the 'Consulting' page, which includes a contact form, or directly via email/phone listed in the footer. Please provide as much detail as possible about your project to help me understand your needs.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Frequently asked questions about automotive journalism and photography"
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
              <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
