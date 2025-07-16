import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
          <h1 className="text-5xl md:text-7xl font-bebas font-black tracking-wider">
            RESUME / CV
          </h1>
          <p className="text-xl mt-4">
            A detailed look at my professional journey
          </p>
        </div>
      </section>

      {/* New Resume Content */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Chad Lewis Hoyt</h2>
          <p className="text-gray-700">
            Email: chadhoyt843@gmail.com | Phone: 206-485-0213
          </p>
          <p className="text-gray-700 mb-4">
            Portfolio:{" "}
            <a
              href="chad.docx"
              className="text-blue-600 hover:underline"
            >
              chad.docx
            </a>
          </p>
          <a
            href="/chad.docx"
            download
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-4"
          >
            <Download className="w-5 h-5 mr-2" /> Download Full Resume (PDF)
          </a>
        </div>

        {/* Profile */}
        <div>
          <h3 className="text-2xl font-bebas font-black tracking-wide mb-4 border-b pb-2">
            PROFILE
          </h3>
          <p className="text-gray-700">
            Experienced automotive writer with 15+ years producing high-quality,
            publish-ready content for digital publications, tuning companies,
            and motorsports brands. Known for technical accuracy, deep
            automotive knowledge, and engaging writing that reflects a lifelong
            passion for driving and car culture.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bebas font-black tracking-wide mb-4 border-b pb-2">
            EXPERIENCE
          </h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-xl font-semibold">
                Freelance Automotive Journalist
              </h4>
              <p>Self-employed | 2011 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Contributed 500+ articles on car tuning, industry news, bike
                  reviews, and features.
                </li>
                <li>
                  Clients include CarBuzz, Hennessey Performance, TorqueMadness,
                  EV startups.
                </li>
                <li>
                  Produced SEO-optimized long-form content balancing technical
                  depth with reader engagement.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                Senior Copywriter – Velocity Motors Creative
              </h4>
              <p>Austin, TX | 2008 – 2011</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Led copy strategy for dealer campaigns and national car
                  brands.
                </li>
                <li>
                  Wrote landing pages, ads, press releases for new models &
                  accessories.
                </li>
                <li>Shaped brand voice for performance & luxury segments.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                Content Contributor – Auto Enthusiast Daily
              </h4>
              <p>Remote | 2007 – 2009</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Daily updates on car launches, tech innovations, aftermarket
                  upgrades.
                </li>
                <li>Focused on high-performance & enthusiast vehicles.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                Staff Writer – Texas Auto News
              </h4>
              <p>Dallas, TX | 2005 – 2007</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Covered breaking automotive news, dealership reports,
                  motorsports events.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                Automotive Blogger – The Hoyt Garage
              </h4>
              <p>Bend, OR | 2004 – Present (Part-Time)</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Maintain blog on retro-modern car culture & tuning trends; 10K
                  monthly readers.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bebas font-black tracking-wide mb-4 border-b pb-2">
            EDUCATION
          </h3>
          <p>Associate of Applied Science – Communications</p>
          <p className="text-gray-600">
            Central Oregon Community College, 2001
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bebas font-black tracking-wide mb-4 border-b pb-2">
            SKILLS & ABILITIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <span>Automotive journalism & reviews</span>
            <span>Engine & tuning expertise</span>
            <span>SEO & digital publishing</span>
            <span>WordPress / custom CMS</span>
            <span>Interviewing & sourcing media</span>
            <span>EV trends & regulations</span>
            <span>Time management & remote work</span>
            <span>Engaging, minimal-edit writing</span>
          </div>
        </div>

        {/* Activities */}
        <div>
          <h3 className="text-2xl font-bebas font-black tracking-wide mb-4 border-b pb-2">
            ACTIVITIES & EXPERIENCES
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Guest Panelist, EV Trends & The Future of Driving, Oregon Auto
              Conference (2022)
            </li>
            <li>
              “Auto Design History” Certificate – Petersen Automotive Museum &
              Yellowbrick (2023)
            </li>
            <li>Member, Northwest Automotive Press Association (NWAPA)</li>
            <li>
              Volunteer contributor, automotive writing workshops & forums
            </li>
            <li>Motorcycle touring & off-road builds enthusiast</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
