import { doctor, doctorFullName } from "@/data/doctor";
import { Reveal } from "./Reveal";
import footerReference from "@/assets/dr-footer-reference.png.asset.json";

export function ContactFooter() {
  return (
    <footer id="contato" className="mt-20">
      <div className="mx-auto max-w-[1400px] px-4 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            {/* 
              The user wants the footer to look EXACTLY like the image provided.
              The image imagem_1786388857785.png is a complete design block.
              We render it as a single high-quality responsive container that scales perfectly.
            */}
            <img 
              src={footerReference.url} 
              alt="Informações de contato e localização"
              className="w-full h-auto block"
            />
            
            {/* Invisible clickable areas to make it functional like a real UI */}
            <div className="absolute inset-0 z-20">
              {/* WhatsApp/Schedule button area (estimated coordinates based on layout) */}
              <a 
                href={doctor.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-[20%] top-[40%] w-[25%] h-[15%] cursor-pointer"
                title="Agende sua consulta"
              />
              
              {/* Phone area */}
              <a 
                href={`tel:${doctor.phoneLabel.replace(/\D/g, '')}`}
                className="absolute left-[20%] top-[55%] w-[20%] h-[10%] cursor-pointer"
                title="Ligar"
              />
              
              {/* Maps area */}
              <a 
                href={doctor.locations[0]?.mapsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-[15%] top-[70%] w-[35%] h-[15%] cursor-pointer"
                title="Ver no mapa"
              />
            </div>
          </div>
        </Reveal>
        
        {/* Simple text copyright below the image for SEO and accessibility */}
        <div className="mt-8 text-center text-[10px] font-medium text-espresso/40 uppercase tracking-widest">
          {new Date().getFullYear()} © {doctorFullName} | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}