import React from 'react'

const Carousel = ({slide}) => {

  return (
    <>
        <section className='flex border border-slate-300 p-5 rounded-xl justify-center items-center flex-col gap-10'>
            <div className='flex justify-center items-center'>
                <img src={slide.img1} alt="slide" className="w-10"/>
            </div>
            <div>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
            </div>
            <div className='bg-slate-300 p-[0.7px] w-full'/>
            <div>
                <p>{slide.desc}</p>
            </div>
        </section>
    </>
  )
}

export default Carousel