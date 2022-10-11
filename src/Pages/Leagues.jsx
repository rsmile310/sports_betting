import React, { useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { leagues } from '../Components/data'
import Filter from '../Components/Filter'
import HeadTittle from '../Components/HeadTittle'
import MatchCard from '../Components/MatchCard'
import MatchToolTip from '../Components/MatchToolTip'
import NavBar from '../Components/NavBar'
import Footer from './../Components/Footer'
import help from '../assets/help.svg'
import southHampton from '../assets/south-hampton.png'
import manUnited from '../assets/man-united.svg'
import brentFord from '../assets/brentford.svg'
import brighton from '../assets/brighton.svg'
import everton from '../assets/everton.svg'
import leads from '../assets/leads.svg'

function League() {
    const [showFilter, setShowFilter] = useState(false)
    const [country, setCountry] = useState("country")
    const [league, setLeague] = useState("league")
    const btnRef = useRef()

    const handleShowFilter = (e) => {
        setShowFilter(false)
    }

    return (
        <div className='min-h-screen  bg-[#0d155a] text-white w-full relative'>
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent"></div> */}
            <NavBar />
            <div onClick={(e) => handleShowFilter(e)} className="px-9 flex flex-col mx-auto mt-11 items-center">
                <p className='text-2xl font-bold border-b-[1px] pb-4 text-center'>INTERNATIONAL LEAGUES</p>
            </div>
            <div className="mt-11 relative flex phone:flex-row flex-col items-center text-[#928C8C] px-9">
                <div onClick={(e) => handleShowFilter(e)} className="flex rounded-md items-center bg-white px-4 py-2 ">
                    <BiSearch className='text-xl' />
                    <input className='ml-2 w-[100px] outline-none bg-transparent border-none' type="text" placeholder='Search' />
                </div>
                <button ref={btnRef} onClick={() => setShowFilter(!showFilter)} className="flex items-center phone:mt-0 mt-3 rounded-md cursor-pointer ml-3 bg-white px-4 py-2">
                    <div className="flex flex-col items-center">
                        <span className='bg-[#928C8C] h-1 w-9'></span>
                        <span className='bg-[#928C8C] mt-[0.35em] h-1 w-6'></span>
                        <span className='bg-[#928C8C] mt-[0.35em] h-1 w-3'></span>
                    </div>
                    <p className='ml-3'>Filter</p>
                </button>
                {showFilter && <Filter setShowFilter={setShowFilter} setCountry={setCountry} setLeague={setLeague} league={league} country={country} />}
            </div>
            <div onClick={(e) => handleShowFilter(e)} className="mt-4 gap-[3%] grid gap-y-8 phone:grid-cols-3 md:grid-cols-4 xs:grid-cols-2 xtab:grid-cols-6 px-9">
                {leagues.map((league) => (
                    <LeagueBox key={league.id} text={league.name} />
                ))}
            </div>
            <HeadTittle tw="my-4 mt-5" title="TODAY'S MATCHES" />
            <div className='w-full px-9'>

                <img src={help} className='my-2 w-8 cursor-pointer' title='Help' alt="" />
            </div>
            <div className="sm:grid space-y-2 sm:space-y-0 tab:grid-cols-2 w-full gap-2 md:gap-8 mt-6 phone:px-9 px-2">
                <MatchCard league='england: premier league' />
                <MatchCard league='championship' />
            </div>

            <HeadTittle tw='mt-6' title='UP COMING MATCHES' />
            <div className="grid sm:grid-cols-2 w-full mt-6 gap-6 my-8 text-black phone:px-9 px-1">
                <MatchToolTip src1={southHampton} src2={manUnited} />
                <MatchToolTip src1={southHampton} src2={manUnited} />
                <MatchToolTip src1={brentFord} src2={everton} />
                <MatchToolTip src1={brentFord} src2={everton} />
                <MatchToolTip src1={brighton} src2={leads} />
                <MatchToolTip src1={brighton} src2={leads} />
            </div>
            <Footer />
        </div>
    )
}

export default League

const LeagueBox = ({ active, text }) => {

    return (
        <div className={`${active === 'text' ? 'bg-[#6C348E]' : 'bg-white'} -[250px] flex items-center text-[#928C8C] aspect-square justify-center px-1 rounded-lg`}>
            <p className='text-center'>{text}</p>
        </div>
    )
}
