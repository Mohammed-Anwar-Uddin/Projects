import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import noimage from '../../assets/images/no-image.jpg'

const Topnav = () => {
  const [query, setQuery] = useState("")
  const [searchResult, setSearchResult] = useState(null)

  const getSearches = async ( )=> {
    try {
      const {data} = await axios(`/search/multi?query=${query}`)
      setSearchResult(data.results)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  getSearches()
}, [query])
  return (
    <div  className='flex w-[50vw] h-[10vh] relative pl-[5vw]  items-center'>
        <i className='text-zinc-400 text-3xl ri-search-line'></i>
        <input onChange={(e)=> setQuery(e.target.value)} value={query} className='w-[80%] text-zinc-200 mx-5 p-5 text-xl outline-none border-none bg-transparent ' type="text" placeholder='Search anything...' />

      
        {query && <i onClick={() => setQuery("")} className='text-zinc-400 text-3xl ri-close-fill'></i>
      }
        {query.length > 2 && <div className='absolute w-[35vw] h-[50vh] bg-zinc-100 top-[100%] left-[8vw] z-40 overflow-auto'>
            
            {
              searchResult.length ?
              searchResult.map((s,i)=>(
                <Link key={i} className='flex justify-start items-center p-4 border border-b-zinc-600'>
                <img className='w-[10vw] h-[10vh] object-contain rounded-lg mr-3 shadow-lg ' src={(!s.backdrop_path && !s.profile_path && noimage) || (`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`)  } alt="" />
                 <span>{s.original_title || s.name || s.title || s.original_name}</span>
                 </Link> 
              )): <h1 className='text-center mt-2'>No Matching data found</h1>
            }
        </div>}
    </div>
  )
}

export default Topnav