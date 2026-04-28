"use client"
import React, { useEffect, useRef} from 'react'

const PortfolioPage = () => {
  const container = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);
  const c = useRef(0);
  useEffect(() => {
    let divs = container.current.getElementsByClassName("clippyboxes");
    const len = divs.length;

    const handlenext = (e) => {
      if(divs[c.current]){
        divs[c.current].classList.add(`clippath${c.current}after`);
      }
      if(c.current + 1 < len){
        c.current = c.current + 1;
      }
    };
    const handleprevious = (e) => {
      if(divs[c.current]){
        divs[c.current].classList.remove(`clippath${c.current}after`);
      }
      if(c.current -1 >= 0){
        c.current = c.current -1;
      }
    }

    next.current?.addEventListener("click", handlenext);
    prev.current?.addEventListener("click", handleprevious);

    return () => {
      next.current?.removeEventListener("click", handlenext);
      prev.current?.removeEventListener("click", handleprevious);
    }
  }, []);

  return (
    <div ref={container} className='text-2xl text-center h-screen w-full text-white relative'>
      <div className='border border-black absolute bottom-10 z-10 w-full flex justify-center gap-5'>
        <button ref={prev} className="bg-transparent hover:bg-blue-500 active:scale-95 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Previous</button>
        <button ref={next} className="bg-transparent hover:bg-blue-500 active:scale-95 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Next</button>
      </div>
      <div className="clippath0initial clippyboxes h-screen w-full border-2 transition-all duration-1000 grid place-items-center absolute -z-5  bg-orange-300 text-black ">1. एका जंगलात एक ससा आणि कासव राहत होते; सशाला आपल्या वेगाचा खूप गर्व होता.</div>
      <div className="clippath1initial clippyboxes h-screen w-full border-2 transition-all duration-1000 grid place-items-center absolute -z-4  bg-yellow-300 text-black ">2. सशाने कासवाला शर्यतीचे आव्हान दिले आणि कासवाने ते मान्य केले.</div>
      <div className="clippath2initial clippyboxes h-screen w-full border-2 transition-all duration-1000 grid place-items-center absolute -z-3  bg-cyan-300 ">3. शर्यत सुरू झाल्यावर ससा वेगाने धावला, तर कासव हळूहळू चालत राहिले.</div>
      <div className="clippath3initial clippyboxes h-screen w-full border-2 transition-all duration-1000 grid place-items-center absolute -z-2  bg-blue-300 ">4. खूप पुढे गेल्यावर, ससा "कासव अजून मागे आहे" असे समजून एका झाडाखाली झोपी गेला.</div>
      <div className="clippath4initial clippyboxes h-screen w-full border-2 transition-all duration-1000 grid place-items-center absolute -z-1  bg-slate-300 ">5. कासवाने न थांबता, हळू पण सातत्याने चालून शर्यतीचा शेवट गाठला.</div>
      <div className="clippath5initial clippyboxes h-screen w-full border-2 transition-all duration-1000 grid place-items-center absolute z-0  bg-amber-300 text-black ">6. जेव्हा सशाला जाग आली, तेव्हा कासव शर्यत जिंकले होते, कारण सातत्याने प्रयत्न करणेच यशाकडे नेते</div>
    </div>
  )
}

export default PortfolioPage