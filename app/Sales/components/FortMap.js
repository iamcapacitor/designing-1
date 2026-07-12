"use client"
import React, { useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Expand, Minimize } from 'lucide-react';
import Marker from './Marker';
import "./marker.css"


const FortMap = ({ imageurl = "", dataset = [], size = 50 }) => {
    const mapcontainer = useRef(null);
    const fullscreenRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentCoordinates, setCurrentCoordinates] = useState({ x: 0, y: 0 });
    const [isprintactive, setIsprintactive] = useState(false);
    const MouseClickPrintCoordinates = (e) => { // this function is only for admin purpose
        if (!isprintactive) return;
        let rect = mapcontainer.current.getBoundingClientRect();
        let x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(2); // .toFixed() returns the result as string
        let y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(2);
        setCurrentCoordinates({ x: Number(x), y: Number(y) });
    };
    const toggleFullScreen = async () => {
        if (!document.fullscreenElement) {
            await fullscreenRef.current.requestFullscreen();
            setIsFullscreen(true);
        } else {
            await document.exitFullscreen();
            setIsFullscreen(false);
        }
    }

    return (
        <>
            <div ref={fullscreenRef} className='relative h-fit bg-cyan-200 border-2 border-blue-400 py-1'>
                <button onClick={toggleFullScreen} className=' absolute z-10 top-1 right-1 p-1 rounded-md border border-black bg-[#ffffff85] backdrop-blur-sm hover:scale-105 active:scale-100'>{isFullscreen ? <Minimize size={20} /> : <Expand size={20} />}</button>
                <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={5}
                    centerOnInit

                >
                    <TransformComponent>
                        <div
                            onClick={MouseClickPrintCoordinates}
                            ref={mapcontainer}
                            style={{ maxWidth: isFullscreen ? "100vw" : `${size}rem` }}
                            className='bg-teal-400 relative inline-block m-1'>

                            <img draggable={false} src={imageurl} alt="Raigad" className='block w-full h-auto select-none' />
                            {dataset.length > 0 && dataset.map((e) => {
                                let scrollId = `${e.id}` + e.title.trim().replaceAll(" " , "_");
                                return <Marker key={e.id} scrollId={scrollId} x={e.x} y={e.y} title={e.title} description={e.description} animation={true} containerRef={mapcontainer} />;
                            })}

                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
            {/* <div className="helpertool bg-yellow-200 w-full max-w-2xl p-4">
                <div>Helper tools to get the coordinates of any location with respect to fort image in percentage</div>
                <button onClick={()=>setIsprintactive(!isprintactive)} className='bg-emerald-200 p-1 rounded-md'>{isprintactive?"Deactivate":"Activate"}</button>
                <div>{`x:${currentCoordinates.x}, y:${currentCoordinates.y}`}</div>
            </div> */}
        </>
    )
}

export default FortMap