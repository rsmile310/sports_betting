import React, { useState } from 'react'
import { BiCamera, BiCog, BiMessage, BiUser } from 'react-icons/bi'
import { FaCamera, FaUser } from 'react-icons/fa'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import UpdateProfile from '../Components/Other/UpdateProfile';
import notimg from '../assets/message.svg'
import settings from '../assets/settings.svg'
import userImage from '../assets/user.png'
import UpdatePhoto from '../Components/Other/UpdatePhoto';

const Account = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)
  const [showUpPhoto, setShowUpPhoto] = useState(false)
  const [isPhone, setPhone] = React.useState(false)

    if(typeof window !== undefined){
      window.addEventListener('resize', ()=>{
        if(window.innerWidth < 450){
          setPhone(true)
        }else{
          setPhone(false)
        }
      })
    }

    React.useEffect(() => {
        if (typeof window !== undefined) {
          if(window.innerWidth < 450){
            setPhone(true)
          }
        }
    },[])

  return (
    <div className='min-h-screen flex flex-col w-full bg-[#0d155a] text-white '>
      <NavBar />
      <h2 className="text-center mx-auto font-bold text-2xl pt-2 border-b-2 font-ibm">MY ACCOUNT</h2>
      <div className="mt-[11vh] max-w-[552px] pb-[20vh] rounded-md mx-auto five:w-4/5 w-full p-6 mb-8" style={{ background: isPhone?'':'linear-gradient(211.55deg, #6C348E 2.86%, #81CEF0 58.74%, #E27BB2 89.39%)' }} >
        <div className="flex items-end relative">
          <div className='rounded-full  relative'>
            <img className='rounded-full object-cover object-center relative five:w-40 w-[100px] h-[100px] five:h-40 -z-1' src={userImage} alt="" />
            <FaCamera onClick={()=> {
              setShowUpPhoto(!showUpPhoto)
              setShowNotify(false);
              setShowUpdate(false)
            }} className='five:text-[3em] text-[2em] absolute -right-3 cursor-pointer bottom-1' />
          </div>
            {showUpPhoto && <UpdatePhoto setShow={setShowUpPhoto} />}
          <p className="five:text-3xl text-xl font-semibold pb-3 ml-6">John Doe</p>
        </div>
        <div className="mt-11 flex flex-col five:px-[15%] w-full  text-black">
          <div onClick={()=> {
            setShowNotify(false);
            setShowUpdate(!showUpdate);
          }} className="flex rounded-md cursor-pointer bg-white items-center tex px-6 py-3 shadow-lg">
            <FaUser className='text-2xl' />
            <p className='ml-4 font-semibold text-lg'>UpdateProfile</p>
          </div>
          {showUpdate && <UpdateProfile isPhone={isPhone} />}
          <div onClick={()=> {
            setShowUpdate(false)
            setShowNotify(!showNotify)
          }} className="flex rounded-md cursor-pointer bg-white mt-8 shadow-lg items-center px-6 py-3">
            <img src={notimg} alt="" />
            <p className='ml-4 font-semibold text-lg'>Notifications</p>
          </div>
            {showNotify && <div className={`flex px-4 ${isPhone && 'text-white'} items-center w-full mt-5 justify-center`}>
              <div className="flex">
                <input hidden type="radio" name="notify" id="notify" />
                <label className='px-4 py-3 cursor-pointer bg-white rounded-3xl' htmlFor="notify"></label> <span className='ml-2'>On</span>
              </div>
              <div className="flex">
                <input hidden type="radio" name="notify" id="notify1" />
                <label className=' px-4 py-3 cursor-pointer bg-white rounded-3xl ml-6' htmlFor="notify1"></label> <span className='ml-2'>Off</span>
              </div>
            </div>}
          <div className="flex rounded-md cursor-pointer bg-white mt-8 shadow-lg items-center px-6 py-3">
            <img className='w-[25px]' src={settings} alt="" />
            <p className='ml-4 font-semibold text-lg'>Settings</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Account
