import { Card, CardContent } from "@/components/ui/card"
import { Award, MapPin, Users } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-900 mb-4">Why Choose Bhatia Travels?</h2>
          <p className="text-lg text-red-700 max-w-3xl mx-auto">
            40+ years of excellence with industry certifications and proven expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Certified Excellence</h3>
              <p className="text-red-700 leading-relaxed">
                IATA-approved agent with TAAI membership. Our CEO serves as Honorary Secretary of TAAI, Punjab, ensuring
                industry-leading standards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Complete Solutions</h3>
              <p className="text-red-700 leading-relaxed">
                Air ticketing, holiday packages, visa assistance, travel insurance, destination weddings, and
                educational consultancy - all under one roof.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Trusted Locations</h3>
              <p className="text-red-700 leading-relaxed">
                Strategic offices in Jalandhar and Amritsar with 40+ years of trusted service. Operating since 1982 with
                government approvals and industry recognition.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
