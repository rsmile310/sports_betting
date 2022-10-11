import React, { useState } from 'react'
import { FaFileImage } from 'react-icons/fa';

const UpdatePhoto = ({setShow}) => {
  const [preview, setPreview] = useState({img: '', state: false})

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview({img: reader.result, state: true})
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
    <div onClick={()=>setShow(false)} className="fixed z-[8] top-0 left-0 right-0 bottom-0 "></div>
    <div className='bg-white py-14 z-10 rounded-md top-[120%] w-full p-6 absolute text-black max-w-[500px] min-w-[200px]'>
        <div className="z-50 flex flex-col w-full">
            <div className="flex w-full justify-center items-center">
               {preview.state? <img className='rounded-md object-cover object-center w-[200px] h-[200px]' src={preview.img} alt="" /> : <FaFileImage
                 className='text-[10em] text-stone-400'  />}
                <label htmlFor='filephoto' className='px-4 ml-4 ring-1 ring-stone-400/10 cursor-pointer rounded-3xl py-2 shadow-lg' >Choose File</label>
                <input onChange={handleFileChange} 
                 type="file" accept='image/*' hidden id='filephoto' />
            </div>
        <button onClick={()=> setShow(false)} className='mt-9 text-white justify-center flex w-fit  px-7 py-1 bg-[#6C348E] rounded-md mx-auto' type='submit'>Save</button>
        </div>
    </div>
    </>
  )
}

export default UpdatePhoto