"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    image: "/images/instagram/post1.jpg",
    alt: "Looking for flights? We have you covered - Bhatia Travels",
  },
  {
    id: 2,
    image: "/images/instagram/post2.jpg",
    alt: "Escape to Exotic Paradises - Bhatia Travels",
  },
  {
    id: 3,
    image: "/images/instagram/post3.jpg",
    alt: "Travel the World - Experience Cultures Beyond Borders",
  },
  {
    id: 4,
    image: "/images/instagram/post4.jpg",
    alt: "Study Abroad with Bhatia Travels",
  },
  {
    id: 5,
    image: "/images/instagram/post5.jpg",
    alt: "Explore India with Bhatia Travels",
  },
  {
    id: 6,
    image: "/images/instagram/post6.jpg",
    alt: "Australia Visa Approval - Bhatia Travels",
  },
]

export default function InstagramGallery() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Facebook className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-red-900">Follow Our Journey</h2>
            <Instagram className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-lg text-red-700 max-w-3xl mx-auto">
            Stay connected with us on social media to see the latest travel experiences and destinations from our happy
            customers.
          </p>
        </div>

        {/* Pinterest-style Grid with Simple Hover */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="break-inside-avoid group">
                <Card className="overflow-hidden border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              onClick={() => window.open("https://www.instagram.com/bhatiatravels_/?hl=en", "_blank")}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow @bhatiatravels_
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              onClick={() => window.open("https://www.facebook.com/bhatiatravels1982/", "_blank")}
            >
              <Facebook className="w-5 h-5 mr-2" />
              Like Our Facebook Page
            </Button>
          </div>
         
        </div>
      </div>
    </section>
  )
}
