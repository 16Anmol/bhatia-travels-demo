import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowRight, ArrowLeft, Plane, CreditCard, MapPin, Shield, CheckCircle } from "lucide-react"

export default function AirTicketing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
       

        {/* Chain-style Flight Booking Process */}
        <Card className="bg-white border-2 border-gray-200 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Flight Booking Process</h3>

            <div className="max-w-4xl mx-auto">
              {/* Desktop Flow: 1 → 2, ↓, 4 → 3 */}
              <div className="hidden lg:block">
                {/* Step 1 and 2 - Top Row */}
                <div className="flex items-center justify-center gap-8 mb-4">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg">
                      1
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                      <h4 className="font-semibold text-gray-900 mb-2">Search & Compare</h4>
                      <p className="text-sm text-gray-700">Best fares across all airlines with real-time pricing</p>
                    </div>
                  </div>

                  {/* Arrow 1 to 2 */}
                  <div className="flex items-center">
                    <ArrowRight className="w-8 h-8 text-red-700" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg">
                      2
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                      <h4 className="font-semibold text-gray-900 mb-2">Book & Confirm</h4>
                      <p className="text-sm text-gray-700">Instant booking confirmation with e-ticket generation</p>
                    </div>
                  </div>
                </div>

                {/* Centered Arrow Down */}
                

                {/* Step 4 and 3 - Bottom Row (4 → 3) */}
                <div className="flex items-center justify-center gap-8">
                  {/* Step 4 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                      <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                      <p className="text-sm text-gray-700">Continuous assistance for changes and queries</p>
                    </div>
                  </div>

                  {/* Arrow 4 to 3 */}
                  <div className="flex items-center">
                    <ArrowLeft className="w-8 h-8 text-red-700" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg">
                      3
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Processing</h4>
                      <p className="text-sm text-gray-700">Secure payment with multiple options and EMI facilities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Flow: 1 → 2 → 3 → 4 */}
              <div className="lg:hidden space-y-6">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Search & Compare</h4>
                    <p className="text-sm text-gray-700">Best fares across all airlines with real-time pricing</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <ArrowDown className="w-8 h-8 text-red-700" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Book & Confirm</h4>
                    <p className="text-sm text-gray-700">Instant booking confirmation with e-ticket generation</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <ArrowDown className="w-8 h-8 text-red-700" />
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Payment Processing</h4>
                    <p className="text-sm text-gray-700">Secure payment with multiple options and EMI facilities</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <ArrowDown className="w-8 h-8 text-red-700" />
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                    <p className="text-sm text-gray-700">Continuous assistance for changes and queries</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="border-2 border-gray-100 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Domestic & International</h3>
              <p className="text-gray-700 text-xs sm:text-sm">All major airlines with competitive pricing</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Flexible Payment</h3>
              <p className="text-gray-700 text-xs sm:text-sm">Multiple payment options with EMI facilities</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Group Bookings</h3>
              <p className="text-gray-700 text-xs sm:text-sm">Special rates for family and corporate groups</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-red-300 transition-colors bg-white">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Travel Insurance</h3>
              <p className="text-gray-700 text-xs sm:text-sm">Comprehensive coverage for safe travels</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
