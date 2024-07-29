import React from "react";
import AnimatedPage from "./AnimatedPage";
import { Typography } from "@mui/material";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import mock1 from "../assest/images/uba-mockup.jpg";
import profileMock from "../assest/images/portfolio-mockup.jpg";
import barberMock from "../assest/images/salon-mockup.jpg";
import currencyMock from "../assest/images/Currency-Converter-mockup.png";

function Portfolio() {
  return (
    <AnimatedPage>
      <section className="h-screen overflow-y-scroll w-full bg-[#2F2F2F] pb-[100px]">
        <div className="h-[6vh] flex justify-between flex-row border-b border-dashed border-black">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginTop: "5px",
              "@media (min-width: 768px)": {
                fontSize: "3vh",
              },
            }}
            className="text-[#00BFFF]"
          >
            Portfolio.
          </Typography>
          <span>
            <ContactMailOutlinedIcon
              fontSize="large"
              className="text-[#00BFFF] mt-1"
              sx={{
                fontSize: "5vh",
                "@media (min-width: 768px)": {
                  fontSize: "4vh",
                },
              }}
            />
          </span>
        </div>
        <article>
        </article>
        <section className="xl:grid xl:grid-cols-2">
          <Link className="mt-9 h-[50vh] flex justify-center items-center rounded-[30px] m-6">
            <img src={mock1} className="w-auto h-[46vh] rounded-[1rem]" />
          </Link>
          <Link className="mt-9  h-[50vh] flex justify-center items-center rounded-[30px] m-6">
            <img
              src={profileMock}
              className="w-auto rounded-[1rem] h-[46vh] "
            />
          </Link>
          <Link className="mt-9 h-[50vh] flex justify-center items-center rounded-[30px] m-6">
            <img src={barberMock} className="w-auto h-[46vh] rounded-[1rem]" />
          </Link>
          <Link className="mt-9 h-[50vh] flex justify-center items-center rounded-[30px] m-6">
            <img src={currencyMock} className="w-auto h-[46vh] rounded-[1rem]" />
          </Link>
        </section>
      </section>
    </AnimatedPage>
  );
}

export default Portfolio;
