import drCarlos from "@/assets/dr-hero-fix.png";
import { doctor, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";

export function Hero() {
  const initials = `${doctor.firstName.charAt(0)}${doctor.lastName.charAt(0)}`;

  return (
    <header className="relative bg-cream pt-20 lg:pt-32">
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

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <Reveal className="relative z-10 pb-16 lg:pb-24">
          <div className="relative rounded-[2.5rem] border border-bronze/20 bg-white/50 px-4 py-16 sm:px-12 lg:border-none lg:bg-transparent lg:px-0 lg:py-16">
            <h1 className="text-5xl leading-[1.1] tracking-tight text-espresso sm:text-6xl lg:text-7xl">
              <span className="block font-light text-espresso/90">{doctor.prefix} </span>
              <span className="block font-medium text-espresso">
                {doctor.firstName} <span className="block font-light text-espresso/70">{doctor.lastName}</span>
              </span>
            </h1>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-bronze uppercase tracking-[0.2em]">
              {doctor.specialty}
              <span className="text-bronze/30">|</span>
              {registration}
            </p>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground/90">
              {doctor.heroParagraph}
            </p>
            <ScheduleButton href={doctor.whatsappUrl} className="mt-12 w-full sm:w-auto px-10 py-4 text-sm" />
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="group relative flex justify-center lg:justify-end lg:pr-4"
        >
          {/* Circle background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 size-[22rem] -translate-x-1/2 rounded-t-full bg-cream transition-transform duration-700 ease-out group-hover:scale-105 sm:size-[26rem] lg:left-auto lg:right-0 lg:translate-x-0 lg:size-[30rem]"
          />

          {/* Doctor Image with hover effect */}
          <div className="relative overflow-hidden pt-4">
            <img
              src={drCarlos}
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
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />
    </header>
  );
}