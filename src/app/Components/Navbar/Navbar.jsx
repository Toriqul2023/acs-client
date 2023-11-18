import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='head bg-white p-1 '>
        <div className="nav lg:w-[60%] w-[80%] mx-auto">
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link href='/' className='mx-3 text-xl'>হোম</Link>
   
      <Link href='/' className='mx-3 text-xl'>আমাদের সম্পর্কে</Link>
   
      <Link href='/' className='mx-3 text-xl'>কোরস</Link>
  
    </ul>
  </div>
  <div className="navbar-end">
    <button className='btn bg-[#FFC802]'>Search</button>
  </div>
</div>
        </div>
    </div>
  )
}

export default Navbar