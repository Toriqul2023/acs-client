import React from 'react'
import {
    
   faArrowRight,
   faArrowCircleRight,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Category.css'

const Category = () => {
  return (
    <div className='layer lg:p-[60px] bg-white'>
        <div className='w-[80%] lg:w-[60%] mx-auto'>
             <div className="row grid lg:grid-cols-3 gap-4">
                <div className='flex justify-evenly items-center shadow-lg rounded-lg py-5 hover:shadow-2xl'>
                    <div className='box-round w-[50px] bg-[bg-[#FFC802]] h-[50px] text-white flex items-center justify-center'>
                        <h6 className='text-center text-xl font-bold text-[#2F4342] '>A</h6>
                    </div>
                    <h2 className='text-2xl font-bold text-[#2F4342]'>আস্থা ২০২৩</h2>
                    <FontAwesomeIcon
        icon={ faArrowRight}
        style={{fontSize:40,  color: "#2F4342" }}
      />


                </div>
                <div className='flex justify-evenly items-center shadow-lg rounded-lg py-5 hover:shadow-2xl'>
                    <div className='box-round w-[50px] h-[50px] text-white flex items-center justify-center'>
                        <h6 className='text-center text-xl font-bold text-[#2F4342]'>S</h6>
                    </div>
                    <h2 className='text-2xl font-bold text-[#2F4342]'>সংকল্প ২০২৩</h2>
                    <FontAwesomeIcon
        icon={ faArrowRight}
        className='icon'
        style={{fontSize:'40px', color: "#2F4342" }}
      />


                </div>
                <div className='flex justify-evenly items-center shadow-lg rounded-lg py-5 hover:shadow-2xl'>
                    <div className='box-round w-[50px] h-[50px] text-white flex items-center justify-center'>
                        <h6 className='text-center text-xl font-bold  text-[#2F4342]'>P</h6>
                    </div>
                    <h2 className='text-2xl font-bold text-[#2F4342]'>প্রতিজ্ঞা ২০২৩</h2>
                    <FontAwesomeIcon
        icon={ faArrowRight}
        style={{fontSize:40,  color: "#2F4342" }}
      />


                </div>

             </div>
        </div>
    </div>
  )
}

export default Category