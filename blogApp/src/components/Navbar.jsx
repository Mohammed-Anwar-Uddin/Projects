import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// react icons
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {FaXmark} from 'react-icons/fa6'
import Modal from './Modal';

function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const NavItems = [{path:'/',link:'Home'},
        {path:'/blogs',link:'Blogs'},
        {path:'/about',link:'About'},
        {path:'/services',link:'Services'},
        {path:'/contact',link:'Contact'},
    ]


    const openModel=()=>{
        setIsModelOpen(true)
    }

    const closeModel = ()=>{
        setIsModelOpen(false)
    }
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href='/' className='text-xl font-bold text-white'>Blogs<span className='text-orange-500'>Sphere</span></a>

{/* // NavItems */}
            <ul className='md:flex gap-12 text-lg hidden text-white'>
            {NavItems.map(({path,link}) => <li><NavLink  key={link} to={path}>{link}</NavLink></li>)}
            </ul>

            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a className='hover:text-orange-500' href="www.facebook.com">{<FaFacebook />}</a>
                <a className='hover:text-orange-500' href="www.facebook.com">{<FaTwitter />}</a>
                <a className='hover:text-orange-500' href="www.facebook.com">{<FaInstagram />}</a>
<button onClick={()=>setIsModelOpen(true)} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
            </div>


{/* modal */}

<Modal isOpen={isModelOpen} onClose={closeModel}/>

            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {isMenuOpen ? <FaXmark className='w-4 h-4 absolute top-5 right-5' /> : <FaBars className="w-4 h-4 absolute top-5 right-5"/> }
                    
                    </button>
            </div>

{/* menu items only for mobiles */}
            <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-black ${isMenuOpen ?"fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"} `}>
            {NavItems.map(({path,link}) => <li onClick={toggleMenu}><NavLink className={({isActive})=> isActive?'active':""} key={link} to={path}>{link}</NavLink></li>)}
            </ul>

            </div>
        </nav>
    </header>
  )
}

export default Navbar