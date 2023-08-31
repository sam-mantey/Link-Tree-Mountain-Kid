import React from 'react'

export default function ShareModal() {
  return (
    <div className='z-20 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center align-center gap-y-10 '>
        <div className='text-white self-center'>X</div>
        <div className='h-2/4 w-2/4 bg-white self-center rounded-xl'></div>
    </div>
  )
}

