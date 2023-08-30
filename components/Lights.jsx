import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Lights(props) {
    const lightItems = props.value.filter(item => item.description === 'light')
  return (
    <>
        <section className='w-11/12 mx-auto '>
            <p className='text-base text-center font-bold my-5 md:text-2xl'>Lights in my setup</p>

            <div className='grid grid-cols-3  justify-items-center gap-5'>
            {/* Iterating through the popular data and rendering it on the page */}
            {lightItems.map(item => 
                (
                <div className='max-h-[120px] max-w-[120px] shadow-2xl rounded-2xl md:max-h-[180px] md:max-w-[180px] md:my-10 lg:max-h-[220px] lg:max-w-[220px] lg:my-12'>
                <Link key={item.id} href={item.amazon_link} >
                    <Image src={item.img} height={1080} width={1040} className='rounded-2xl'/>
                </Link>
                </div>
                ))}
            
            </div>
        </section>
    </>
  )
}
