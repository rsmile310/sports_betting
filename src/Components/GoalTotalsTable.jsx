import React from "react";

const GoalTotalsTable = () => {
  return (
    <div className="flex flex-col w-11/12  md:w-3/4 rounded items-center mx-auto justify-center bg-white p-8 relative pl-6 sm:pl-12">
      <span className="text-sm sm:text-2xl font-semibold my-2  ">HOME</span>
      <span className="text-sm sm:text-2xl font-semibold my-2 absolute left-0 -rotate-90">
        AWAY
      </span>
      <table className="flex font-semibold w-full">
        <tbody className="w-full">
          <tr className="w-full border-b-2 border-b-black text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black"></td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center">0</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center">1</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center">2</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center">3</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center">4</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center">5</td>
          </tr>
          <tr className="w-full h-12 text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black px-3 text-center">
              0
            </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-orange-600">1.140%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">3.778%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">6.260%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">6.916%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">5.730%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">3.798%</td>
          </tr>
          <tr className="w-full h-12 text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black px-3 text-center">
              1
            </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-600">1.322% </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-orange-600">4.382%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">7.262%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">8.023%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">6.647%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">4.406%</td>
          </tr>
          <tr className="w-full h-12 text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black px-3 text-center">
              2
            </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-600">0.767%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-500">2.542%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-orange-600">4.212%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">4.653%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">3.855%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">2.556%</td>
          </tr>
          <tr className="w-full h-12 text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black px-3 text-center">
              3
            </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-600">0.297%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-500">0.983%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-green-600">1.629%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-orange-600">1.799%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">1.491%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">0.988%</td>
          </tr>
          <tr className="w-full h-12 text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black px-3 text-center">
              4
            </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-600">0.086%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-500">0.285%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-green-600">0.472%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-green-600">0.522%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-orange-600">0.432%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-red-600">0.287%</td>
          </tr>
          <tr className="w-full h-12 text-xs md:text-xl ">
            <td className="w-1/6 border-r-2 border-r-black px-3 text-center">
              5
            </td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-600">0.020%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-green-500">0.066%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-green-600">0.110%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-green-600">0.121%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center  text-green-600">0.100%</td>
            <td className="w-1/6 px-0.5 sm:px-2 text-center text-orange-600">0.066%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoalTotalsTable;
