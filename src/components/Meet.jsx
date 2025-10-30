import React from 'react'
import Tim from '../assets/img/tim-smith.png'
import clientImglogo01 from '../assets/img/clients/client-01.png'
import clientImglogo02 from '../assets/img/clients/client-02.png'
import clientImglogo03 from '../assets/img/clients/client-03.png'
import clientImglogo04 from '../assets/img/clients/client-04.png'
import clientImglogo05 from '../assets/img/clients/client-05.png'
import clientImglogo06 from '../assets/img/clients/client-06.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Meet = () => {
  return (
    <div className='bg-[#f5f7fa] py-10'>
      <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img src={Tim} alt="" />
        </div>
        <div>
          <p className='text-[#717171] my-4'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim  metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          <h3 className='text-[#4caf4f] text-[20px] font-semibold'>Tim Smith</h3>
          <p className='text-[#89939e] text-sm'>British Dragon Boat Racing Association</p>
          <ul className='flex flex-col items-center md:flex-row md:justify-between mt-8'>
            <li><img src={clientImglogo01} alt="" /></li>
            <li><img src={clientImglogo02} alt="" /></li>
            <li><img src={clientImglogo03} alt="" /></li>
            <li><img src={clientImglogo04} alt="" /></li>
            <li><img src={clientImglogo05} alt="" /></li>
            <li><img src={clientImglogo06} alt="" /></li>
            <li><a href="" className='text-[#4caf4f] flex items-center font-bold focus:text-[#81C784] hover:scale-110'>Meet all customers <HiOutlineArrowNarrowRight className='ml-1'/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Meet