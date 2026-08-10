import { doctor } from "@/data/doctor";

export function WhatsappFloat() {
  return (
    <a
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center"
    >
      <span className="pulse-ring absolute inset-0" aria-hidden="true" />
      <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-whatsapp shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7 text-bronze-foreground"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.05.24-3.55-.74-3.02-1.19-4.9-4.32-5.05-4.52-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4.002.57.01.18.008.43-.07.67.51.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.95.29.15.49.22.56.35.07.13.07.75-.17 1.43Z" />
        </svg>
      </span>
    </a>
  );
}