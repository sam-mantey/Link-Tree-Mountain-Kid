import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Instagram from '../public/instagram.png'
import Youtube from '../public/youtube.png'
import Twitch from '../public/twitch.png'
import Tiktok from '../public/tik-tok.png'
import Mail from '../public/mail.png'
import Twitter from '../public/twitter.png'

export default function Social() {
// storing the individual links in an object
    const links = {
        instagramLink: "http://instagram.com/mountainkid",
        twitter: 'http://twitter.com/kidofmountain',
        youtube: 'https://www.youtube.com/c/MountainKid',
        twitch: 'https://www.twitch.tv/mountainkid',
        tiktok: 'https://www.tiktok.com/@mountainkid',
        mail: 'kkeenen@me.com',

    }
  return (
    <div className='flex justify-center gap-2 py-5'>
       <Handle img={Instagram} url={links.instagramLink}/>
       <Handle img={Twitter} url={links.twitter}/>
       <Handle img={Tiktok} url={links.tiktok}/>
       <Handle img={Youtube} url={links.youtube}/>
       <Handle img={Twitch} url={links.twitch}/>
       <Handle img={Mail} url={links.mail}/>
    </div>
  )

}

// A link to the social media
function Handle(props) {
    // destructuring the props object
    const {img , url} = props
  return (
    <Link href={url} className='h-10 w-10'>
            <Image  
                src={img}/>
    </Link>
  )
}
