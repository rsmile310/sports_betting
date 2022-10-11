import React from 'react'

const UpdateProfile = ({isPhone}) => {
  return (
    <form className={`mt-[1vh] tablet:min-w-[400px] min-w-[250px] max-w-[450px] py-[1vh] ${isPhone && 'text-white'} rounded-md flex flex-col px-6 `}  >
                <div className="mt-4 flex flex-col mmsm:w-full w4/5">
                    <label htmlFor="surname">First Name</label>
                    <input className='text-black mt-2 rounded-md bg-white w-4/5 mmsm:w-full outline-none shadow-md px-3 p-2 text-lg' type="text" />
                </div>
                <div className="mt-4 flex flex-col mmsm:w-full w4/5">
                    <label htmlFor="surname">Last Name</label>
                    <input className='text-black mt-2 rounded-md bg-white w-4/5 mmsm:w-full outline-none shadow-md px-3 p-2 text-lg' type="text" />
                </div>
                <div className="mt-4 flex flex-col mmsm:w-full w4/5">
                    <label htmlFor="surname">Password</label>
                    <input className='text-black mt-2 rounded-md bg-white w-4/5 mmsm:w-full outline-none shadow-md px-3 p-2 text-lg' type="password" />
                </div>
                <p className='text-center mt-5 text-[#0D155A]'>Try For Free</p>
                <button className='mt-9 text-white justify-center flex w-fit  px-7 py-1 bg-[#6C348E] rounded-md mx-auto' type='submit'>Save</button>
            </form>
  )
}

export default UpdateProfile