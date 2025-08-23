import ServicesHero from "@/components/services/services-hero"
import TourServices from "@/components/services/tour-services"

export default function TourServicesPage() {
  return (
    <>
      <ServicesHero
        title="Tour Package Services"
        subtitle="Customized travel packages for unforgettable experiences"
        department="tours"
      />
      <TourServices />
    </>
  )
}
