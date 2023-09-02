'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Copy from '../public/clipboard-regular.svg'
import Check from '../public/check-solid.svg'

export default function CopyUrl() {
    const [isClicked, setIsClicked] = useState(false)


    // const handleClick = () => {
    //     setIsClicked(true) 
    //     navigator.clipboard.writeText('https://www.liinks.co/mountainkid')
    // }

    
  return (
    <button className={` h-14 rounded-lg flex items-center justify-center gap-2 text-white ${isClicked ? 'bg-copy' :  'bg-black'  }`} onClick={() => {
        setIsClicked(true)
        navigator.clipboard.writeText('https://www.liinks.co/mountainkid')
        setTimeout(() => {
            setIsClicked(false)
        }, 2000)
    }}>
              <p className='self-center'>
                {isClicked ? 'Copy Page URL' : 'Copied to Clipboard'}
              </p>
              {isClicked ? <Image src={Check} alt='' className='h-5 w-5'/> :  <Image src={Copy} alt='' className='h-5 w-5'/>}
    </button> 
  )
}
