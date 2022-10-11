import React, { useState } from 'react'
import { BiArrowBack, BiSearch } from 'react-icons/bi'

const Filter = ({setShowFilter, setCountry, league, country, setLeague}) => {
    const [showDrop, setShowDrop] = useState(false)
    const [showDrop1, setShowDrop1] = useState(false)

  return (
    <div className='bg-[#6C348E] rounded-lg p-4 w-[500px] absolute top-full mt-4 h-[400px]'>
        <div onClick={()=> {
            setShowDrop(false);
            setShowDrop1(false);
        }} className="absolute top-0 left-0 bottom-0 right-0"></div>
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center phone:mt-0 mt-3 rounded-md cursor-pointer ml-3 bg-white px-4 py-2">
                <div className="flex flex-col items-center">
                    <span className='bg-[#928C8C] h-1 w-9'></span>
                    <span className='bg-[#928C8C] mt-[0.35em] h-1 w-6'></span>
                    <span className='bg-[#928C8C] mt-[0.35em] h-1 w-3'></span>
                </div>
                <p className='ml-3'>Filter</p>
            </div>
            <div className="">
                <BiSearch className=' cursor-pointer text-2xl' />
            </div>
        </div>
        <div className="px-6 flex flex-col w-full">
            <div className="mt-8 flex rounded-md bg-white py-2 px-4 justify-between items-center cursor-pointer relative">
                <div onClick={()=> {
                    setShowDrop1(false)
                    setShowDrop(!showDrop)}
                } className=" w-full flex justify-between">
                <label htmlFor='country' className='text-[#000]'>{country}</label>
                <BiArrowBack className=' -rotate-90 bg-black rounded-full text-white p-1 text-xl' />
                </div>
                {showDrop && <Select setData={setCountry} />}
            </div>
        </div>
        <div className="px-6 flex flex-col w-full">
            <div className="mt-8 flex rounded-md bg-white py-2 px-4 justify-between items-center cursor-pointer relative">
                <div onClick={()=> {
                    setShowDrop(false)
                    setShowDrop1(!showDrop1)}
                    } className=" w-full flex justify-between">
                <label htmlFor='country' className='text-[#000]'>{league}</label>
                <BiArrowBack className=' -rotate-90 bg-black rounded-full text-white p-1 text-xl' />
                </div>
                {showDrop1 && <Select setData={setLeague} />}
            </div>
            <button  onClick={()=> setShowFilter(false)} className='bg-white z-10 px-6 rounded-md py-2 mt-6 w-fit mx-auto'>Save</button>
        </div>

    </div>
  )
}

export default Filter

const Select = ({setData})=> {

    const handleSelect = (e) => {
        setData(e.target.textContent)
    }

    return (
        <div className="absolute top-full bg-white w-full px-6 left-0 -translate-y-2 py-6  rounded-b-md z-30">
            <div className="shadow-lg flex items-center w-full px-3 py-2">
                <BiSearch />
                <input className='w-full ml-2 outline-none border-none bg-transparent' type="text" placeholder='Search Country' />
            </div>
            <div className="mt-2 flex flex-col w-full text-black">
                <p onClick={(e)=> handleSelect(e)} className=' cursor-pointer hover:bg-slate-100 hover:text-slate-400'>England</p>
                <p onClick={(e)=> handleSelect(e)} className=' cursor-pointer hover:bg-slate-100 hover:text-slate-400'>England</p>
                <p onClick={(e)=> handleSelect(e)} className=' cursor-pointer hover:bg-slate-100 hover:text-slate-400'>England</p>
                <p onClick={(e)=> handleSelect(e)} className=' cursor-pointer hover:bg-slate-100 hover:text-slate-400'>England</p>
            </div>
        </div>
    )
}
