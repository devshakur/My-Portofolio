import { useEffect } from "react";
import profilePics from "../assest/images/mypic.png";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { NAV_LINKS } from "./navLinks";

const NAV_ICONS = {
  "/": HomeOutlinedIcon,
  "/#about": PersonOutlineIcon,
  "/#projects": WorkOutlineIcon,
  "/#experience": DescriptionOutlinedIcon,
  "/#contact": MailOutlineIcon,
};

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/devshakur",
    Icon: GitHubIcon,
  },
  {
    label: "Email",
    href: "mailto:devshakur23@gmail.com",
    Icon: EmailOutlinedIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shakiru-abdulshakur-dauda-200223343",
    Icon: LinkedInIcon,
  },
];

function Sidenav({ open, onClose }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const isActive = (to) => {
    if (to.startsWith("/#")) return pathname === "/" && hash === to.slice(1);
    if (to === "/") return pathname === "/" && hash === "";
    return pathname === to;
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            className="theme-drawer absolute top-0 left-0 flex h-full w-full max-w-md flex-col bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#0d0d0d] shadow-2xl shadow-black/50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 340 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-500/90">
                Navigation
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-emerald-500/50 hover:bg-white/5 hover:text-white"
                aria-label="Close menu"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>

            <div className="flex items-center gap-4 border-b border-white/10 px-5 py-5">
              <img
                src={profilePics}
                alt="Abdulshakur Dauda"
                className="h-16 w-16 rounded-2xl object-cover ring-2 ring-emerald-500/30"
              />
              <div>
                <p className="text-lg font-semibold tracking-wide text-white">
                  Abdulshakur Dauda
                </p>
                <p className="text-sm text-white/50">Product Frontend Engineer</p>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ to, label }, index) => {
                  const Icon = NAV_ICONS[to] || HomeOutlinedIcon;
                  const active = isActive(to);
                  return (
                    <motion.li
                      key={to}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05 }}
                    >
                      <Link
                        to={to}
                        onClick={onClose}
                        className={`group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition ${
                          active
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "text-white/75 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                            active
                              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                              : "border-white/10 bg-white/5 text-white/60 group-hover:border-white/20 group-hover:text-white"
                          }`}
                        >
                          <Icon fontSize="small" />
                        </span>
                        {label}
                        {active && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-white/10 px-5 py-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                Connect
              </p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    <Icon fontSize="small" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-white/35">
                © {new Date().getFullYear()} devshakur · All rights reserved
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Sidenav;
