"use client"
import React, { useState } from 'react'

const page = () => {
    const [Width, setWidth] = useState(50);
    const image1url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE5-RtYEohf77G5HScTRlaXX_-D4DAr3Fyg&s";
    const image2url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFMAtnJRqi8snkpzmC71WqROwMVWtxzruVw&s";
    return (
        <>
            <main className='bg-white min-h-screen text-center'>
                <h2 className='text-4xl py-6'>Lorem ipsum dolor sit amet.</h2>
                <p><b>Why to waste storage by adding mock text using Lorem...</b></p>
                <div
                    style={{
                        background: `url(${image1url})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                    className={`border-2 w-[80vw] aspect-video mx-auto relative rounded-2xl overflow-clip`}>
                    <input
                        onChange={(e) => {
                            setWidth(e.target.value);
                        }}
                        type="range"
                        name="rangingwidth"
                        id="rangewidth"
                        min={0}
                        max={100}
                        step={0.1}
                        defaultValue={50}
                        className='w-full h-5 absolute top-1/2 left-0 opacity-0 z-6 '
                    />
                    <div
                        style={{
                            width: `${Width}%`,
                            background: `url(${image2url})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                        className={`controlslider border-r-2 h-full relative`}>
                        <div className='absolute top-1/2 -right-3 z-5 scale-150 select-none bg-amber-300 aspect-square rounded-full '>↔️</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default page