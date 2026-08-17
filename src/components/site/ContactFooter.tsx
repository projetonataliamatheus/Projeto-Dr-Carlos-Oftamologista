import { doctor, doctorFullName } from "@/data/doctor";
import { Reveal } from "./Reveal";
import drFooter from "@/assets/dr-footer-final-v10.png";
import { ScheduleButton } from "./ScheduleButton";
import { Phone, MapPin } from "lucide-react";

export function ContactFooter() {
  const initials = `${doctor.firstName.charAt(0)}${doctor.lastName.charAt(0)}`;

  return (
    <footer id="contato" className="mt-20 bg-[#F9F5F1]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Info Side */}
          <Reveal>
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-5xl font-light leading-[1.1] text-espresso sm:text-6xl">
                  {doctor.prefix} {doctor.firstName} <br />
                  <span className="font-medium">{doctor.lastName}</span>
                </h2>
                <div className="h-px w-32 bg-bronze/20" />
              </div>

              <div className="space-y-12">
                {/* Contact Buttons */}
                <div className="flex flex-col gap-6 sm:flex-row">
                  <ScheduleButton href={doctor.whatsappUrl} className="px-10 py-5 text-sm" />
                  <a
                    href={`tel:${doctor.phoneLabel.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-3 rounded-full border border-bronze/20 bg-white px-10 py-5 text-sm font-semibold tracking-wider text-espresso transition-all duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-lg"
                  >
                    <Phone className="size-4 text-bronze" />
                    {doctor.phoneLabel}
                  </a>
                </div>

                {/* Location */}
                <div className="space-y-10">
                  <p className="text-xs font-bold text-bronze uppercase tracking-[0.3em]">
                    Onde Atendemos
                  </p>
                  {doctor.locations.map((loc, idx) => (
                    <div key={idx} className="group flex gap-6">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-bronze shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                        <MapPin className="size-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-espresso">{loc.name}</h4>
                        <p className="mt-2 text-base text-muted-foreground/80 leading-relaxed max-w-sm">
                          {loc.address}
                        </p>
                        <a
                          href={loc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-xs font-bold text-bronze transition-all duration-300 hover:gap-2"
                        >
                          VER NO MAPA
                          <span className="ml-2 block h-px w-8 bg-bronze/30 transition-all duration-300 group-hover:w-12 group-hover:bg-bronze" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Photo Side */}
          <Reveal className="group relative">
            <div className="relative flex h-full items-end justify-center lg:justify-end">
              {/* Doctor Image */}
              <img
                src={drFooter}
                alt={`Retrato profissional de ${doctor.prefix} ${doctor.firstName} ${doctor.lastName}`}
                className="relative z-10 h-auto w-[24rem] max-w-full object-contain transition-all duration-1000 ease-out group-hover:scale-105 sm:w-[28rem] lg:w-[40rem]"
                style={{
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </Reveal>
        </div>

        {/* Footer Bottom */}
        <div className="mt-32 flex flex-col items-center justify-between border-t border-bronze/10 pt-12 sm:flex-row">
          <p className="text-[10px] font-medium text-espresso/40 uppercase tracking-[0.3em]">
            {new Date().getFullYear()} © {doctorFullName} | Todos os direitos reservados.
          </p>
          <div className="mt-6 flex gap-10 sm:mt-0">
            <a href="#" className="text-[10px] font-bold text-bronze hover:text-espresso transition-colors uppercase tracking-[0.2em]">
              Política de Privacidade
            </a>
            <a href="#" className="text-[10px] font-bold text-bronze hover:text-espresso transition-colors uppercase tracking-[0.2em]">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}