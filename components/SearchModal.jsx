import { sql } from "@vercel/postgres";
import React from 'react'
import FetchingSearch from './FetchingSearch'
import { accessories } from './data'
import Link from 'next/link'
import Image from 'next/image'

export default function SearchModal({isVisible, onClose}) {

  
  if (!isVisible) return null
  let items
  let itemName 
  async function getName(name) {
    itemName = name
    console.log(itemName)
    const { data } = await sql`SELECT * from accessories where name = ${name}`
    items = data
    console.log(items)
  }


  return (
    <div className='z-20  fixed inset-0 bg-dark' >

      <div className=' w-11/12 md:w-4/5 flex flex-col mt-10 justify-center items-center mx-auto'>


        <FetchingSearch change={getName}/>


        <div className='grid grid-cols-4 gap-3 mt-10'>
        {/* {items
          .map(item => 
            (
              <div key={item.id} className='max-h-[120px] max-w-[100px] shadow-2xl rounded-2xl '>
                <Link  href={item.amazon_link} >
                  <Image src={item.img_path} alt='' height={500} width={500} className='rounded-2xl'/>
                </Link>
              </div>
            ))} */}
        </div>
          

            <p>dshdhofewlo</p>


      </div>


    
   </div>
    )
}





// 'use client'
// import React from 'react'
// import { useState } from 'react'
// import FetchingSearch from './FetchingSearch'
// import { accessories } from './data'

// export default function SearchModal({isVisible, onClose}) {
//   if (!isVisible) return null
//   const [name, setName] = useState('')


//   return (
//     <div className='z-20  fixed inset-0 bg-dark' >
//         {/* Close button */}
//         <div className=' w-11/12 md:w-4/5 flex flex-col mt-10 justify-center items-center mx-auto'>
          // <div className='w-4/5 h-14 mx-auto'>
          //   <input type="text" onChange={(e) => setName(e.target.value)} className='self-center w-full h-full rounded-2xl px-5 outline-none bg-light' placeholder='type to search'/>
          // </div>

//           <FetchingSearch name={name}/>

//         </div>
        
// //     </div>
//   )
// }
