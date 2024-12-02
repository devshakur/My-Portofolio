import React, { useState, useRef } from "react";
import { Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import Button from "@mui/material/Button";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LaptopWindowsOutlinedIcon from "@mui/icons-material/LaptopWindowsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import amberImg from "../assest/images/ampersand.png";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import "../styles/public.css";
import AnimatedPage from "./AnimatedPage";
import Resume from "./Resume";

function Intro() {
  const [changeVariant, setchangeVariant] = useState("contained");
  const linkRef = useRef(null);

  
  const handleDownload = () => {
    const link = linkRef.current;
    link.click();
  };

  const changeButtonVariant = () => {
    setchangeVariant(changeVariant === "contained" ? "outlined" : "contained");
  };
  const handleClick = ()=>{
    handleDownload();
    changeButtonVariant();
  }

  return (
    <AnimatedPage>
      <main className="h-full bg-[#2f2f2f] pb-[50px]">
        <div>
          <div className="flex justify-between items-end h-[10vh] border-b border-gray-500">
            <Typography
              variant="h6"
              className="text-blue-500"
              sx={{
                fontWeight: "bold",
                marginLeft: "8px",
                paddingBottom: "7px",
              }}
            >
              About Me.
            </Typography>
            <PersonOutlineOutlinedIcon
              fontSize="medium"
              sx={{ fontSize: "5vh" }}
              className="text-blue-500"
            />
          </div>
        </div>
        <div>
          <Typography
            variant="h5"
            className="text-[#ffffff]"
            sx={{
              fontWeight: "bold",
              marginLeft: "1rem",
              marginTop: "5vh",
              letterSpacing: "2px",
              fontSize: "7vw",
              "@media (min-width: 1024px)": {
                fontSize: "4vh",
              },
            }}
          >
            UI/UX DEVELOPER
            <span>
              <LaptopMacOutlinedIcon
                fontSize="large"
                sx={{ fontSize: "5vh", marginLeft: "18px" }}
                className="text-blue-500"
              />
            </span>
          </Typography>
          <div className="flex flex-col lg:flex-row gap-3 text-start">
            <p className="w-[100%] text-[#ffffff] ml-4 md:text-[25px] lg:text-[16px] font-sans lg:w-[50%]">
              As a web developer, I am passionate about creating engaging and
              user-friendly websites that provide seamless and interactive online
              experiences. With a strong foundation in programming languages such
              as HTML, CSS, and JavaScript, I am adept at turning design concepts
              into functional websites that not only look great but also perform
              smoothly across various devices.
              <br />
              <br />I continuously stay updated on the latest trends and
              technologies in web development to ensure that the websites I create
              are modern, accessible, and optimized for search engines. My goal is
              to bring my clients' visions to life on the web while prioritizing
              usability, performance, and a visually appealing design.
            </p>
            <div className="lg:mt-[-35px] lg:ml-24">
              <Typography
                variant="h6"
                className="text-white"
                sx={{
                  fontWeight: "bold",
                  marginTop: "3vh",
                  marginLeft: "18px",
                  "@media (min-width: 768px)": {
                    fontSize: "3vh",
                  },
                }}
              >
                Personal Information
              </Typography>
              <p className="text-white mb-3 ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">
                  {" "}
                  Name:
                </span>
                <span className="ml-2 md:text-[2rem] lg:text-[16px]">Dauda Abdulshakur</span>
              </p>
              <p className="text-white mb-3 ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
                  {" "}
                  Residence:
                </span>
                <span className="ml-2 md:text-[2rem] lg:text-[16px]">Abuja, Nigeria</span>
              </p>
              <p className="text-white mb-3 ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">
                  {" "}
                  Address:
                </span>
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">Zone 1, Dutsen Alhaji</span>
              </p>
              <p className="text-white mb-3 ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">
                  {" "}
                  Email:
                </span>
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">devshakur@gmail.com</span>
              </p>
              <p className="text-white mb-3 ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">
                  {" "}
                  Phone:
                </span>
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">(+234) 8129378618</span>
              </p>
              <p className="text-white mb-3 ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">
                  {" "}
                  GitHub:
                </span>
                <span className="ml-2 md:text-[2rem] lg:text-[16px]">https://github.com/devshakur</span>
              </p>
              <p className="text-white ml-3">
                <span className="border-b border-blue-500 ml-2 md:text-[2rem] lg:text-[16px]">
                  {" "}
                  Freelance:
                </span>
                <span className="ml-2 md:text-[2rem] lg:text-[16px]">available</span>
              </p>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleClick}
            variant={changeVariant}
            sx={{
              marginTop: "4vh",
              marginLeft: "2vh",
              color: changeVariant === "contained" ? "white" : "blue",
              "@media (min-width: 768px)": {
                fontSize: "20px",
                fontWeight: "bold",
              },
            }}
          >
            DOWNLOAD RESUME
          </Button>
        </div>

        {/* Hidden anchor link for downloading the resume */}
        <a
          ref={linkRef}
          href="/devshakur_resume.pdf"  
          download="devshakur_resume.pdf" 
          style={{ display: 'none' }} 
        ></a>

        {/* Services Section */}
        <div className="mt-[6vh]">
          <div>
            <div className="flex justify-center">
              <h4 className="w-max text-white text-3xl border-b-2 border-blue-600">
                SERVICES
              </h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-9 mx-5">
              {/* Web Development */}
              <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 mt-8">
                <LaptopWindowsOutlinedIcon
                  className="lg:text-[#20C997] text-blue-500 lg:bg-[#212529] lg:p-3 lg:rounded-md"
                  fontSize="large"
                  sx={{ fontSize: "8vh" }}
                />
                <div className="flex flex-col items-center lg:items-start">
                  <Typography variant="h6" className="text-white">
                    Web Development
                  </Typography>
                  <p className="ml-4 text-white mr-4 flex justify-center lg:justify-start">
                    Frontend Development: Creating the user interface (UI) and user
                    experience (UX) of a website using Html, Css, Javascript, React,
                    and Next.js.
                  </p>
                </div>
              </div>

              {/* Web Design Optimization */}
              <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 mt-8">
                <VisibilityOutlinedIcon
                  className="lg:text-[#20C997] text-blue-500 lg:bg-[#212529] lg:p-3 lg:rounded-md"
                  fontSize="large"
                  sx={{ fontSize: "8vh" }}
                />
                <div className="flex flex-col items-center lg:items-start">
                  <Typography variant="h6" className="text-white">
                    Web Design Optimization
                  </Typography>
                  <p className="ml-4 text-white mr-4 flex justify-center lg:justify-start">
                    Making websites more accessible, mobile-responsive, and visually
                    appealing by improving designs.
                  </p>
                </div>
              </div>

              {/* SEO Optimization */}
              <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 mt-8">
                <DevicesOutlinedIcon
                  className="lg:text-[#20C997] text-blue-500 lg:bg-[#212529] lg:p-3 lg:rounded-md"
                  fontSize="large"
                  sx={{ fontSize: "8vh" }}
                />
                <div className="flex flex-col items-center lg:items-start">
                  <Typography variant="h6" className="text-white">
                    SEO Optimization
                  </Typography>
                  <p className="ml-4 text-white mr-4 flex justify-center lg:justify-start">
                    Optimize websites to rank higher in search engines like Google by
                    improving structure and content.
                  </p>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 mt-8">
                <EngineeringOutlinedIcon
                  className="lg:text-[#20C997] text-blue-500 lg:bg-[#212529] lg:p-3 lg:rounded-md"
                  fontSize="large"
                  sx={{ fontSize: "8vh" }}
                />
                <div className="flex flex-col items-center lg:items-start">
                  <Typography variant="h6" className="text-white">
                    UI/UX Design
                  </Typography>
                  <p className="ml-4 text-white mr-4 flex justify-center lg:justify-start">
                    Focus on creating intuitive and visually appealing designs that
                    improve the user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
}

export default Intro;
