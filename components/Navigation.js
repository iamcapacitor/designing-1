import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navigation = () => {
  return (
    <>
      <nav className='sticky top-0 w-full bg-white z-10'>
        <nav className='border border-black py-2 px-[2vw] text-sm text-gray-500 shadow shadow-gray-700 flex items-center gap-[3vw] justify-between '>
          {/* part 1 */}
          <div className='flex items-center gap-x-[3vw]'>
            <div className='invert  md:hidden  '>
              <Image src="/menulines.svg" width={25} height={25} alt='menulines' />
            </div>
            <div className=' w-30 md:w-35'>
              <img src="/mainlogo.png" alt="mainlogo" loading="lazy" className='w-auto' />
            </div>
            <ul className='hidden md:flex gap-3 '>
              <li><Link href="/Overview">Overview</Link></li>
              <li><Link href="#">Solutions</Link></li>
              <li><Link href="/Products">Products</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Resources</Link></li>
            </ul>
          </div>
          {/* part 2 */}
          <div className='flex gap-[2vw] items-center'>
            <div className='invert hidden md:visible ' >
              <Image src="/search.svg" width={30} height={30} alt='Search' />
            </div>
            <div>
              <ul className='hidden md:flex gap-[2vw] '>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Console</a></li>
              </ul>
            </div>
            <div className='invert border rounded-full hover:bg-amber-950 '>
              <Image src="/dots3.svg" width={30} height={30} alt='Menudots' />
            </div>
            <div className='px-2 border border-black rounded-full w-10 h-10 overflow-hidden '>
              profileimage
            </div>
          </div>
        </nav>
        <div className=' hidden p-2 border text-sm md:flex justify-end gap-[2vw] items-center'>
          <button className='p-1 px-3 border border-blue-500 rounded-full text-blue-700 font-bold hover:shadow shadow-gray-500 '>Contact us</button>
          <button className='p-1 px-3 border border-blue-500 rounded-full bg-blue-700 text-white hover:shadow shadow-gray-500 '>Start free</button>
        </div>
      </nav>
    </>
  )
}

export default Navigation