import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Calendar, Star, Plane, Camera } from "lucide-react"

export default function PackageServices() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Holiday Package Services</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Customized travel experiences designed to create unforgettable memories for individuals, families, and
            groups.
          </p>
          <div className="mt-4 text-red-700 font-semibold">
            📞 Holiday Packages: +91 9814927575, +91 9872757000 | ✉️ info@bhatiatravels.com | mandeep@bhatiatravels.com
          </div>
        </div>

        {/* Package Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">International Packages</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Explore the world with our carefully curated international tour packages covering popular destinations.
              </p>
              <div className="text-red-700 text-sm font-medium">America • Europe • Dubai • Bali • Thailand</div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Domestic Packages</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Discover the beauty of India with our domestic tour packages covering hill stations, beaches, and
                heritage sites.
              </p>
              <div className="text-red-700 text-sm font-medium">Kashmir • Rajasthan • Goa • Kerala • Himachal</div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Group & Corporate</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Special packages for corporate groups, family reunions, and destination weddings with customized
                itineraries.
              </p>
              <div className="text-red-700 text-sm font-medium">
                Corporate Tours • Destination Weddings • Family Groups
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 text-center">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Custom Itineraries</h3>
              <p className="text-gray-600 text-xs">Personalized travel plans based on your preferences</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 text-center">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Plane className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Complete Packages</h3>
              <p className="text-gray-600 text-xs">Flights, hotels, transfers, and sightseeing included</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 text-center">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-xs">40+ years of experience in travel planning</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 text-center">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Memorable Experiences</h3>
              <p className="text-gray-600 text-xs">Creating lifelong memories with every journey</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
