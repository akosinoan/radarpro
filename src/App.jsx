import { MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileContactBar from './components/layout/MobileContactBar'
import HeroSection from './sections/HeroSection'
<<<<<<< HEAD
import SolutionsSection from './sections/SolutionsSection'
import IndustriesSection from './sections/IndustriesSection'
import ProcessSection from './sections/ProcessSection'
import MonitoringSection from './sections/MonitoringSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import CompanySection from './sections/CompanySection'
import AssessmentSection from './sections/AssessmentSection'
=======
import FeaturesBarSection from './sections/FeaturesBarSection'
import PromoSection from './sections/PromoSection'
import ServicesSection from './sections/ServicesSection'
import PricingSection from './sections/PricingSection'
import MonitoringSection from './sections/MonitoringSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import ReliabilitySection from './sections/ReliabilitySection'
import PartnersSection from './sections/PartnersSection'
import CTASection from './sections/CTASection'
>>>>>>> refs/remotes/origin/main
import LocationSection from './sections/LocationSection'

export default function App() {
  return (
<<<<<<< HEAD
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-white">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <HeroSection />
          <SolutionsSection />
          <IndustriesSection />
          <ProcessSection />
          <MonitoringSection />
          <WhyChooseUsSection />
          <CompanySection />
          <AssessmentSection />
          <LocationSection />
        </main>
        <Footer />
        <MobileContactBar />
      </div>
    </MotionConfig>
=======
    <div className="relative min-h-screen text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBarSection />
        <PromoSection />
        <ServicesSection />
        <PricingSection />
        <MonitoringSection />
        <WhyChooseUsSection />
        <ReliabilitySection />
        <PartnersSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
    </div>
>>>>>>> refs/remotes/origin/main
  )
}
