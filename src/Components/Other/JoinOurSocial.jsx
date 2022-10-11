import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import tiktok from '../../assets/tiktok.svg'

const JoinOurSocial = () => {
  return (
    <div className='items-center mx-auto  flex flex-col sm:hidden justify-start'>
             <span className='text-2xl font-semibold  text-white underline whitespace-nowrap '>Join Our Socials</span>
             <span className='text-xl font-medium my-2 text-white whitespace-nowrap'>Coming soon</span>
             <div className='my-4 flex flex-row items-center justify-between'>
                 <span className='mx-2 cursor-pointer'><BsInstagram color='white' size={25} /></span>
                 <span className='mx-2 cursor-pointer'><BsFacebook color='white' size={25} /></span>
                 <span className='mx-2 cursor-pointer'><BsTwitter color='white' size={25} /></span>
                 <span className='mx- color='><img width={25} src={tiktok} alt="" /></span>
             </div>
         </div>
  )
}

export default JoinOurSocial
