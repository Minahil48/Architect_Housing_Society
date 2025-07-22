import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'

function Header() {
  return (
    <div className='w-full flex justify-between items-start'>
      <div className=''>
        <h1 className='text-primary font-semibold p-6 pl-8'>ARCITECT HOUSING SOCIETY</h1>
        <div className='w-80 h-px bg-tertiary'></div>
      </div>
      <Navbar />
      <div className='p-6'>
        <Button value='Contact Us'/>
      </div>
    </div>
  )
}

export default Header
