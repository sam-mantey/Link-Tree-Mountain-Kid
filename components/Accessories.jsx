import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Popular from './Popular'
import OnDesk from './OnDesk'
import Lights from './Lights'
import Setup from './Setup'

export default async function Accessories() {
    const items = await getItems()
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
async function getItems() {
    const res = await fetch('http://localhost:5000/accessories')

    return res.json()
}