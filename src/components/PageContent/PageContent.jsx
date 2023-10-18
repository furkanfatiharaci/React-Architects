import React from 'react'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import LocationMap from './LocationMap'

function PageContent() {
  return (
    <div>
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <LocationMap/>

    </div>
  )
}

export default PageContent