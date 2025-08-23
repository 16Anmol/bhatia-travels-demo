import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alky Bharti",
    location: "Amritsar",
    rating: 5,
    text: "Best in town and there visa travel services are top notch and especially manisha, she is so cooperative with each person she meets and does her job at its best",
    trip: "",
  },
  {
    id: 2,
    name: "Amanpreet Kaur",
    location: "Jalandhar",
    rating: 5,
    text: "I am very happy with their services, staff is very co-operative and full of knowledge. Specially param sir is very nice and just because of his efforts i am here in Canada. He supported me in everything and did his best.😊👍🌟",
    trip: "Visa Service",
  },
  {
    id: 3,
    name: "Anjali Gupta",
    location: "Ludhiana",
    rating: 4,
    text: "Professional service and competitive prices. They helped us with visa processing and made our Europe trip hassle-free. Thank you Bhatia Travels!",
    trip: "Europe Package",
  },
]

export default function CustomerTestimonials() {
  return (
    <section className="py-16 bg-red-50">
      {" "}
      {/* Changed background to light red */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their travel
            experiences with Bhatia Travels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-2 border-gray-200 hover:border-gray-300 transition-colors bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="w-6 h-6 text-red-700" /> {/* Adjusted icon color */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-gray-600 text-xs mt-1">{testimonial.trip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-white border-2 border-gray-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Happy Travelers</h3>
              <p className="text-gray-700 mb-6">
                Experience the difference that 40+ years of expertise makes. Let us create your perfect journey.
              </p>
              <div className="flex justify-center items-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.0/5</div>
                  <div className="text-gray-600">Customer Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">206</div>
                  <div className="text-gray-600">Tour Packages</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
