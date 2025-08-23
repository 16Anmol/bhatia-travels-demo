"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, MessageCircle, Eye, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredPackages = [
  {
    id: 1,
    name: "New York City Explorer",
    price: "₹1,25,000",
    image: "https://images.pexels.com/photos/28518041/pexels-photo-28518041/free-photo-of-new-york-city-skyline-at-night.jpeg",
    description: "Experience the city that never sleeps with iconic landmarks, Broadway shows, and vibrant culture",
    fullDescription:
      "Discover the magic of New York City with visits to Times Square, Central Park, Statue of Liberty, Empire State Building, and Broadway shows. Enjoy world-class dining, shopping on Fifth Avenue, and the cultural diversity that makes NYC unique.",
    highlights: ["Times Square", "Central Park", "Statue of Liberty", "Empire State Building", "Broadway Shows"],
    category: "America",
  },
  {
    id: 2,
    name: "Dubai Luxury Experience",
    price: "₹36,000",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Dubai_-_Burj_Al_Arab_-_Helicopter_View.jpg",
    description: "Experience luxury and modern architecture in the city of gold",
    fullDescription:
      "Discover Dubai's architectural marvels including Burj Khalifa, luxury shopping at Dubai Mall, desert safari adventures, and traditional dhow cruises. Experience the perfect blend of modern luxury and Arabian culture.",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Dhow Cruise", "Luxury Hotels"],
    category: "Dubai",
  },
  {
    id: 3,
    name: "Bali Temple & Beach",
    price: "₹49,500",
    image: "https://live.staticflickr.com/5302/5779381745_58ac1403b8_b.jpg",
    description: "Discover the magic of Bali with ancient temples and pristine beaches",
    fullDescription:
      "Experience Bali's spiritual side with temple visits to Tanah Lot, Uluwatu, and Besakih. Relax on beautiful beaches, enjoy traditional Balinese culture, and witness stunning sunsets over the Indian Ocean.",
    highlights: ["Tanah Lot Temple", "Uluwatu Temple", "Beach Resorts", "Cultural Shows", "Sunset Views"],
    category: "Bali",
  },
]

export default function FeaturedPackages() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null)

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in holiday packages. Please provide more information.")
    window.open(`https://wa.me/919814927575?text=${message}`, "_blank")
  }

  return (
    <section className="py-12 sm:py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Holiday Packages</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular destinations with carefully curated travel experiences. From exotic international
            locations to beautiful domestic getaways.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-red-200 hover:border-red-300 group"
            >
              <div className="relative cursor-pointer" onClick={() => setSelectedPackage(pkg)}>
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <Badge className="absolute top-4 right-4 bg-red-700 text-white">{pkg.price} onwards</Badge>
                <Badge className="absolute top-4 left-4 bg-white text-red-700">{pkg.category}</Badge>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-red-700 hover:bg-red-800 text-xs sm:text-sm"
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    View More
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-red-700 text-red-700 hover:bg-red-50 bg-transparent text-xs sm:text-sm"
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white" onClick={handleWhatsApp}>
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/tours">
            <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3">
              View All Packages
            </Button>
          </Link>
        </div>

        {/* Package Detail Modal */}
        <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
          <DialogContent className="max-w-4xl max-h-[95vh] overflow-hidden p-0 bg-white">
            {selectedPackage && (
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-64 lg:h-auto lg:min-h-[500px]">
                  <Image
                    src={selectedPackage.image || "/placeholder.svg"}
                    alt={selectedPackage.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-16rem)] lg:max-h-[95vh]">
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                      Tour Package For {selectedPackage.name}
                    </h2>
                    <Badge className="bg-red-700 text-white text-lg px-4 py-2 font-semibold">
                      {selectedPackage.price} onwards
                    </Badge>
                  </div>
                  <div className="mb-6 lg:mb-8">
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      {selectedPackage.fullDescription}
                    </p>
                  </div>
                  {selectedPackage.highlights && selectedPackage.highlights.length > 0 && (
                    <div className="mb-6 lg:mb-8">
                      <h4 className="font-bold text-gray-800 mb-4 text-lg lg:text-xl">Package Highlights:</h4>
                      <ul className="space-y-3">
                        {selectedPackage.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-red-700 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-red-700 hover:bg-red-800 text-white py-3">Book Now</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-red-700 text-red-700 hover:bg-red-50 py-3 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6" onClick={handleWhatsApp}>
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
