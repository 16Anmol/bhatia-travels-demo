export default function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About Bhatia Travels</h1>
        <p className="text-xl text-red-200 mb-3 max-w-3xl mx-auto">
          Founded in 1982, Bhatia Travels brings over 40 years of unparalleled expertise in the travel and tourism
          industry.
        </p>
        <p className="text-red-300">IATA-Approved Travel Agent • TAAI Member • Jalandhar & Amritsar</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">40+</div>
            <div className="text-red-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-red-200">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-red-200">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">IATA</div>
            <div className="text-red-200">Certified</div>
          </div>
        </div>
      </div>
    </section>
  )
}
