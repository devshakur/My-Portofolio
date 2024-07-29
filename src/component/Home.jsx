import React from "react";
import "../styles/public.css";
import { Typography } from "@mui/material";
import Typewriter from "./Typewriter";
import AnimatedPage from "./AnimatedPage";
function Home() {
  return (
    <AnimatedPage>
      <div className="home opacity-5">
        <div className="w-screen h-1/2 flex flex-col justify-end items-center">
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
            }}
            className="text-blue-300"
          >
            ABDULSHAKUR
          </Typography>
          <Typewriter />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
