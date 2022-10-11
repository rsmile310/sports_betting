import React from 'react'
import manUnited from '../assets/man-united.svg'
import liverpool from '../assets/liverpool.svg'

const MatchCard = ({ league }) => {
  return (
    <div className='matchCard p-3 flex h-full rounded-xl justify-center flex-col items-center bg-white text-black aspect-video'>
      <h2 className='text-center font-bold phone:text-xl'>{league?.toUpperCase()}</h2>
      <p className="text-center">Monday 22 August 21:00:00</p>
      <div className="flex items-center w-full justify-between">
        <div className=" flex items-center flex-col">
          <img className='xtab:h-[10em] md:h-[6em] phone:h-[8em] h-[4em]' src={manUnited} alt="" />
          <p>HOME</p>
        </div>
        <p className='text-3xl font-semibold'>VS</p>
        <div className=" flex items-center flex-col">
          <img className='xtab:h-[10em] md:h-[6em] phone:h-[8em] h-[4em]' src={liverpool} alt="" />
          <p>AWAY</p>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
