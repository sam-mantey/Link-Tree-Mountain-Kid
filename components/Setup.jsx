import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Setup(props) {
  const setupItems = props.value.filter(item => item.description === 'desk')
  return (
    <section className='w-11/12 mx-auto '>
        <p className='text-base text-center font-bold my-5 md:text-2xl'>Desk Setup</p>

        <div className='grid grid-cols-3 grid-rows-1 justify-items-center gap-5 lg:grid-cols-4'>
        {/* Iterating through the popular data and rendering it on the page */}
        {setupItems.map(item => 
            (
            <div key={item.id} className='max-h-[120px] max-w-[120px] shadow-2xl rounded-2xl md:max-h-[180px] md:max-w-[180px] md:my-10 lg:max-h-[220px] lg:max-w-[220px] lg:my-12'>
            <Link href={item.amazon_link} >
                <Image src={item.img_path} alt='' height={500} width={500} className='rounded-2xl'/>
            </Link> 
            </div>
            ))}

        </div>
    </section>
  )
}
