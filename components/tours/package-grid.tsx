"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Phone, MessageCircle, Eye } from "lucide-react"
import Image from "next/image"

interface Package {
  id: number
  name: string
  price: string
  image: string
  description: string
  fullDescription: string
  highlights: string[]
  category: string
}

interface PackageGridProps {
  packages: Package[]
}

export default function PackageGrid({ packages }: PackageGridProps) {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)

  const handleWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${packageName} package. Please provide more information.`,
    )
    window.open(`https://wa.me/919814927575?text=${message}`, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919814927575", "_self")
  }

  const handleBookNow = (packageName: string) => {
    const message = encodeURIComponent(
      `Hi, I want to book the ${packageName} package. Please help me with the booking process.`,
    )
    window.open(`https://wa.me/919814927575?text=${message}`, "_blank")
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-red-200 hover:border-red-400 group"
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
              <Badge className="absolute top-4 right-4 bg-red-700 text-white font-semibold">{pkg.price} onwards</Badge>
              <Badge className="absolute top-4 left-4 bg-white text-red-700">{pkg.category}</Badge>
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{pkg.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pkg.description}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  View More
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-red-700 text-red-700 hover:bg-red-50 bg-transparent text-xs sm:text-sm"
                  onClick={handleCall}
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </Button>
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => handleWhatsApp(pkg.name)}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
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
              <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-16rem)] lg:max-h-[95vh]">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    Tour Package For {selectedPackage.name}
                  </h2>
                  <Badge className="bg-red-700 text-white text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2 font-semibold">
                    {selectedPackage.price} onwards
                  </Badge>
                </div>
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {selectedPackage.fullDescription}
                  </p>
                </div>
                {selectedPackage.highlights && selectedPackage.highlights.length > 0 && (
                  <div className="mb-4 sm:mb-6 lg:mb-8">
                    <h4 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl">
                      Package Highlights:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 sm:gap-3">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-700 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    className="flex-1 bg-red-700 hover:bg-red-800 text-white py-2 sm:py-3 text-sm sm:text-base"
                    onClick={() => handleBookNow(selectedPackage.name)}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-700 text-red-700 hover:bg-red-50 py-2 sm:py-3 bg-transparent text-sm sm:text-base"
                    onClick={handleCall}
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Call Now
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    onClick={() => handleWhatsApp(selectedPackage.name)}
                  >
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
