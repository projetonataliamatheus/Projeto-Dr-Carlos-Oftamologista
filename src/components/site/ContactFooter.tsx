import { MapPin, Phone } from "lucide-react";
import { doctor, doctorFullName, registration } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";
import doctorFooterPhoto from "@/assets/dr-footer-final-v2.png.asset.json";

export function ContactFooter() {
  return (
    <footer id="contato" className="mt-20 overflow-hidden bg-[#F9F5F1]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex flex-col gap-10">
              {/* Logo/Name Area */}
              <div>
                <p className="text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
                  {doctor.prefix} {doctor.firstName}
                  <br />
                  {doctor.lastName}
                </p>
                <p className="label-wide mt-4 text-xs font-medium tracking-[0.2em] text-bronze uppercase">
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
                  className="flex items-center gap-4 text-xl font-medium text-espresso transition-colors hover:text-bronze"
                >
                  <div className="flex size-12 items-center justify-center rounded-full border border-bronze/30 text-bronze">
                    <Phone className="size-6" />
                  </div>
                  {doctor.phoneLabel}
                </a>
              </div>

              {/* Locations */}
              <div className="space-y-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="h-px w-full max-w-[100px] bg-bronze/20" />
                  <span className="label-wide text-[11px] font-bold text-bronze uppercase tracking-[0.25em]">
                    Atendimento
                  </span>
                  <div className="h-px flex-1 bg-bronze/20" />
                </div>
                <div className="grid gap-10">
                  {doctor.locations.map((location) => (
                    <div key={location.name} className="group">
                      <h3 className="text-sm font-bold text-espresso uppercase tracking-wider">
                        {location.name}
                      </h3>
                      <a
                        href={location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex items-start gap-3 text-base leading-relaxed text-muted-foreground transition-colors hover:text-bronze"
                      >
                        <MapPin className="mt-1 size-5 shrink-0 text-bronze" aria-hidden="true" />
                        <span className="max-w-sm">{location.address}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src={doctorFooterPhoto.url}
                alt={`Foto de ${doctorFullName}`}
                className="relative z-10 w-full object-cover shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-white/40 px-6 py-8 backdrop-blur-sm">
        <p className="mx-auto max-w-6xl text-center text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
          {new Date().getFullYear()} © {doctorFullName} | {registration} | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}