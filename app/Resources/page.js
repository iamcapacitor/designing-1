"use client"
import React, { useRef, useEffect } from 'react'

// not the best one but it is nice
const ResourcePage = () => {
    const dragdiv = useRef(null);
    const maindiv = useRef(null);
    const isdragging = useRef(false);
    const startMouseX = useRef(0);
    const startMouseY = useRef(0);
    const divX = useRef(0);
    const divY = useRef(0);
    useEffect(() => {
        const Maindiv = maindiv.current;
        const Dragdiv = dragdiv.current; 
        isdragging.current = false;

        const handledrag = (e) => {
            if (isdragging.current) {
                let currentMouseX = e.clientX;
                let currentMouseY = e.clientY;
                let divNewX = divX.current + (currentMouseX - startMouseX.current);
                let divNewY = divY.current + (currentMouseY - startMouseY.current);
                // console.log(divNewX , divNewY);
                dragdiv.current.style.left = `${divNewX}px`;
                dragdiv.current.style.top = `${divNewY}px`;
            }
        }
        const handlemousedown = (e) => {
            isdragging.current = true;
            startMouseX.current = e.clientX;
            startMouseY.current = e.clientY;
            let boxrect = Dragdiv.getBoundingClientRect();
            let containerrect = Maindiv.getBoundingClientRect();
            divX.current = boxrect.left - containerrect.left;
            divY.current = boxrect.top - containerrect.top;
        };
        const handlemouseup = (e) => {
            isdragging.current = false;
        }
        Maindiv.addEventListener("pointermove", handledrag);
        Dragdiv.addEventListener("pointerdown", handlemousedown);
        Maindiv.addEventListener("pointerup", handlemouseup);
        Maindiv.addEventListener("pointercancel", handlemouseup);
        
        return () => {
            // remove the eventlisteners if added any
            Maindiv.removeEventListener("pointermove", handledrag);
            Dragdiv.removeEventListener("pointerdown", handlemousedown);
            Maindiv.removeEventListener("pointerup", handlemouseup);
            Maindiv.removeEventListener("pointercancel", handlemouseup);
        }
    }, [])

    return (
        <>
            <h1>Drag this div</h1>
            <div ref={maindiv} className='relative border-2 m-10 h-screen overflow-hidden '>
                <div ref={dragdiv} className="dragthisbox cursor-move select-none touch-none border-2 rounded-2xl p-1 bg-cyan-300 w-25 h-25 absolute">drag this box</div>
            </div>
            <div className='p-5'>
                <div>the above drag box has used pointer-events . it means it will work in mobiles also.</div>
                <div>
                this contains css-clip path animation
                </div>
            </div>
        </>
    )
}

export default ResourcePage