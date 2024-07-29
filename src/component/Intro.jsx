import React, { useEffect, useState } from "react";
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
  const [changeVariant, setchangeVariant] = useState("outlined");
  const changeButtonVariant = () => {
    {
      changeVariant === "contained"
        ? setchangeVariant("outlined")
        : setchangeVariant("contained");
    }
  };

  return (
    <AnimatedPage>
      <main className="h-full bg-[#2f2f2f] pb-[50px]">
        <div>
          <div className="flex justify-between items-end h-[10vh] border-b-2 border-gray-500">
            <Typography
              variant="h4"
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
              fontSize="large"
              sx={{ fontSize: "7vh" }}
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
                fontSize: "6vh",
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
          <p className="text-[#ffffff] ml-4 md:text-[25px] lg:text-[18px]">
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
        </div>
        <div>
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
            <span className="border-b-2 border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
              {" "}
              Name:
            </span>
            <span className="ml-2 md:text-[2rem] lg:text-[18px]">Dauda Abdulshakur</span>
          </p>
          <p className="text-white mb-3 ml-3">
            <span className="border-b-2 border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
              {" "}
              Residence:
            </span>
            <span className="ml-2 md:text-[2rem] lg:text-[18px]">Abuja, Nigeria</span>
          </p>
          <p className="text-white mb-3 ml-3">
            <span className="border-b-2 border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
              {" "}
              Address:
            </span>
            <span className="ml-2 md:text-[2rem] lg:text-[18px]">Zone 1, Dutsen Alhaji</span>
          </p>
          <p className="text-white mb-3 ml-3">
            <span className="border-b-2 border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
              {" "}
              Email:
            </span>
            <span className="ml-2 md:text-[2rem] lg:text-[18px]">devshakur@gmail.com</span>
          </p>
          <p className="text-white mb-3 ml-3">
            <span className="border-b-2 border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
              {" "}
              Phone:
            </span>
            <span className="ml-2 md:text-[2rem] lg:text-[18px]">(+234) 8129378618</span>
          </p>
          <p className="text-white ml-3">
            <span className="border-b-2 border-blue-500 ml-2 md:text-[2rem] lg:text-[18px]">
              {" "}
              Freelance:
            </span>
            <span className="ml-2 md:text-[2rem] lg:text-[18px]">Available</span>
          </p>
        </div>
        <Button
          onClick={changeButtonVariant}
          variant={changeVariant}
          sx={{
            border: "2px solid blue",
            marginTop: "4vh",
            marginLeft: "2vh",
            color: changeVariant === "contained" ? "white" : "blue",
            "@media (min-width: 768px)": {
              fontSize: "2rem",
              fontWeight: "bold",
            },
          }}
        >
          DOWNLOAD RESUME
        </Button>
        <div className="mt-[6vh]">
          <div>
            <div className="flex justify-center">
              <h4 className=" w-max text-white text-3xl border-b-2 border-blue-600">
                SERVICES
              </h4>
            </div>
            <div className="flex justify-center flex-col items-center mt-9">
              <LaptopWindowsOutlinedIcon
                className="text-blue-400"
                fontSize="large"
                sx={{ fontSize: "7vh" }}
              />
              <Typography variant="h6" className="text-white">
                Web Development
              </Typography>
              <p className="ml-4 text-white mr-4 flex justify-center">
                Frontend Development: Creating the user interface (UI) and user
                experience (UX) of a website using Html, Css, Javascript, React,
                and Next.js.
              </p>

              <VisibilityOutlinedIcon
                className="text-blue-400 mt-8"
                fontSize="large"
                sx={{ fontSize: "8vh" }}
              />
              <Typography variant="h6" className="text-white flex flex-start">
                Web Design
                <span>
                  <img src={amberImg} className="w-7 h-7" alt="" />
                </span>
                Optimization.
              </Typography>
              <p className="ml-4 text-white">
                Designing the layout and feel of the website, focusing on
                usability and user experience. Improving website load times
                through techniques like caching, image optimization, and
                minimizing JavaScript and CSS.
              </p>

              <DevicesOutlinedIcon
                className="text-blue-400 mt-8"
                fontSize="large"
                sx={{ fontSize: "8vh" }}
              />
              <Typography variant="h6" className="text-white">
                Responsive Design
              </Typography>
              <p className="ml-4 text-white">
                Ensuring websites work well on various devices and screen sizes,
                including mobile phones, tablets, desktops.
              </p>

              <ContactMailOutlinedIcon
                className="text-blue-400 mt-8"
                fontSize="large"
                sx={{ fontSize: "8vh" }}
              />
              <Typography variant="h6" className="text-white">
                Content Management System (CMS)
              </Typography>
              <p className="ml-4 text-white">
                Implementing and customizing popular CMS platforms like
                WordPress, Joomla, or Drupal
              </p>

              <EngineeringOutlinedIcon
                className="text-blue-400 mt-8"
                fontSize="large"
                sx={{ fontSize: "8vh" }}
              />
              <Typography variant="h6" className="text-white flex flex-start">
                Web Hosting
                <span>
                  <img src={amberImg} className="w-7 h-7" alt="" />
                </span>
                Maintenance.
              </Typography>
              <p className="ml-4 text-white">
                Setting up and configuring web hosting environments, ensuring
                that websites are live and accessible. and Ongoing support to
                keep the website updated, secure, and running smoothly,
                including bug fixes and performace optimization
              </p>
            </div>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
}

export default Intro;
