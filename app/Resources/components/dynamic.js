import React , {useRef} from 'react'

const Dynamic = () => {
    const button = useRef(null);
    const showdiv = useRef(null);    
  return (
    <>
    <section className='relative h-screen border '>
        <div ref={showdiv} className="clipbefore thiswillshow transition-all duration-1000  bg-amber-200 w-full h-full">
            <h1>Namaste Bharat</h1>
        </div>
    <div>
        <button 
        ref={button} 
        onClick={()=>{
            showdiv.current.classList.toggle("clipafter");
        }}
        className='bg-cyan-300 px-2 py-1 rounded-sm active:bg-cyan-400 absolute top-1/2 left-1/2' >Press</button>
    </div>
    </section>
    </>
  )
}

export default Dynamic