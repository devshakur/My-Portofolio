import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Link, NavLink } from "react-router-dom";
import Sidenav from "./Sidenav";
import { CV_FILENAME, CV_HREF, NAV_LINKS } from "./navLinks";

function BrandLogo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3 no-underline">
      <span
        className="font-serif text-[1.75rem] font-bold italic leading-none tracking-tight text-white"
        aria-hidden
      >
        AD
      </span>
      <span className="whitespace-nowrap text-[15px] font-medium tracking-wide text-white">
        Abdulshakur Dauda
      </span>
    </Link>
  );
}

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-white/[0.06] bg-[#141414]/95 backdrop-blur-md lg:border-transparent lg:bg-transparent lg:backdrop-blur-none">
        <div className="mx-auto grid h-[72px] max-w-[1200px] grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <BrandLogo />

          <nav
            className="hidden items-center justify-center gap-10 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors no-underline ${
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white/90"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white lg:flex"
              aria-label="Toggle theme"
            >
              <WbSunnyOutlinedIcon sx={{ fontSize: 22 }} />
            </button>

            <a
              href={CV_HREF}
              download={CV_FILENAME}
              className="hidden items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-1.5 pl-5 pr-1.5 text-sm font-medium text-white no-underline transition hover:border-white/25 hover:bg-white/[0.08] lg:inline-flex"
            >
              Download CV
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />
              </span>
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </button>
          </div>
        </div>
      </header>

      <Sidenav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export default Navigation;
