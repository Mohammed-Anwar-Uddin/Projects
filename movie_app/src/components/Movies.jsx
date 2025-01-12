import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'





const Movies = () => {
     const [movie, setMovie] = useState([]);
              const [category, setCategory] = useState("now_playing");
              const [page,setPage] = useState(1)
              const [hasMore, setHasmore] = useState(true)
              const navigate = useNavigate()
        
        
        
            const getMovieCards = async () => {
                try {
                  const { data } = await axios(`/movie/${category}?page=${page}`);
                  if(data.results.length){
                      setMovie((prevState) => [...prevState, ...data.results]);
                      console.log(data.results)
                      setPage(page + 1)
                  }else{
                    setHasmore(false)
                  }
                  console.log(movie);
                } catch (error) {
                  console.log(error);
                }
              };
        
              const handleRefresh = () =>{
                if(movie.length === 0){
                    getMovieCards()
                }else{
                    setPage(1)
                    setMovie([])
                    getMovieCards()
                }
              }
        useEffect(()=>{
            handleRefresh()
        },[category])


  return (
    <div className=' w-screen h-fit'>
        <div className='flex items-center px-5 '>
        <h1 className='text-[1.5vw] font-semibold text-zinc-400 w-[17%]'><i onClick={() => navigate(-1)} className=' hover:text[#6556cd] ri-arrow-left-line'></i>Movies <small className='text-zinc-600 text-sm'>({category})</small></h1>


<div className='w-[85vw] flex items-center justify-between '>
<Topnav />

           <div className='w-[50%] flex items-center'>
           <Dropdown title={"Category"} options={["popular", 'upcoming', 'top_rated', 'now_playing']} func={(e)=> setCategory(e.target.value)} />
            <div className='w-[2vw]'></div>
           </div>
            </div>
        </div>

        <InfiniteScroll
         dataLength={movie.length}
         next={getMovieCards}
         hasMore={hasMore}
         loader={<Loading />}
        >
           <Cards data={movie} title="movie" />
        </InfiniteScroll>

    </div>
  )
}

export default Movies