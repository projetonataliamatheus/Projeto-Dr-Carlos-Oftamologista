import { doctor, doctorFullName } from "@/data/doctor";
import { Reveal } from "./Reveal";
import drCarlos from "@/assets/dr-hero-fix.png.asset.json";
import drFooter from "@/assets/dr-footer-final-v10.png.asset.json";
import { ScheduleButton } from "./ScheduleButton";
import { Phone, MapPin } from "lucide-react";

export function ContactFooter() {
  const initials = `${doctor.firstName.charAt(0)}${doctor.lastName.charAt(0)}`;

  return (
    <footer id="contato" className="mt-20 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Info Side */}
          <Reveal>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold text-espresso">
                  {doctor.prefix} {doctor.firstName} <br />
                  {doctor.lastName}
                </h2>
                <div className="h-1 w-20 bg-bronze/40" />
              </div>

              <div className="space-y-8">
                {/* Contact Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <ScheduleButton href={doctor.whatsappUrl} />
                  <a
                    href={`tel:${doctor.phoneLabel.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-bronze/30 px-8 py-4 text-sm font-semibold text-espresso transition-all hover:bg-bronze hover:text-white"
                  >
                    <Phone className="size-4" />
                    {doctor.phoneLabel}
                  </a>
                </div>

                {/* Location */}
                <div className="space-y-6">
                  <p className="label-wide text-xs font-bold text-bronze uppercase tracking-widest">
                    Onde Atendemos
                  </p>
                  {doctor.locations.map((loc, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-espresso">{loc.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xs">
                          {loc.address}
                        </p>
                        <a
                          href={loc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-xs font-bold text-bronze underline decoration-bronze/30 underline-offset-4 transition-colors hover:text-espresso"
                        >
                          VER NO MAPA
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Photo Side */}
          <Reveal delay={200} className="group relative">
            <div className="relative flex h-full items-end justify-center lg:justify-end">
              {/* Doctor Image */}
              <img
                src={drFooter.url}
                alt={`Retrato profissional de ${doctor.prefix} ${doctor.firstName} ${doctor.lastName}`}
                className="relative z-10 h-auto w-[22rem] max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 sm:w-[26rem] lg:w-[32rem]"
                style={{
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </Reveal>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-bronze/10 pt-8 sm:flex-row">
          <p className="text-[10px] font-medium text-espresso/40 uppercase tracking-[0.2em]">
            {new Date().getFullYear()} © {doctorFullName} | Todos os direitos reservados.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a href="#" className="text-[10px] font-bold text-bronze hover:text-espresso transition-colors uppercase tracking-widest">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
