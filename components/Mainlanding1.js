"use client"
import React , {useEffect} from 'react'

const Mainlanding1 = () => {
  const cardsarr = [
    {
      title:"This is heading",
      desc : "This is para - Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores corporis consectetur",
      imageurl:"https://www.gstatic.com/bricks/image/6cb214b6-b73e-4e26-b8c3-18a12e9dce6d.svg",

    },
    {
      title:"This is heading",
      desc : "This is para - Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores corporis consectetur",
      imageurl:"https://www.gstatic.com/bricks/image/d254b968-e55c-43fd-bcc9-52c2208a7f82.jpg",
      
    },
    {
      title:"This is heading",
      desc : "This is para - Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores corporis consectetur",
      imageurl:"https://www.gstatic.com/bricks/image/08721717-dc8e-4cf9-8ade-8d988dadfb38.png",

    },
  ];
  // useEffect(() => {

  // }, [])
  
  return (
    <>
      <main className=' px-[1vw] md:px-[4.5vw] py-6 md:py-20 bg-white lg:h-[450px] 2xl:h-auto flex flex-col lg:flex-row items-center gap-5 justify-between 2xl:justify-evenly '>
        <div className="box1 border p-1 w-[95%] md:w-[90%] max-w-[600px] xl:max-w-1/2 flex flex-col gap-[2vw] lg:gap-[4] items-start ">
          <div className='p-2.5 text-sm text-blue-800  rounded-sm inline-block bg-[#dbdbff] hover:bg-[#d2d2f8] '>
            <span className='font-bold text-blue-800 '>Get ₹500 Lorem ipsum</span> dolor sit amet consectetur adipisicing
            <span>➡️</span>
          </div>
          <div className='flex flex-col gap-[1vw] text-4xl md:text-5xl'>
            <div><h2 className=' font-bold bg-linear-to-b from-amber-500 to-blue-500 bg-clip-text text-transparent '>Kisan farm vegetables</h2></div>
            <div><h2 className=' font-bold bg-linear-to-b from-orange-600 to-indigo-300 bg-clip-text text-transparent '>Grows here</h2></div>
          </div>
          <div className='text-amber-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vel officiis eaque.</div>
          <div className='flex p-1 gap-[2vw] max-sm:flex-col w-full flex-row'>
            <button className='p-3 border border-blue-500 rounded-full bg-blue-700 text-white hover:shadow shadow-gray-500 '>Get started for free</button>
            <button className='p-3 border border-blue-500 rounded-full text-blue-700 font-bold hover:shadow shadow-gray-500 '>Contact sales</button>
          </div>
        </div>
        <div className="box2 h-fit 2xl:aspect-square w-[98%] md:w-[90%] max-w-[450px] 2xl:max-w-lg rounded-4xl overflow-hidden hover:rounded-xl transition-all lg:translate-y-10 bg-red-400">
          <img className='w-1/1 h-1/1' src="https://www.gstatic.com/bricks/image/c0deb473-e886-496f-94cf-631303dffb39.jpg" alt="google image" />
        </div>
      </main>

      <header className='max-sm:p-[1vw] p-[4vw] bg-[#e7e7e7]'>
        <div className="box3 m-1 max-[410px]:text-sm text-md md:text-lg flex items-center gap-[2vw] ">
          <div className='p-3 border-b-2 border-[#00000000] hover:border-blue-500 hover:bg-white hover:shadow shadow-gray-400 '>Classname is this </div>
          <div className='p-3 border-b-2 border-[#00000000] hover:border-blue-500 hover:bg-white hover:shadow shadow-gray-400 '>Contributors</div>
          <div className='p-3 border-b-2 border-[#00000000] hover:border-blue-500 hover:bg-white hover:shadow shadow-gray-400 '>Lorem ipsum</div>
        </div>
        <div className='cardcontainer border py-[2vw] flex flex-row flex-wrap justify-center xl:justify-start xl:flex-row gap-[2vw]'>
          {cardsarr.map((card , i)=>{
            return (<div key={i} className="cardtype1 border hover:border-[#00000000] rounded-xl overflow-hidden shadow shadow-gray-500 w-[98%] sm:w-[90%] max-w-[22rem] flex items-center bg-white ">
            <div className='py-3 px-2 w-[65%] sm:w-[70%]  '>
              <h3 className='text-[#5b5f63]'>{card.title}</h3>
              <p className=' text-sm sm:text-md truncate-text'>{card.desc} </p>
            </div>
            <div className='w-[35%] sm:w-[30%]'>
              <img className='w-1/1 h-1/1' src={`${card.imageurl}`} alt="image1" />
            </div>
          </div>)
          })}
        </div>
      </header>
    </>
  )
}

export default Mainlanding1