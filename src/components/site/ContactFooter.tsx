import { MapPin, Phone } from "lucide-react";
import { doctor, doctorFullName, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";
import doctorFooterPhoto from "@/assets/doctor-footer-photo.png.asset.json";

export function ContactFooter() {
  return (
    <footer id="contato" className="mt-20 overflow-hidden bg-cream/30">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex flex-col gap-10">
              {/* Logo/Name Area */}
              <div>
                <p className="text-3xl tracking-tight sm:text-4xl">
                  <span className="font-light">{doctor.prefix} </span>
                  <span className="font-semibold text-espresso">
                    {doctor.firstName} {doctor.lastName}
                  </span>
                </p>
                <p className="label-wide mt-2 text-xs font-medium text-bronze uppercase">
                  {doctor.specialty}
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col items-start gap-6">
                <ScheduleButton href={doctor.whatsappUrl} />
                <a
                  href={doctor.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-espresso transition-colors hover:text-bronze"
                >
                  <div className="flex size-10 items-center justify-center rounded-full border border-bronze/30 text-bronze">
                    <Phone className="size-5" />
                  </div>
                  {doctor.phoneLabel}
                </a>
              </div>

              {/* Locations */}
              <div className="space-y-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-bronze/20" />
                  <span className="label-wide text-[10px] font-bold text-bronze uppercase tracking-[0.2em]">
                    Atendimento
                  </span>
                  <div className="h-px flex-1 bg-bronze/20" />
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                  {doctor.locations.map((location) => (
                    <div key={location.name} className="group">
                      <h3 className="text-sm font-bold text-espresso uppercase tracking-wider">
                        {location.name}
                      </h3>
                      <a
                        href={location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-bronze"
                      >
                        <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden="true" />
                        <span>{location.address}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative hidden lg:block">
            {/* Decorative circle behind doctor */}
            <div className="absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream-deep/50 blur-2xl" />
            <img
              src={doctorFooterPhoto.url}
              alt={`Foto de ${doctorFullName}`}
              className="relative mx-auto w-full max-w-md object-contain"
            />
          </Reveal>
        </div>
      </div>

      <div className="bg-white/50 px-6 py-8 backdrop-blur-sm">
        <p className="mx-auto max-w-6xl text-center text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
          {new Date().getFullYear()} © {doctorFullName} | {registration} | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}