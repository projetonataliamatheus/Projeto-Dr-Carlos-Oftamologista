import drCarlos from "@/assets/dr-hero-new.png.asset.json";
import { doctor, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";

export function Hero() {
  const initials = `${doctor.firstName.charAt(0)}${doctor.lastName.charAt(0)}`;

  return (
    <header className="relative bg-white pt-12 lg:pt-20">
      {/* Background elements */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[6%] -translate-y-1/2 text-[26rem] leading-none font-light tracking-tighter text-cream select-none lg:text-[34rem]"
      >
        {initials}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-cream/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-end gap-0 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <Reveal className="relative z-10 pb-16 lg:pb-24">
          <div className="relative rounded-[2rem] border border-bronze/35 border-l-transparent px-2 py-10 sm:px-8 lg:pr-16">
            <h1 className="text-4xl leading-tight tracking-tight text-espresso sm:text-5xl lg:text-6xl">
              <span className="font-light">{doctor.prefix} </span>
              <span className="font-semibold block sm:inline">
                {doctor.firstName} {doctor.lastName}
              </span>
            </h1>
            <p className="label-wide mt-4 text-sm font-medium text-bronze uppercase tracking-widest">
              {registration}
            </p>
            <p className="mt-6 max-w-xl border-l border-bronze/40 pl-5 text-base leading-relaxed text-muted-foreground/90">
              {doctor.heroParagraph}
            </p>
            <ScheduleButton href={doctor.whatsappUrl} className="mt-9" />
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="group relative flex justify-center lg:justify-end"
        >
          {/* Circle background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 size-[22rem] -translate-x-1/2 rounded-t-full bg-cream transition-transform duration-700 ease-out group-hover:scale-105 sm:size-[26rem] lg:left-auto lg:right-0 lg:translate-x-0 lg:size-[30rem]"
          />

          {/* Doctor Image with hover effect */}
          <div className="relative overflow-hidden pt-4">
            <img
              src={drCarlos.url}
              alt={`Retrato profissional de ${doctor.prefix} ${doctor.firstName} ${doctor.lastName}`}
              width={912}
              height={1200}
              className="relative z-10 w-[20rem] max-w-full translate-y-2 object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:translate-y-0 sm:w-[24rem] lg:w-[28rem]"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(88,64,42,0.1))",
              }}
            />
          </div>
        </Reveal>
      </div>

      {/* Connection line to next section */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bronze/20 to-transparent" />
    </header>
  );
}