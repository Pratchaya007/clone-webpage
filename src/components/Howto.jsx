import React from 'react'
import img02 from '../assets/img/img-02.png'

const Howto = () => {
  return (
    <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
      <div>
        <img src={img02} alt="" />
      </div>
      <div>
        <h2 className='text-[36px] text-[#4d4d4d] font-semibold mb-3'>How to design your site footer like we did</h2>
        <p className='text-[#717171]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
        <button className='inline-flex justify-center items-center py-2 px-4 bg-[#4caf4f] text-white rounded-md mt-10' >Learn More</button>
      </div>
    </div>
  )
}

export default Howto
