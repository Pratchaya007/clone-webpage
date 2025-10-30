import React from 'react'
import icon04 from '../assets/img/icon-04.png'
import icon05 from '../assets/img/icon-05.png'
import icon06 from '../assets/img/icon-06.png'
import icon07 from '../assets/img/icon-07.png'

const Stats = () => {
  return (
    <div className='bg-[#f5f7fa] py-10 px-5 md:px-0'>
      <div className='container mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2'>
        <div>
          <h3 className='text-[36px] text-[#4d4d4d] font-semibold'>Helping a local <br/> <span className='text-brand'>business reinvent itself</span></h3>
          <p className='text-[#263238] text-[16px]'>We reached here with our hard work and dedication</p>
        </div>
        
          <div className='grid grid-cols-1  md:grid-cols-2 text-center md:text-left'>
            <div className='flex flex-col md:flex-row items-center mb-5 '>
              <img className='mx-auto pr-5 w-16 h-11 md:mx-0 ' src={icon04} alt="" />
              <div>
                <h4 className='text-[20px] text-[#4d4d4d]'>2,245,341</h4>
                <p className='text-[#717171] text-[16px]'>Members</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center mb-5'>
              <img className='mx-auto pr-5 md:mx-0' src={icon05} alt="" />
              <div>
                <h4 className='text-[20px] text-[#4d4d4d]'>46,328</h4>
                <p className='text-[#717171] text-[16px]'>Clubs</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center'>
              <img className='mx-auto pr-5 md:mx-0' src={icon06} alt="" />
              <div>
                <h4 className='text-[20px] text-[#4d4d4d]'>828,867</h4>
                <p className='text-[#717171] text-[16px]'>Event Bookings</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center'>
              <img className='mx-auto h-11 w-16 pr-5 md:mx-0' src={icon07} alt="" />
              <div>
                <h4 className='text-[20px] text-[#4d4d4d]'>1,926,436</h4>
                <p className='text-[#717171] text-[16px]'>Payments</p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}
export default Stats