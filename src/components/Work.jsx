import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Work() {
  return (
    <section className="section wrap" id="work">
      <Reveal as="div" className="text-center mb-14">
        <p className="eyebrow justify-center mb-3">Selected work</p>
        <h2 className="font-display text-3xl sm:text-4xl">Work</h2>
        <p className="text-text-2 max-w-[56ch] mx-auto mt-3.5">
          A mix of AI-powered products, full-stack apps, and front-end builds —
          from concept to deployment.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal as="div" key={project.title} delay={(i % 4) * 80} className={project.featured ? "sm:col-span-2" : ""}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal as="div" className="text-center mt-12 text-text-2">
        <p>
          For more projects that aren't as relevant as the ones above, check my{" "}
          <a
            href="https://github.com/MaddiePst"
            target="_blank"
            rel="noopener noreferrer"
            className="text-holo-cyan font-semibold inline-flex items-center gap-1"
          >
            GitHub <ion-icon name="logo-github"></ion-icon>
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
