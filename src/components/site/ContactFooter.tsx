import { MapPin, Phone } from "lucide-react";
import { doctor, doctorFullName, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";

export function ContactFooter() {
  return (
    <footer className="mt-20">
      <Reveal className="surface-taupe px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-8 border-b border-taupe-foreground/25 pb-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-2xl tracking-tight sm:text-3xl">
                <span className="font-light">{doctor.prefix} </span>
                <span className="font-semibold">
                  {doctor.firstName} {doctor.lastName}
                </span>
              </p>
              <p className="label-wide mt-2 text-xs opacity-85">{registration}</p>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href={doctor.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
              >
                <Phone className="size-4" aria-hidden="true" />
                {doctor.phoneLabel}
              </a>
              <ScheduleButton href={doctor.whatsappUrl} />
            </div>
          </div>

          <div className="pt-12">
            <h2 className="label-wide text-xs opacity-85">{doctor.locationsTitle}</h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              {doctor.locations.map((location) => (
                <div key={location.name}>
                  <h3 className="text-lg font-semibold tracking-tight">{location.name}</h3>
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex max-w-sm items-start gap-3 text-sm leading-relaxed opacity-90 transition-opacity hover:opacity-70"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {location.address}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="bg-cream-deep px-6 py-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted-foreground">
          {new Date().getFullYear()} © {doctorFullName} | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}