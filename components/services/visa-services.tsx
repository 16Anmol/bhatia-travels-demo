import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, FileText, Clock, Award } from "lucide-react"

export default function VisaServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
      

        {/* Visa Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Visa</h3>
              <p className="text-gray-700 mb-4">
                Complete assistance for study abroad programs with documentation support and interview preparation.
              </p>
              <Badge className="bg-red-700 text-white">Education Consultancy</Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tourist Visa</h3>
              <p className="text-gray-700 mb-4">
                Holiday and leisure travel visas with fast processing and high approval rates for all destinations.
              </p>
              <Badge className="bg-red-700 text-white">Leisure Travel</Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Visa</h3>
              <p className="text-gray-700 mb-4">
                Corporate travel solutions with expedited processing for business meetings and conferences.
              </p>
              <Badge className="bg-red-700 text-white">Corporate Travel</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Visa Process Roadmap */}
        <Card className="bg-red-50 border-2 border-red-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Visa Processing Roadmap</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Consultation</h4>
                <p className="text-sm text-gray-700">Free assessment of your visa requirements</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-red-700" />
              </div>
              <div className="text-center">
                <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                <p className="text-sm text-gray-700">Complete paperwork and form filling assistance</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-red-700" />
              </div>
              <div className="text-center">
                <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Submission</h4>
                <p className="text-sm text-gray-700">Application submission and tracking</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-red-700" />
              </div>
              <div className="text-center">
                <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Interview Prep</h4>
                <p className="text-sm text-gray-700">Mock interviews and guidance sessions</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-red-700" />
              </div>
              <div className="text-center">
                <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Approval</h4>
                <p className="text-sm text-gray-700">Visa collection and travel clearance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
