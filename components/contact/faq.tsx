import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do travel agents help in making flight reservations?",
    answer:
      "Yes, travel agents help their clients in making flight reservations. They will help you book a seat as per your budget. To know more contact Bhatia Travels and discuss the same in detail.",
  },
  {
    question: "Does Bhatia Travels help create an itinerary for the trip?",
    answer:
      "Yes, many travel agents will prepare an itinerary for your travel trip and make reservations based on that.",
  },
  {
    question: "What are the business hours of Bhatia Travels?",
    answer:
      "The business hours of Bhatia Travels are Monday to Friday: 9:30 am - 6:00 pm, Saturday: 9:30 am - 6:00 pm, Sunday: Closed.",
  },
  {
    question: "How effective are the services of Bhatia Travels?",
    answer:
      "Having received the customer rating of 4.0, Bhatia Travels has become a well-known company ranking high in Travel Agents in Amritsar.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-red-700 max-w-3xl mx-auto">
            Find answers to common questions about our travel services and booking process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-2 border-red-100 hover:border-red-300 transition-colors">
              <Collapsible>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-6 flex items-center justify-between hover:bg-red-50 transition-colors">
                    <h3 className="text-left font-semibold text-red-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-red-600 transition-transform ui-open:rotate-180 flex-shrink-0" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-6 pb-6 pt-0 border-t border-red-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
