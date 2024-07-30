import React from 'react'
import image from '/contact.png'

function Contact() {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h2>
      </div>

      <div className='flex gap-8'>
        <div className='w-3/5 mt-14'>
          <img src={image} alt="" />
        </div>

        <div className=' flex flex-col w-2/5 p-24 gap-4 text-base'>
        <label htmlFor="name">Full Name</label>
        <input placeholder='Full Name' type="text" name='name' id='name' className='h-12 w-full px-4 mb-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
          <label htmlFor="email">Email Address</label>
        <input placeholder='example@domain.com' type="email" name='email' id='email' className=' h-12 w-full px-4 mb-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
        <label htmlFor="subject">Subject</label>
        <input placeholder='Enter your subject' type="text" name='subject' id='subject' className='h-12 w-full px-4 mb-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
       
       
        <label htmlFor="message">Message</label>
<textarea placeholder='Type your message' rows={5} name="message" id="message" className='pt-2 px-4 mb-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none'></textarea>       
<button className='hover:shadow-md rounded-md w-28 bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>

        </div>
      </div>
    </div>
  )
}

export default Contact