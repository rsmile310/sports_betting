import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col w-full bg-[#0d155a] text-white justify-between '>
      <div className='m-6'>
        <NavBar />
        <h2 className="text-center mx-auto font-bold text-2xl pt-2 border-b-2 w-fit px-2 ">ABOUT</h2>
        <div className="mt-[11vh] px-9 ">
          <p className="text-xl">Elitip is an online score prediction platform to help you better understand the teams you are betting on. Our algorithm is looking for price differences between us and the Bookmakers. When their odds are higher than ours, we have a higher chance of making a successful bet. </p>
          <p className="my-8 text-xl">On this platform, we will provide tips to help you better your chances when placing bets and keep you up to date will all the latest soccer news.</p>
          <p className="my-8 text-xl">It is important to understand that you won't win every bet you place, but if you place enough bets with this strategy, you will have a higher chance of successful bets.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
