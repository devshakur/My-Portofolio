import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <CssBaseline>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "#070b12" }}>
        <Navigation />

        <div className="flex-1 overflow-x-clip">{children}</div>
      </Box>
    </CssBaseline>
  );
}

export default Layout;
