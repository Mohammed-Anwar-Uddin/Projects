import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const Cards = ({data}) => {
  return data.length > 0 ?  
      <div className='flex flex-wrap items-center justify-center w-screen gap-12 h-fit bg-[#1f1e24]'>
    {
      data.map((card, i) => <Link key={i} className='relative w-[30vh] h-[65vh]'>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[55vh] object-cover' src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path || card.profile_path}`} alt="" />

<h1 className='text-[1.2vw] text-zinc-400 mt-2 font-semibold'>
{
  card.title || card.name || card.original_title || card.original_name
}
</h1>
{card.vote_average && <div className='absolute bottom-[7vw] right-[-1.3vw] z-20 bg-yellow-500 h-[4vw] w-[4vw] text-[1.3vw] font-semibold rounded-full flex items-center justify-center'>{card.vote_average.toFixed()}</div>}
      </Link>)
    }
  </div>
    : <Loading />
}

export default Cards