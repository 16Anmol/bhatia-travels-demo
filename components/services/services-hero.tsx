interface ServicesHeroProps {
  title?: string
  subtitle?: string
  department?: "visa" | "ticketing" | "packages"
}

const departmentContacts = {
  visa: {
    phone: "+91 9814627575",
    email: "visa@bhatiatravels.com",
  },
  ticketing: {
    phone: "+91 9915327575",
    email: "fly@bhatiatravels.com",
  },
  packages: {
    phone: "+91 9814927575",
    email: "info@bhatiatravels.com",
  },
}

export default function ServicesHero({
  title = "Our Services",
  subtitle = "Comprehensive travel solutions with 40+ years of expertise",
  department,
}: ServicesHeroProps) {
  const contact = department ? departmentContacts[department] : null

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-200 mb-4">{subtitle}</p>
        <p className="text-gray-300">IATA-Approved • TAAI Member • Government Certified</p>

        {contact && (
          <div className="mt-4 text-blue-300 font-semibold">
            📞 {contact.phone} | ✉️ {contact.email}
          </div>
        )}
      </div>
    </section>
  )
}
