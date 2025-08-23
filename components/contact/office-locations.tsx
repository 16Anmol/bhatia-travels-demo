"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from "lucide-react"

const offices = [
  {
    id: 1,
    name: "Jalandhar Office",
    type: "Main Office",
    address: "925, GT Road, Near Gen. Bus Stand, Jalandhar, India 144001",
    phone: "0181-4605000",
    mobile: "+91 9814927575",
    email: "info@bhatiatravels.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13637.951211430848!2d75.5855!3d31.3141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101bc52205c1e1%3A0x93431fd3a80f541f!2sBhatia%20Travels!5e0!3m2!1sen!2sin!4v1699192119461!5m2!1sen!2sin",
    color: "red",
    description: "Conveniently located near the General Bus Stand for easy accessibility from all parts of Jalandhar.",
  },
  {
    id: 2,
    name: "Amritsar Office",
    type: "Branch Office",
    address: "B - Block, Ranjit Avenue, Amritsar, Punjab 143001",
    phone: "0183-5007000",
    mobile: "+91 9814927575",
    email: "info@bhatiatravels.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5234567890123!2d74.8630489!3d31.650644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919649822dd58a7%3A0x47161a4df93650b!2sB%20-%20Block%2C%20Ranjit%20Avenue%2C%20Amritsar%2C%20Punjab%20143001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    color: "gray", // Changed from green to gray
    description: "Strategic location in the heart of Amritsar for local accessibility, near La Pizzeria.",
  },
]

export default function OfficeLocations() {
  const [currentOffice, setCurrentOffice] = useState(0)

  const nextOffice = () => {
    setCurrentOffice((prev) => (prev + 1) % offices.length)
  }

  const prevOffice = () => {
    setCurrentOffice((prev) => (prev - 1 + offices.length) % offices.length)
  }

  const office = offices[currentOffice]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Visit us at our convenient locations in Jalandhar and Amritsar. Our experienced team is ready to help you
            plan your perfect journey.
          </p>
        </div>

        {/* Swipable Office Cards */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Card className={`border-2 border-gray-200 hover:border-red-300 transition-colors bg-white`}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`bg-red-700 p-3 rounded-full`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{office.name}</h3>
                      <span className={`text-gray-700 text-sm font-medium`}>{office.type}</span>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevOffice}
                      className="w-8 h-8 p-0 rounded-full bg-transparent border-gray-300 hover:border-red-700 hover:text-red-700"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextOffice}
                      className="w-8 h-8 p-0 rounded-full bg-transparent border-gray-300 hover:border-red-700 hover:text-red-700"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-5 h-5 text-red-700 mt-1`} />
                    <div>
                      <p className="font-medium text-gray-900">Address:</p>
                      <p className="text-gray-700">{office.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className={`w-5 h-5 text-red-700 mt-1`} />
                    <div>
                      <p className="font-medium text-gray-900">Contact:</p>
                      <p className="text-gray-700">Landline: {office.phone}</p>
                      <p className="text-gray-700">Mobile: {office.mobile}</p>
                      <p className="text-gray-700">Email: {office.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className={`w-5 h-5 text-red-700 mt-1`} />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours:</p>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p>Monday - Saturday: 9:30 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between mt-6">
                  <div className={`p-4 bg-gray-50 rounded-lg flex-grow`}>
                    <p className={`text-sm text-gray-700 mb-4`}>
                      <strong>{office.type}:</strong> {office.description}
                    </p>
                  </div>
                  <Button
                    className={`mt-4 w-full bg-red-700 hover:bg-red-800 text-white`}
                    onClick={() => window.open(office.mapUrl, "_blank")}
                  >
                    View on Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Office Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {offices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOffice(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentOffice ? "bg-red-700" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Combined Map Section */}
        <div className="mt-12">
          <Card className="border-2 border-gray-200 bg-white">
            <CardContent className="p-4 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us on Map</h3>
              <div className="bg-gray-100 h-64 sm:h-80 rounded-lg flex items-center justify-center">
                <iframe
                  src={office.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Jalandhar Office</h4>
                  <p className="text-sm text-gray-700">925, GT Road, Near General Bus Stand</p>
                  <p className="text-sm text-red-700">📞 0181-4605000</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Amritsar Office</h4>
                  <p className="text-sm text-gray-700">B - Block, Ranjit Avenue, Near La Pizzeria</p>
                  <p className="text-sm text-red-700">📞 0183-5007000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
