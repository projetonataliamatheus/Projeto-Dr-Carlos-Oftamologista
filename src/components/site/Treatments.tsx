import { ArrowUpRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import { treatments } from "@/data/treatments";
import { Reveal } from "./Reveal";

export function Treatments() {
  const { featured } = doctor;

  return (
    <section aria-labelledby="tratamentos-titulo" className="px-6 py-24 sm:px-8 lg:px-12 lg:py-40">
      <Reveal className="mx-auto max-w-7xl rounded-[3rem] bg-[#59B2BA] px-8 py-20 sm:px-16 lg:px-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
          <h2 id="tratamentos-titulo" className="text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            <span className="block font-light text-white/90">{featured.titleStart}</span>
            <span className="block font-medium text-white">{featured.titleHighlight}</span>
          </h2>

          <div>
            <p className="text-xl leading-relaxed text-white/95">{featured.description}</p>
            <p className="mt-8 text-lg text-white/80">
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
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-[#59B2BA] hover:-translate-y-1"
            >
              {featured.ctaLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal id="tratamentos" className="mx-auto mt-32 max-w-7xl lg:mt-48">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="text-3xl font-light tracking-tight text-espresso sm:text-4xl lg:text-5xl">
            Mais <span className="font-medium">Tratamentos</span>
          </h3>
          <div className="h-px flex-1 bg-bronze/10 hidden md:block ml-12" />
        </div>

        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((treatment, index) => (
            <li key={treatment.title}>
              <Reveal
                as="article"
                delay={(index % 4) * 100}
                className="group h-full overflow-hidden rounded-[2.5rem] bg-white border border-bronze/5 shadow-[0_20px_40px_-15px_rgba(88,64,42,0.08)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_60px_-20px_rgba(88,64,42,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-medium leading-tight text-espresso">
                    {treatment.title}
                  </h4>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground/80">
                    {treatment.description}
                  </p>
                  <div className="mt-8 flex items-center text-xs font-bold tracking-[0.15em] text-bronze uppercase opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Saiba Mais
                    <ArrowUpRight className="ml-2 size-3" />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}