import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Pellentesque = () => {
  return (
    <div className='bg-[#f5f7fa] p-5'>
        <div className='container mx-auto max-w-[1320px] text-center'>
          <h1 className='text-[40px] md:text-[64px] font-semibold text-[#263238] leading-18'>Pellentesque suscipit <br/>fringilla libero eu.</h1>
          {/* inline-flex = กล่อง inline → เหมาะกับองค์ประกอบเล็ก เช่น button, badge, icon+text */}
          <button className='inline-flex items-center mt-5 bg-brand text-white px-5 py-3 rounded-lg '>Get a Demo <HiOutlineArrowNarrowRight className='ml-2'/></button>
      </div>
    </div>
  )
}

export default Pellentesque