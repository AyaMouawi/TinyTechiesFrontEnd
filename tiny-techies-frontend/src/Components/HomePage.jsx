import React from 'react'
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import CoursesSection from "./CoursesSection";
import Statistics from "./Statistics";
import RemarkableSection from "./RemarkableSection";
import Team from "./Team"
import Footer from "./Footer"


const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <AboutUs/>
      <CoursesSection/>
      <Statistics/>
      <Team/> 
      <RemarkableSection/>
      <Footer />


    </div>
  )
}

export default HomePage
