import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-full bg-black flex flex-row justify-center items-center p-14'>
      <div className='flex flex-col text-white gap-y-5'>
        <h3 className='font-bold'>FIND A STORE</h3>
        <h3 className='font-bold'>BECOME A MEMBER</h3>
        <h3 className='font-bold'>Send Us Feedback</h3>
        <h3 className='font-bold'>Get Help</h3>
      </div>
      <div className='flex gap-y-5 flex-col justify-end ml-auto text-white'>
        <h1 className='font-extrabold'>Github</h1>
        <h1 className='font-extrabold'>LinkedIn</h1>
        <h1 className='font-extrabold'>Instagram</h1>
      </div>
    </div>
  )
}

export default Footer
