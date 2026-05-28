import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './sections/HeroSection'
import FeaturesBarSection from './sections/FeaturesBarSection'
import ServicesSection from './sections/ServicesSection'
import PricingSection from './sections/PricingSection'
import MonitoringSection from './sections/MonitoringSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import ReliabilitySection from './sections/ReliabilitySection'
import CTASection from './sections/CTASection'

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBarSection />
        <ServicesSection />
        <PricingSection />
        <MonitoringSection />
        <WhyChooseUsSection />
        <ReliabilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
