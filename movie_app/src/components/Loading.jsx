import loader from '../assets/images/loading.gif'

import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className='w-[30%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading