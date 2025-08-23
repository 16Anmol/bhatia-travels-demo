export default function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-red-200 mb-3">
          Ready to plan your next adventure? Get in touch with our travel experts
        </p>
        <p className="text-red-300">We're here to help you create unforgettable travel experiences</p>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Call Us</div>
            <div className="text-red-200">Jalandhar: 0181-4605000</div>
            <div className="text-red-200">Amritsar: 0183-5007000</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Email Us</div>
            <div className="text-red-200">info@bhatiatravels.com</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Visit Us</div>
            <div className="text-red-200">Mon-Sat: 9:30 AM - 6:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  )
}
