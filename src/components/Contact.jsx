import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {


  return (
    <>
      <section className='grid md:grid-cols-2 text-white gap-4 my-10' id="contact">
        <div>
          <h3 className='text-4xl text-secondary-400'>Lets Connect</h3>
          <p className='py-4 max-w-md'>
            Im currently looking for new opportunities, If one of these things excite you then reach inbox I will try my best to get back to you!
          </p>
          <div className='flex flex-row gap-2 text-5xl my-4'>
            <Link href="https://github.com/HAMMAD123RAZA" className='hover:text-secondary-400'>
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/hammad-raza-221369263/" className='ps-3 hover:text-secondary-400'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="01hammadraza@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="My Subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Reach Me Out..."
              />
            </div>
            <button
              type="submit"
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
