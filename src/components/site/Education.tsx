import { GraduationCap } from "lucide-react";
import { doctor, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section aria-labelledby="formacao" className="relative px-4 pb-6 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl surface-taupe rounded-[2.25rem] px-6 py-14 shadow-[var(--shadow-soft)] sm:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:border-r lg:border-taupe-foreground/25 lg:pr-14">
            <h2 id="formacao" className="text-3xl tracking-tight sm:text-4xl">
              <span className="font-light">Formação </span>
              <span className="font-semibold">Médica</span>
            </h2>
            <p className="mt-3 text-sm">
              <span className="font-semibold uppercase">{doctor.specialty}</span>
              <span className="opacity-80"> | {registration}</span>
            </p>

            <div className="mt-7 space-y-5 text-sm leading-relaxed opacity-95">
              {doctor.bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href={doctor.lattesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-taupe-foreground/50 px-7 py-3 text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-taupe-foreground/15"
            >
              <GraduationCap className="size-4" aria-hidden="true" />
              Currículo Lattes
            </a>
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