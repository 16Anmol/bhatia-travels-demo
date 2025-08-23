export default function TicketingHero() {
  return (
    <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Air Ticketing</h1>
        <p className="text-xl text-red-200 mb-3">We ensure globally recognized ticketing and travel compliance.</p>
    
        {/* Contact Info */}
        <div className="mt-6 text-white-300 font-semibold">📞 Ticketing Helpline: +91 9915327575 | ✉️ fly@bhatiatravels.com</div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Best Prices</div>
            <div className="text-red-200">Competitive flight rates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Easy Booking</div>
            <div className="text-red-200">Hassle-free reservations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7 Support</div>
            <div className="text-red-200">Round-the-clock assistance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
