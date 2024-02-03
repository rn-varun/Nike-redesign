import React from 'react'
import Card from './Card'
import { images } from '../constants'

console.log(images)

const Airmax = () => (
    <>
        <div className='flex justify-center items-center flex-col mt-10'>
            <p className='font-mono sm:mt-5 mt-0'>Arriving Feb 26th</p>
            <h1 className='text-6xl font-extrabold m-2'>NIKE AIR MAX DN</h1>
            <p className='font-mono'>Welcome to the next generation of Air Technology</p>
            <button className=' rounded-3xl bg-black text-white p-4 mt-7'>Get Notified</button>
        </div>)
        <div className='flex flex-row flex-wrap justify-center items-center'>
            {images.map((img, index)=>(
                    <Card key={index} imageURL={img.img}/>
            ))}
        </div>
    </>
  )

export default Airmax
