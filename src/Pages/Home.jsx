import React, { useState } from "react";
import Footer from "../Components/Footer";
import phantomism from "./../assets/ball.png";
import phantomlogo from "../assets/phantom-logo.png";
import domestic from "../assets/domestic.svg";
import international from "../assets/international.svg";
import tournaments from "../assets/tournaments.svg";
import ball1 from "../assets/ball1.png";
import match from "../assets/match.png";
import stadium from "../assets/stadium.png";
import premier from "../assets/premier.svg";
import barclays from "../assets/barclays.svg";
import help from "../assets/help.svg";
import HeadTittle from "../Components/HeadTittle";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [helpState, setHelpState] = useState(false);

  const navigate = useNavigate();

  const elements = [
    {
      heading: "Domestic",
      description:
        "Where games are only played inside one country Ex: English Premier League, Italian Serie A",
    },
    {
      heading: "Tournaments",
      description:
        "Games are played between teams in different countries. Ex: EUFA Champions League, CONCACAF",
    },
    {
      heading: "International Tournaments",
      description:
        "Tournaments played between National Teams Ex: FIFA World Cup, AFCON, EUFA Nations League",
    },
    {
      heading: "Highlighted Tournaments",
      description:
        "Will be highlighted tournament at the time. Ex: In December we will highlight the World Cup but in March we can highlight AFCON.",
    },
  ];
  return (
    <div className="w-full h-fit  flex flex-col items-center justify-center">
      <NavBar />
      <div className="relative w-full flex flex-row items-center justify-between">
        <div className="w-6/12 absolute top-0 left-0 bg-elitip-green green-bg h-full flex items-center justify-center">
          <img src={phantomlogo} alt="" />
        </div>
        <img className="w-full z-1" src={phantomism} alt="" />
      </div>
      {/* Current Leagues */}
      <div className="px-8 overflow-x-hidden font-roboto py-14 flex w-full flex-col items-start justify-start bg-elitip-blue">
        <HeadTittle title="CURRENT LEAGUES IN THE PLAY" />
        <img
          title="Help"
          className="ml-8 w-8 cursor-pointer my-4"
          onClick={() => setHelpState(!helpState)}
          src={help}
          alt=""
        />
        {helpState ? (
          <div className="w-full bg-elitip-purple rounded-lg flex flex-col py-8 justify-start items-start md:px-2 lg:px-4 xl:px-8 text-white ">
            <span className="w-full text-center text-2xl font-medium">
              EliTips
            </span>
            <hr className="h-[2px] w-2/12 my-1 m-auto bg-white" />
            <div className="w-full flex items-start justify-start flex-col">
              {elements.map((element, i) => (
                <div key={i} className="flex flex-col my-2">
                  <span className="text-2xl font-semibold">
                    {element.heading}:{" "}
                  </span>
                  <span>{element.description}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="my-4 grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
              <div className="cursor-pointer rounded-lg p-3 mx-auto flex items-center justify-center w-10/12 bg-white my-2">
                <img src={domestic} className="w-10/12" alt="" />
              </div>
              <div
                onClick={() => navigate("/leagues")}
                className="cursor-pointer rounded-lg p-3 mx-auto flex items-center justify-center w-10/12 bg-white my-2"
              >
                <img src={international} className="w-10/12" alt="" />
              </div>
              <div className="cursor-pointer rounded-lg p-3 mx-auto flex items-center justify-center w-10/12 bg-white my-2">
                <img src={tournaments} className="w-10/12" alt="" />
              </div>
              <div className="cursor-pointer rounded-lg p-3 mx-auto flex items-center justify-center w-10/12 bg-white my-2">
                <img src={premier} className="w-10/12" alt="" />
              </div>
            </div>
            <div className="text-white flex items-center justify-end w-full px-7 text-sm">
              <button className=" bg-elitip-purple px-3 py-1 rounded-md sm:hidden">
                See more
              </button>
            </div>
          </>
        )}
      </div>

      <div className="px-8 font-roboto py-14 flex w-full flex-col items-start justify-start bg-elitip-blue">
        <HeadTittle title="LATEST SOCCER NEWS" />
        <div className="my-4 overflow-x-auto flex flex-row items-center justify-between  w-full">
          <img
            src={match}
            className="sm:mx-4 w-72 md:w-11/12  m-auto rounded my-2"
            alt=""
          />
          <img
            src={ball1}
            className="sm:mx-4 w-72 md:w-11/12  m-auto rounded my-2"
            alt=""
          />
          <img
            src={stadium}
            className="sm:mx-4 w-72 md:w-11/12  m-auto rounded my-2"
            alt=""
          />
        </div>
      </div>
      <div className="px-8 font-roboto py-14 flex w-full flex-col items-start justify-start bg-elitip-blue">
        <HeadTittle title="LATEST SOCCER NEWS" />
        <div className="my-4 flex flex-row items-center justify-between  w-full">
          <div className="w-full flex sm:flex-row flex-col items-start justify-between">
            <img className="w-100 mx-auto md:mr-10" src={barclays} alt="" />
            <div className="w-full sm:w-3/4 flex flex-col items-start justify-start ml-0 sm:ml-3 md:ml-0">
              <span className="text-2xl sm:mx-0 mx-auto my-3 font-semibold  text-white underline">
                Coming Soon
              </span>
              <span className="text-sm sm:text-lg w-full  my-4 text-white">
                A unique FPL tool where users will see tailored transfers to
                their own team and budget. A Wildcard or Free Hit Team which
                will display the current Gameweeks' best starting 11 based on
                statistics including captain picks.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
