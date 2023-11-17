import Image from 'next/image'
import React from 'react'
import './Course.css'
import Course1 from '../../../../public/course1.jpg'
import Course2 from '../../../../public/course2.jpg'
import Course3 from '../../../../public/Seminar-pana.png'

const Course = () => {
  return (
    <div className='layer lg:p-5 bg-white'>
        <div className='w-[60%] mx-auto'>
        <div className="heading text-center py-5">
            <h1 className='lg:text-4xl text-2xl my-4 font-bold text[#2F4342]'>আমাদের জনপ্রিয় কোর্সসমূহ</h1>
            <p className='text-[15px]'>এক ঝলকে দেখে নিন আমাদের করা সব জনপ্রিয় কোর্স ,  পছন্দ মতো ভর্তি হন যেটা আপনার প্রয়োজন। কোনো কোর্স বিস্তারিত জানতে চাইলে নিকটস্থ ব্রাঞ্চে যোগাযোগ করুন। </p> 
        </div>
        <div className="row grid lg:grid-cols-3  gap-4">
        <div className='shadow-xl hover:shadow-2xl'>
            <div className="card-image">
               <Image className='course-image'  src={Course1} width={500} height={500} alt='course1' />
            </div>
            <div className="card-body ">
                <h3 className='text-2xl mb-4 font-bold text-center text-[#2F4342]'>আলফা ২০২৪</h3> 
                <p className='text-[15px] text-center'>
                    ২০২৪ এর আগাম এইচএসসি ব্যাচ নিয়ে চালু হয়েছে আমাদের এই কোর্স ।
                    কোর্সের ভর্তি শুরু আগামী ডিসেম্বরের  ৫ তারিখ থেকে ।
                </p>
                <button className='bg-[#FEC800] rounded-lg shadow-lg px-[25px] py-[10px] hover:shadow-2xl my-3'>ভর্তি হন</button> 
            </div>
        </div>
        <div className='shadow-xl hover:shadow-2xl'>
            <div className="card-image">
               <Image className='course-image' src={Course2} width={500} height={500} alt='course1' />
            </div>
            <div className="card-body ">
                <h3 className='text-2xl mb-4 font-bold text-center text-[#2F4342]'>আলফা ২০২৫ </h3> 
                <p className='text-[15px] text-center'>
                    ২০২৫   এর আগাম এইচএসসি ব্যাচ নিয়ে চালু হয়েছে আমাদের এই কোর্স ।
                    কোর্সের ভর্তি শুরু আগামী ডিসেম্বরের  ৫ তারিখ থেকে ।
                </p>
                <button className='bg-[#FEC800] rounded-lg shadow-lg px-[25px] py-[10px] hover:shadow-2xl my-3'>ভর্তি হন</button> 
            </div>
        </div>
        <div className='shadow-xl hover:shadow-2xl'>
            <div className="card-image">
               <Image src={Course3} className='course-image'  width={500} height={500} alt='course1' />
            </div>
            <div className="card-body ">
                <h3 className='text-2xl mb-4 font-bold text-center text-[#2F4342]'>আলফা ২০২৬</h3> 
                <p className='text-[15px] text-center'>
                    ২০২৬ এর আগাম এইচএসসি ব্যাচ নিয়ে চালু হয়েছে আমাদের এই কোর্স ।
                    কোর্সের ভর্তি শুরু আগামী ডিসেম্বরের  ৫ তারিখ থেকে ।
                </p>
                <button className='bg-[#FEC800] rounded-lg shadow-lg px-[25px] py-[10px] hover:shadow-2xl my-3'>ভর্তি হন</button> 
            </div>
        </div>
        </div>
        </div>
     


    </div>
  )
}

export default Course