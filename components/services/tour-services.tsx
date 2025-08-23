import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, Plane, Shield } from "lucide-react"

const internationalDestinations = [
  {
    name: "New York City Explorer",
    price: "₹1,25,000",
    image:
      "https://images.pexels.com/photos/28518041/pexels-photo-28518041/free-photo-of-new-york-city-skyline-at-night.jpeg",
    description: "Experience the city that never sleeps with iconic landmarks, Broadway shows, and vibrant culture",
    highlights: ["Times Square", "Central Park", "Statue of Liberty", "Empire State Building", "Broadway Shows"],
    category: "America",
  },
  {
    name: "Dubai Luxury Experience",
    price: "₹36,000",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Dubai_-_Burj_Al_Arab_-_Helicopter_View.jpg",
    description: "Experience luxury and modern architecture in the city of gold",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Dhow Cruise", "Luxury Hotels"],
    category: "Dubai",
  },
  {
    name: "London Royal Heritage",
    price: "₹95,000",
    image: "https://live.staticflickr.com/2840/10658001973_72cd1bb333_b.jpg",
    description: "Explore London's royal palaces, historic landmarks, and cultural treasures",
    highlights: ["Buckingham Palace", "Tower of London", "Westminster Abbey", "Thames Cruise", "British Museum"],
    category: "London",
  },
  {
    name: "Bali Temple & Beach",
    price: "₹49,500",
    image: "https://live.staticflickr.com/5302/5779381745_58ac1403b8_b.jpg",
    description: "Discover the magic of Bali with ancient temples and pristine beaches",
    highlights: ["Tanah Lot Temple", "Uluwatu Temple", "Beach Resorts", "Cultural Shows", "Sunset Views"],
    category: "Bali",
  },
]

const domesticDestinations = [
  {
    name: "Rajasthan Royal Heritage",
    price: "₹15,000",
    image: "https://indiawalkthrough.com/wp-content/uploads/2023/11/image-159.jpeg",
    description: "Explore the royal palaces, forts, and vibrant culture of the Land of Kings",
    highlights: ["Amber Palace", "City Palace Udaipur", "Mehrangarh Fort", "Thar Desert Safari", "Cultural Shows"],
    category: "Domestic",
  },
  {
    name: "Kashmir Paradise",
    price: "₹18,000",
    image: "https://live.staticflickr.com/8026/7666020888_8c7423d19c_b.jpg",
    description: "Experience the breathtaking beauty of Kashmir, the Paradise on Earth",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valleys", "Mughal Gardens", "Houseboat Stay"],
    category: "Domestic",
  },
  {
    name: "Goa Beach Bliss",
    price: "₹12,000",
    image:
      "https://images.pexels.com/photos/29023464/pexels-photo-29023464/free-photo-of-scenic-view-of-anjuna-beach-goa-s-coastline.jpeg",
    description: "Relax on pristine beaches and enjoy the vibrant nightlife of Goa",
    highlights: ["Baga Beach", "Basilica of Bom Jesus", "Spice Plantations", "Water Sports", "Beach Parties"],
    category: "Domestic",
  },
  {
    name: "Kerala Backwaters",
    price: "₹16,000",
    image: "https://live.staticflickr.com/3277/2535893402_6c78f420d8_b.jpg",
    description: "Cruise through the serene backwaters and experience God's Own Country",
    highlights: ["Houseboat Cruise", "Munnar Tea Gardens", "Spice Plantations", "Kathakali Shows", "Ayurvedic Spa"],
    category: "Domestic",
  },
]

export default function TourServices() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tour Package Services</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Customized travel experiences designed to create unforgettable memories for individuals, families, and
            groups across domestic and international destinations.
          </p>
          <div className="mt-4 text-red-700 font-semibold">
            📞 Tour Packages: +91 9814927575, +91 9872757000 | ✉️ info@bhatiatravels.com | mandeep@bhatiatravels.com
          </div>
        </div>

        {/* International Packages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">International Tour Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalDestinations.map((pkg, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-red-300 transition-colors overflow-hidden bg-white"
              >
                <div className="relative">
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-red-700 text-white font-semibold">
                    {pkg.price} onwards
                  </Badge>
                  <Badge className="absolute top-3 left-3 bg-white text-red-700">{pkg.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>
                  <div className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-red-700" />
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Domestic Packages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Domestic Tour Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticDestinations.map((pkg, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-red-300 transition-colors overflow-hidden bg-white"
              >
                <div className="relative">
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-red-700 text-white font-semibold">
                    {pkg.price} onwards
                  </Badge>
                  <Badge className="absolute top-3 left-3 bg-white text-red-700">{pkg.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>
                  <div className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-red-700" />
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                <Shield className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-xs">Travel insurance and 24/7 support included</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
