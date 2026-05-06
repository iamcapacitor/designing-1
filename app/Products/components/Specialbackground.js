import React from 'react'
import "@/app/Products/components/Specialbackground.css";
const Specialbackground = () => {
  return (
    <>
      <section className='fixed top-0 w-full -z-1'>
        <div className='specialbackgroundcontainer relative min-h-screen py-20 px-10 bg-linear-240 from-[#1a87f3] to-[#62abfa] overflow-x-clip'>
          <div className="suncircle w-22 aspect-square rounded-full absolute top-0 right-0 bg-white "></div>
          <div className="hexagon w-12 aspect-square rounded-sm rotate-0 absolute top-1/5 right-1/5 z-3 -translate-x-0 translate-y-0 "></div>
          <div className="hexagon w-25 aspect-square rounded-sm rotate-0 absolute top-1/5 right-1/5 z-3 -translate-x-10 translate-y-10 "></div>
          <div className="hexagon w-30 aspect-square rounded-sm rotate-0 absolute top-1/5 right-1/5 z-3 -translate-x-30 translate-y-30 "></div>
          <div className="clouds">
            <img src="https://www.tv-tokyo.co.jp/anime/pocketmonster2023/images/common/cloud01.png" alt="clouds1" />
          </div>
          <div className="clouds">
            <img src="https://www.freeiconspng.com/thumbs/rain-png/rain-clouds-png-27.png" alt="cloudse" />
          </div>
          <div className="clouds">
            <img src="https://www.tv-tokyo.co.jp/anime/pocketmonster2023/images/common/cloud02.png" alt="clouds2" />
          </div>
          <div className="clouds">
            <img src="https://www.tv-tokyo.co.jp/anime/pocketmonster2023/images/common/cloud03.png" alt="clouds3" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Specialbackground