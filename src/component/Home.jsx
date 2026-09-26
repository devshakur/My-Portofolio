import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeroScene, { HeroSnow } from "./HeroScene";
import Intro from "./Intro";
import PageSections from "./PageSections";
import { SKILL_GROUPS, TECH_STACK } from "./techStack";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/devshakur", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shakiru-abdulshakur-dauda-200223343", Icon: LinkedInIcon },
  { label: "Email", href: "mailto:devshakur23@gmail.com", Icon: EmailOutlinedIcon },
];

function Home() {
  const [activeTech, setActiveTech] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash, location.pathname]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#070b12] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="relative flex min-h-[calc(100vh-72px)] flex-col overflow-hidden">
        <HeroSnow />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-emerald-400/15 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="relative grid w-full flex-1 items-start gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-center lg:px-12 lg:py-6 xl:px-16">
          <div className="max-w-xl lg:max-w-[34rem]">
            <p className="text-sm font-medium tracking-wide text-emerald-400">Hi, I&apos;m</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Abdulshakur Dauda
            </h1>
            <p className="mt-3 text-xl text-white/80 sm:text-2xl">Frontend Engineer</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              I build fast, accessible and beautiful web applications that turn ideas into real
              products. Passionate about React, Next.js and modern frontend technologies.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full bg-[#3DFF8A] px-6 py-3 text-sm font-semibold text-[#062014] no-underline transition hover:bg-[#64ff9f]"
              >
                View My Work
              </Link>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-emerald-400/40 hover:text-white"
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </a>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white no-underline transition hover:border-white/30 hover:bg-white/5"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-8 max-h-56 space-y-3 overflow-y-auto pr-1 lg:max-h-[34vh]">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                    {group.title}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.skills.map((name) => {
                      const index = TECH_STACK.findIndex((tech) => tech.name === name);
                      const active = index === activeTech;
                      return (
                        <li
                          key={name}
                          className={`rounded-full border px-2.5 py-1 text-xs transition ${
                            active
                              ? "border-emerald-400/60 bg-emerald-400/15 text-white"
                              : "border-white/10 bg-white/[0.03] text-white/55"
                          }`}
                        >
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px] lg:mx-0 lg:ml-auto lg:h-[min(640px,calc(100vh-160px))] lg:max-w-none">
            <HeroScene onActiveChange={setActiveTech} />
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToAbout}
          className="relative flex items-center gap-2 px-5 pb-6 text-xs tracking-wide text-white/45 sm:px-8 lg:px-12 xl:px-16"
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 18 }} className="animate-bounce" />
          Scroll to explore
        </button>
      </section>
      <Intro />
      <PageSections />
    </div>
  );
}

export default Home;
