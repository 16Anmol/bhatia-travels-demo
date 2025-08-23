"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, Calendar, Phone, MessageCircle, FileText, Users, Shield, Smile } from "lucide-react"
import Link from "next/link"

const departments = [
  {
    id: 1,
    title: "Visa Services",
    icon: FileText,
    phone: "+91 9814627575",
    email: "visa@bhatiatravels.com",
    description: "Expert visa processing with high approval rates for student, tourist, and business visas",
    features: ["Student Visa", "Tourist Visa", "Business Visa", "Visa Consultation", "Document Assistance"],
    highlight: "High Approval Rate",
    color: "gray",
    link: "/services/visa",
  },
  {
    id: 2,
    title: "Air Ticketing",
    icon: Plane,
    phone: "+91 9915327575",
    email: "fly@bhatiatravels.com",
    description: "IATA-certified ticketing services for domestic and international flights with competitive rates",
    features: ["Domestic Flights", "International Flights", "Group Bookings", "Travel Insurance", "Customer Support"],
    highlight: "IATA Certified",
    color: "gray",
    link: "/services/ticketing",
  },
  {
    id: 3,
    title: "Holiday Packages",
    icon: Calendar,
    phone: "+91 9814927575",
    email: "info@bhatiatravels.com",
    description: "Customized tour packages for domestic and international destinations with complete travel solutions",
    features: ["International Tours", "Domestic Tours", "Custom Itineraries", "Group Tours", "Destination Weddings"],
    highlight: "40+ Years Experience",
    color: "gray",
    link: "/tours",
  },
]

export default function ServicesDepartments() {
  const handleWhatsApp = (department: string, phone: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${department}. Please provide more information.`)
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Complete Travel Solutions</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Three specialized departments working together to provide comprehensive travel services with 40+ years of
            expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {departments.map((dept) => {
            const IconComponent = dept.icon
            return (
              <Card
                key={dept.id}
                className="border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg bg-white"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-red-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                    <Badge className="bg-red-700 text-white mb-3">{dept.highlight}</Badge>
                    <p className="text-gray-600 text-md mb-4">{dept.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Services Include:</h4>
                    <ul className="space-y-1">
                      {dept.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg mb-4 border border-gray-100">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1">Direct Contact</p>
                      <p className="font-semibold text-gray-800 text-sm">{dept.phone}</p>
                      <p className="text-xs text-gray-600">{dept.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={dept.link} className="flex-1">
                      <Button className="w-full bg-red-700 hover:bg-red-800 text-white text-xs py-2">Learn More</Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-red-700 text-red-700 hover:bg-gray-50 text-xs py-2 px-3 bg-transparent"
                      onClick={() => window.open(`tel:${dept.phone}`, "_self")}
                    >
                      <Phone className="w-3 h-3" />
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-3"
                      onClick={() => handleWhatsApp(dept.title, dept.phone)}
                    >
                      <MessageCircle className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Why Choose Us Section - minimal red accent */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Bhatia Travels?</h3>
            <p className="text-gray-700">Trusted expertise across all travel services since 1982</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-center">
            {" "}
            {/* Changed to 4 columns */}
            <div className="text-center">
              <div className="bg-white border border-gray-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smile className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Customer Friendly</h4>
              <p className="text-gray-600 text-sm">Dedicated support and personalized service for every traveler</p>
            </div>
            <div className="text-center">
              <div className="bg-white border border-gray-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Government Approved</h4>
              <p className="text-gray-600 text-sm">Approved by Ministry of External Affairs & Punjab Government</p>
            </div>
            <div className="text-center">
              <div className="bg-white border border-gray-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">10,000+ Customers</h4>
              <p className="text-gray-600 text-sm">Trusted by thousands of satisfied travelers since 1982</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
