import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { openSideNav } from "./Sidenav";
import Sidenav from "./Sidenav";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Layout({ children }) {
  return (
    <CssBaseline>
      <Box sx={{ height: "100vh" }}>
        <header className="w-full h-[8vh] bg-black lg:bg-[#2f2f2f] sticky top-0 flex justify-between items-center px-4 lg:px-20">
          <div className="flex justify-between items-center w-full">
            {/* Header Text */}
            <div className="text-white lg:text-[#FAFAFAE6] lg:ml-[-4vw] text-[5vw] md:text-[4vw] lg:text-[15px]">
              ABDULSHAKUR DAUDA
            </div>

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex gap-6 space-x-4 text-[#FAFAFAE6]">
              <Link className="text-[20px] focus:text-green-600" to={'/'}>Home</Link>
              <Link className="text-[20px] focus:text-green-600"  to={'/intro'}>About Me</Link>
              <Link className="text-[20px] focus:text-green-600" to={'/resume'}>Resume</Link>
              <Link className="text-[20px] focus:text-green-600" to={'/portfolio'}>PortFolio</Link>
              <Link className="text-[20px] focus:text-green-600" to={'/contact'}>Contact</Link>
            </ul>

            
            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex space-x-4 lg:ml-6 text-[#FAFAFAE6]">
            <li>
            <a href="https://www.facebook.com/share/1D2RJ3E8hY/">
              <FacebookIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
                
              />
             </a>
            </li>
            <li>
            <a href="https://x.com/DaudaShakiru?">
              <XIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
             </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/abdulshakur-dauda-049558209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <LinkedInIcon
                fontSize="small"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              />
              </a>
            </li>
          </ul>

            {/* Mobile Menu Button */}
            <div className="lg:hidden text-white mr-2 border-l-4 p-2 md:p-1 border-gray-900">
              <MenuIcon
                fontSize="large"
                sx={{
                  "@media (min-width: 768px)": {
                    fontSize: "7vh",
                  },
                }}
                onClick={openSideNav}
              />
            </div>
          </div>
        </header>

        {/* Side Navigation (for mobile) */}
        <div className="overflow-y-clip lg:hidden">
          <Sidenav />
        </div>

        {/* Main Content */}
        <div className="overflow-x-clip"> 
          {children}
        </div>
      </Box>
    </CssBaseline>
  );
}

export default Layout;
