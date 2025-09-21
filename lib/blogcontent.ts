// lib/blogData.ts

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string; // This will now be the path to the HTML file
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "old-school-cool-new-age-tech",
    title: "Old-School Cool, New-Age Tech: Why Motorcycle Brands Are Embracing Nostalgia with Modern Tech",
    excerpt: "In an age of rapid innovation, motorcycle manufacturers are increasingly looking backward for inspiration, fusing timeless style with 21st-century performance.",
    image: "/MOTOR1.jpg?height=300&width=500",
    date: "April 20, 2025",
    readTime: "7 min read",
    content: "/html/Old-School Cool_New_Age_Tech.html"
  },
  {
    id: "are-ev-muscle-cars-future-or-phase",
    title: "Are EV Muscle Cars Like the Charger Daytona SRT the Future – or Just a Phase?",
    excerpt: "With the unveiling of the Dodge Charger Daytona SRT EV, the company isn’t just introducing a new car – it’s launching an entirely new muscle era.",
    image: "/ev.jpg?height=300&width=500",
    date: "November 12, 2025",
    readTime: "10 min read",
    content: "/html/Are_EV_Muscle_Cars_Like_the_Charger_Daytona_SRT_the_Future_or_Just_a_Phase.html"
  },
  {
    id: "forgotten-supercars-hidden-icons",
    title: "The Forgotten Supercars: Hidden Icons That Deserve More Love in 2025",
    excerpt: "For every hypercar poster child, there's a lesser-known supercar that didn't get the spotlight it deserved. It's time to give them the credit they're due.",
    image: "/carhome.jpg?height=300&width=500",
    date: "July 5, 2025",
    readTime: "9 min read",
    content: "/html/The_Forgotten_Supercars_Hidden_Icons_That_Deserve_More_Love_in_2025-1.html"
  },
  {
    id: "car-names-that-shouldve-been-laughed-out-of-the-room",
    title: "Car Names That Should've Been Laughed Out of the Room",
    excerpt: "Some of the worst car names in automotive history were not accidents. They were pitched, vetted, and approved. What left the boardroom as a win landed on the dealership floor as a joke.",
    image: "/cars.webp?height=300&width=500",
    date: "September 18, 2025",
    readTime: "12 min read",
    content: "/html/Car_Names_That_Should’ve_Been_Laughed_Out_of_the_Room-3.html"
  },
  {
    id: "slate-auto-minimalist-ev-truck",
    title: "Why Slate Auto's Minimalist $20K EV Truck May Be the Biggest Disruption in the U.S.",
    excerpt: "When Slate Auto unveiled its entry-level electric pickup, it didn't come with fancy features. Instead, it delivered a bare-bones EV truck with a starting price of $20,000.",
    image: "/slate.jpg?height=300&width=500",
    date: "September 15, 2025",
    readTime: "11 min read",
    content: "/html/Why_Slate_Auto’s_Minimalist.html"
  },
  {
    id: "byd-megawatt-flash-chargers",
    title: "All About BYD's Megawatt Flash Chargers: 400 km in 5 Minutes and 15,000 Stations Coming",
    excerpt: "BYD's new 'Megawatt Flash Chargers', capable of delivering 400 kilometers of range in just five minutes, represent a seismic leap for the entire EV ecosystem.",
    image: "/charger.jpg?height=300&width=500",
    date: "September 10, 2025",
    readTime: "13 min read",
    content: "/html/All_About_BYD’s_Megawatt-1.html"
  },
  {
    id: "vws-h1-2025-ev-boom",
    title: "VW's H1 2025 EV Boom with 47% Growth in BEV Deliveries. What's Fueling the Momentum?",
    excerpt: "Volkswagen Group has delivered a standout performance in the first half of 2025: 465,500 BEVs shipped worldwide – a 47% year-over-year increase.",
    image: "/voks.webp?height=300&width=500",
    date: "August 28, 2025",
    readTime: "14 min read",
    content: "/html/VW’s_H1_2025_EV_Boom-2.html"
  },
  {
    id: "tesla-fans-flat-earthers",
    title: "Why Tesla Fans Are the Flat-Earthers of the Car World",
    excerpt: "Some Tesla fans don't act like car buyers. They act like believers. Online, loyalty to Tesla often looks less like appreciation for a product and more like devotion to a mission.",
    image: "/tesla.avif?height=300&width=500",
    date: "September 5, 2025",
    readTime: "8 min read",
    content: "/html/Why_Tesla_Fans_Are_the_Flat-Earthers_of_the_Car_World-1.html"
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}