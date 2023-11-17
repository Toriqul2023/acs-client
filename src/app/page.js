import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import Homes from './Components/Home/Homes'
import About from './Components/About/About'
import Course from './Components/Course/Course'

export default function Home() {
  return (
   <>
     <Navbar/>  
     <Homes/>
     <About/>
     <Course/>
   </>
  )
}
