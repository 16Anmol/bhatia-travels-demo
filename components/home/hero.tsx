"use client"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Calendar, Plane } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-background.jpg"
        alt="Travel map with passport and camera"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4 w-full max-w-6xl mx-auto py-12 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            BHATIA TRAVELS
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 text-gray-700 font-light">
            Your Gateway to Unforgettable Journeys
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
            Founded 1982 • 40+ Years of Excellence • IATA-Approved • TAAI Member
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
            <span className="font-medium text-sm sm:text-base text-center text-gray-900">Visa Services</span>
            <span className="text-xs text-gray-600">📞 +91 9814627575</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
            <span className="font-medium text-sm sm:text-base text-center text-gray-900">Air Ticketing</span>
            <span className="text-xs text-gray-600">📞 +91 9915327575</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
            <span className="font-medium text-sm sm:text-base text-center text-gray-900">Holiday Packages</span>
            <span className="text-xs text-gray-600">📞 +91 9814927575</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6">
          <Link href="/services" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold w-full sm:w-auto"
            >
              Explore All Services
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-red-700 text-red-700 hover:bg-red-50 hover:text-red-800 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold w-full sm:w-auto bg-transparent"
            onClick={scrollToFooter}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>

        <div className="text-gray-600">
          <p className="text-sm sm:text-base lg:text-lg mb-2">Trusted by 10,000+ Happy Travelers</p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-base sm:text-lg lg:text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm sm:text-base">4.0/5 Customer Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
