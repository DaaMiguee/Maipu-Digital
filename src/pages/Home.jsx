import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ImprimeSection from "../components/ImprimeSection/ImprimerSection"
import Contact from "../components/Contact/Contact"
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