import React from 'react'

const MatchToolTip = (props) => {
  return (
    <div className={`bg-white rounded-lg py-2 px-4 items-center flex justify-between ${props.tw} `}>
      <img className='phone:w-16 w-10' src={props.src1} alt="" />
      <p className='text-center xtab:text-base mmsm:text-sm text-xs'>SATURDAY 27 AUGUST 13:30:00</p>
      <img className='phone:w-16 w-10' src={props.src2} alt="" />
    </div>
  )
}

export default MatchToolTip
