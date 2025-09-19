import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: "old-school-cool-new-age-tech",
    title: "Old-School Cool, New-Age Tech: Why Motorcycle Brands Are Embracing Nostalgia with Modern Tech",
    excerpt: "In an age of rapid innovation, where electric bikes, adaptive cruise control and TFT dashboards are becoming the norm, motorcycle manufacturers are increasingly looking backward for inspiration. Brands like Triumph, Yamaha, Royal Enfield and Honda are embracing retro aesthetics while integrating cutting-edge technology, creating a new category of bikes that fuse timeless style with 21st-century performance.",
    image: "/MOTOR1.jpg?height=300&width=500",
    date: "April 20, 2025",
    readTime: "7 min read",
  },
   {
    id: "are-ev-muscle-cars-future-or-phase",

    title: "Are EV Muscle Cars Like the Charger Daytona SRT the Future – or Just a Phase?Electric Dreams: The Future of Hypercars",
    excerpt: "For decades, muscle cars were defined by three things: big displacement, rear-wheel drive and a snarling V8 soundtrack. But the future is coming fast – and it’s electric. Leading the charge (literally) is Dodge, the most unapologetically aggressive muscle brand in America. With the unveiling of the Dodge Charger Daytona SRT EV, the company isn’t just introducing a new car – it’s launching an entirely new muscle era.",
    image: "/ev.jpg?height=300&width=500",
    date: "June 18, 2025",
    readTime: "10 min read",
    href: "Are_EV_Muscle_Cars_Like_the_Charger_Daytona_SRT_the_Future_or_Just_a_Phase",
  // href: "Are_EV_Muscle_Cars_Like_the_Charger_Daytona_SRT_the_Future_or_Just_a_Phase.pdf",
  },
  {
    id: "forgotten-supercars-hidden-icons",
    title: "The Forgotten Supercars: Hidden Icons That Deserve More Love in 2025",
    excerpt: "Everyone knows the names: Ferrari LaFerrari, McLaren P1, Bugatti Chiron. But for every hypercar poster child, there's a lesser-known supercar – a beautifully engineered machine that didn't get the spotlight it deserved. Maybe it launched at the wrong time, got overshadowed by flashier rivals or never made it to the U.S. market. In 2025, as car culture becomes increasingly digital, it's the perfect time to revisit these forgotten supercars – and give them the credit they're due.",
    image: "/carhome.jpg?height=300&width=500",
    date: "July 5, 2025",
    readTime: "9 min read",
  },
  {
  "id": "car-names-that-shouldve-been-laughed-out-of-the-room",
  "title": "Car Names That Should’ve Been Laughed Out of the Room",
  "excerpt": "Some of the worst car names in automotive history were not accidents. They were pitched in meetings, vetted by legal, pushed by marketing, and approved at the highest levels. Entire teams signed off on names they thought sounded bold or forward-thinking. What left the boardroom as a branding win often landed on the dealership floor as a joke. The car stayed the same. What changed was how people talked about it.",
    image: "/cars.webp?height=300&width=500",
  "date": "September 18, 2025",
  "readTime": "12 min read",
  "content": "There’s a difference between strange and stupid, and car companies cross that line more often than they realize. With the wrong name, a perfectly functional car becomes forgettable or mocked before it ever gets a chance. One bad name turns a decent coupe into a punchline. The industry has done it over and over. These aren’t rare slip-ups. They reflect how easily decisions get shaped by people too close to the process to hear how bad they sound to anyone else.\n\n### Ford Probe is still the benchmark for branding misfires\n\nFord didn’t stumble into the name “Probe.” It was a deliberate attempt to make a front-wheel-drive coupe sound sleek and high-tech. It borrowed its name from a line of Ford concept cars meant to showcase innovation. The car itself wasn’t bad. Developed with Mazda under Ford’s global platform strategy, it offered respectable performance for the time. It wasn’t fast, but it was agile and priced to move.\n\nBut none of that mattered once people heard the name. It didn’t sound like a car. It sounded like a hospital procedure. Ford had even considered positioning the Probe as the next-generation Mustang, a plan scrapped after backlash from purists and the public. Even drivers who liked the car had to grit their teeth every time they said what they drove. One awkward word on the trunk was enough to drown out every other aspect of the car’s design or engineering. It might have been aiming for a futuristic import fighter. Instead, it landed with a name nobody wanted to say out loud.\n\n### AMC Gremlin leaned into absurdity — and got away with it\n\nAMC needed a subcompact, and they needed it fast. Imports were gaining ground in the early ’70s, and the Big Three were scrambling to keep up. AMC’s answer was to rush a new design to market and give it a name that sounded like a mechanical failure. It didn’t sound mischievous. It sounded broken: fried wiring, stalling engines, and dash lights that wouldn’t shut off. It was a joke name, except AMC wasn’t joking.\n\nThe design didn’t help. The Gremlin looked like a Hornet that had been rear-ended and left that way. From day one, the car had a cartoon mascot and leaned into its own weirdness. AMC tried to sell the weirdness as rebellion. But buyers don’t want their car to sound cursed, and the name did more damage than the sheet metal ever could. Despite years of decent sales, the Gremlin became a punchline. It’s remembered less for what it was than what it was called. AMC went for bold in a market that was playing it safe. What they got was a car that people still talk about, just not the way they hoped.\n\n### The Mitsubishi Lettuce proves someone should’ve said no\n\nMitsubishi didn’t just greenlight a weird name. They called the car Lettuce and leaned in. Technically, it was a trim variant of the Mirage, but that didn’t stop the company from branding it like a tossed salad. There was no lettuce-green paint, no garden-themed marketing, and no clever pun in Japanese to save it. The name was simply... Lettuce. No one stopped it.\n\nWhat makes the Lettuce so baffling isn’t the car. It’s that no one in the room said, “Hold on.” Mitsubishi introduced it during the early ’90s, a time when Japanese automakers were experimenting wildly with kei cars and niche subcompacts. Some names like Pajero Mini or Nissan S-Cargo had at least some charm or internal logic. The Lettuce didn’t. It was plain, unremarkable, and best known for its name being memed decades later.\n\nUnlike the Gremlin or the Probe, the Lettuce didn’t provoke outrage or loyalist backlash. It just quietly existed with one of the most mockable names in automotive history. The car faded. The name didn’t. That disconnect between the utter blandness of the car and the surreal boldness of the name makes it feel less like branding and more like a dare."
},
{
  "id": "slate-auto-minimalist-ev-truck",
  "title": "Why Slate Auto’s Minimalist $20K EV Truck May Be the Biggest Disruption in the U.S.",
  "excerpt": "When Slate Auto unveiled its entry-level electric pickup earlier this year, it didn’t come with a panoramic screen, complex driver-assist features or even power windows. Instead, the Jeff Bezos–backed startup delivered something unexpected: a bare-bones EV truck with a starting price of $20,000 (after incentives), something unheard of in an era where even compact EVs regularly breach $30K.",
    image: "/slate.jpg?height=300&width=500",
  "date": "October 2, 2025",
  "readTime": "15 min read",
  "content": "When Slate Auto unveiled its entry-level electric pickup earlier this year, it didn’t come with a panoramic screen, complex driver-assist features or even power windows. Instead, the Jeff Bezos–backed startup delivered something unexpected: a bare-bones EV truck with a starting price of $20,000 (after incentives), something unheard of in an era where even compact EVs regularly breach $30K.\n\nWithin weeks, Slate had amassed over 100,000 reservations, proving that there’s a massive, underserved market for affordable electric workhorses. As production ramps up in Indiana and deliveries inch closer, it’s becoming increasingly clear: this minimalist pickup might be the biggest disruption the U.S. EV market has seen in years.\n\n### Breaking the Mold: What Makes Slate Different\n\nAt a time when electric trucks like the Ford F-150 Lightning, Rivian R1T and Tesla Cybertruck emphasize tech, luxury and high performance, with prices often exceeding $60,000, Slate took the opposite approach. It stripped the truck down to the essentials:\n* A lightweight chassis and modular battery pack\n* Manual window cranks and basic controls\n* A utilitarian interior designed for work, not show\n\nThe idea is simple: give buyers a functional electric pickup at a price they can actually afford. The company has described its approach as “right-sized technology”, focusing on utility over complexity.\n\n### How It Stacks Up\n\nWhile Slate’s truck doesn’t compete head-to-head with high-powered EV pickups, its disruptive nature lies in price and accessibility.\n\n| Truck Model | Starting Price (Est.) | Range (Est.) | Notable Features |\n| :--- | :--- | :--- | :--- |\n| Slate Auto EV Pickup | $20K (after incentives) | 200+ miles | Minimalist design, modular add-ons |\n| Ford F-150 Lightning | $52K | 240–320 mi | Advanced tech, full-size capability |\n| Tesla Cybertruck | $57K | 250–500 mi | High performance, polarizing design |\n| Rivian R1T | $69K | 270–350 mi | Off-road focused, upscale features |\n\nThis table shows Slate isn’t competing in horsepower wars or luxury features. Instead, it’s targeting buyers who want simple utility at half the price of its closest competitors.\n\n### The Modular Ecosystem: Customizing on Demand\n\nOne of Slate’s key innovations isn’t visible at launch – it’s the truck’s modular ecosystem. Buyers can start with the bare-minimum pickup and later add features like:\n\n* An upgraded infotainment kit with stereo and touchscreen\n* Larger battery modules for extended range\n* Cargo box extensions or camper-style conversions\n\nThis approach keeps upfront costs low while letting owners expand capability over time. In practice, it’s similar to how smartphone users buy base models and add accessories later. This modularity not only keeps pricing flexible but also shortens production time since all trucks leave the factory in a standard configuration.\n\n### Why It Resonates: A Shift in Consumer Priorities\n\nThe overwhelming reservation numbers show Slate tapped into a latent demand. While premium EVs grab headlines, many Americans, especially in rural or working-class communities, need basic, affordable trucks for everyday use.\n\nA fully-loaded Rivian or Lightning is overkill for someone hauling tools to a job site or running farm errands. By skipping luxury frills and software gimmicks, Slate made EV ownership approachable for a demographic that’s often overlooked in the electrification conversation.\n\n### Production Plans and Pricing Challenges\n\nSlate’s Indiana plant is scheduled to begin building trucks in late 2026, with initial output capped to ensure quality control. Although federal EV tax credits initially helped keep the target price below $20,000, those incentives are set to expire, raising the effective base price closer to $27,500.\n\nDespite this, Slate says it will still undercut competitors by a large margin thanks to:\n\n* **Simplified manufacturing**: Fewer parts and no complex infotainment systems\n* **Vertical integration**: In-house battery and drivetrain production\n* **Volume-focused strategy**: Scaling to 250,000 units annually within three years\n\nWhether Slate can maintain margins at this price point remains a big question, but the startup argues that its lean design philosophy gives it a structural cost advantage over legacy automakers.\n\n### A Potentially Massive Market Shift\n\nIf Slate succeeds, the implications for the U.S. automotive market are huge. By proving that an EV pickup can be profitable at mass-market pricing, it could force established players to rethink their strategies.\n\nAutomakers like Ford, GM and Stellantis currently rely on high-margin trucks to fund their EV transitions. An affordable competitor would pressure them to produce simpler, cheaper EV models, much like Japanese automakers disrupted Detroit in the 1970s with efficient, budget-friendly cars.\n\nEV adoption overall could accelerate. One of the biggest barriers to electrification is cost. A reliable electric truck at $20K, or even under $30K, brings EVs within reach of millions of new buyers, especially those who’ve resisted the transition due to high entry prices.\n\n### Challenges on the Road Ahead\n\nSlate’s disruptive vision doesn’t come without hurdles:\n\n* **Production Scaling**: Building a new truck plant and supply chain from scratch is notoriously difficult.\n* **Range Limitations**: A base range of just over 200 miles could be a sticking point for some buyers.\n* **Competition**: Major automakers may fast-track affordable EV pickups in response, leveraging existing dealer networks and brand loyalty.\n* **Durability Perception**: Stripped-down interiors and minimal electronics might be misinterpreted as “cheap,” rather than intentional simplicity.\n\nHow Slate navigates these issues will determine if its truck becomes a true market shaker or a niche product.\n\nSlate Auto’s $20K minimalist EV truck is more than a budget-friendly pickup – it’s a challenge to the entire way electric vehicles are designed, priced and sold in the U.S. By cutting out luxuries and focusing on essential utility, Slate is making EV ownership realistic for working Americans and everyday drivers who’ve been priced out of the market.\n\nIf production meets expectations and consumer demand holds, Slate could reshape not only the electric truck segment but also the broader EV adoption curve. In a market saturated with premium models and tech-laden designs, Slate’s no-frills approach feels not just refreshing – but potentially revolutionary.",
  "images": [
    {
      "src": "/slate-auto-main.jpg",
      "alt": "Slate Auto's minimalist EV truck",
      "caption": "Slate Auto's EV truck is designed to be a bare-bones, affordable workhorse."
    }
  ]
},
{
  "id": "byd-megawatt-flash-chargers",
  "title": "All About BYD’s Megawatt Flash Chargers: 400 km in 5 Minutes and 15,000 Stations Coming",
  "excerpt": "Electric vehicle charging has long been a sticking point for EV adoption. While battery technology continues to evolve, charging times remain a barrier for drivers used to five-minute gas station visits. That’s why BYD’s new “Megawatt Flash Chargers”, capable of delivering 400 kilometers of range in just five minutes, represent a seismic leap not just for the company, but for the entire EV ecosystem.",
      image: "/charger.jpg?height=300&width=500",
  "date": "November 2, 2025",
  "readTime": "15 min read",
},
{
  "id": "vws-h1-2025-ev-boom",
  "title": "VW’s H1 2025 EV Boom with 47% Growth in BEV Deliveries. What’s Fueling the Momentum?",
  "excerpt": "Volkswagen Group has delivered a standout performance in the first half of 2025: 465,500 BEVs shipped worldwide – a 47% year-over-year increase compared to H1 2024. This explosive growth didn’t merely save face – it redefined Volkswagen’s trajectory in the electrification era. BEVs now account for 11% of total deliveries, up from 7% just a year ago.",
    image: "/voks.webp?height=300&width=500",
  "date": "September 18, 2025",
  "readTime": "12 min read",
},
// hello

{
  "id": "tesla-fans-flat-earthers",
  "title": "Why Tesla Fans Are the Flat-Earthers of the Car World",
  "excerpt": "Some Tesla fans don’t act like car buyers. They act like believers. Online, loyalty to Tesla often looks less like appreciation for a product and more like devotion to a mission. Fan posts often read like sermons, packed with praise, prophecy, and warnings for the doubters. When someone points out a flaw, they don’t get a real conversation. They get attacked. Critics get called liars, Luddites, or worse. The point isn’t debate. It’s defense.",
    image: "/tesla.avif?height=300&width=500",
  "date": "November 20, 2025",
  "readTime": "10 min read",
}

]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/carhome.jpg?height=400&width=1920"
          alt="Automotive blog and insights"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">BLOG & INSIGHTS</h1>
          <p className="text-xl mt-4">Deep dives into automotive culture and industry trends</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`} className="group">
              <article className="bg-white border border-gray-200 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/carhome.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}