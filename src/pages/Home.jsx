import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ImprimeSection from "../ImprimeSection/ImprimerSection"
import Contact from "../Contact/Contact"
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <ImprimeSection/>
      <Contact/>
    </div>
  )
}

export default Home