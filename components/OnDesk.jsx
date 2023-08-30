import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function OnDesk(props) {
  const onDeskItems = props.value.filter(item => item.description === 'on desk')
  return (
    <section className='w-11/12 mx-auto '>
      <p className='text-base text-center font-bold my-5 md:text-2xl'>Things on my desk</p>

      <div className='grid grid-cols-3  justify-items-center gap-5 lg:grid-cols-4'>
      {/* Iterating through the popular data and rendering it on the page */}
          {onDeskItems.map(item => 
            (
              <div key={item.id} className='max-h-[120px] max-w-[100px] shadow-2xl rounded-2xl md:max-h-[180px] md:max-w-[180px] md:my-10 '>
                <Link  href={item.amazon_link} >
                  <Image src={item.img} alt='' height={500} width={500} className='rounded-2xl'/>
                </Link>
              </div>
            ))}
                
         </div>
    </section>
  )
}
