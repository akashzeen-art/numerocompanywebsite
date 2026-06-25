import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/home/AboutSection'
import Hero from '../components/home/Hero'
import PortfolioSection from '../components/home/PortfolioSection'
import ServicesSection from '../components/home/ServicesSection'

export default function Home() {
  return (
    <div className="page page--home">
      <Header />
      <main>
        <Hero />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
