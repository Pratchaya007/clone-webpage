import React from 'react'
import { FaRegPaperPlane,FaInstagram,FaDribbble,FaTwitter,FaYoutube } from 'react-icons/fa6'
import logowhite from '../assets/img/logo-white.png'
const Footer = () => {
  return (
    <div className='bg-[#263238] py-20'>
      <div className='container mx-auto max-w-[1320px]'>
        <div className='grid grid-cols-1 m-10 md:grid-cols-2 md:m-0'>
          <div>
            <img src={logowhite} alt="" />
            <p className='my-10 text-white'>
              Copyright © 2020 Nexcent ltd. <br />All rights reserved
            </p>
            <ul className='flex md:flex-row '>
              <li className='mr-4 text-white bg-[#4d4d4d] p-1 rounded-full hover:scale-120 '><a href=""><FaTwitter className='text-[1rem]'/></a></li>
              <li className='mr-4 text-white bg-[#4d4d4d] p-1 rounded-full hover:scale-120'><a href=""><FaDribbble className='text-[1rem]'/></a></li>
              <li className='mr-4 text-white bg-[#4d4d4d] p-1 rounded-full hover:scale-120'><a href=""><FaYoutube className='text-[1rem]'/></a></li>
              <li className='mr-4 text-white bg-[#4d4d4d] p-1 rounded-full hover:scale-120'><a href=""><FaInstagram className='text-[1rem]'/></a></li>
            </ul> 
          </div>
          <div className='grid grid-cols-1 m-5 md:mt-0 md:grid-cols-3'>
            <div className='text-white '>
              <h4 className='text-[20px] mb-2 sm:mb-5 font-semibold hover:scale-105'>Company</h4>
              <ul>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">About us</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Blog</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Contact us</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Pricing</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Testimonials</a></li>
              </ul>
            </div>
            <div className='text-white mt-3 md:mt-0'>
              <h4 className='text-[20px] mb-2 sm:mb-5 font-semibold hover:scale-105'>Support</h4>
              <ul>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Help center</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Terms of service</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Legal</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Privacy policy</a></li>
                <li className='text-[14px] text-[#FFFFFF] hover:scale-98'><a href="">Status</a></li>
              </ul>
            </div>
            <div className='mt-3 md:mt-0'>
              <h4 className='font-semibold text-white text-[20px] hover:scale-105'>Stay up to date</h4>
              <form action="" className='flex mt-5 '>
                <div className='relative '>
                  <input type="text" className='bg-white/20 text-white rounded-sm py-2 px-2 outline-none' placeholder='Your email address' />
                  <button type='submit' className='absolute top-2.5 right-2.5 cursor-pointer'> <FaRegPaperPlane className='text-white'/> </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer