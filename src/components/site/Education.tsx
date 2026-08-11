import { ArrowUpRight } from "lucide-react";
import { doctor, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section aria-labelledby="formacao" className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-40">
      <Reveal className="mx-auto max-w-7xl px-0">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          <div className="lg:border-r lg:border-taupe-foreground/25 lg:pr-14">
            <h2 id="formacao" className="text-4xl tracking-tight text-espresso sm:text-5xl lg:text-6xl">
              <span className="block font-light text-espresso/80">Trajetória e </span>
              <span className="block font-medium">Formação Médica</span>
            </h2>
            <p className="mt-8 flex items-center gap-3 text-sm tracking-[0.15em] text-bronze uppercase">
              <span className="font-semibold">{doctor.specialty}</span>
              <span className="size-1 rounded-full bg-bronze/30" />
              <span className="font-medium text-bronze/70">{registration}</span>
            </p>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground/90">
              {doctor.bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <button
              onClick={() => {
                const treatmentsEl = document.getElementById("tratamentos");
                if (treatmentsEl) {
                  treatmentsEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-xs font-medium tracking-[0.16em] text-bronze-dark uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              Conheça Minha Trajetória
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <ol className="relative space-y-10 border-l border-taupe-foreground/25 pl-8">
            {doctor.education.map((item) => (
              <li key={`${item.label}-${item.title}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[2.05rem] size-2 rounded-full bg-taupe-foreground/80"
                />
                <p className="flex flex-wrap items-baseline gap-x-3 text-sm">
                  <span className="label-wide opacity-90">{item.label}</span>
                  <span aria-hidden="true" className="opacity-60">
                    •
                  </span>
                  <span className="font-semibold">{item.title}</span>
                </p>
                <div className="mt-2 space-y-1 text-sm leading-relaxed opacity-90">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}