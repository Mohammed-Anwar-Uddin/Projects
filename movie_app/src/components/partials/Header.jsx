import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({wallpaper}) => {
  return (
    <div className='w-full h-[50vh] flex flex-col justify-end items-start p-[3vw]' style={{background:`linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path})`,
    backgroundPosition:"center",
    backgroundSize:"cover"}} >
        <h1 className='w-[90%] text-[3.5vw] font-black text-white'>
            {
                wallpaper.name || wallpaper.original_name || wallpaper.title || wallpaper.original_title
            }
        </h1>
        <p className='w-[70%] text-white mt-3'>{wallpaper.overview.slice(0, 200)} 
            <Link className='text-blue-400'> more</Link>
        </p>
        <p className='text-white my-2'>
            <i className='text-yellow-500 ri-megaphone-fill'></i>
            {wallpaper.release_data || "No Information"} 

            <i className='text-yellow-500 ml-2 ri-album-fill'></i>
            {wallpaper.media_type.toUpperCase()}
        </p>
        <Link className='bg-[#6556cd] rounded-md p-2 text-white '>
            {" "}
            Watch Trailer
        </Link>
    </div>
  )
}

export default Header