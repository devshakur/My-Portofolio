import React from "react";
import "../styles/public.css";
import { Typography } from "@mui/material";
import Typewriter from "./Typewriter";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";

function Home() {
  return (
    <AnimatedPage>
      <div className="home opacity-5 relative">
        <div className="w-screen h-[100%] flex flex-col justify-center items-center backdrop-blur-[-70px] bg-black/50">
          {/* This adds the backdrop blur and semi-transparent black background */}
          <Typography
            sx={{
              "@media (min-width: 768px)": {
                fontSize: "5vh",
              },
            }}
            variant="h4"
            className="text-white"
          >
            DAUDA
          </Typography>
          <Typography
            sx={{
              fontSize: "11vw",
              fontWeight: "bold",
              "@media (min-width: 768px)": {
                color: "white",
              },
              "@media (min-width: 768px)": {
                fontSize: "5rem",
              },
            }}
            className="text-blue-300"
          >
            ABDULSHAKUR
          </Typography>
          <Typewriter />
          <div className="my-10">
            <Link to={'/contact'}>
            <a
              className="border-2 border-[yellow] rounded-2xl p-3 px-8  text-[yellow] font-sans"
            >
              Hire Me
            </a>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
