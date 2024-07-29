import React, { useState, useEffect, useRef } from "react";
import profilePics from "../assest/images/profile.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BallotIcon from "@mui/icons-material/Ballot";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../styles/public.css";
import AnimatedPage from "./AnimatedPage";

const bodyElem = window.document;
bodyElem.addEventListener("click", (e) => {
  const getSideNav = document.querySelector("#sidebar");
  if (!getSideNav.classList.contains("hidden")) {
    getSideNav.classList.add("hidden");
  }
});

export const openSideNav = (e) => {
  e.stopPropagation();
  const getSideNav = document.querySelector("#sidebar");
  const sideNav = getSideNav;
  const classList = sideNav.classList.contains("hidden");
  const switchClass = sideNav.classList;
  if (!classList) {
    switchClass.add("hidden");
  } else {
    switchClass.remove("hidden");
  }
};
function Sidenav() {
  return (
    <AnimatedPage>
      <div
        ref={Sidenav}
        id="sidebar"
        className="nav hidden border-r-2 h-screen border-gray-500 fixed top-0 bottom-0  z-10 w-1/2 bg-gray-900 overflow-y-clip"
      >
        <div className="bg-gray-300">
          <img className="h-[20vh] mt-0" src={profilePics} alt="profile" />
          <div className=" bg-blue-500  text-white p-3 font-bold flex items-center justify-center text-[13px] md:text-[2.4vh]">
            ABDULSHAKUR DAUDA
          </div>
        </div>
        <ul className="text-gray-600 flex flex-col items-center gap-3 mt-2 overflow-hidden">
          <div className="w-full flex flex-row items-center justify-center p-1 pb-1 gap-2 border-b border-black">
            <span className="text-gray-500">
              <HomeIcon
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3rem",
                  },
                }}
                className="icons"
                fontSize="medium"
              />
            </span>
            <Link className="list md:text-[2rem]" to={"/"}>
              Home
            </Link>
          </div>
          <div className="w-full flex flex-row items-center justify-center p-1 pb-1 gap-2 border-b border-black ml-6 md:ml-[3rem]">
            <span className="text-gray-500">
              <PersonOutlinedIcon
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3rem",
                  },
                }}
                className="icons"
                fontSize="medium"
              />
            </span>
            <Link className="list md:text-[2rem]" to={"/intro"}>
              About Me
            </Link>
          </div>
          <div className="w-full flex flex-row items-center justify-center p-1 pb-1 gap-2 border-b border-black ml-4 md:ml-[2rem]">
            <span className="text-gray-500">
              <BallotIcon
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3rem",
                  },
                }}
                className="icons"
                fontSize="medium"
              />
            </span>
            <Link className="list md:text-[2rem]" to={"/resume"}>
              Resume
            </Link>
          </div>
          <div className="w-full flex flex-row items-center justify-center p-1 pb-1 gap-2 border-b border-black ml-4 md:ml-[2rem]">
            <span className="text-gray-500">
              <CoPresentIcon
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3rem",
                  },
                }}
                className="icons"
                fontSize="medium"
              />
            </span>
            <Link className="list md:text-[2rem]" to={"/portfolio"}>
              Portfolio
            </Link>
          </div>

          <div className="w-full flex flex-row items-center justify-center p-1 pb-1 gap-2 border-b border-black ml-[3vw] md:ml-[2rem]">
            <span className="text-gray-500">
              <MailOutlinedIcon
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3rem",
                  },
                }}
                className="icons"
                fontSize="medium"
              />
            </span>
            <Link className="list md:text-[2rem]" to={"/contact"}>
              Contact
            </Link>
          </div>
        </ul> 
        <div className="resize flex flex-col h-[36vh] justify-end md:ml-[1rem] xl:justify-center xl:mt-8">
          <ul className="flex flex-row ml-6 md:ml-[5rem]  text-gray-500 gap-2 @media (min-width: 414){
            ml-[10vw]
          }">
            <li>
              <FacebookIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
            </li>
            <li>
              <XIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
            </li>
            <li>
              {" "}
              <LinkedInIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
            </li>
            <li>
              <EmailIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
            </li>
            <li>
              <ChatIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
            </li>
          </ul>
          <div>
            <p className="ml-[11vw] text-[12px] text-gray-500 md:text-[2vh]">
              2024 <CopyrightIcon fontSize="small" /> devshakur
            </p>
            <p className="ml-[13vw] mt-1 text-[10px] text-gray-500 md:text-[1rem]">
              All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Sidenav;
