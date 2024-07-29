import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { openSideNav } from "./Sidenav";
import Sidenav from "./Sidenav";
function Layout({ children }) {
  return (
    <CssBaseline>
      <Box sx={{ height: "100vh" }}>
        <header className="w-full h-[8vh] bg-black ">
          <div className="w-[90%] h-[8vh] flex justify-between items-center float-right">
            <div className="text-white text-[5vw] md:ml-9 ml-1 lg:text-[4vh] lg:ml-[25vw]">
              ABDULSHAKUR DAUDA
            </div>
            <div className="text-white mr-2 border-l-4 p-3 border-gray-800">
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
        <div className="overflow-y-clip">
          <Sidenav />
        </div>
        <div className="overflow-x-clip "> {children}</div>
      </Box>
    </CssBaseline>
  );
}

export default Layout;
