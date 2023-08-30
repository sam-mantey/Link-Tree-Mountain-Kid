'use client'
import Image from 'next/image'
import Banner from '../public/banner.jpeg'
import Profile from '../public/profile.jpeg'
import Social from '@/components/Social'
import MountainKid from '../public/mountainKid.png'
import Accessories from '@/components/Accessories'
import Verified from '../public/verified.png'
import DeskSetup from '../public/setup.jpeg'
import ShareSearch from '@/components/ShareSearch'
import Mountain from '../public/mountain.png'
import { Fragment } from 'react'
import ShareModal from '@/components/ShareModal'

export default function Home() {
  return (
    <>
      <Fragment>
        <div className='object-cover'>
        <Image 
          src={Banner}
          alt=''
          className='w-screen h-36 md:h-[300px]'
        />
        </div>
        

{/* border-2 border-black border-solid */}

        <main className='h-fit w-11/12  mx-auto relative flex-col justify-center align-center md:my-20'>

          {/* A div to contain the links */}
          
          <ShareSearch />
            {/* used flex control to center the profile image */}
            <div className='absolute flex justify-center align-center h-[90] w-full top-[-50px] md:top-[-160px]'>

              <div>
              <Image src={Profile} alt='' className='h-[100px]  w-[100px] rounded-full my-0 md:h-[160px]  md:w-[160px]'/>
              </div>

            </div>

            <div className='flex justify-center align-center '>
              <h1 className='text-center font-bold md:text-xl'>Kristian / @MountainKid</h1>
              <Image src={Verified} alt='' className='h-[20px] w-[20px]'/>
            </div>


            <div className='flex flex-col justify-center align-center gap-4 text-center py-5 md:gap-12 md:text-lg lg:text-xl'>
              <h2>Desk Setup, Gaming, Tech</h2>
              <div>
                <p>26.3k+ on TikTok</p>
                <p>7.3k+ on Instagram</p>
              </div>
              <p>Contact: kkeenen@me.com</p>
            </div>

            <Social />
              
        </main>

        <div className='w-11/12 mx-auto'>
          <Image src={MountainKid} alt='' className='rounded-3xl m-auto'/>
        </div>

        {/* list of items he sells */}
        <Accessories />

        <section className='mx-10 my-14 flex flex-col justify-center'>
          <Image src={DeskSetup} alt='' height={500} width={500} className='rounded-xl mx-auto'/>

          <Image src={Mountain} alt='' className='py-7 mx-auto'/>
        </section>

      </Fragment>
    </>
  )
}
