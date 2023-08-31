import { sql } from "@vercel/postgres"; 
import React from 'react'
import Popular from './Popular'
import OnDesk from './OnDesk'
import Lights from './Lights'
import Setup from './Setup'

export default async function Accessories() { 
    // const items = await getItems()
    const { rows } = await sql`SELECT * from accessories`
    const items = rows
  return ( 
    <section className='flex flex-col gap-10 md:my-20'>

        {/* Passing the fetched data to the child components */}
        <Popular value={items}/>
        <OnDesk value={items}/>
        <Lights value={items}/>
        <Setup value={items}/>

    </section>
  )
}

// A function to fetch data form the database server
// async to make it an asynchronous function where we can use await for the promise
// async function getItems() {
//     const res = await fetch('http://localhost:5000/accessories')

//     return res.json()
// }



// import { sql } from "@vercel/postgres";

// export default async function Cart({ params }) {
//   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }