import React from 'react'
import Abouts from '../../../../public/about.jpg'
import Image from 'next/image'
import './About.css'

const About = () => {
  return (
    <div className='layer bg-white lg:p-5'>
    <div className='w-[60%] mx-auto'>
        <div className="row grid lg:grid-cols-2 justify-between items-center gap-3">
            <div className='place-self-start'>
            <Image id="mirror-image" src={Abouts} alt="home1" width={500} height={500}/>
              
            </div>
            <div className=''>
                 
                <h1 className='lg:text-4xl text-2xl my-5 font-bold text-[#2F4342]'>আমাদের সেরা সাফল্য</h1>
               <p className='text-[15px] text-justify'>
               ২০০২ সালে প্রথম মাত্র ১০ জন ছাত্র নিয়ে আমাদের যাত্রা শুরু হয় ।
               ১০ জনের মধ্যে ৮ জন আমাদের কথা অক্ষরে অক্ষরে পালন করেছে আর তাদের নিজেদের সৎ ইচ্ছা থাকায় তারা সবাই পাবলিক বিশ্ববিদ্যালয়ে চান্স পেয়েছে ।
               তার পর থেকে আমাদের আর পেছন ফিরে তাকাতে হয়নি আর এখন ২০ হাজার অফলাইন ও ২ লাখ ছাত্র ছাত্রী অনলাইনে নিয়মিত ক্লাস করছে 
               </p>
               <button className='py-[10px] px-[25px] rounded-lg bg-[#FEC800] my-5 shadow-lg hover:shadow-2xl bg-[#FFC802]'>ভর্তি বিস্তারিত</button>
            </div>

        </div>

    </div>
</div>
  )
}

export default About