import Image from 'next/image'
import React from 'react'
import './Homes.css'
import Homes1 from '../../../../public/home.jpg'

const Homes = () => {
  return (
    <div className='layer  bg-white lg:p-5  h-[700px]'>
        <div className='lg:w-[60%] w-[80%] mx-auto '>
            <div className="row grid lg:grid-cols-2 justify-between items-center gap-3">
                <div>
                   <h1 className='text-4xl my-5 font-bold text-[#2F4342]'>এডমিশন দুনিয়ায় আমরাই সেরা</h1>
                   <p className='text-[15px]'>
                     শিক্ষার্থীর ভুলগুলো শুধরে সহজ ট্রিক শিখিয়ে কীভাবে ভার্সিটি ক্র্যাক করা যায় তা দেখানো মুল লক্ষ্য।
                    সঠিক প্রস্তুতি ও মানসম্মত পরীক্ষা নিয়ে যাবে স্বপ্ন পুরোনের এক ধাপ সামনে । 
                   </p>
                   <button className='py-[10px] px-[25px] rounded-lg bg-[#FEC800] my-5 shadow-lg hover:shadow-2xl bg-[#FFC802] mr-5'>অনলাইন</button>
                   <button className='py-[10px] px-[25px] rounded-lg bg-[#FEC800] my-5 shadow-lg hover:shadow-2xl bg-[#FFC802]'>অফলাইন</button>
                  
                </div>
                <div className=''>
                    <Image src={Homes1} alt="home1" width={500} height={500}/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Homes