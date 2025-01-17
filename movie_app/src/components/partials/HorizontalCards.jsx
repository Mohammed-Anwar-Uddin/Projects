import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({trending}) => {
    console.log(trending)
  return (

        <div className='w-[100%] flex overflow-y-hidden'>

            {
                trending && trending.map((d, i)=>(
                    <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[17%] bg-zinc-900 mr-3 p-2'>
                        <img className='w-full h-1/2 object-cover' src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />
                        <h1 className='text-[1vw] font-semibold text-white'>
                            {
                                d.name || d.title || d.original_title || d.original_name
                            }
                        </h1>
                        <p className='my-2 text-zinc-400 text-[0.8vw]'>
                            {
                             d.overview && d.overview.slice(0,70)
                            }...
                            <span className='text-white'> more</span>
                        </p>
                    </Link>
                ))
            }
        </div>
  )
}

export default HorizontalCards