import { doctor } from "@/data/doctor";
import { ScheduleButton } from "./ScheduleButton";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "O Dr. Carlos", href: "#formacao" },
    { label: "Oftalmologia", href: "#tratamentos" },
    { label: "Áreas de Atuação", href: "#tratamentos" },
    { label: "Conteúdos", href: "#contato" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-white/90 py-3 shadow-sm backdrop-blur-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <div className="flex shrink-0 items-center">
          <span className="text-xl font-medium tracking-tight text-espresso lg:text-2xl">
            {doctor.prefix} <span className="font-light text-espresso/70">Carlos Rodrigo</span>
          </span>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-6 xl:gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[11px] font-bold tracking-[0.2em] text-espresso/60 transition-all hover:text-bronze uppercase"
            >
              {link.label}
            </a>
          ))}
          <ScheduleButton href={doctor.whatsappUrl} className="scale-90" />
        </div>
      </div>
    </nav>
  );
}
