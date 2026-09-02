import { MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileContactBar from './components/layout/MobileContactBar'
import HeroSection from './sections/HeroSection'
import SolutionsSection from './sections/SolutionsSection'
import IndustriesSection from './sections/IndustriesSection'
import ProcessSection from './sections/ProcessSection'
import MonitoringSection from './sections/MonitoringSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import CompanySection from './sections/CompanySection'
import AssessmentSection from './sections/AssessmentSection'
import LocationSection from './sections/LocationSection'

export default function App() {
  return (
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
  )
}
