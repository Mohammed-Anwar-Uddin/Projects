import React from 'react'
import { FaThumbsUp,FaCodeBranch,FaAutoprefixer,FaBullhorn, FaPushed} from "react-icons/fa";
import { CgScreen } from "react-icons/cg";


function services() {
  const aboutData = [{
    img:<FaThumbsUp />,
    title:"Refreshing Design",
    content:"We dejoy with discerning clients people for whom quality, service, integrity & aesthetics"
  },
  {
    img:<CgScreen />,
    title:"Bases on Tailwind CSS",
    content:"We dejoy with discerning clients people for whom quality, service, integrity & aesthetics"
  },
  {
    img:<FaCodeBranch />    ,
    title:"300+ Components",
    content:"We dejoy with discerning clients people for whom quality, service, integrity & aesthetics"
  },
  {
    img:<FaAutoprefixer />    ,
    title:"Speed Optimized",
    content:"We dejoy with discerning clients people for whom quality, service, integrity & aesthetics"
  },
  {
    img:<FaBullhorn />,
    title:"Fully Customizable",
    content:"We dejoy with discerning clients people for whom quality, service, integrity & aesthetics"
  },
  {
    img:<FaPushed />,
    title:"Regular Updates",
    content:"We dejoy with discerning clients people for whom quality, service, integrity & aesthetics"
  }]
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Services</h2>
      </div>
      <div>
        <div className='h-[250px] mt-8 mx-auto text-center text-base'>
          <p className='text-orange-500 font-semibold mb-1 text-xl'>Our Services</p>
          <h2 className='text-5xl mb-3 font-semibold'>What We Offer</h2>
          <p className='w-1/3 mx-auto'>There are many variations of passages of lorem ipson available but the majority have suffered alteration in some form</p>
        </div>


        <div className='grid grid-cols-3 gap-10 px-12 mb-12'>
          {
            aboutData.map(service=>{
              return(
              <div className='border rounded-xl shadow-md h-[300px] w-[400px] text-base p-12 transition-all duration-75 ease-in hover:shadow-xl'>
                <p className='text-7xl mb-7'>{service.img}</p>
                <h2 className='font-bold text-lg my-3 '>{service.title}</h2>
                <p className='text-gray-500 '>{service.content}</p>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default services