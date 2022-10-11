import React from 'react'
import manUnited from '../assets/man-united.svg'
import liverpool from '../assets/liverpool.svg'
import smallball from '../assets/smallball.svg'
import varTime from '../assets/var.svg'
import cancel from '../assets/cancel.svg'
import chart from '../assets/chart.svg'

// import manUnited from 'src/assets/man-united.svg'
// import manUnited from 'src/assets/man-united.svg'
// import manUnited from 'src/assets/man-united.svg'

const TeamSide1 = () => {
  return (
    <div className='my-4 flex sm:flex-row flex-col items-center justify-center w-full'>
      <div className='w-11/12 my-2 sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-white p-8 rounded-lg flex flex-col items-center justify-start mx-2'>
        <div className='flex flex-col my-4'>
          <span className='text-2xl text-black font-semibold '>Man Utd</span>
          <hr className='bg-black  my-2 h-[1px] w-full' />
        </div>
        <img className='h-36' src={manUnited} alt="" />
        <div className='flex flex-col my-2'>
          <span className='text-xl text-black font-medium'>Home</span>
          <hr className='bg-black my-2 h-[1px] w-full' />
        </div>
        <span className='my-1 text-xl font-semibold font-roboto'>Total Home Goals Avg</span>
        <span className='font-medium my-1 text-2xl'>1.72</span>
        <table className='w-full'>
          <tbody className='w-full'>
            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={smallball} alt="" /></span>
                <span className='text-lg font-roboto'>Games Played: </span>
              </td>
              <td className='text-2xl'>1</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={varTime} alt="" /></span>
                <span className='text-lg font-roboto'>Goals Scores: </span>
              </td>
              <td className='text-2xl'>1</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={cancel} alt="" /></span>
                <span className='text-lg font-roboto'>Goals Canceled: </span>
              </td>
              <td className='text-2xl'>2</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={chart} alt="" /></span>
                <span className='text-lg font-roboto'>Score Average: </span>
              </td>
              <td className='text-2xl'>1.00</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-10/12 my-1'>
                <span className='mr-3'><img src={cancel} alt="" /></span>
                <span className='text-lg font-roboto'>Conceded Average: </span>
              </td>
              <td className='text-2xl'>200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='w-11/12 my-2 sm:w-6/12 lg:w-5/12 xl:w-4/12 bg-white p-8 rounded-lg flex flex-col items-center justify-start mx-2'>
        <div className='flex flex-col my-4'>
          <span className='text-2xl text-black font-semibold '>Liverpool</span>
          <hr className='bg-black  my-2 h-[1px] w-full' />
        </div>
        <img className='h-36' src={liverpool} alt="" />
        <div className='flex flex-col my-2'>
          <span className='text-xl text-black font-medium '>Away</span>
          <hr className='bg-black my-2 h-[1px] w-full' />
        </div>
        <span className='my-1 text-xl font-semibold font-roboto'>Total Home Goals Avg</span>
        <span className='font-medium my-1 text-2xl'>1.21</span>
        <table className='w-full'>
          <tbody className='w-full'>
            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={smallball} alt="" /></span>
                <span className='text-lg font-roboto'>Games Played: </span>
              </td>
              <td className='text-2xl'>1</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={varTime} alt="" /></span>
                <span className='text-lg font-roboto'>Goals Scores: </span>
              </td>
              <td className='text-2xl'>1</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={cancel} alt="" /></span>
                <span className='text-lg font-roboto'>Goals Canceled: </span>
              </td>
              <td className='text-2xl'>2</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-8/12 my-1'>
                <span className='mr-3'><img src={chart} alt="" /></span>
                <span className='text-lg font-roboto'>Score Average: </span>
              </td>
              <td className='text-2xl'>1.00</td>
            </tr>

            <tr>
              <td className='flex items-center justify-start w-10/12 my-1'>
                <span className='mr-3'><img src={cancel} alt="" /></span>
                <span className='text-lg font-roboto'>Conceded Average: </span>
              </td>
              <td className='text-2xl'>200.00</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeamSide1
