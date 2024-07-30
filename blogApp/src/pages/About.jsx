import React, { useEffect } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";




function About() {

  const AuthorsImages =[{
    name:'Christine Hall',
    img:'data:image/jpeg;base64,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',
    occupation:"Director of Operations",
    articlePublished:12
  },{
    name:'Kyle Wiggers',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61nYji7HoMJurXY2TQeuF0owbR69QmKZxmtbzUeIvPLB8vmp0RRxPS-aEGg&s'
  ,occupation:'Content Writer',
  articlePublished:8

  },
  {
    name:"Bruce Lee",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOci7cTX31qpac8VnqMLMnw8JpvFXt0Pbp6_6Cpy-DXFuT-aYlt7NjE_jPow&s',
    occupation:'Head of Marketing',
    articlePublished:5
  },
{
  name:"Jackee Chan",
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhKMYZuj_5opisgn5x1ISOTRTLEpcFVhmHMzgUXkiYwCxZNEr0ol3jPO7Rw&s',
  occupation:'Head of Marketing',
  articlePublished:5

}]



  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h2>
      </div>

<div className='flex gap-16 items-center p-12 flex-col'>
  <div className='flex gap-8 p-2 items-center'>
  <div className='w-2/5 rounded-lg '>
    <img className='w-full rounded-lg' src="https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  </div>
  <div className='w-1/2'>
    <p className='font-semibold text-orange-500 leading-10 text-xl mb-3' >Who we are</p>
    <h2 className='text-5xl font-bold mb-4'>We provide high quality Articles & blogs</h2>
    <p className='text-gray-500'>Lorem ipsum dolor sit amet  odio. Nam voluptatem assumenda, sapiente nulla odit quia autem dicta animi aperiam enim magnam natus reiciendis ducimus perferendis quae consectetur harum tempora.</p>
    <br />
    <p className='text-gray-500'>sapiente nulla odit quia autem dicta animi aperiam  quae consectetur harum tempora necessitatibus voluptates, debitis laborum atque. Voluptas modi rerum doloribus sed placeat. Lorem ipsum dolor sit amet consectetur adipisicing .</p>

  </div>
  </div>


  <div >
    <h2 className='text-5xl font-semibold border-b-2 pb-6'>Top Authors</h2>
    <br />
    <div className='grid grid-cols-4 gap-16'>
      {
        AuthorsImages.map((author)=>{
          return (
            <div className='flex  items-center justify-center flex-col overflow-hidden bg-gray-100 p-8 text-center rounded-xl hover:shadow-lg transition-all duration-100 ease-in w-[300px] h-[340px] hover:scale-105 my-12' key={author.name}>
              <img className='w-36 rounded-full' src={author.img} alt="" />
              <p className='text-lg text-gray-700 my-2'>{author.name}</p>
              <p className='text-gray-500'>{author.occupation}</p>
              <p className='flex items-center justify-center mt-3 text-gray-500'><IoDocumentTextOutline className='w-5 h-5 mr-2'/>{author.articlePublished} Article Published</p>
            </div>
          )
        })
      }

    </div>
  </div>
</div>
      
    </div>
  )
}

export default About