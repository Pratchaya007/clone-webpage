import React, { useState } from 'react'
import Logo from '../assets/img/logo-black.png'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [toggle ,setToggle] = useState(false);

  const updateToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <nav className='bg-[#F5F7FA]'>
      <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-20'>
        <div>
          <a href="">
          <img src={Logo} alt="" /></a>
        </div>
        <ul className={`${!toggle ? 'hidden': 'flex'} flex flex-col my-5 md:flex md:flex-row`}>
          <li className='my-2 md: mx-4 hover:scale-105 hover:border-b hover:border-gray-300'><a href="#">Service</a></li>
          <li className='my-2 md: mx-4 hover:scale-105 hover:border-b hover:border-gray-300'><a href="#">Home</a></li>
          <li className='my-2 md: mx-4 hover:scale-105 hover:border-b hover:border-gray-300'><a href="#">Feature</a></li>
          <li className='my-2 md: mx-4 hover:scale-105 hover:border-b hover:border-gray-300'><a href="#">Product</a></li>
          <li className='my-2 md: mx-4 hover:scale-105 hover:border-b hover:border-gray-300'><a href="#">Testimonial</a></li>
          <li className='my-2 md: mx-4 hover:scale-105 hover:border-b hover:border-gray-300'><a href="#">FAQ</a></li>
        </ul>
        <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row`}>
          <li className='my-2 md: mx-4'><a className='inline-flex justify-center items-center py-2 px-2 hover:text-[#81C784] hover:scale-105'>Login</a></li>
          <li className='my-2 md: mx-4'><a className='inline-flex justify-center items-center py-2 px-4 bg-brand text-white rounded-md hover:bg-[#81C784] hover:scale-110'>Sing up</a></li>
        </ul>

        {/* Hamburger Icon */}
        <FaBars onClick={updateToggle} className='absolute right-5 cursor-pointer text-xl md:hidden'/>
      </div>
    </nav>
  )
}

export default Navbar