import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section className="wrap grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center pt-16 md:pt-24 pb-14">
      <Reveal as="div" className="order-2 md:order-1">
        <p className="eyebrow eyebrow-dash mb-6">Full-Stack Software Developer</p>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] mb-6">
          Building <span className="gradient-text">intelligent</span>,
          <br className="hidden sm:block" /> full-stack experiences.
        </h1>

        <p className="text-text-1 text-base sm:text-lg max-w-[46ch] mb-8">
          I'm Madalina — a software engineer crafting scalable web apps with React,
          TypeScript, and Node.js, and wiring them up to AI: OpenAI, Claude, Gemini,
          Groq, LangChain, and Retrieval-Augmented Generation. From architecture to
          deployment.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-solid">
            View my work
            <ion-icon name="arrow-forward"></ion-icon>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <ion-icon name="document-text-outline"></ion-icon>
            Resume
          </a>
        </div>

        <div className="flex gap-9 mt-11">
          <Stat value="20+" label="Apps delivered" />
          <Stat value="5+" label="AI / LLM integrations" />
          <Stat value="3+" label="Years shipping code" />
        </div>
      </Reveal>

      <Reveal as="div" delay={150} className="order-1 md:order-2 flex justify-center relative">
        <div className="relative">
          <div className="rounded-[28px] p-1.5 bg-holo shadow-glow animate-pulse-glow">
            <div className="rounded-[24px] overflow-hidden bg-ink-1">
              <img
                src="/hero.webp"
                alt="3D illustration of a developer working at a laptop"
                className="w-full max-w-[420px] block"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <strong className="font-display text-2xl block">{value}</strong>
      <span className="text-xs text-text-2 tracking-wide">{label}</span>
    </div>
  );
}
