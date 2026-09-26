import { Typography } from "@mui/material";
import { useEffect } from "react";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedPage from "./AnimatedPage";
import Payloow from "../assest/images/payloow.png";
import ArewaFlix from "../assest/images/Arewaflix.png";
import SpaceListing from "../assest/images/spacelisting.png";
import Space2 from "../assest/images/space2.png";
import Shakur from "../assest/images/shakur.png";
import UBA from "../assest/images/uba-mockup.jpg";

function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AnimatedPage>
      <div className="bg-[#2F2F2F] mt-[-16px] h-full pb-[200px]">
        <div className="flex justify-between flex-row mt-4 border-b border-dashed border-black p-3">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              "@media (min-width: 768px)": {
                fontSize: "3vh",
              },
            }}
            className="text-[#00BFFF]"
          >
            MY RESUME.
          </Typography>
          <span>
            <ContactMailOutlinedIcon
              fontSize="large"
              className="text-[#00BFFF]"
              sx={{
                "@media (min-width: 768px)": {
                  fontSize: "4vh",
                },
              }}
            />
          </span>
        </div>
        <div className="flex justify-center p-5">
          <h2 className="border-b-2 border-[#00BFFF] p-1 text-3xl text-white">
            PROJECTS
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-3">
          <div className="ml-5 border-l-4 p-6 border-[#00BFFF] lg:border-none lg:bg-[#111418] lg:rounded-xl lg:shadow-lg">
            <span className="bg-red-700 text-white px-2 py-1 rounded-xl">
              contract
            </span>
            <h2
              className="text-white
         font-bold md:text-[2.5vh]"
            >
              Frontend Developer
            </h2>
            <p className="text-[#00BFFF] mb-3 md:text-[2vh]">
              Vehance Technologies
            </p>
            <p className="text-white md:text-[1.8vh]">
              Designed and developed a responsive and user-friendly VTU web
              application, [Payloow], utilizing React.js, Tailwind CSS, and
              React Context Management to deliver an optimized user experience.{" "}
              <img src={Payloow} alt="payloow-screenshot" />
              <span className="mt-4 text-blue-600">Arewaflix</span>
              <p>
                An Hausa Movie Streaming Platform. Arewaflix is a comprehensive
                Hausa movie streaming website, offering an immersive viewing
                experience. Leveraging cutting-edge technologies, I successfully
                designed and developed this platform using React, TypeScript,
                and Material-UI (MUI).
                <img src={ArewaFlix} alt="Arewaflix-screenshot" />
              </p>
            </p>
          </div>
          <div className="ml-5 border-l-4 p-6 border-[#00BFFF] lg:border-none lg:bg-[#111418] lg:rounded-xl lg:shadow-lg">
            <span className="bg-red-700 text-white px-4 py-1 rounded-xl text-sm">
              Aug 2022
            </span>
            <h2
              className="text-white
         font-bold md:text-[2.5vh] mt-5"
            >
              Frontend DEVELOPER
            </h2>
            <p className="text-[#00BFFF] mb-3 md:text-[2vh]">Space Listing.</p>
            <p className="text-white md:text-[1.8vh]">
              A crypto Listing platform, which offers listing services on
              Coingecko, Coinmarketcap amd Deskscreener. it offers comprehensive
              marketing of crypto projects. Developed using React and Mui
              components.
              <img src={SpaceListing} alt="Arewaflix-screenshot" />
              <img src={Space2} alt="Arewaflix-screenshot" />
            </p>
          </div>
          <div className="ml-5 border-l-4 p-6 border-[#00BFFF] lg:border-none lg:bg-[#111418] lg:rounded-xl lg:shadow-lg">
            <span className="bg-red-700 text-white px-2 py-1 rounded-xl text-sm">
              Aug 2024
            </span>
            <h2
              className="text-white
         font-bold md:text-[2.5vh] "
            >
              Frontend DEVELOPER
            </h2>
            <p className="text-[#00BFFF] mb-3 md:text-[2vh]">My Portfolio</p>
            <p className="text-white md:text-[1.8vh]">
              Designed and developed a personal portfolio website to exhibit my
              front-end development projects. The site includes a variety of
              projects which demostrates my proficiency in HTML & CSS, Javscript
              and React.js, Responsive design Principles. it also features
              interactive elements, optimized performance, and a user-friendly
              interface.
              <img src={Shakur} alt="shakur-portfolio-screenshot" />
            </p>
          </div>

          <div className="ml-5 border-l-4 p-6 border-[#00BFFF] lg:border-none lg:bg-[#111418] lg:rounded-xl lg:shadow-lg">
            <span className="bg-red-700 text-white px-4 py-1 rounded-xl text-sm">
              Aug 2022
            </span>
            <h2
              className="text-white
         font-bold md:text-[2.5vh] mt-5"
            >
              Frontend DEVELOPER
            </h2>
            <p className="text-[#00BFFF] mb-3 md:text-[2vh]">
              United Bank of Africa(UBA)Clone.
            </p>
            <p className="text-white md:text-[1.8vh]">
              My UBA App is a web based application inspired by the user
              interface of the United Bank of Africa(UBA) mobile banking app.
              Built as a personal project to enhance my frontend development
              skills.The app replicates key features such as Sign-up page, login
              Page and Dashboard page with their functionalities, focusing on
              responsiveness and user-experience. Using Vanilla Javascript,
              TailwindCss and Vite.
              <img src={UBA} alt="uba-screenshot" />
            </p>
          </div>

          <div className="ml-5 border-l-4 p-6 border-[#00BFFF] lg:border-none lg:bg-[#111418] lg:rounded-xl lg:shadow-lg">
            <span className="bg-red-700 text-white px-4 py-1 rounded-xl text-sm">
              March 2023
            </span>
            <h2
              className="text-white
         font-bold md:text-[2.5vh] mt-5"
            >
              WEB DEVELOPER
            </h2>
            <p className="text-[#00BFFF] mb-3 md:text-[2vh]">
              Salon Management Website
            </p>
            <p className="text-white md:text-[1.8vh]">
              Developed a Professional website for a hairdressing salon,
              showcasing services, stylist profiles, and an online booking
              system to enhance client engagement and streamline appointment
              scheduling.Using React, EmotionJs, and Vite.
            </p>
          </div>

          <div className="ml-5 border-l-4 p-6 border-[#00BFFF] lg:border-none lg:bg-[#111418] lg:rounded-xl lg:shadow-lg">
            <span className="bg-red-700 text-white px-4 py-1 rounded-xl text-sm">
              May 2023
            </span>
            <h2
              className="text-white
         font-bold md:text-[2.5vh] mt-5"
            >
              WEB DEVELOPER
            </h2>
            <p className="text-[#00BFFF] mb-3 md:text-[2vh]">Restaurant Menu</p>
            <p className="text-white md:text-[1.8vh]">
              Using HTML,CSS and JavaScript in building a meticulous restaurant
              menu.Leveraged Culinary expertise and market trends to design an
              enticing selection of appetizers and a user-appealing interface to
              satisfy customers desires
            </p>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <h2 className="border-b-2 border-[#00BFFF] p-1 text-3xl text-white">
            EDUCATION
          </h2>
        </div>
        <div className="lg:flex">
          <div className="ml-5 border-l-4 p-6 mt-3 border-blue-300 lg:bg-[#111418] lg:border-none lg:rounded-xl lg:shadow-lg">
            <h3 className="text-[#00BFFF] font-bold text-[20px]">
              DEVSNET COHORT
            </h3>
            <p className="text-white md:text-[2vh]">Frontend Web Development</p>
            <p className="text-red-500">
              April 2022 <span className="text-blue-500">-----</span>
              <span className="text-green-500">October 2024</span>
            </p>
          </div>

          <div className="ml-5 border-l-4 p-6 mt-3 border-green-300 lg:bg-[#111418] lg:border-none lg:rounded-xl lg:shadow-lg">
            <h3 className="text-[#00BFFF] font-bold text-[20px] ">
              Bayero University Kano (BUK)
            </h3>
            <p className="text-white md:text-[2vh]">
              Bachelor of Science- Bsc Mass Communication
            </p>
            <p className="text-red-500">
              Jan 2018 <span className="text-blue-500">-----</span>
              <span className="text-green-500">April 2024</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <h2 className="border-b-2 border-[#00BFFF] p-1 text-3xl text-white">
            CODING SKILLS
          </h2>
        </div>
        <div className="ml-4 lg:grid lg:grid-cols-2  gap-4">
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">Html</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={95}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">Css</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-left"
                aria-label="Temperature"
                defaultValue={92}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">JavaScript</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-top"
                aria-label="Temperature"
                defaultValue={90}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">React.js</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-top"
                aria-label="Temperature"
                defaultValue={98}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">Next.js</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={90}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">Typescript</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-down"
                aria-label="Temperature"
                defaultValue={91}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">
              Context Management
            </h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={85}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">Figma</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={87}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">
              TailwindCss
            </h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={99}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">Sass</h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={80}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">
              Git Versioning
            </h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={95}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
          <div>
            <h5 className="text-white mb-[-12px] md:text-[2rem]">
              Restful Api & Axios
            </h5>
            <Box
              sx={{
                width: 300,
                "@media (min-width: 768px)": {
                  width: 750,
                },
                "@media (min-width: 1024px)": {
                  width: 400,
                },
              }}
            >
              <Slider
                data-aos="fade-right"
                aria-label="Temperature"
                defaultValue={90}
                disabled
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                style={{ color: "purple" }}
              />
            </Box>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Resume;
