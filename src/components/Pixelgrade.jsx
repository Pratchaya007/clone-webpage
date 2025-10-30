import React from 'react'
import img01 from '../assets/img/img-01.png'

const Pixelgrade = () => {
  return (
    <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2 mt-10'>
      <div>
        <img src={img01} alt="" />
      </div>
      <div>
        <h2 className='text-[36px] text-[#4d4d4d] leading-none font-semibold'>The unseen of spending three  <br/> years at Pixelgrade</h2>
        <p className='text-[#717171] text-[14px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className='inline-flex justify-center items-center py-2 px-4 bg-brand text-white rounded-md mt-10' >Learn More</button>
      </div>
    </div>
  )
}

export default Pixelgrade