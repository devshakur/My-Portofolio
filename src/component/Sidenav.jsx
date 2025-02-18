import React, { useState, useEffect, useRef } from "react";
import profilePics from "../assest/images/my-picture.jpg";
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
        className="nav hidden border-r-2 h-screen border-gray-500 fixed top-0 bottom-0 z-10 w-[100%] lg:w-[60%] xl:w-[30%] bg-gray-900 overflow-y-auto"
      >
        <div className="bg-gray-300">
          <img
            className="md:h-[100%] w-[100%] object-center pl-3 mt-5 object-cover"
            src={profilePics}
            alt="profile"
          />
          <div className="bg-blue-500 font-sans text-white p-3 font-bold flex items-center justify-center text-[13px] md:text-[2.4vh]">
            ABDULSHAKUR DAUDA
          </div>
        </div>

        <ul className="text-gray-600 flex flex-col items-start gap-3 lg:gap-8 mt-2 overflow-hidden">
          <div className="w-full flex flex-row items-center justify-start p-1 pb-1 gap-2 border-b border-black">
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
          <div className="w-full flex flex-row items-center justify-start p-1 pb-1 gap-2 border-b border-black">
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
          <div className="w-full flex flex-row items-center justify-start p-1 pb-1 gap-2 border-b border-black">
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
          <div className="w-full flex flex-row items-center justify-start p-1 pb-1 gap-2 border-b border-black">
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

          <div className="w-full flex flex-row items-center justify-start p-1 pb-1 gap-2 border-b border-black">
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
        <div className="resize flex flex-col justify-end mb-5 mt-5 items-center">
          <ul className="flex flex-row ml-6 md:ml-[5rem] text-gray-500 gap-2">
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
          <div className="flex">
            <p className="ml-[11vw] text-[12px] text-gray-500 md:text-[2vh]">
              2024 <CopyrightIcon fontSize="small" /> devshakur  <span className="mt-1 text-[10px] text-gray-500 md:text-[1rem]">
              All Right Reserved
            </span>
            </p>
           
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Sidenav;
