import React, { useState, useRef } from "react";
import { Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedPage from "./AnimatedPage";

function Contact() {
  const notify = () =>
    toast.success("🦄 Message Sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [changeVariant, setchangeVariant] = useState("contained");
  const changeButtonVariant = () => {
    {
      changeVariant === "contained"
        ? setchangeVariant("outlined")
        : setchangeVariant("contained");
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u03x3tq", "template_iohw3up", form.current, {
        publicKey: "RboBCCuta-eyL0ziX",
      })
      .then(
        () => {
          notify();
          console.log("succes");
        },
        (error) => {
          console.log("error");
        }
      );
  };
  return (
    <AnimatedPage>
      <div className="bg-[#2F2F2F] h-screen overflow-y-scroll pb-[20vh]">
        <div className="flex justify-between items-end h-[10vh]">
          <Typography
            variant="h4"
            className="text-blue-500"
            sx={{ fontWeight: "bold", marginLeft: "1px", paddingBottom: "7px" }}
          >
            Contact Me.
          </Typography>
          <EmailOutlinedIcon
            fontSize="small"
            sx={{ fontSize: "7vh", marginRight: "2px" }}
            className="text-blue-500"
          />
        </div>
        <div className="flex justify-center p-5">
          <h2 className="border-b-2 border-[#057496] p-1 text-2xl text-[#fff] md:text-[2rem]">
            LET'S TALK
          </h2>
        </div>
        <div className="lg:flex lg:mx-12">
          {
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col m-5 w-[90vw] gap-8 "
            >
              <input type="text" className="rounded-lg bg-[#232A31] text-white py-4 border-none focus:border-none focus:outline-none px-4 shadow-lg" autoComplete="off" id="outlined-basic"
                label="Name"
                required
                placeholder="Name"
                name="from_name" />

              <input id="outlined-basic"
                className="rounded-lg bg-[#232A31] text-white py-4 border-none focus:border-none focus:outline-none px-4 shadow-lg" autoComplete="off"
                type="email"
                label="Email"
                required
                name="to_email"
                placeholder="Email"
                variant="outlined" />

              <textarea
                id="outlined-multiline-static"
                className="rounded-lg bg-[#232A31] text-white border-none focus:border-none focus:outline-none px-4 py-3 shadow-lg w-full" autoComplete="off"
                label="Message"
                name="message"
                required
                placeholder="Message..."
                rows="4"
              />
              <div className="flex justify-center">
                <Button
                  onClick={changeButtonVariant}
                  type="submit"
                  variant={changeVariant}
                  sx={{
                    height: "7vh",
                    width: "15rem",
                    "@media (min-width: 768px)": {
                      fontSize: "2.6vh",
                    },
                  }}
                >
                  Send
                </Button>

              </div>
              <ToastContainer />
            </form>
          }

          <div className="flex justify-center flex-col gap-8 items-center w-full mt-8 text-[#057496] lg:mt-[-6rem] lg:gap-12">
            <div className="flex flex-col">
              <TelegramIcon
                sx={{ marginLeft: "16vw", marginBottom: "1vw", fontSize: "6vh" }}
              />
              <Typography
                variant="p"
                className="text-white"
                sx={{
                  "@media (min-width: 768px)": {
                    marginLeft: "7vw",
                  },
                  "@media (min-width: 1024px)": {
                    marginLeft: "11vw",
                  },
                }}
              >
                devshakur23@gmail.com
              </Typography>
            </div>
            <div className="flex flex-col">
              <LocationOnIcon
                sx={{ marginLeft: "16vw", marginBottom: "1vw", fontSize: "6vh" }}
              />
              <Typography
                variant="p"
                className="text-white"
                sx={{
                  "@media (min-width: 768px)": {
                    marginLeft: "7vw",
                  },
                  "@media (min-width: 1024px)": {
                    marginLeft: "11vw",
                  },
                }}
              >
                279,Dutse,Abuja,Nigeria
              </Typography>
            </div>
            <div className="flex flex-col">
              <PhoneEnabledIcon
                sx={{
                  marginLeft: "12vw",
                  marginBottom: "1vw",
                  fontSize: "6vh",
                  "@media (min-width: 1024px)": {
                    marginLeft: "14vw",
                  },
                }}
              />
              <Typography
                variant="p"
                className="text-white"
                sx={{
                  "@media (min-width: 768px)": {
                    marginLeft: "7vw",
                  },
                  "@media (min-width: 1024px)": {
                    marginLeft: "11vw",
                  },
                }}
              >
                (+234)81 293 786 18
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Contact;
