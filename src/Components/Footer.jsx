import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import home from '../assets/home.svg'
import shoe from '../assets/shoe.svg'
import ball from '../assets/ball.svg'
import search from '../assets/search.svg'
import logoNamed from '../assets/logo-named.svg'
import tiktok from '../assets/tiktok.svg'
import user from '../assets/user.svg'

const Footer = () => {
    return (
        <div className='font-roboto w-full h-fit bg-elitip-purple flex  flex-row py-2 sm:pt-10 items-start justify-around '>
            <div className='sm:hidden flex flex-row items-center w-full justify-around text-white'>
                <Link to={'/'}><img src={home} alt="" /></Link>
                <Link to={'/'}><img src={shoe} alt="" /></Link>
                <Link to={'/'}><img src={ball} alt="" /></Link>
                <Link to={'/'}><img src={search} alt="" /></Link>
                <Link to={'/'}><img src={user} alt="" /></Link>
            </div>
            <div className='sm:flex hidden flex-row w-full' >
                <div className='w-1/5 py-8 flex h-fit justify-center items-start'>
                    <img src={logoNamed} alt="" />
                </div>
                <div className='w-1/5 sm:flex flex-col items-start justify-start hidden'>
                    <span className='text-2xl font-semibold  text-white underline'>CONTACT US</span>
                    <ul className='my-4'>
                        <li className='text-white text-lg'>
                            <Link to={'#'}>info@elitip.com</Link>
                        </li>
                        <li className='text-white text-lg'>
                            <Link to={'#'}>help@elitip.com</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/5 hidden md:flex flex-col items-start justify-start'>
                    <span className='text-2xl font-semibold  text-white underline'>LINKS</span>
                    <ul className='my-4'>
                        <li className='text-white text-lg'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='text-white text-lg'>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li className='text-white text-lg'>
                            <Link to={'/contact'}>Contact Us</Link>
                        </li>
                        <li className='text-white text-lg'>
                            <Link to={'/tutorials'}>Tutorials</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/5 flex flex-col items-start justify-start'>
                    <span className='text-2xl font-semibold  text-white underline'>LEGAL</span>
                    <ul className='my-4'>
                        <li className='text-white text-lg'>
                            <Link to={'#'}>Terms &amp; Conditions</Link>
                        </li>
                        <li className='text-white text-lg'>
                            <Link to={'#'}>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/5 hidden  lg:flex flex-col items-start justify-start'>
                    <span className='text-2xl font-semibold  text-white underline'>Join Our Socials</span>
                    <span className='text-xl font-medium my-2 text-white'>Coming soon</span>
                    <div className='my-4 flex flex-row items-center justify-between w-3/5'>
                        <span className='mx-2 cursor-pointer'><BsInstagram color='white' size={25} /></span>
                        <span className='mx-2 cursor-pointer'><BsFacebook color='white' size={25} /></span>
                        <span className='mx-2 cursor-pointer'><BsTwitter color='white' size={25} /></span>
                        <span className='mx- color='><img width={25} src={tiktok} alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
