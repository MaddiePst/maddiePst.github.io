import { useState } from "react";
import { SiLeetcode } from "react-icons/si";

// TODO: replace with your real LeetCode profile URL.
const LEETCODE_URL = "https://leetcode.com/u/YOUR-USERNAME/";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/madalina-p-52a01396/", icon: "logo-linkedin", label: "LinkedIn" },
  { href: "https://github.com/MaddiePst", icon: "logo-github", label: "GitHub" },
];

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  // { href: "#about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-50 pt-4 px-4 sm:px-0">
      <div className="wrap">
        <nav className="glass flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <a href="#top" className="font-display font-bold text-base sm:text-lg tracking-tight shrink-0">
            Madalina <span className="gradient-text">Pastiu</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="nav-link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a className="nav-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="icon-link text-xl leading-none">
                <ion-icon name={s.icon}></ion-icon>
              </a>
            ))}
            <a href="https://leetcode.com/u/MadalinaPst/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="icon-link text-xl leading-none">
              <SiLeetcode />
            </a>
            <a
             className="pill-btn"
               href="https://www.linkedin.com/in/madalina-p-52a01396/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl text-text-0"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`glass md:hidden mt-3 rounded-2xl px-6 py-6 flex flex-col gap-5 origin-top transition-all duration-300 ${
            open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none absolute"
          }`}
        >
          {LINKS.map((l) => (
            <a key={l.href} className="nav-link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="nav-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <div className="flex items-center gap-5 pt-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="icon-link text-xl leading-none">
                <ion-icon name={s.icon}></ion-icon>
              </a>
            ))}
            <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="icon-link text-xl leading-none">
              <SiLeetcode />
            </a>
          </div>
          <a
            className="pill-btn text-center"
            href="https://www.linkedin.com/in/madalina-p-52a01396/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}