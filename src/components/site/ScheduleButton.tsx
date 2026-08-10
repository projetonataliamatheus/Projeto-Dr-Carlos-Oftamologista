import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScheduleButton({
  href,
  label = "AGENDE SUA CONSULTA",
  className,
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-bronze px-8 py-4 text-sm font-medium tracking-[0.14em] text-bronze-foreground uppercase transition-all duration-300 hover:bg-bronze-strong hover:shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {label}
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}