import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function OurFounders() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The visionary leadership behind Bhatia Travels, bringing decades of experience and commitment to excellence
            in travel services.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-3xl mx-auto">
          <Card className="overflow-hidden border-2 border-red-200 hover:border-gray-300 transition-colors bg-white">
            <CardContent className="pt-2 px-8 pb-8 text-center">
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-56 h-44 rounded-lg overflow-hidden">
                  <Image
                    src="/images/bhatia-logo-leadership.png"
                    alt="Bhatia Travels Leadership"
                    width={168} 
                     height={122}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bhatia Travels Leadership</h3>
                  <p className="text-gray-600 font-medium">IATA-Approved Travel Experts</p>
                  <Badge className="mt-2 bg-red-700 text-white">TAAI Members</Badge>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our leadership team brings over 40 years of expertise in the travel industry. As an IATA-approved travel
                agent and active member of the Travel Agents Association of India (TAAI), our CEO serves as the Honorary
                Secretary of TAAI, Punjab. This commitment to industry leadership ensures we maintain the highest
                standards of service excellence and professional integrity in all our travel solutions.
              </p>
              <div className="mt-6 text-gray-600 font-medium">
                Office Hours: 9:30 AM - 6:00 PM (Mon-Sat) | Sunday: Closed
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credentials Section */}
        <div className="mt-16">
          <Card className="bg-white border-2 border-red-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <Image
                    src="/images/iata-logo.png"
                    alt="IATA Certified"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2 text-gray-900">IATA Certified</h4>
                  <p className="text-gray-600">
                    Globally recognized ticketing and travel compliance with the highest industry standards.
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/taai-logo.png"
                    alt="TAAI Member"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2 text-gray-900">TAAI Member</h4>
                  <p className="text-gray-600">
                    Active member with our CEO serving as Honorary Secretary of TAAI, Punjab.
                  </p>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
