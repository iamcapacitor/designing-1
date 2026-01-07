import React from 'react'

const ProductsPage = () => {
  const cards = [
    {
      title: "HTML , CSS , JAVASCRIPT",
      desc: "you need to learn this basic / core fundamentels of web development. All libraries and frameworks are based on this."
    },
    {
      title: "React , Nextjs",
      desc: "These are libraries and frameworks used for making projects faster and more effeciently . it makes code more managable , easy to understand"
    },
    {
      title: "SQL , MONGODB",
      desc: "SQL is sql database and MongoDB is NO-SQL database and these both are required for an website maker to learn"
    },
    {
      title: "AWS , JAVA(springboot)",
      desc: "AWS is cloud platform and for backend development we have options of python too but Java is best for Large-scale"
    }
  ]
  const cards2 = [
    {
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusamus quis similique quo fugit eveniet maxime, deleniti amet soluta saepe? Labore voluptate, similique illo dolores hic obcaecati consectetur commodi nulla!"
    },
    {
      title: "sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusamus quis similique quo fugit eveniet maxime, deleniti amet soluta saepe? Labore voluptate, similique illo dolores hic obcaecati consectetur commodi nulla!"
    }
  ]
  return (
    <>
      <section className='bg-white py-30'>
        <article className=' grid grid-cols-1 gap-7 text-center text-lg max-w-4xl mx-auto'>
          <div>
            <h1 className=' text-4xl xl:text-6xl text-center font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing</h1>
          </div>
          <div>
            <textarea name="prompts" id="prompts" cols="30" rows="6" placeholder='this is placeholder text'
              className=' resize-none border p-4 w-4/5 rounded-3xl outline-0 shadow-2xl shadow-gray-400 '
            ></textarea>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-2 xl:gap-5 text-slate-600 font-bold'>
            <div className='border border-gray-400 p-2 w-9/10 sm:w-1/2 md:w-1/5 rounded-4xl hover:rounded-[0] hover:cursor-pointer transition-all ease-linear  '>Ekam tech</div>
            <div className='border border-gray-400 p-2 w-9/10 sm:w-1/2 md:w-1/5 rounded-4xl hover:rounded-[0] hover:cursor-pointer transition-all ease-linear  '>Data Sagar</div>
            <div className='border border-gray-400 p-2 w-9/10 sm:w-1/2 md:w-1/5 rounded-4xl hover:rounded-[0] hover:cursor-pointer transition-all ease-linear  '>General learning</div>
          </div>
          <div><p className=' text-left sm:text-center text-xl max-w-3xl mx-auto p-1'>Today web development job is not an job , it is fake , scam , non-working , only chatgpt using workers work</p></div>
        </article>
        <article className='py-12'>
          <div className=' text-3xl md:text-4xl xl:text-5xl font-bold text-center py-10' >
            <h2>Explore things you Need to learn to be Web developer</h2>
          </div>
          <div className='cardbox p-2 py-8  max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-3'>
            {cards.map((card) => {
              return (
                <div key={card.title} className='card  w-9/10 mx-auto max-w-sm rounded-2xl overflow-clip shadow-2xl shadow-gray-300 bg-slate-100 cursor-pointer select-none hover:translate-y-1 transition-transform'>
                  <div className="imagediv aspect-video">
                    <img className='' src="https://i.ytimg.com/vi/4I4mS7fZa28/maxresdefault.jpg" alt="mock image for sample purpose" />
                  </div>
                  <div className="infodiv p-1">
                    <div className="infotitle font-bold py-2">{card.title}</div>
                    <div className="infodesc text-slate-500">{card.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </section>
      <section className='bg-cyan-200 text-black text-lg py-30'>
        <article className='max-w-7xl mx-auto'>
          <div className=' p-1 py-4 w-9/10 mx-auto'>
            <h2 className=' text-4xl md:text-5xl'>Lorem ipsum dolor sit amet.</h2>
            <p className='max-w-2xl py-4 tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, architecto natus. Possimus saepe explicabo quaerat quibusdam nostrum similique blanditiis? Facere quia porro cupiditate</p>
          </div>
          <div className='py-8 flex flex-col md:flex-row justify-evenly items-center'>
            <div className="imagebox w-9/10 md:w-5/10 md:aspect-square rounded-2xl overflow-clip">
              <img src="https://wallpapersatoz.wordpress.com/wp-content/uploads/2014/08/981b4-zoozoophotos02.jpg" alt="mock image for sample purpose" />
            </div>
            <div className='py-4 w-9/10 md:w-4/10'>
              <h2 className='text-3xl md:text-4xl'>Lorem ipsum dolor sit amet.</h2>
              <p className='max-w-2xl py-4 tracking-wide text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, architecto natus. Possimus saepe explicabo quaerat quibusdam nostrum similique blanditiis? Facere quia porro cupiditate</p>
            </div>
          </div>
        </article>
        <article className=' py-8 md:py-0 max-w-7xl mx-auto'>
          <div className=' p-2 cardbox w-9/10 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {cards2.map((card) => {
              return (
                <div key={card.title} className='card rounded-2xl overflow-clip'>
                  <div className="imagebox ">
                    <img src="https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/socialsamosa/media/post_banners/owTeQPon7ayuKLB9672Z.jpg" alt="sample image" />
                  </div>
                  <div className="info p-1">
                    <div className="infotitle text-2xl lg:text-3xl py-3">{card.title}</div>
                    <div className="infodesc text-lg py-2">{card.desc}</div>
                    <div><a href="#" className='underline underline-offset-4'>Learn More</a></div>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </section>
    </>
  )
}

export default ProductsPage