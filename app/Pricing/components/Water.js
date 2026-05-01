import React from 'react'
import "@/app/Pricing/components/water.css";
const WaterComponent = () => {
  return (
    <>
    <div className='watercomponentdiv min-h-screen bg-gray-100 '>
        WaterComponent
        <div className="waterbubble"></div>
        <div className="waterbubble"></div>
        <button className='waterbubble'>Submit</button>
        <div className="waterbubbleseperate bg-red-400 "></div>
    </div>
    </>
  )
}

export default WaterComponent