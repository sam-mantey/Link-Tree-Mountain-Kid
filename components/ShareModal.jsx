import React from 'react'
import Image from 'next/image'
import Profile from '../public/profile.jpeg'


//Displaying the share modal
export default function ShareModal( { isVisible , onClose}) {
  if (!isVisible ) return null

  const handleClose = (e) => {
    if (e.taget.id === 'dark-background')  onClose() 
  }


  return (
    <div className='z-20 fixed inset-0 bg-dark' id='dark-background' >
        {/* Close button */}
        <div className='flex flex-col gap-14 mt-16' >
          <button className='text-white self-center text-xl font-medium cursor-pointer' onClick={() => onClose()}>X</button>
          <div className='h-fit w-2/4 bg-white self-center rounded-xl flex flex-col justify-center p-5 gap-3'>
            <p className='text-lg font-bold text-center'>Kristian / @MountainKid</p>
            <Image src={Profile} alt='' className='rounded-full h-40 w-40 self-center '/>
            <button className='bg-black h-14 rounded-lg flex align-center justify-center gap-2 text-white'>
              <p className='self-center'>View QR Code</p>

            </button>
            <button className='bg-black h-14 rounded-lg flex align-center justify-center gap-2 text-white'>
              <p className='self-center'>Copy Page URL</p>
            </button>           

            <div className='flex '>

            </div>
          </div>
        </div>
        
    </div>
  )
}
        
