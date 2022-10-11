import React, { useState } from 'react'
import Footer from '../Components/Footer'
import TeamSide1 from '../Components/TeamSide1'
import BettingOddsStats from '../Components/BettingOddsStats'
import GoalTotals from '../Components/GoalTotals'
import NavBar from '../Components/NavBar'
import HeadTittle from '../Components/HeadTittle'
import { elements1, elements2, elements3, GoalTotalsComponents1, GoalTotalsComponents2, GoalTotalsComponents3, goalTotalsElements1, goalTotalsElements2, goalTotalsElements3 } from '../Components/data'
import GoalTotalsTable from '../Components/GoalTotalsTable'
import help from '../assets/help.svg'

const Stats = () => {
  const [helpState, setHelpState] = useState({
    teamStats: false,
    bettingOdds: false,
    bothTeamsScore: false,
    goalTotals: false,
    goalTotals2: false,
  })

  const handelClose = ()=> {
    console.log('close');
    setHelpState({
      teamStats: false,
      bettingOdds: false,
      bothTeamsScore: false,
      goalTotals: false,
      goalTotals2: false,
    })
  }

  return (
    <div className='w-full h-fit  flex flex-col items-center justify-center'>
      <NavBar />
      <div className='py-6 bg-elitip-blue flex flex-col w-full items-center'>
        <div className='flex flex-col my-4'>
          <span className='text-2xl text-white font-semibold '>ENGLAND PREMIER LEAGUE</span>
          <hr className='bg-white  my-2 h-1 w-full' />
        </div>
        <div className='flex flex-col my-4'>
          <span className='text-xl text-white font-medium '>Team Stats</span>
          <hr className='bg-slate-200  my-2 h-[1px] w-full' />
        </div>
        <div className='w-full lg:w-11/12 xl:w-10/12 flex flex-col items-center justify-center'>
          <div className="flex flex-col w-full relative items-center">
          <div className='w-full lg:w-10/12 xl:w-8/12 px-1 lg:px-0'>
            <img title='Help' className='w-8 cursor-pointer my-4' onClick={() => setHelpState({ ...helpState, teamStats: !helpState.teamStats })} src={help} alt="" />
          </div>
          {
            helpState.teamStats
              ?
              <>
              {/* <div onClick={handelClose} className="fixed top-0 left-0 right-0 bottom-0 z-10 "></div> */}
              <div className=' absolut top-0 z-30 left-0 right-0 w-full h-96 bg-elitip-purple font-roboto rounded-lg flex flex-col py-8 justify-start items-start md:px-2 lg:px-4 xl:px-8 text-white '>
                <span className='w-full text-center text-2xl font-medium'>EliTips</span>
                <hr className='h-[2px] w-2/12 my-1 m-auto bg-white' />
                <div className='w-full flex items-center justify-start flex-col'>

                  <div className='flex flex-col my-4 mt-8 '>
                    <span className='text-xl text-white font-medium '>Team Stats</span>
                    <hr className='bg-slate-200  my-2 h-[1px] w-full' />
                  </div>
                  <span className='text-xl'>Average statistics for each team from this season</span>
                </div>
              </div></>
              :
              <TeamSide1 />
            }
          </div>
          <HeadTittle title="BETTING ODDS" />
          <div className='mt-8 w-full px-3'>
            <img title='Help' className='w-8 cursor-pointer my-4' onClick={() => setHelpState({ ...helpState, bettingOdds: !helpState.bettingOdds })} src={help} alt="" />
          </div>
          <div className="flex flex-col w-full relative items-center">
          {
            helpState.bettingOdds
              ?
              <>
              {/* <div onClick={handelClose} className="fixed top-0 left-0 right-0 bottom-0 z-10 "></div> */}
              <div className=' top-0 z-10 left-0 right-0 w-full v bg-elitip-purple font-roboto rounded-lg flex flex-col py-8 justify-start items-start md:px-2 lg:px-4 xl:px-8 text-white '>
                <span className='w-full text-center text-2xl font-medium'>EliTips</span>
                <hr className='h-[2px] w-2/12 my-1 m-auto bg-white' />
                <div className='w-full flex smm20:flex-row flex-col items-start justify-start my-4 h-fit'>

                  <div className='w-full smm20:w-1/3 h-fit px-4 smm20:border-r-2 border-white flex flex-col'>
                    {
                      elements1.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                  <div className='w-full smm20:w-1/3 px-4 smm20:border-r-2 border-white flex flex-col h-full'>
                    {
                      elements2.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                  <div className='w-full smm20:w-1/3 h-fit px-4 border-white flex flex-col'>
                    {
                      elements3.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </div></>
              : 
              <BettingOddsStats />
            }
            </div>

          <HeadTittle title="BOTH TEAMS SCORE" />
          <div className='mt-8 w-full px-3'>
            <img title='Help' className='w-8 cursor-pointer my-4' onClick={() => setHelpState({ ...helpState, bothTeamsScore: !helpState.bothTeamsScore })} src={help} alt="" />
          </div>
          <div className="flex flex-col w-full relative items-center">
          {
            helpState.bothTeamsScore
              ?
              <>
                {/* <div onClick={handelClose} className="fixed top-0 left-0 right-0 bottom-0 z-10 "></div> */}
              <div className=' top-0 z-10 left-0 right-0 w-full v bg-elitip-purple font-roboto rounded-lg flex flex-col py-8 justify-start items-start md:px-2 lg:px-4 xl:px-8 text-white '>
                <span className='w-full text-center text-2xl font-medium'>EliTips</span>
                <hr className='h-[2px] w-2/12 my-1 m-auto bg-white' />
                <div className='w-full flex smm20:flex-row flex-col items-start justify-start my-4 h-fit'>

                  <div className='w-full smm20:w-1/3 h-fit px-4 smm20:border-r-2 border-white flex flex-col'>
                    {
                      goalTotalsElements1.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                  <div className='w-full smm20:w-1/3 px-4 smm20:border-r-2 border-white flex flex-col h-full'>
                    {
                      goalTotalsElements2.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                  <div className='w-full smm20:w-1/3 h-fit px-4 border-white flex flex-col'>
                    {
                      goalTotalsElements3.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </div></>
              : 
              <BettingOddsStats />
            }
            </div>

          <HeadTittle title="GOAL TOTALS" />
          <div className='mt-8 w-full px-3'>
            <img title='Help' className='w-8 cursor-pointer my-4' onClick={() => setHelpState({ ...helpState, goalTotals: !helpState.goalTotals })} src={help} alt="" />
          </div>
          <div className="flex  flex-col w-full relative items-center">
          {
            helpState.goalTotals
              ?
              <>
              {/* <div onClick={handelClose} className="fixed top-0 left-0 right-0 bottom-0 z-10 "></div> */}
              <div className=' v bg-elitip-purple font-roboto rounded-lg flex flex-col py-8  top-0 z-10 left-0 right-0 w-full justify-start items-start md:px-2 lg:px-4 xl:px-8 text-white '>
                <span className='w-full text-center text-2xl font-medium'>EliTips</span>
                <hr className='h-[2px] w-2/12 my-1 m-auto bg-white' />
                <div className='w-full flex smm20:flex-row flex-col items-start justify-start my-4 h-fit'>
                  <div className='w-full smm20:w-1/3 h-fit px-4 smm20:border-r-2 border-white flex flex-col'>
                    {
                      GoalTotalsComponents1.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                  <div className='w-full smm20:w-1/3 px-4 smm20:border-r-2 border-white flex flex-col h-full'>
                    {
                      GoalTotalsComponents2.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>

                  <div className='w-full smm20:w-1/3 h-fit px-4 border-white flex flex-col'>
                    {
                      GoalTotalsComponents3.map((element =>
                        <div className='flex flex-col my-2'>
                          <span className='text-2xl font-semibold'>{element.heading}: </span>
                          <span>{element.description}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div></>
              : 
              <GoalTotals />
            }
          </div>
          <HeadTittle title="GOAL TOTALS" />
          <div className='mt-8 w-full px-6'>
            <img title='Help' className='w-8 cursor-pointer my-4' onClick={() => setHelpState({ ...helpState, goalTotals2: !helpState.goalTotals2 })} src={help} alt="" />
          </div>
          <div className="flex flex-col w-full relative items-center">
          {
            helpState.goalTotals2
              ?
              <>
              {/* <div onClick={handelClose} className="fixed top-0 left-0 right-0 bottom-0 z-10 "></div> */}
              <div className='top-0 z-10 left-0 right-0 w-full bg-elitip-purple font-roboto rounded-lg flex flex-col py-8 justify-start items-start md:px-2 lg:px-4 xl:px-8 text-white '>
                <span className='w-full text-center text-2xl font-medium'>EliTips</span>
                <hr className='h-[2px] w-2/12 my-1 m-auto bg-white' />
                <div className='text-white w-full flex smm20:flex-row flex-col items-start justify-start my-4 h-fit'>
                  <div className='border-r-2 w-1/2 px-1 border-r-white '>
                    <div className='w-fit'>
                      <span className='w-full text-center text-2xl font-medium'>Home Team Goals:</span>
                      <div className='h-[2px]  w-full bg-white'></div>
                    </div>
                    <span className='my-6 text-lg'>Across</span>
                  </div>
                  <div className=' w-1/2 px-3'>
                    <div className='w-fit'>
                      <span className='w-full text-center text-2xl font-medium'>Home Team Goals:</span>
                      <div className='h-[2px]  w-full bg-white'></div>
                    </div>
                    <span className='my-6 text-lg'>Across</span>
                  </div>
                </div>
                <span className='my-3 w-full text-center'>Example: Entery 6.647 is Home wins exact score 4-1</span>
              </div></>
              : <div className="w-full flex p-1  overflow-x-auto flex-col">
              <GoalTotalsTable />
              </div>
            }
            
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Stats
