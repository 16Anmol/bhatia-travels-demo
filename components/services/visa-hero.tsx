export default function VisaHero() {
  return (
    <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Visa Services</h1>
        <p className="text-lg text-red-200 mb-3">Complete assistance for study abroad programs with documentation support and interview preparation</p>

        {/* Contact Info */}
        <div className="mt-6 text-white-300 font-semibold"> 📞 Visa Helpline: +91 9814627575 | ✉️ visa@bhatiatravels.com | help@bhatiatravels.com</div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Fast Processing</div>
            <div className="text-red-200">Quick turnaround times</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Expert Guidance</div>
            <div className="text-red-200">Professional assistance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">All Countries</div>
            <div className="text-red-200">Worldwide visa support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
