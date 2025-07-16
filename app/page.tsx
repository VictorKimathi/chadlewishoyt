import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    title: "JOURNALISM",
    subtitle: "Automotive journalism & reviews",
    href: "/journalism",
    img: "/journalism.jpg?height=400&width=600",
  },
  {
    title: "ENGINE & TUNING",
    subtitle: "Engine & tuning expertise",
    href: "/tuning",
    img: "/enginetuning.jpg?height=400&width=600",
  },
  {
    title: "SEO & DIGITAL",
    subtitle: "SEO & digital publishing",
    href: "/seo",
    img: "/seo.jpg?height=400&width=600",
  },
  {
    title: "WORDPRESS & CMS",
    subtitle: "WordPress / custom CMS",
    href: "/cms",
    img: "/cms.jpg?height=400&width=600",
  },
  {
    title: "INTERVIEWING",
    subtitle: "Interviewing & sourcing media",
    href: "/interviewing",
    img: "/interview.jpg?height=400&width=600",
  },
  {
    title: "EV TRENDS",
    subtitle: "EV trends & regulations",
    href: "/ev",
    img: "/ev.jpg?height=400&width=600",
  },
  {
    title: "TIME MGMT",
    subtitle: "Time management & remote work",
    href: "/timemanagement",
    img: "/timemanagement.jpg?height=400&width=600",
  },
  {
    title: "ENGAGING WRITING",
    subtitle: "Engaging, minimal-edit writing",
    href: "/writing",
    img: "/engangewriting.jpg?height=400&width=600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=1080&width=1920"
          alt="Iconic sports car on racing track"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-4">
            CHAD LEWIS HOYT
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            AUTOMOTIVE STORYTELLER & CONSULTANT
          </p>
        </div>
      </section>

      {/* Skills Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <Link key={idx} href={skill.href} className="group">
              <div className="relative h-96 overflow-hidden bg-black">
                <Image
                  src={skill.img}
                  alt={skill.subtitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-black uppercase tracking-wide mb-2">
                    {skill.title}
                  </h2>
                  <p className="text-sm opacity-90">{skill.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
