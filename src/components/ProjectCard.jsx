export default function ProjectCard({ project }) {
  const { title, description, tech, image, live, repo, featured } = project;

  return (
    <article
      className={`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-holo-violet/45 hover:shadow-card ${
        featured ? "sm:col-span-2 grid sm:grid-cols-[1.1fr_1fr]" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-video sm:aspect-auto" : "aspect-video"}`}>
        {featured && (
          <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold tracking-wider uppercase bg-holo text-ink-0">
            Featured
          </span>
        )}

        {image ? (
          <>
            <img
              src={image}
              alt={`${title} screenshot`}
              className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-0/90" />
          </>
        ) : (
          <div className="w-full h-full min-h-[160px] flex items-center justify-center bg-holo-soft relative overflow-hidden">
            <div className="absolute inset-0 bg-grid bg-grid-cell opacity-30" />
            <ion-icon
              name="sparkles-outline"
              className="text-5xl text-white/80 relative z-10"
            ></ion-icon>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base">
            {live ? (
              <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-holo-cyan transition-colors">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`} className="text-text-2 hover:text-text-0 transition-all hover:rotate-6 hover:scale-110 text-lg shrink-0">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          )}
        </div>

        <p className="text-text-1 text-sm">{description}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}