import AboutSection from '../components/AboutSec'
import Contact from '../components/Contact'
import HeroSec from '../components/HeroSec'
import Navbar from '../components/Navbar'
import ProjectSec from '../components/ProjectSec'
import React from 'react'
// import { UserButton } from "@clerk/nextjs";


const page = () => {
  return (
<>
  <main className='flex min-h-screen flex-col bg-black'>
    <Navbar/>
    <div className='container mx-auto px-12 py-4'>
    {/* <div className="h-screen">
      <UserButton />
    </div> */}
      <HeroSec/>
      <AboutSection/>
      <ProjectSec/>
      <Contact/>
    </div>
  </main>
</>

    )
}

export default page