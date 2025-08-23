"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-gray-200 h-fit bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
              <p className="text-gray-700">Fill out the form below and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-900">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-gray-200 focus:border-red-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-900">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="border-gray-200 focus:border-red-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-900">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-gray-200 focus:border-red-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="destination" className="text-gray-900">
                    Preferred Destination
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Thailand, Kashmir, Dubai"
                    className="border-gray-200 focus:border-red-400"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-900">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans, budget, preferred dates, and any special requirements..."
                    rows={8}
                    className="border-gray-200 focus:border-red-400 resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Get In Touch */}
            <Card className="border-2 border-gray-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-red-700 text-red-700 hover:bg-red-50 py-3 bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now: +91 9814927575
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-green-500 text-green-600 hover:bg-green-50 py-3 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Us
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-red-700 text-red-700 hover:bg-red-50 py-3 bg-transparent"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Email Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-2 border-gray-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-medium">9:30 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-red-700">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Contact Us */}
            <Card className="border-2 border-gray-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                    <span>Free consultation and travel planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                    <span>Customized packages within your budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                    <span>Visa assistance and documentation help</span>
                  </li>
                 
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
