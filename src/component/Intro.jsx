import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import portrait from "../assest/images/mypic.png";
import { TECHNOLOGIES } from "./techStack";
import TechIcon from "./TechIcon";

const STATS = [
  { value: "3+", label: "Years Experience", Icon: WorkOutlineOutlinedIcon },
  { value: "15+", label: "Projects Completed", Icon: LayersOutlinedIcon },
  { value: "10+", label: "Technologies Mastered", Icon: CodeOutlinedIcon },
  { value: "100%", label: "Focus on Quality", Icon: VerifiedOutlinedIcon },
];

function Intro() {
  const scrollToTechnologies = () => {
    document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="about" className="scroll-mt-24 bg-[#070b12] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        <div className="max-w-md shrink-0">
          <p className="text-sm font-medium text-emerald-400">About Me</p>
          <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Turning ideas into interactive experiences
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            I&apos;m a frontend engineer with over 3 years of experience building modern web
            applications using React, Next.js and related technologies. I enjoy solving real
            problems, working with great teams, and creating seamless experiences for users.
          </p>
          <button
            type="button"
            onClick={scrollToTechnologies}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
          >
            More About Me
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </button>
        </div>

        <div className="flex w-full flex-row items-start gap-3 sm:gap-6 lg:w-auto">
        <div className="relative w-[42%] max-w-[280px] shrink-0 sm:w-[240px] lg:w-[280px]">
          <div className="absolute -inset-3 rounded-[32px] bg-emerald-500/25 blur-2xl" />
          <img
            src={portrait}
            alt="Abdulshakur Dauda"
            className="relative aspect-[4/5] w-full rounded-[28px] object-cover object-top"
          />
        </div>

        <ul className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3 lg:w-[230px] lg:flex-none">
          {STATS.map(({ value, label, Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#101820] px-2.5 py-2 sm:gap-3 sm:px-4 sm:py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 sm:h-10 sm:w-10 sm:rounded-xl">
                <Icon sx={{ fontSize: 18 }} />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-none sm:text-lg">{value}</span>
                <span className="mt-1 block text-[10px] leading-tight text-white/50 sm:text-xs">{label}</span>
              </span>
            </li>
          ))}
        </ul>
        </div>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-24 border-t border-white/10">
        <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-400">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technologies I Work With
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              A combination of modern tools and frameworks to build fast, scalable and
              user-friendly applications.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TECHNOLOGIES.slice(0, 5).map((tech) => (
              <li
                key={tech.name}
                className="rounded-2xl border border-white/10 bg-[#101820] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04]">
                  <TechIcon name={tech.name} accent={tech.accent} />
                </span>
                <h3 className="mt-4 text-base font-semibold">{tech.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/45">{tech.description}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {TECHNOLOGIES.slice(5).map((tech) => (
              <li
                key={tech.name}
                className="rounded-2xl border border-white/10 bg-[#101820] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04]">
                  <TechIcon name={tech.name} accent={tech.accent} />
                </span>
                <h3 className="mt-4 text-base font-semibold">{tech.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/45">{tech.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Intro;
