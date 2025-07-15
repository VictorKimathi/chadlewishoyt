import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar" // Import the new Sidebar component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Chad Lewis Hoyt - Automotive Storyteller & Consultant",
  description:
    "Professional automotive journalist, photographer, and consultant specializing in automotive storytelling, brand strategy, and content production.",
  keywords:
    "automotive journalist, car photography, automotive consultant, racing photography, automotive storytelling",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased flex min-h-screen`}>
        {/* Sidebar for desktop */}
        <Sidebar />

        <div className="flex flex-col flex-1 lg:ml-64">
          {" "}
          {/* Adjust margin for sidebar width */}
          {/* Header for mobile and logo on desktop */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
