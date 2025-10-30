import React from 'react'
import clientImglogo01 from '../assets/img/clients/client-01.png'
import clientImglogo02 from '../assets/img/clients/client-02.png'
import clientImglogo03 from '../assets/img/clients/client-03.png'
import clientImglogo04 from '../assets/img/clients/client-04.png'
import clientImglogo05 from '../assets/img/clients/client-05.png'
import clientImglogo06 from '../assets/img/clients/client-06.png'
import clientImglogo07 from '../assets/img/clients/client-07.png'

const clientImglogo = [
  clientImglogo01,
  clientImglogo02,
  clientImglogo03,
  clientImglogo04,
  clientImglogo05,
  clientImglogo06,
  clientImglogo07,
]

const Clients = () => {
  return (
    <div className="container mx-auto max-w-[1320px] text-center py-10 overflow-hidden">
      <h2 className="text-[#4d4d4d] font-semibold text-[36px]">Our Clients</h2>
      <p className="text-[#717171] mb-10">
        We have been working with some Fortune 500+ clients
      </p>

      {/* ✅ แถวโลโก้ที่เลื่อนอัตโนมัติ */}
      <div className="relative w-full overflow-hidden">
        <ul className="flex animate-scroll gap-12 md:gap-24">
          {[
            ...clientImglogo, // ทำซ้ำให้เลื่อนได้เนียน
            ...clientImglogo,
          ].map((client, index) => (
            <li key={index} className="shrink-0 w-20 opacity-80 hover:opacity-100 transition">
              <img src={client} alt="" className="w-full h-auto" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Clients