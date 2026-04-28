import React from 'react'
import "@/app/Pricing/components/cc.css";

const Carouselcomponent2 = () => {
    return (
        <div className='min-h-screen bg-cyan-100'>
            <div className="banner">
                <div className="content">
                    <div className="model"><img src="/other/image9.webp" alt="image9" /></div>
                </div>
                <div className="slider" style={{"--quantity":8 }}>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 1 }} ><img src="/other/image1.png" alt="image1" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 2 }} ><img src="/other/image2.png" alt="image2" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 3 }} ><img src="/other/image3.png" alt="image3" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 4 }} ><img src="/other/image4.png" alt="image4" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 5 }} ><img src="/other/image5.png" alt="image5" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 6 }} ><img src="/other/image6.png" alt="image6" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 7 }} ><img src="/other/image7.png" alt="image7" /></div>
                    <div className="item border-2 inline-block rounded-2xl overflow-hidden" style={{"--position": 8 }} ><img src="/other/image8.png" alt="image8" /></div>
                </div>
            </div>
            Inspiration from <b>Lun Dev</b>
        </div>
    )
}

export default Carouselcomponent2