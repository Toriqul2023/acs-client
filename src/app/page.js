import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import Homes from './Components/Home/Homes'
import About from './Components/About/About'
import Course from './Components/Course/Course'
import Category from './Components/Category/Category'

export default function Home() {
  return (
   <>
     <Navbar/>  
     <Homes/>
     <Category/>
     <About/>
     <Course/>
   </>
  )
}
