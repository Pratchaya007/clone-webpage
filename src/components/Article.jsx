import React from 'react'
import articleTmg01 from '../assets/img/article-01.png'
import articleTmg02 from '../assets/img/article-02.png'
import articleTmg03 from '../assets/img/article-03.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const Article = () => {
  return (
    <div className='pt-10 pb-20 text-center'>
      <div className='container mx-auto max-w-[1320px]'>
        <h3 className='text-[36px] font-semibold text-[#4d4d4d]'>Caring is the new marketing</h3>
        <p className='text-[#717171]'>The Nexcent blog is the best place to read about the latest membership insights, <br/> trends and more. See who's joining the community, read about how our community <br/> are increasing their membership income and lot's more.​</p>

        <div className='my-10 '>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            <div className='relative m-5 md:m-0 hover:scale-98'>
              <img className='rounded-xl' src={articleTmg01} alt="" />
              <div className='absolute bg-[#f5f7fa] bottom-[-30px] left-[50%] translate-x-[-50%] w-[350px] max-w-[350px] p-5 shadow-lg rounded-xl'>
                <p className='text-[#717171] font-semibold'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href="" className='flex items-center justify-center font-semibold text-[#4caf4f] mt-5 focus:text-[#81C784] hover:scale-120'>Readmore <HiOutlineArrowNarrowRight className='ml-1'/></a>
              </div>
            </div>
            <div className='relative m-5 md:m-0 hover:scale-98'>
              <img className='rounded-xl' src={articleTmg02} alt="" />
              <div className='absolute bg-[#f5f7fa] bottom-[-30px] left-[50%] translate-x-[-50%] w-[350px] max-w-[350px] p-5 shadow-lg rounded-xl'>
                <p className='text-[#717171] font-semibold'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href="" className='flex items-center justify-center font-semibold text-[#4caf4f] mt-5 focus:text-[#81C784] hover:scale-120'>Readmore <HiOutlineArrowNarrowRight className='ml-1'/></a>
              </div>
            </div>
            <div className='relative m-5 md:m-0 hover:scale-98'>
              <img className='rounded-xl' src={articleTmg03} alt="" />
              <div className='absolute bg-[#f5f7fa] bottom-[-30px] left-[50%] translate-x-[-50%] w-[350px] max-w-[350px] p-5 shadow-lg rounded-xl'>
                <p className='text-[#717171] font-semibold'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href="" className='flex items-center justify-center font-semibold text-[#4caf4f] mt-5 focus:text-[#81C784] hover:scale-120'>Readmore <HiOutlineArrowNarrowRight className='ml-1'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article