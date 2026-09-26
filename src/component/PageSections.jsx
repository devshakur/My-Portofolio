import { Link } from "react-router-dom";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import agrisync from "../assest/images/Agrisync.png";
import takenote from "../assest/images/takenote.png";
import venpay from "../assest/images/venpay.png";
import { CV_FILENAME, CV_HREF, NAV_LINKS } from "./navLinks";

const PROJECTS = [
  {
    name: "Agrisync",
    description: "An agriculture platform connecting farmers with buyers and drivers.",
    image: agrisync,
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "TakeNote",
    description: "A modern notetaking app with real-time sync and cloud storage.",
    image: takenote,
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "Venpay",
    description: "A fintech platform for international money transfers and cross-border payments.",
    image: venpay,
    tags: ["Next.js", "TanStack Query", "GraphQL"],
  },
];

const EXPERIENCE = [
  {
    years: "Oct 2025 – Jun 2026",
    role: "Frontend Engineer",
    company: "VegaIT",
    summary:
      "Modernized customer-facing apps with Next.js, micro frontends, and an Angular migration.",
  },
  {
    years: "Dec 2025 – Apr 2026",
    role: "Frontend Engineer (Contract)",
    company: "Finclusion Africa",
    summary:
      "Led Venpay, a money-transfer platform built with Next.js, TanStack Query, and GraphQL.",
  },
  {
    years: "Sep 2023 – Oct 2025",
    role: "Frontend Developer",
    company: "Vehanceit",
    summary:
      "Built Payloow and Karrypay with React and React Native for customer financial workflows.",
  },
  {
    years: "2023",
    role: "Frontend Engineer Intern",
    company: "Microsoft · Latvia",
    summary:
      "Worked on Microsoft 365 tools and modern web technologies for internal product features.",
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shakiru-abdulshakur-dauda-200223343", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/devshakur", Icon: GitHubIcon },
  { label: "X", href: "https://x.com/DaudaAbdul62370", Icon: XIcon },
  { label: "Email", href: "mailto:devshakur23@gmail.com", Icon: EmailOutlinedIcon },
];

function SectionLink({ href, children }) {
  const className = "inline-flex items-center gap-1 text-sm text-white/55 no-underline transition hover:text-white";
  if (href.startsWith("/#") || href.startsWith("#")) {
    return (
      <Link to={href.startsWith("#") ? `/${href}` : href} className={className}>
        {children}
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Link>
    );
  }
  const isFile = href.endsWith(".pdf");
  return (
    <a
      href={href}
      className={className}
      download={isFile ? CV_FILENAME : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
      <ArrowForwardIcon sx={{ fontSize: 16 }} />
    </a>
  );
}

function PageSections() {
  return (
    <>
      <section id="projects" className="scroll-mt-24 border-t border-white/10 bg-[#070b12]">
        <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                <GridViewOutlinedIcon sx={{ fontSize: 16 }} />
                My Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Featured Work</h2>
            </div>
            <SectionLink href="https://github.com/devshakur">View All Projects</SectionLink>
          </div>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <li
                key={project.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#101820]"
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-44 w-full object-cover object-top"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-white/10 bg-[#070b12]">
        <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                <WorkOutlineOutlinedIcon sx={{ fontSize: 16 }} />
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">My Journey</h2>
            </div>
            <SectionLink href={CV_HREF}>View Full Resume</SectionLink>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            {EXPERIENCE.map((job) => (
              <li
                key={`${job.company}-${job.years}`}
                className="relative border-l border-white/15 pl-6"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-[#070b12]" />
                <p className="text-sm font-medium text-emerald-400">{job.years}</p>
                <h3 className="mt-3 text-base font-semibold">{job.role}</h3>
                <p className="mt-1 text-sm text-white/70">{job.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{job.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-[#070b12]">
        <div className="grid w-full items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-medium text-emerald-400">Get in touch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              I&apos;m always open to discussing new projects, creative ideas or opportunities.
              Feel free to reach out.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:devshakur23@gmail.com"
                className="inline-flex items-center rounded-full bg-[#3DFF8A] px-5 py-2.5 text-sm font-semibold text-[#062014] no-underline transition hover:bg-[#64ff9f]"
              >
                Send Message
              </a>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 no-underline transition hover:border-white/30 hover:text-white"
                >
                  <Icon sx={{ fontSize: 18 }} />
                </a>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 120 140" className="hidden h-36 w-32 text-emerald-400 lg:block" aria-hidden>
            <path d="M60 130c18-28 28-48 28-68 0-22-14-40-28-52C46 22 32 40 32 62c0 20 10 40 28 68z" fill="currentColor" opacity="0.85" />
            <path d="M60 118c8-16 12-28 12-40 0-10-6-20-12-28-6 8-12 18-12 28 0 12 4 24 12 40z" fill="#062014" opacity="0.35" />
          </svg>
        </div>

        <footer className="border-t border-white/10">
          <div className="flex w-full flex-col gap-4 px-5 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-16">
            <p>© {new Date().getFullYear()} Abdulshakur Dauda. All rights reserved.</p>
            <ul className="flex flex-wrap gap-4">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/45 no-underline transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default PageSections;
