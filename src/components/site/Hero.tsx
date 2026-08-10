import drCarlos from "@/assets/dr-carlos.png.asset.json";
import { doctor, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";

export function Hero() {
  const initials = `${doctor.firstName.charAt(0)}${doctor.lastName.charAt(0)}`;

  return (
    <header className="relative overflow-hidden bg-background">
      {/* Monograma decorativo ao fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[6%] -translate-y-1/2 text-[26rem] leading-none font-light tracking-tighter text-cream-deep select-none lg:text-[34rem]"
      >
        {initials}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-cream-deep/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 pb-8 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:px-8 lg:pt-24">
        <Reveal className="relative">
          <div className="relative rounded-[2rem] border border-bronze/35 border-l-transparent px-2 py-10 sm:px-8 lg:pr-16">
            <h1 className="text-4xl leading-tight tracking-tight text-espresso sm:text-5xl lg:text-6xl">
              <span className="font-light">{doctor.prefix} </span>
              <span className="font-semibold">
                {doctor.firstName} {doctor.lastName}
              </span>
            </h1>
            <p className="label-wide mt-4 text-sm font-medium text-bronze">{registration}</p>
            <p className="mt-6 max-w-xl border-l border-bronze/40 pl-5 text-base leading-relaxed text-muted-foreground">
              {doctor.heroParagraph}
            </p>
            <ScheduleButton href={doctor.whatsappUrl} className="mt-9" />
          </div>
        </Reveal>

        <Reveal delay={120} className="relative flex justify-center lg:justify-end">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 size-[22rem] -translate-x-1/2 rounded-full bg-cream-deep sm:size-[26rem] lg:size-[30rem]"
          />
          <img
            src={drCarlos.url}
            alt={`Retrato profissional de ${doctor.prefix} ${doctor.firstName} ${doctor.lastName} de jaleco branco`}
            width={912}
            height={1200}
            className="relative w-[19rem] max-w-full object-contain drop-shadow-[0_24px_50px_rgba(88,64,42,0.16)] sm:w-[23rem] lg:w-[26rem]"
          />
        </Reveal>
      </div>
    </header>
  );
}