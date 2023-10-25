import LandingContent from '@/components/landing-content/LandingContent'
import LandingHero from '@/components/landing-hero/LandingHero'
import LandingNavbar from '@/components/landing-navbar/LandingNavbar'
import React from 'react'


const LandingPage = () => {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default LandingPage