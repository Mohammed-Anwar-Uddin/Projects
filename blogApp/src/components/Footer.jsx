import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-gray-900 mt-4'>
        <div className='py-4 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div>
                <div className='grid mb-8 lg:grid-cols-6 grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    {/* category 1 */}
                    <div className='text-gray-300 font-medium tracking-wide'>
                        <p className='text-lg'>Category</p>
                        <ul>
                           
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Refrence</a></li>

                        </ul>
                    </div>

                    {/* category 2 */}

                    <div className='text-gray-300 font-medium tracking-wide'>
                        <p className='text-lg'>Apples</p>
                        <ul>
                           
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a></li>


                        </ul>
                    </div>

                    {/* category 3 */}

                    <div className='text-gray-300 font-medium tracking-wide'>
                        <p className='text-lg'>Cherry</p>
                        <ul>
                           
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Nonprofit</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a></li>


                        </ul>
                    </div>

                    {/* category 4 */}

                    <div className='text-gray-300 font-medium tracking-wide'>
                        <p className='text-lg'>Business</p>
                        <ul>
                           
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infopreneur</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a></li>
                            <li><a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a></li>


                        </ul>
                    </div>

                    <div className='md:max-w-md col-span-2 lg:mt-0 mt-5'>
                        <p className='text-gray-300 font-medium tracking-wide text-xl'>Subscribe for updates</p>
                       <form className='mt-4 flex flex-col md:flex-row'>
                        <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                        <button type='submit' className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border ">
                            Subscribe
                        </button>
                       </form>

                       <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad ratione? Et, commodi incidunt nisi beatae voluptate officia repellat, neque fuga itaque accusamus, ab est. Aliquam iste aut quasi porro ipsum dolorem officia  non quo. Ducimus, quos!</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center pt-5 pb-10 border-t border-gray-800 sm-flex-row'>
                <p className='text-gray-300'>©Copyright 2024 | All Rights Reserved.</p>
                <div className='flex items-center space-x-4'>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500 '>
                        <FaTwitter className='h-6 w-6'/>
                    </a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500 '>
                        <FaInstagram className='h-6 w-6'/>
                    </a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500 '>
                        <FaFacebook className='h-6 w-6'/>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer