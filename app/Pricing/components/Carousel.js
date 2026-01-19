import React, { useState } from 'react'

const CarouselComponent = () => {
  const urls = [
    {
      imgurl: "https://t4.ftcdn.net/jpg/15/73/93/31/360_F_1573933118_IZuLhBDIlu8qWDfrbWUcGPszsy06fROH.jpg"
    },
    {
      imgurl: "https://i.ytimg.com/vi/HTHIra4MJFU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB42jutx-_MMlPuo69aJftRlclIrQ"
    },
    {
      imgurl: "https://www.shutterstock.com/image-photo/raigad-hill-fort-situated-about-260nw-2431072689.jpg"
    },
    {
      imgurl: "https://www.trawell.in/admin/images/upload/190525254Mahabaleshwar_Raigad_Fort_Main.jpg"
    },
  ];
  const [currentUrl, setCurrentUrl] = useState(0);
  const len = urls.length;
  const handleclick1 = () => {
    // circular decrement
    setCurrentUrl((currentUrl - 1 + len) % len);
  }
  const handleclick2 = () => {
    console.log("handleClick2");
    // circular increment - learned in Data structure circular Queue
    setCurrentUrl((currentUrl + 1 + len) % len);
  }
  return (
    <>
      <div className="mainbox bg-white min-h-screen p-1">
        <div className="imagebox border-2 border-amber-300 max-w-4xl mx-auto rounded-2xl overflow-clip flex justify-center items-center gap-4">
          <div className="imagecontainer1 bg-cyan-400 w-full max-w-4xl aspect-video">
            <img className='w-full h-100%' src={`${urls[currentUrl].imgurl}`} alt="image of Raigad Fort" />
          </div>
        </div>
        <div className="controlbox max-w-4xl mx-auto flex justify-center gap-4">
          <button
            onClick={(e) => { handleclick1() }}
            className='border p-1 aspect-square w-10 hover:scale-105 rounded-sm active:bg-slate-100' >{"<"}</button>
          <button
            onClick={(e) => { handleclick2() }}
            className='border p-1 aspect-square w-10 hover:scale-105 rounded-sm active:bg-slate-100' >{">"}</button>
        </div>
        <div>This is called Carousel in English But we will call it something Different</div>
      </div>
    </>
  )
}

export default CarouselComponent