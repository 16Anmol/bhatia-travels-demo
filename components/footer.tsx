import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Image src="/images/logo-footer.png" alt="Bhatia Travels" width={28} height={28} className="w-7 h-7" />
              <h3 className="text-xl font-bold text-red-900" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
  BHATIA TRAVELS
</h3>
            </div>
            <p className="text-gray-600 mb-3 text-sm">
              Founded in 1982, bringing over 40 years of expertise in travel and tourism.
            </p>
            <div className="flex items-center gap-2 text-red-700 text-sm font-medium">
              <Phone className="w-4 h-4" />
              <span>Jalandhar: 0181-4605000</span>
            </div>
            <div className="flex items-center gap-2 text-red-700 text-sm font-medium">
              <Phone className="w-4 h-4" />
              <span>Amritsar: 0183 5007000</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-700 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-700 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-red-700 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-600 hover:text-red-700 transition-colors text-sm">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-700 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Our Services</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Air Ticketing</li>
              <li>Holiday Packages</li>
              <li>Visa Assistance</li>
              <li>Travel Insurance</li>
              <li>Destination Weddings</li>
            </ul>
          </div>

          {/* Office Locations */}
         <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Office Locations</h4>
            <div className="space-y-3">
              <div>
                <Link href="https://www.google.com/maps/place/Bhatia+Travels/@31.314143,75.591703,14z/data=!4m6!3m5!1s0x39101bc52205c1e1:0x93431fd3a80f541f!8m2!3d31.3141431!4d75.5917025!16s%2Fg%2F11c1q7rkxs?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D" className="block hover:text-red-700 transition-colors">
                  <h5 className="font-medium mb-1 text-sm text-gray-900 hover:text-red-700">Jalandhar</h5>
                  <div className="text-gray-600 text-xs">
                    <div className="flex items-start gap-1">
                      <MapPin className="w-3 h-3 mt-0.5" />
                      <span>925, GT Road, Near Gen. Bus Stand</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://www.google.com/maps/place/Bhatia+Travels/@31.650644,74.863049,16z/data=!4m6!3m5!1s0x3919649822dd58a7:0x47161a4df93650b!8m2!3d31.650644!4d74.8630489!16s%2Fg%2F11b6cq2ss1?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D" className="block hover:text-red-700 transition-colors">
                  <h5 className="font-medium mb-1 text-sm text-gray-900 hover:text-red-700">Amritsar</h5>
                  <div className="text-gray-600 text-xs">
                    <div className="flex items-start gap-1">
                      <MapPin className="w-3 h-3 mt-0.5" />
                      <span>B - Block, Ranjit Avenue</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Follow Us</h4>
            <div className="flex space-x-3">
              <Link
                href="https://www.instagram.com/bhatiatravels_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/bhatiatravels1982/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-1 pt-1 text-center text-gray-500 text-xs">
          <p>&copy; 2024 Bhatia Travels. All rights reserved. | IATA-Approved | TAAI Member</p>
        </div>
      </div>
    </footer>
  )
}
