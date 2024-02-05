import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-full bg-black flex flex-row justify-center items-center p-14'>
      <div className='flex flex-col text-white gap-y-5'>
        <h3 className='font-bold hover:cursor-pointer'>FIND A STORE</h3>
        <h3 className='font-bold hover:cursor-pointer'>BECOME A MEMBER</h3>
        <h3 className='font-bold hover:cursor-pointer'>Send Us Feedback</h3>
        <h3 className='font-bold hover:cursor-pointer'>Get Help</h3>
      </div>
      <div className='flex gap-y-5 flex-col justify-end ml-auto text-white'>
        <a href = 'https://github.com/rn-varun' className='font-extrabold hover:cursor-pointer'>Github</a>
        <a href = 'https://www.linkedin.com/in/rvaruncs/' className='font-extrabold hover:cursor-pointer'>LinkedIn</a>
        <a href = 'https://www.instagram.com/varrunpsd/' className='font-extrabold hover:cursor-pointer'>Instagram</a>
      </div>
    </div>
  )
}

export default Footer
