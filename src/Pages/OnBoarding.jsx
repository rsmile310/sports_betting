import React, {  useState } from 'react'
import {  BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import logo from '../assets/logo-named.svg'


const OnBoarding = () => {

    const [step, setStep] = useState(1);

    return (
        <div className="h-screen w-screen bg-purple-600 gradient-background flex flex-col items-center justify-center">
            <div className='text-white text-lg font-medium w-1/5 text-center flex items-center justify-center flex-col'>
                <img src={logo} className='my-2' alt="" />
                <span className='my-2'>Elitip is an online score prediction platform to help you better understand the teams you are betting on. </span>
                <span className='my-2'>Our algorithm is looking for price differences between us and the Bookmakers. When their odds are higher than ours, we have a higher chance of making a successful bet. </span>
            </div>
            <div className='mt-12 step-view flex flex-row items-center justify-between w-1/5'>
                <span className={`${step === 1 ? 'hidden' : 'flex'}`} onClick={setStep(step - 1)}><BsChevronLeft size={30} color="white" className='font-bold cursor-pointer' /></span>
                <span className={`${step === 3 ? 'hidden' : 'flex'}`} onClick={setStep(step + 1)}><BsChevronRight size={30} color="white" className='font-bold cursor-pointer' /></span>
            </div>
        </div>
    )
}

export default OnBoarding
