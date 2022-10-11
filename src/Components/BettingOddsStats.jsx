import React from 'react'

const BettingOddsStats = () => {
    return (
        <div className='scroller gap-3 w-full overflow-x-auto grid grid-flow-col auto-cols-[400px] items-center '>
            <BettingOdDCard />
            <BettingOdDCard />
            <BettingOdDCard />
            <BettingOdDCard />
        </div>
    )
}

export default BettingOddsStats

const BettingOdDCard = ()=> {

    return(
        <div className='flex-col items-start sm:scale-100 scale-90 justify-start pt-0 p-6 w-full mx-2 rounded-lg flex h-64 bg-white'>
                <div className='flex flex-col my-4 mt-8 '>
                    <span className='text-xl text-black font-medium '>Team Stats</span>
                    <hr className='bg-black  my-1 h-[2px] w-full' />
                </div>

                <table className='w-full sm:text-lg sm:scale-100 scale-90'>
                    <tbody className='w-full'>
                        <tr className='border-b-2 border-black w-full'>
                            <td></td>
                            <td>BTS</td>
                            <td className='w-36'>BTS Home Win</td>
                        </tr>
                        <tr className='border-b-[1px] border-slate-600 w-full h-14'>
                            <td>Ours</td>
                            <td>1.73</td>
                            <td>14.63</td>
                        </tr>
                        <tr className='border-b-[1px] w-full h-14'>
                            <td>Bookies</td>
                            <td>1.57</td>
                            <td>NA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}