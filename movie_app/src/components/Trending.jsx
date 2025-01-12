import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

const Trending = () => {
    const [trending, setTrending] = useState([]);
      const [category, setCategory] = useState("all");
      const [duration, setDuration] = useState("day");
      const [page,setPage] = useState(1)
      const [hasMore, setHasmore] = useState(true)
      const navigate = useNavigate()



    const getTrendingCards = async () => {
        try {
          const { data } = await axios(`/trending/${category}/${duration}?page=${page}`);
          if(data.results.length){
              setTrending((prevState) => [...prevState, ...data.results]);
              setPage(page + 1)
          }else{
            setHasmore(false)
          }
          console.log(trending);
        } catch (error) {
          console.log(error);
        }
      };

      const handleRefresh = () =>{
        if(trending.length === 0){
            getTrendingCards()
        }else{
            setPage(1)
            setTrending([])
            getTrendingCards()
        }
      }
useEffect(()=>{
    handleRefresh()
},[category, duration])

  return (
    <div className=' w-full h-fit overflow-hidden'>
        <div className='flex items-center '>
        <h1 className='text-[1.5vw] font-semibold text-zinc-400 w-[17%]'><i onClick={() => navigate(-1)} className=' hover:text[#6556cd] ri-arrow-left-line'></i>Trending <small className='text-zinc-600 text-sm'>({category})</small></h1>


<div className='w-[85vw] flex items-center justify-between '>
<Topnav />

           <div className='w-[35vw] flex items-center'>
           <Dropdown title={"Category"} options={['movie', "tv", "all"]} func={(e)=> setCategory(e.target.value)} />
            <div className='w-[2vw]'></div>
            <Dropdown title={"Duration"} options={["week", "day"]} func={(e)=> setDuration(e.target.value)} />
           </div>
            </div>
        </div>

        <InfiniteScroll
         dataLength={trending.length}
         next={getTrendingCards}
         hasMore={hasMore}
         loader={<Loading />}
        >
           {trending.length > 0 && <Cards data={trending}  />}
        </InfiniteScroll>

    </div>


  )
}

export default Trending