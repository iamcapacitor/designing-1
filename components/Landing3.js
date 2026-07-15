import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Landing3 = () => {
  return (
    <section className=' p-1 sm:p-5 md:p-10 lg:p-20 min-h-screen bg-black text-white '>
        <div className="part1 border border-amber-200 grid gap-2 grid-cols-1 md:grid-cols-2 ">
            <div className=''>
            <h2 className='text-3xl sm:text-4xl font-bold'><span>Lorem ipsum dolor sit amet consectetur </span> <span className='text-[#fbbc04]'>adipisicing elit. Consequuntur iure cumque</span></h2>
            </div>
            <div className=' text-md py-2 md:text-xl'>
                <p>Lorem <Link className='text-blue-600 hover:underline' href="/">ipsum, dolor</Link> sit amet consectetur adipisicing elit. <Link className='text-blue-600 hover:underline' href="/">Eligendi provident</Link> libero qui quis, aspernatur dolore!</p>
                <button className='p-3 my-4 rounded-full bg-white text-blue-700 '>Get started for free</button>
            </div>
        </div>
        <div className="part2 py-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="part2_1">
            <div className='flex flex-col gap-2 my-2'>
              <div className=' p-1.5 px-4 select-none rounded-2xl cursor-pointer text-[#8ab4f8] bg-[#212b3b]'>
                <h3 className='text-sm'>Farm developers list</h3>
                <p className='text-md font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className=' p-1.5 px-4 select-none rounded-2xl cursor-pointer hover:text-[#abc0e1] hover:bg-[#233a5f56]'>
                <h3 className='text-sm'>Farm developers list</h3>
                <p className='text-md font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className=' p-1.5 px-4 select-none rounded-2xl cursor-pointer hover:text-[#abc0e1] hover:bg-[#233a5f56]'>
                <h3 className='text-sm'>Farm developers list</h3>
                <p className='text-md font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className=' p-1.5 px-4 select-none rounded-2xl cursor-pointer hover:text-[#abc0e1] hover:bg-[#233a5f56]'>
                <h3 className='text-sm'>Farm developers list</h3>
                <p className='text-md font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <button className='p-3 my-3 rounded-full hover:bg-gray-200 hover:text-[#689bed] text-[#8ab4f8] font-bold '>Lorem, ipsum dolor.</button>

          </div>
          <div className="part2_2 lg:max-w-200">
            <div className='border-2 border-[#ffffff4a] relative aspect-video rounded-2xl overflow-hidden'>
              <Image 
              className='w-auto h-auto' 
              fill
              src="/bgimage.png" 
              sizes='100% , 100%'
              alt='bg image' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Landing3