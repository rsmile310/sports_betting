import React from 'react'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import tut from '../assets/tut.svg'
const Tutorial = () => {
  return (
    <div className='flex flex-col justify-between bg-elitip-blue text-white min-h-screen'>
      <div className="flex flex-col w-full">
      <NavBar />
      <div className="flex w-full flex-col items-center pb-6">
        <h2 className="text-center mx-auto font-bold text-2xl pt-2 border-b-2">TUTORIALS</h2>
        <div className="mt-7 my-24 w-full items-center flex flex-col">
          <img className='xtab:w-1/2 sm:w-2/3 w-4/5 min-w-[250px] max-w-[600px]' src={tut} alt="" />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tutorial
