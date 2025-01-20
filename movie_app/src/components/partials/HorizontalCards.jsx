import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../assets/images/no-image.jpg'

const HorizontalCards = ({trending}) => {
  return (

        <div className='w-[100%] flex overflow-y-hidden'>

            {
                trending && trending.map((d, i)=>(
                    <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[17%] h-[38vh] bg-zinc-900 mr-3 p-2 mb-3'>
                        <img className='w-full h-1/2 object-cover' src={ (!d.backdrop_path && !d.poster_path) ? noImage : `https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />
                        <h1 className='text-[1vw] font-semibold text-white'>
                            {
                                d.name || d.title || d.original_title || d.original_name
                            }
                        </h1>
                        <p className='my-2 text-zinc-400 text-[0.8vw]'>
                            {
                             d.overview ? <span>{d.overview.slice(0,100)} 
                             <span className='text-white'>...more</span></span>: <span> No overview available</span>
                            }
                        </p>
                    </Link>
                ))
            }
        </div>
  )
}

export default HorizontalCards