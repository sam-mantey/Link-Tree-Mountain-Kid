'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Share from '../public/share.png'
import Search from '../public/search.png'
import ShareModal from './ShareModal'
import SearchModal from './SearchModal'

export default function ShareSearch() { 
    const [isShareOpen, setIsShareOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <>
      <div className=' z-10 flex justify-between items-center h-20 md:w-4/5 mx-auto'>
            <button  className='cursor-pointer' onClick={() => setIsShareOpen(true)}>
              <Image alt='' src={Share} className='h-5 w-5 md:h-7 md:w-7' />
              
            </button>
            <button className='cursor-pointer flex-end' onClick={() => setIsSearchOpen(true)}>
            <Image alt='' src={Search} className='h-5 w-5 md:h-7 md:w-7'/>
            </button>

      </div>
        {/* Displayiny the modals for the share ab=nd search */}
           {isShareOpen && <ShareModal isVisible={isShareOpen} onClose={() => setIsShareOpen(false)}/>}
           <SearchModal isVisible={isSearchOpen} onClose={() => setIsSearchOpen(false)}/>
    </>
    
  )
}
