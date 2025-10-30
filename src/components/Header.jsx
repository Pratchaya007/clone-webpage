import React from 'react'
import HeaderImg from '../assets/img/header-img.png'

const Header = () => {
  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[600px] flex items-center'>
      <div className='container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row md:justify-between md:items-center md:p-0'>
        {/* leading-[1] ทำให้บรรทัดเว้นช่องว่างน้อยลง */}
        <div>
          <h1 className='text-[4rem] text-[#4d4d4d] leading-none'>Lessons and insights <br /><span className='text-brand'>from 8 years</span> </h1>
          <p className='text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
          {/* เหมือน flex ทุกอย่าง แต่แทนที่จะเป็น “block” มันจะอยู่ บรรทัดเดียวกับ element อื่น ได้ ❗️ */}
          <a className='text-white bg-brand py-2 px-5 inline-flex mt-3 rounded-md hover:bg-[#81C784] hover:scale-110'>Register</a>
        </div>
        <div>
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header