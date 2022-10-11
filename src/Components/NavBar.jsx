import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Vector from '../assets/Vector.svg'
import back from '../assets/back.svg'
import logo from '../assets/logo.png'

const NavBar = () => {
  const [mobile, setMobile] = useState(true)
  const navigate = useNavigate()

  if (typeof window !== undefined) {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 960) {
        setMobile(true)
      }
    })
  }

  const handleNavigation = () => {
    setMobile(true)
    // navigate
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth < 960) {
        setMobile(true)
      }
    }
  }, [])

  const handleGoBack = () => {
    setMobile(true)
    navigate(-1)
  }

  return (
    <div className='w-full z-20 h-[130px] shadow2xl text-white px-9 items-center flex justify-between sticky top-0 bg-elitip-blue'>
      <img onClick={() => setMobile(!mobile)} className='absolute cursor-pointer w-[30px] xtab:hidden right-3 top-8 z-20' src={Vector} alt="menu" />
      <img onClick={handleGoBack} className='absolute cursor-pointer w-[30px] sm:hidden left-3 top-8 z-20' src={back} alt="back" />
      <div className="flex flex-col mx-auto sm:mx-0 sm:z-30 items-center">
        <img className='w-[60px]' src={logo} alt="" />
        <p className="font-bold text-xl">ELITIP</p>
      </div>
      <div className={`flex items-center xtab:static duration-500 absolute xtab:flex-row flex-col bg-[#0d155a]
         ${mobile ? '-top-[1000px]' : 'top-0 '} left-0 right-0 xtab:py-0 py-4`}>
       
        <div className={`flex  backdrop-blur-md sm:backdrop-blur-0 bg-black/40 sm:bg-transparent items-center xtab:static duration-500 absolute xtab:flex-row flex-col
         ${mobile?'-top-[1000px]':'top-0 h-screen'} left-0 right-0 xtab:py-0 py-4 duration-300`}>
          <div onClick={()=> setMobile(true)} className="absolute xtab:hidden z-0 top-0 left-0 bottom-0 right-0 "></div>
          <div className="flex duration-150 w-full z-10 sm:bg-[#0d155a]  sm:flex-row flex-col justify-center sm:items-center xtab:mt-11 mt-[6vh]">
          <h2 className="text-center navlinks sm:hidden px-6 my-6 mb-10 mx-auto font-bold text-2xl pt-2 border-b-2 font-ibm">MENU</h2>
            <Link className='hover:text-elitip-purple ' to={'/'}>
              <p onClick={()=> handleNavigation()} className="font-bold cursor-pointer  text-base ml-4">HOME</p>
            </Link>
            <Link className='hover:text-elitip-purple' to={'/about'}>
              <p onClick={()=> handleNavigation()} className="font-bold cursor-pointer mt-4 sm:mt-0 text-base ml-4">ABOUT</p>
            </Link>
            <Link className='hover:text-elitip-purple' to={'/tutorials'}>
              <p onClick={()=> handleNavigation()} className="font-bold cursor-pointer mt-4 sm:mt-0 text-base ml-4">TUTORIALS</p>
            </Link>
            <div className="flex sm:hidden flex-col">
              <Link className='hover:text-elitip-purple' to={'/account'}>
                <p onClick={()=> handleNavigation()} className="font-bold whitespace-nowrap cursor-pointer mt-4 sm:mt-0 text-base ml-4">DOMESTIC</p>
              </Link>
              <Link className='hover:text-elitip-purple' to={'/leagues'}>
                <p onClick={()=> handleNavigation()} className="font-bold whitespace-nowrap cursor-pointer mt-4 sm:mt-0 text-base ml-4">INTERNATIONAL</p>
              </Link>
              <Link className='hover:text-elitip-purple' to={'/account'}>
                <p onClick={()=> handleNavigation()} className="font-bold whitespace-nowrap cursor-pointer mt-4 sm:mt-0 text-base ml-4">EUROPEAN</p>
              </Link>
              <Link className='hover:text-elitip-purple' to={'/account'}>
                <p onClick={()=> handleNavigation()} className="font-bold whitespace-nowrap cursor-pointer mt-4 sm:mt-0 text-base ml-4">WORLD CUP</p>
              </Link>
            </div>
            <Link className='hover:text-elitip-purple' to={'/account'}>
              <p onClick={()=> handleNavigation()} className="font-bold whitespace-nowrap cursor-pointer mt-4 sm:mt-0 text-base ml-4">MY ACCOUNT</p>
            </Link>
            <Link className='hover:text-elitip-purple' to={'/contact'}>
              <p onClick={()=> handleNavigation()} className="font-bold whitespace-nowrap cursor-pointer mt-4 sm:mt-0 text-base ml-4">CONTACT US</p>
            </Link>
          </div>
          <div className=" pb-2 sm:bg-[#0d155a] xtab:pb-0 justify-center sm:flex-row flex-col z-10 sm:items-center w-full flex sm:pt-11 pt-3 lg:ml-[240px] xtab:ml-[180px]">
              <Link  to={'/login'} className="font-bold  text-base hover:text-elitip-purple sm:hover:text-white ml-4">LOGIN</Link>
              <Link  to={'/subscribe'} className="font-bold hover:text-elitip-purple sm:hover:text-white text-base sm:ml-4 sm:bg-[#6C348E] rounded-md sm:px-5 px-4 py-2">SUBSCRIBE</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
