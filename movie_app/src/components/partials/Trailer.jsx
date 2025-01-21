import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const category = pathname.includes("movie") ? "movie": "tv"
    const ytvideo = useSelector(state => state[category].info.videos)
  return   (
    <div className='bg-[rgba(0,0,0,.9)] fixed z-[100] top-0 left-0 w-full h-screen flex items-center justify-center'>
        <Link onClick={() => navigate(-1)} className='absolute hover:text-[#6556cd] ri-close-fill text-3xl text-white right-[5%] top-[5%]'></Link>

        { 
          ytvideo ? <ReactPlayer controls height={500} width={900} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> : <h1 className='text-[3vw] text-white'>No Trailer Available</h1>
        }
    </div>
  )
}

export default Trailer