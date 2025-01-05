import React from 'react'
import Dropdown from './Dropdown'

const HorizontalCards = ({trending}) => {
  return (

        <div className='w-[100%] flex overflow-y-hidden'>

            {
                trending && trending.map((d, i)=>(
                    <div key={i} className='min-w-[17%] bg-zinc-900 mr-3 p-2'>
                        <img className='w-full h-1/2 object-cover' src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />
                        <h1 className='text-[1vw] font-semibold text-white'>
                            {
                                d.name || d.title || d.original_title || d.original_name
                            }
                        </h1>
                        <p className='my-2 text-zinc-400 text-[0.8vw]'>
                            {
                            d.overview.slice(0,70)
                            }...
                            <span className='text-white'> more</span>
                        </p>
                    </div>
                ))
            }
        </div>
  )
}

export default HorizontalCards