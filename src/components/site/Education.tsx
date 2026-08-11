import { ArrowUpRight } from "lucide-react";
import { doctor, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section aria-labelledby="formacao" className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-40 bg-[#B09782]">
      <Reveal className="mx-auto max-w-7xl px-0">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          <div className="lg:border-r lg:border-white/10 lg:pr-14">
            <h2 id="formacao" className="text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block font-light text-white/90">Trajetória e </span>
              <span className="block font-medium">Formação Médica</span>
            </h2>
            <p className="mt-8 flex items-center gap-3 text-sm tracking-[0.15em] text-white uppercase">
              <span className="font-semibold">{doctor.specialty}</span>
              <span className="size-1 rounded-full bg-white/30" />
              <span className="font-medium text-white/80">{registration}</span>
            </p>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/90">
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
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-10 py-4 text-xs font-semibold tracking-[0.2em] text-espresso uppercase shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:shadow-lg"
            >
              Conheça Minha Trajetória
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <ol className="relative space-y-12 border-l border-white/20 pl-10">
            {doctor.education.map((item) => (
              <li key={`${item.label}-${item.title}`} className="group relative">
                <span
                  aria-hidden="true"
                  className="absolute top-2.5 -left-[2.85rem] size-3 rounded-full border-2 border-white bg-white/30 ring-4 ring-white/5 transition-colors group-hover:bg-white"
                />
                <p className="flex flex-col gap-y-2">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                    {item.label}
                  </span>
                  <span className="text-xl font-medium text-white">{item.title}</span>
                </p>
                <div className="mt-3 space-y-2 text-base leading-relaxed text-white/80">
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