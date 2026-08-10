import { doctor } from "@/data/doctor";
import navLogo from "@/assets/nav-logo.png.asset.json";
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
    { label: `O ${doctor.prefix} ${doctor.firstName.split(' ')[0]}`, href: "#formacao" },
    { label: "Oftalmologia", href: "#tratamentos" },
    { label: "Áreas de Atuação", href: "#tratamentos" },
    { label: "Conteúdos", href: "#contato" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src={navLogo.url} alt="Logo" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-espresso">{doctor.prefix} {doctor.firstName} {doctor.lastName}</p>
            <p className="text-[10px] font-bold tracking-[0.2em] text-bronze uppercase">{doctor.specialty}</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-espresso/80 transition-colors hover:text-bronze"
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
