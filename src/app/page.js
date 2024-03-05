import AboutSec from '@/components/AboutSec'
import Contact from '@/components/Contact'
import HeroSec from '@/components/HeroSec'
import Navbar from '@/components/Navbar'
import ProjectSec from '@/components/ProjectSec'
import React from 'react'

const page = () => {
  return (
<>
  <main className='flex min-h-screen flex-col bg-black'>
    <Navbar/>
    <div className='container mx-auto px-12 py-4'>
      <HeroSec/>
      <AboutSec/>
      <ProjectSec/>
      <Contact/>
    </div>
  </main>
</>
    )
}

export default page