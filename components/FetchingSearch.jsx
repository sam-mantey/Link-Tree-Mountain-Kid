"use client"
import { useState } from 'react'
import React from 'react'

export default function FetchingSearch(props) {
    const [name, setName] = useState('')
    
    const handleChange = (e) => {
        setName(e.target.value)
        props.change(name)
    }
  return (
    <div className='w-4/5 h-14 mx-auto'>
            <input type="text" onChange={handleChange} className='self-center w-full h-full rounded-2xl px-5 outline-none bg-light' placeholder='type to search'/>
    </div>
  )
}





// import React from 'react'

// import { accessories } from './data'


// export default function FetchingSearch({name}) {
//     const items = accessories
//     console.log(items)

//   return (
//     <>

//           {items
//             .filter(item => {item.id === name})
//             .map(item => 
//         (
//             <div key={item.id} className='max-h-[120px] max-w-[120px] shadow-2xl rounded-2xl'>
//                 <Link  href={item.amazon_link} >
//                     <Image src={item.img_path} alt='' height={1080} width={1040} className='rounded-2xl'/>
//                 </Link>
//             </div>
//         )
//         )}

//     </>
//   )
// }




