import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const Cards = ({trending}) => {
  return trending.length > 0 ?  
      <div className='flex flex-wrap items-center justify-center w-full gap-12 h-fit'>
    {
      trending.map((card, i) => <Link key={i} className='w-[30vh] h-[65vh]'>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[55vh] object-cover' src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path}`} alt="" />

<h1 className='text-[1.2vw] text-zinc-400 mt-2 font-semibold'>
{
  card.title || card.name || card.original_title || card.original_name
}
</h1>

      </Link>)
    }
  </div>
    : <Loading />
}

export default Cards