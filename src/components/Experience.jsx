import Reveal from "./Reveal.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section className="section wrap" id="experience">
      <Reveal as="div" className="text-center mb-14">
        <p className="eyebrow justify-center mb-3">Where I've worked</p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Experience
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {experience.map((job, i) => (
          <Reveal as="div" key={job.company} delay={i * 100} className="glass rounded-[18px] p-7 hover:-translate-y-1.5 hover:border-holo-cyan/40 transition-all duration-300">
            <h3 className="font-display text-lg mb-1">
              {job.role} · {job.company}
            </h3>
            <p className="text-holo-cyan text-xs tracking-wide mb-4">{job.period}</p>
            <ul className="space-y-2.5">
              {job.points.map((p) => (
                <li key={p} className="text-text-1 text-sm flex gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-holo-violet shrink-0"></span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
