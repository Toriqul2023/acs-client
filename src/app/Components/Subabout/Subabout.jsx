import React from 'react'
import './Subabout.css'
import Image from 'next/image'
import Subabout1 from '../../../../public/sub-about1.png'

const Subabout = () => {
  return (
    <section className='bg-white layer p-5'>
          <div className='w-[80%] lg:w-[60%] mx-auto'>
            <div className="row lg:flex column-reverse items-center  gap-[50px]   my-2">
               <div >
               <Image className='img' src={Subabout1} width={500} height={500} loading='lazy' alt='subabout'/>
             

               </div>
               <div className=' max-w-[600px] '>
               <h1 className='text-2xl font-bold my-5'>Personalized Learning Paths</h1>
                <p className='text-[18px]  text-[#828282] font-600'>
                আমাদের প্লাটফর্ম এ প্রত্যেক শিক্ষার্থীর নিজস্ব Learning Habit অনুযায়ী Personalized Features প্রদান করা হয়। আমাদের উন্নত Algorithm এবং মূল্যায়নের মাধ্যমে, আমরা একজন শিক্ষার্থীর পড়ালেখায় সমস্যা গুলো চিহ্নিত করি ও সেই অনুযায়ী একজন শিক্ষার্থীকে পড়ালেখার সমস্যা কাটিয়ে উঠতে সহায়তা করি, যা শিক্ষার্থীদের একটি Customized শিক্ষাগত যাত্রা শুরু করতে সক্ষম করে।
                </p>
               </div>
            </div>
            <div className="row lg:flex lg:flex-row-reverse  gap-[50px]  items-center ">
             
               <div >
               <Image className='img' src={Subabout1} width={500} height={500} loading='lazy' alt='subabout'/>
               </div>
               <div className='max-w-[600px] text-right'>
        
             
        <h1 className='text-2xl font-bold my-5'>Personalized Learning Paths</h1>
         <p className='text-[18px]  text-[#828282] font-500'>
         আমাদের প্লাটফর্ম এ প্রত্যেক শিক্ষার্থীর নিজস্ব Learning Habit অনুযায়ী Personalized Features প্রদান করা হয়। আমাদের উন্নত Algorithm এবং মূল্যায়নের মাধ্যমে, আমরা একজন শিক্ষার্থীর পড়ালেখায় সমস্যা গুলো চিহ্নিত করি ও সেই অনুযায়ী একজন শিক্ষার্থীকে পড়ালেখার সমস্যা কাটিয়ে উঠতে সহায়তা করি, যা শিক্ষার্থীদের একটি Customized শিক্ষাগত যাত্রা শুরু করতে সক্ষম করে।
         </p>
        </div>
            </div>
            <div className="row lg:flex  gap-[50px]  items-center my-2 ">
               <div className=' text-right'>
        
               <Image className='img' src={Subabout1} width={500} height={500} loading='lazy' alt='subabout'/>
              
               </div>
               <div className='max-w-[600px]'>
               <h1 className='text-2xl font-bold my-5'>Personalized Learning Paths</h1>
                <p className='text-[18px]  text-[#828282] font-500'>
                আমাদের প্লাটফর্ম এ প্রত্যেক শিক্ষার্থীর নিজস্ব Learning Habit অনুযায়ী Personalized Features প্রদান করা হয়। আমাদের উন্নত Algorithm এবং মূল্যায়নের মাধ্যমে, আমরা একজন শিক্ষার্থীর পড়ালেখায় সমস্যা গুলো চিহ্নিত করি ও সেই অনুযায়ী একজন শিক্ষার্থীকে পড়ালেখার সমস্যা কাটিয়ে উঠতে সহায়তা করি, যা শিক্ষার্থীদের একটি Customized শিক্ষাগত যাত্রা শুরু করতে সক্ষম করে।
                </p>
               </div>
            </div>

          </div>
    </section>
  )
}

export default Subabout