import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'



const Tv = () => {
    const [tv, setTv] = useState([]);
              const [category, setCategory] = useState("airing_today");
              const [page,setPage] = useState(1)
              const [hasMore, setHasmore] = useState(true)
              const navigate = useNavigate()
        
        
        
            const gettvCards = async () => {
                try {
                  const { data } = await axios(`/tv/${category}?page=${page}`);
                  if(data.results.length){
                      setTv((prevState) => [...prevState, ...data.results]);
                      console.log(data.results)
                      setPage(page + 1)
                  }else{
                    setHasmore(false)
                  }
                  console.log(tv);
                } catch (error) {
                  console.log(error);
                }
              };
        
              const handleRefresh = () =>{
                if(tv.length === 0){
                    gettvCards()
                }else{
                    setPage(1)
                    setTv([])
                    gettvCards()
                }
              }
        useEffect(()=>{
            handleRefresh()
        },[category])
  return (
    <div className=' w-screen h-fit'>
        <div className='flex items-center px-5 '>
            <h1 className='text-[1.5vw] font-semibold text-zinc-400 w-[17%]'><i onClick={() => navigate(-1)} className=' hover:text[#6556cd] ri-arrow-left-line'></i> Tv Shows <small className='text-zinc-600 text-sm'>({category})</small></h1>


<div className='w-[85vw] flex items-center justify-between '>
<Topnav />

           <div className='w-[50%] flex items-center'>
           <Dropdown title={"Category"} options={["popular", 'on_the_air', 'top_rated', 'airing_today']} func={(e)=> setCategory(e.target.value)} />
            <div className='w-[2vw]'></div>
           </div>
            </div>
        </div>

        <InfiniteScroll
         dataLength={tv.length}
         next={gettvCards}
         hasMore={hasMore}
         loader={<Loading />}
        >
           <Cards data={tv} title="tv"  />
        </InfiniteScroll>

    </div>
  )
}

export default Tv