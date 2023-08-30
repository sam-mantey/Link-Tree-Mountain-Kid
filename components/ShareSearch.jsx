'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Share from '../public/share.png'
import Search from '../public/search.png'

export default function ShareSearch() {
    const [isClicked, setIsClicked] = useState('false')
    const handleClick = () => {
      setIsClicked(prevState => !prevState)
    }
  return (
    <div className='flex justify-between items-center h-20 md:w-4/5 mx-auto'>
            <button  className='cursor-pointer' >
              <Image  alt='' src={Share} className='h-5 w-5 md:h-7 md:w-7' onClick={handleClick}/>
              
            </button>
            <div className='cursor-pointer'>
            <Image alt='' src={Search} className='h-5 w-5 md:h-7 md:w-7'/>
            </div>
    </div>
  )
}
