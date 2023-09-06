'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Profile from '../public/profile.jpeg'
import Qricon from '../public/qrcode-solid.svg'
import CopyUrl from './CopyUrl'
import link from '../public/link-solid.svg'
import QRcode from '../public/qrcode_www.liinks.co.png'


//Displaying the share modal
export default function ShareModal( { isVisible , onClose}) {
  const [showShare, setShowShare] = useState(true)
  if (!isVisible ) return null


  const handleClick = (e) => {
    if (e.target.id !== 'share') {
      return null
    } else {
      onClose()
    }
  }


  return (
    <div className='z-20 fixed inset-0 bg-dark' id='dark-background' onClick={handleClick}>
        {/* Close button */}
        <div className='flex flex-col gap-14 mt-16' id='share'>
          <button className='text-white self-center text-xl font-medium cursor-pointer' onClick={() => onClose()}>X</button>
          {showShare && <div className='h-fit w-2/3 md:w-[500px] bg-white self-center rounded-xl flex flex-col justify-center p-5 gap-3'>
            <p className='text-lg font-bold text-center'>Kristian / @MountainKid</p>
            <Image src={Profile} alt='' className='rounded-full h-40 w-40 self-center '/>
            <button className='bg-black h-14 rounded-lg flex items-center justify-center gap-3 text-white' onClick={() => setShowShare(false)}>
              <p className='self-center'>View QR Code</p>
              <Image src={Qricon} alt='' className='h-5 w-5'/>
            </button>
            <CopyUrl />

            <div className='flex '>

            </div>
          </div>}

          {!showShare && 
          <div className='h-fit w-fit bg-white self-center rounded-xl flex flex-col justify-center p-5 gap-4'>
                <Image src={link} alt='' height={40} width={40}className=' mt-3 mx-auto'/>
                <div>
                  <p className='text-lg font-bold text-center'>Kristian / @MountainKid</p>
                  <p className='text-base  text-center'>liinks.co/mountainkid</p>
                </div>

                <Image src={QRcode} alt='' className='w-11/12 mx-auto'/>
                
          </div>}
        </div>
        
    </div>
  )
}
        
