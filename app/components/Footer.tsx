import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bebas font-black tracking-wider mb-4">CHAD LEWIS HOYT</h3>
            <p className="text-gray-300 mb-4">Automotive Storyteller & Consultant</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>chad@chadlewishoyt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-6">
            <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chad Lewis Hoyt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
