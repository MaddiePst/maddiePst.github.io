import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiJsonwebtokens,
  SiLangchain,
  SiPostman,
} from "react-icons/si";

import Reveal from "./Reveal.jsx";

const TECH = [
  { Icon: SiReact, name: "React" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiSupabase, name: "Supabase" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiVite, name: "Vite" },
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: SiCss, name: "CSS3" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiGithub, name: "GitHub" },
  { Icon: SiJsonwebtokens, name: "JWT" },
  { Icon: SiLangchain, name: "LangChain" },
  { Icon: SiPostman, name: "Postman" },
];

export default function TechStack() {
  return (
    <section className="section wrap !py-14" id="stack" aria-label="Tech stack">
      <Reveal as="div" className="text-center mb-10">
        <p className="eyebrow justify-center">Tools of the trade</p>
      </Reveal>

      <Reveal as="ul" className="flex flex-wrap items-center justify-center gap-4 list-none">
        {TECH.map(({ Icon, name }) => (
          <li
            key={name}
            title={name}
            className="group glass w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:border-holo-cyan/50 hover:shadow-glow"
          >
            <Icon
              aria-label={name}
              className="text-2xl sm:text-[1.7rem] text-text-2 transition-colors duration-300 group-hover:text-holo-cyan"
            />
            <span className="sr-only">{name}</span>
          </li>
        ))}
      </Reveal>
    </section>
  );
}