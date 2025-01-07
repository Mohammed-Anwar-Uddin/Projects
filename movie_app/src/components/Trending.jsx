import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Cards from './partials/Cards'

const Trending = () => {
    const [trending, setTrending] = useState(null);
      const [category, setCategory] = useState("all");
      const [duration, setDuration] = useState("day");
    const navigate = useNavigate()



    const getTrendingCards = async () => {
        try {
          const { data } = await axios(`/trending/${category}/${duration}`);
          setTrending(data.results);
          console.log(trending);
        } catch (error) {
          console.log(error);
        }
      };
useEffect(()=>{
    getTrendingCards()
},[category, duration])

  return (
    <div className='px-[2%] w-screen h-fit'>
        <div className='flex items-center '>
            <h1 className='text-[1.5vw] font-semibold text-zinc-400'><i onClick={() => navigate(-1)} className=' hover:text[#6556cd] ri-arrow-left-line'></i> Trending</h1>


<div className='w-[85vw] flex items-center justify-between '>
<Topnav />

           <div className='w-[50%] flex items-center'>
           <Dropdown title={"Category"} options={['movie', "tv", "all"]} func={(e)=> setCategory(e.target.value)} />
            <div className='w-[2vw]'></div>
            <Dropdown title={"Duration"} options={["week", "day"]} func={(e)=> setDuration(e.target.value)} />
           </div>
            </div>
        </div>

        {trending && <Cards trending={trending}  /> }
    </div>


  )
}

export default Trending