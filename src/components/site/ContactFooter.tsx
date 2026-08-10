import { MapPin, Phone } from "lucide-react";
import { doctor, doctorFullName } from "@/data/doctor";
import { Reveal } from "./Reveal";
import { ScheduleButton } from "./ScheduleButton";
import contactAsset from "@/assets/dr-contact-final-v7.png.asset.json";

export function ContactFooter() {
  const location = doctor.locations[0] || {
    name: "Clínica",
    address: "Endereço não informado",
    mapsUrl: "#"
  };

  return (
    <footer id="contato" className="mt-20 overflow-hidden bg-[#EAE2D9]">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Doctor Name */}
                <h2 className="text-4xl font-semibold tracking-tight text-espresso sm:text-5xl lg:text-[3.5rem] leading-[1.1]">
                  {doctor.prefix} {doctor.firstName}
                  <br />
                  {doctor.lastName}
                </h2>
                
                <p className="mt-4 text-sm font-bold tracking-[0.3em] text-bronze uppercase">
                  {doctor.specialty.toUpperCase()}
                </p>

                {/* Main CTA */}
                <div className="mt-10">
                  <ScheduleButton 
                    href={doctor.whatsappUrl} 
                    className="h-14 px-10 text-lg"
                    label="AGENDE SUA CONSULTA →"
                  />
                </div>

                {/* Phone */}
                <a
                  href={doctor.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-4 text-2xl font-medium text-espresso transition-colors hover:text-bronze"
                >
                  <div className="flex size-14 items-center justify-center rounded-full border border-bronze/30 text-bronze">
                    <Phone className="size-6" />
                  </div>
                  {doctor.phoneLabel}
                </a>

                {/* Address Section */}
                <div className="mt-16 w-full max-w-md">
                  <div className="relative flex items-center justify-center gap-4 lg:justify-start">
                    <div className="h-px w-16 bg-bronze/30" />
                    <span className="text-[11px] font-bold tracking-[0.3em] text-bronze uppercase">
                      ATENDIMENTO
                    </span>
                    <div className="h-px flex-1 bg-bronze/30" />
                  </div>

                  <div className="mt-8 flex flex-col items-center lg:items-start">
                    <h3 className="text-sm font-extrabold text-espresso uppercase tracking-wider">
                      {location.name}
                    </h3>
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-start gap-3 text-base text-espresso/70 transition-colors hover:text-bronze"
                    >
                      <MapPin className="mt-1 size-5 shrink-0 text-bronze" aria-hidden="true" />
                      <span className="max-w-xs">{location.address}</span>
                    </a>
                  </div>
                </div>

                {/* Copyright Line */}
                <div className="mt-20 flex w-full items-center justify-center gap-2 text-[10px] font-medium text-espresso/50 lg:justify-start">
                  <span>2023 © {doctorFullName} | Todos os direitos reservados.</span>
                  <div className="h-4 w-px bg-espresso/20 mx-1" />
                  <span className="italic">✎</span>
                  <div className="h-px flex-1 bg-espresso/10 ml-2" />
                </div>
              </div>
            </Reveal>

            {/* Image Area - Using the uploaded reference as a whole container if needed or replicating its layout */}
            <div className="relative hidden lg:block">
              <Reveal delay={200} className="group relative">
                {/* We use the uploaded image as a background reference for the right side or just replicate its elements */}
                <div className="relative z-10 overflow-hidden rounded-[2.5rem]">
                   <img
                    src={contactAsset.url}
                    alt={doctorFullName}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            </div>
            
            {/* Mobile Image */}
            <div className="lg:hidden">
              <img
                src={contactAsset.url}
                alt={doctorFullName}
                className="w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}