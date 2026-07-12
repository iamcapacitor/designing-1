"use client"
import React, { useRef, useState, useLayoutEffect } from 'react'

const Marker = ({ scrollId, x, y, title, description, animation = true, containerRef = null }) => {
    const tooltip = useRef(null);

    const handleTooltipVisiblity = () => {
        if (!containerRef?.current || !tooltip.current) return;

        let containerRect = containerRef.current.getBoundingClientRect();
        let tooltipRect = tooltip.current.getBoundingClientRect();

        let Xthreshold = 100 - (tooltipRect.width / containerRect.width) * 100;
        let Ythreshold = 100 - (tooltipRect.height / containerRect.height) * 100;
        let X = "left-0";
        let Y = "top-0";
        if (Xthreshold < x) X = "right-0";
        if (Ythreshold < y) Y = "bottom-0";

        tooltip.current.classList.remove("left-0", "right-0", "top-0", "bottom-0");
        tooltip.current.classList.add(X, Y);
    };
    const scrollToSection = (e) => {
        e.stopPropagation(); // prevents click from bubbling
        let element = document.getElementById(scrollId);
        element?.scrollIntoView({ behavior: "smooth", block: 'center' });
        element?.classList.add("ring-2", "ring-amber-400");
        setTimeout(() => {
            element?.classList.remove("ring-2", "ring-amber-400");
        }, 1500);
    }
    return (
        <>
            <span onPointerEnter={handleTooltipVisiblity} style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50% , -50%)" }} className="markers absolute z-0 hover:z-50">
                <div 
                ref={tooltip}
                className={`descriptionToolTip absolute  text-[0.7rem] transition-opacity `}>
                    <div className="w-48 rounded-md border border-gray-200 bg-[#ffffff79] backdrop-blur-sm p-1 shadow-lg">
                        <h5 className="font-semibold text-gray-900 truncate ">{title}</h5>
                        <div className="my-0.5 h-px bg-gray-200"></div>
                        <p className="max-h-20 overflow-y-auto text-white pr-1 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-transparent">{description}</p>
                        <button onClick={scrollToSection} className='mt-2 text-blue-600 hover:underline font-medium'>View Details </button>
                    </div>
                </div>
                <span className={`markerdot border border-black shadow-xl shadow-yellow-300 block w-1 aspect-square bg-yellow-400 rounded-full hover:scale-125 active:scale-100 cursor-pointer ${animation ? " animate-ping " : ""} hover:animate-none`} ></span>
            </span>
        </>
    )
}

export default Marker
/*
continue gsap project
*/