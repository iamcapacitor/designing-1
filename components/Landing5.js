"use client"
import React, { useState, useRef, useEffect } from 'react'

// we kept the first element as "" because month count starts from 1 and index starts from 0
const months = ["", "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Landing5 = () => {
    const contributioncontainer = useRef(null);
    const [cc, setCc] = useState([])
    const current = useRef(1);
    console.log("rerendering ", current.current);
    current.current += 1;
    const max = useRef(1);
    const total = useRef(0);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch("/api/contributions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: "send mock data",
                        state: true,
                    })
                });
                const jsondata = await response.json();
                setCc(jsondata);
                let values = jsondata.map(e => e.value);
                total.current = values.reduce((a , b)=>a+b);
                max.current = Math.max(...values);

                return jsondata;
            } catch (err) {
                console.log("Something error occured while fetching file data, = ", err);
                return [];
            }
        }
        fetchdata();
    }, []);

    const handleMouseEnter = (e) => {
        let span = e.currentTarget.querySelector("span");
        if (span) {
            span.classList.remove("hidden");
        }
    }
    const handleMouseLeave = (e) => {
        let span = e.currentTarget.querySelector("span");
        if (span) {
            span.classList.add("hidden");
        }
    }
    const formatedText = (value, date) => {
        let splitted = date.split("/");
        let m = parseInt(splitted[1]);
        return `${value} contributions on ${months[m]} ${splitted[2]}`
    }

    const color = (value) => {
        let percent = value / max.current;
        if (percent == 0) {
            return "";
        } else if (percent <= 0.25) {
            return "bg-green-300";
        } else if (percent <= 0.5) {
            return "bg-green-400";
        } else if (percent <= 0.75) {
            return "bg-green-600";
        } else {
            return "bg-green-800";
        }
    }

    return (
        <>
            <section className='min-h-screen py-20 grid place-content-center bg-gray-100' >
                <div className="innercontainer py-4 w-[95vw] overflow-x-auto  ">
                    <div className='border p-3 relative rounded-sm w-fit'>
                        <h2 className='px-2 absolute -top-3.5 left-5 bg-gray-100 z-2 '>Contributions chart</h2>
                        <h2 className='px-2 absolute -bottom-3.5 right-15 bg-gray-100 z-2  '>Total : {total.current}</h2>
                        <div ref={contributioncontainer} className='rounded-sm grid grid-flow-col grid-rows-7 gap-1 w-fit relative z-1' >
                            <span className="skipboxtool"></span>
                            {cc.length && cc.map((e, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={` ${i+1} border p-1.5 w-1 rounded-sm cursor-pointer relative ${color(e.value)}`}
                                        onPointerEnter={handleMouseEnter}
                                        onPointerLeave={handleMouseLeave}
                                    >
                                        <span
                                            className='bg-black p-1 px-3 rounded-md text-white text-sm origin-center absolute z-5 -translate-x-1/2 -translate-y-10 text-nowrap hidden'>{formatedText(e.value, e.date)}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div>colors :</div>
                        <div className="border p-1.5 w-1 rounded-sm cursor-pointer"></div>
                        <div className="border p-1.5 w-1 rounded-sm cursor-pointer bg-green-300 "></div>
                        <div className="border p-1.5 w-1 rounded-sm cursor-pointer bg-green-400 "></div>
                        <div className="border p-1.5 w-1 rounded-sm cursor-pointer bg-green-600 "></div>
                        <div className="border p-1.5 w-1 rounded-sm cursor-pointer bg-green-800 "></div>
                    </div>
                </div>
                <div className='border'>
                    <div className='text-center p-2 flex gap-1 justify-center items-center'>

                        <button
                            onMouseEnter={(e) => {
                                e.target.getElementsByTagName("span")[0].classList.remove("hidden");
                                e.target.getElementsByTagName("span")[0].classList.add("visible");
                            }}
                            onMouseLeave={(e) => {
                                e.target.getElementsByTagName("span")[0].classList.remove("visible");
                                e.target.getElementsByTagName("span")[0].classList.add("hidden");
                            }}
                            className='border p-1 px-3 rounded-sm bg-linear-90 from-blue-400 to-cyan-400 active:scale-105 relative'>
                            <span className='bg-black p-1 px-3 rounded-md text-white text-sm origin-center absolute -translate-x-1/2 -translate-y-10 text-nowrap hidden'>no contributions on 26/02/01</span>
                            show
                        </button>
                        <button className='border p-1 px-3 rounded-sm bg-linear-90 from-sky-300 to-cyan-400 active:scale-105'>reset</button>
                    </div>
                    <div className="datasetshowandchangebox p-1">
                        {/* <div className="border max-w-7xl m-5">
                            {originalc.current.length && originalc.current.map((e,i)=>{
                                return (
                                    <span key={i} className='p-0.5'>{e.date} {e.value} | </span>
                                )
                            })}
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing5