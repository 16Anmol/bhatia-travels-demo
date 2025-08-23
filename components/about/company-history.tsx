import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users, MapPin } from "lucide-react"

export default function CompanyHistory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From humble beginnings in 1982 to becoming a trusted IATA-approved travel agent and TAAI member, here's our
            story of four decades of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Four Decades of Excellence</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1982, Bhatia Travels brings over 40 years of unparalleled expertise in the travel and tourism
              industry. With headquarters in Jalandhar and Amritsar, we are proud to be an IATA-approved travel agent
              and an active member of the Travel Agents Association of India (TAAI).
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our CEO also serves as the Honorary Secretary of TAAI, Punjab, reinforcing our commitment to upholding the
              highest industry standards. Established and operational since April 5, 1982, with government approvals
              from the Ministry of External Affairs and Punjab Government for education consultancy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted IATA-certified agent, we ensure globally recognized ticketing and travel compliance. Our
              leadership is actively shaping travel policies and standards at the state level through our TAAI
              membership.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center border-2 border-red-200">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">1982</h4>
                <p className="text-gray-600">Established</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-200">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">40+</h4>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-200">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">10,000+</h4>
                <p className="text-gray-600">Happy Customers</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-200">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">2</h4>
                <p className="text-gray-600">Office Locations</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver seamless and trustworthy travel experiences, catering to every aspect of our clients'
                journey—from initial visa guidance and air ticketing to creating bespoke vacations, destination
                celebrations, and safe travels. Our dedication aims to exceed expectations and create lifelong memories.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted travel partner, creating unforgettable experiences that inspire and enrich lives.
                We strive to make every journey memorable, safe, and tailored to individual preferences while
                maintaining the highest standards of service excellence and industry compliance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
