import React from 'react'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import JoinOurSocial from '../Components/Other/JoinOurSocial';

const Contact = () => {
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
    <div className='min-h-screen flex flex-col w-full bg-[#0d155a] text-white'>
        <NavBar />
        <h2 className="text-center mx-auto font-bold text-2xl pt-2 border-b-2">CONTACT US</h2>
        <div className="flex pb-6 xtab:flex-row flex-col items-center mx-auto tablet:w-4/5  xtab:w-3/5 w-full tablet:px-0 px-2">
            <form className="mt-[11vh] tablet:min-w-[400px] min-w-[250px] max-w-[450px] pb-8 rounded-md mx-auto w-4/5 p-6 flex flex-col" style={{background: isPhone? '':'linear-gradient(211.55deg, #6C348E 2.86%, #81CEF0 58.74%, #E27BB2 89.39%)'}} >
                <div className="mt-4 flex flex-col w-full">
                    <label htmlFor="surname">Name Surname</label>
                    <input className='text-black mt-2 rounded-md bg-white w-full outline-none shadow-md px-3 p-2 text-lg' type="text" required/>
                </div>
                <div className="mt-4 flex flex-col w-full">
                    <label htmlFor="surname">Email</label>
                    <input className='text-black mt-2 rounded-md bg-white w-full outline-none shadow-md px-3 p-2 text-lg' type="email" required/>
                </div>
                <div className="mt-4 flex flex-col w-full">
                    <label htmlFor="surname">Cell Phone</label>
                    <input className='text-black mt-2 rounded-md bg-white w-full outline-none shadow-md px-3 p-2 text-lg' type="tel" required/>
                </div>
                <button className='mt-9 justify-center flex w-2/3 max-w-[200px] min-w-[130px] px-5 py-2 bg-[#6C348E] rounded-md mx-auto' type='submit'>Submit</button>
            </form> 
            <div className="flex h-full items-center xtab:mt-0 mt-5 justify-center flex-col w-1/2">
                <h2 className="text-center w-fit text-xl pb-2 border-b-2">EMAIL</h2>
                <p className='mt-7'>info@elitip.com</p>
                <p className='mt-7'>help@elitip.com</p>
                <p className='mt-7'>### ### ###</p>
            </div>
        </div>
        <JoinOurSocial />
        <Footer />
    </div>
  )
}

export default Contact