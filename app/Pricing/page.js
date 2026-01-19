"use client"
import React, { useState } from 'react'
import CarouselComponent from './components/Carousel';

const PricingPage = () => {
  console.log("PricingPage rerendering");
  const [rangevalue, setRangevalue] = useState(50);
  const [rangevalue2, setRangevalue2] = useState(0);
  return (
    <>
      <main className=' h-screen bg-white'>
        <CarouselComponent/>
        <section >
          <div>
            <section className="pricebook flex flex-row border h-100 py-20 relative">
              <div style={{ transform: `translate(${rangevalue}px)` }} className="page p-1 bg-amber-300 border-2 rounded-2xl w-60 aspect-[3/4] absolute left-1/3 z-4 origin-top-left ">page1</div>
              <div className="page p-1 bg-amber-300 border-2 rounded-2xl w-60 aspect-[3/4] absolute left-1/3 z-3 ">page2</div>
              <div className="page p-1 bg-amber-300 border-2 rounded-2xl w-60 aspect-[3/4] absolute left-1/3 z-2 ">page3</div>
              <div className="page p-1 bg-amber-300 border-2 rounded-2xl w-60 aspect-[3/4] absolute left-1/3 z-1 ">page4</div>
            </section>
          </div>
          <div className='border max-w-4xl mx-auto' >
            <div>
              <input
                onChange={(e) => { setRangevalue(e.currentTarget.value) }}
                className='w-full'
                type="range"
                name="turnpage"
                id="turnpage"
                min={0}
                max={360}
                step={2} />
            </div>
            <div>{rangevalue}</div>
          </div>
        </section>
        <article className='bg-yellow-200'>
          <div className='h-screen py-1'>
            <section className="pricebook bg-cyan-300 text-3xl text-center w-[95%] max-w-4xl mx-auto grid place-items-center grid-cols-1 grid-rows-1 ">
              <div
                style={{ opacity: `${Math.min(1 , Math.max(0 , 2 - rangevalue2))}` }}
                className="designpage border-2 rounded-2xl overflow-clip col-start-1 row-start-1 z-6  ">
                <img src="https://s7ap1.scene7.com/is/image/tatamotors/Cyantific-0?$PO-750-500-S$&fit=crop&fmt=avif-alpha" alt="image1" />
                <div className='bg-white'>color 1</div>
              </div>
              <div
                style={{ opacity: `${Math.min(1 , Math.max(0 , 3 - rangevalue2))}` }}
                className="designpage border-2 rounded-2xl overflow-clip col-start-1 row-start-1 z-5  ">
                <img src="https://s7ap1.scene7.com/is/image/tatamotors/BengalRogue-0?$PO-750-500-S$&fit=crop&fmt=avif-alpha" alt="image2" />
                <div className='bg-white'>color 2</div>
              </div>
              <div
                style={{ opacity: `${Math.min(1 , Math.max(0 , 4 - rangevalue2))}` }}
                className="designpage border-2 rounded-2xl overflow-clip col-start-1 row-start-1 z-4  ">
                <img src="https://s7ap1.scene7.com/is/image/tatamotors/Caramel-0?$PO-750-500-S$&fit=crop&fmt=avif-alpha" alt="image3" />
                <div className='bg-white'>color 3</div>
              </div>
              <div
                style={{ opacity: `${Math.min(1 , Math.max(0 , 5 - rangevalue2))}` }}
                className="designpage border-2 rounded-2xl overflow-clip col-start-1 row-start-1 z-3  ">
                <img src="https://s7ap1.scene7.com/is/image/tatamotors/CoorgClouds-0?$PO-750-500-S$&fit=crop&fmt=avif-alpha" alt="image4" />
                <div className='bg-white'>color 4</div>
              </div>
              <div
                style={{ opacity: `${Math.min(1 , Math.max(0 , 6 - rangevalue2))}` }}
                className="designpage border-2 rounded-2xl overflow-clip col-start-1 row-start-1 z-2  ">
                <img src="https://s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-0-23?$PO-750-500-S$&fit=crop&fmt=avif-alpha" alt="image5" />
                <div className='bg-white'>color 5</div>
              </div>
              <div
                style={{ opacity: `${Math.min(1 , Math.max(0 , 7 - rangevalue2))}` }}
                className="designpage border-2 rounded-2xl overflow-clip col-start-1 row-start-1 z-1  ">
                <img src="https://s7ap1.scene7.com/is/image/tatamotors/PrestineWhite-0-5?$PO-750-500-S$&fit=crop&fmt=avif-alpha" alt="image6" />
                <div className='bg-white'>color 6</div>
              </div>
            </section>
              <div className='border max-w-4xl mx-auto' >
                <div>
                  <input
                    onChange={(e) => { setRangevalue2(e.currentTarget.value) }}
                    className='w-full'
                    type="range"
                    name="rangeofcar"
                    id="rangeofcar"
                    min={0.1}
                    max={6}
                    step={0.1} />
                </div>
                <div> we have use grid property to overlay the images and we did not used position:absolute which is very beneficial for use for design and responsiveness purpose = {rangevalue2}</div>
              </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default PricingPage