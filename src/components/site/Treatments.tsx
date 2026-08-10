import { ArrowUpRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import { treatments } from "@/data/treatments";
import { Reveal } from "./Reveal";

export function Treatments() {
  const { featured } = doctor;

  return (
    <section aria-labelledby="tratamentos-titulo" className="px-4 pb-8 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl rounded-[2.25rem] bg-[#59B2BA] px-6 py-14 sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <h2 id="tratamentos-titulo" className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block font-light text-white">{featured.titleStart}</span>
            <span className="block font-semibold text-white">{featured.titleHighlight}</span>
          </h2>

          <div>
            <p className="text-base leading-relaxed text-white/90">{featured.description}</p>
            <p className="mt-5 text-base text-white/90">
              {featured.technologiesIntro}{" "}
              {featured.technologies.map((tech, index) => (
                <span key={tech}>
                  <strong className="font-semibold text-white">{tech}</strong>
                  {index < featured.technologies.length - 1 ? " e " : "."}
                </span>
              ))}
            </p>
            <a
              href={featured.ctaUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 text-xs font-medium tracking-[0.16em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-[#59B2BA]"
            >
              {featured.ctaLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal id="tratamentos" className="mx-auto mt-16 max-w-6xl">
        <h3 className="text-2xl font-light tracking-tight text-espresso sm:text-3xl">
          Mais <span className="font-semibold">Tratamentos</span>
        </h3>

        <ul className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <li key={treatment.title}>
              <Reveal
                as="article"
                delay={(index % 4) * 90}
                className="group h-full overflow-hidden rounded-[1.75rem] bg-card shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h4 className="text-base leading-snug font-semibold text-espresso">
                    {treatment.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {treatment.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}