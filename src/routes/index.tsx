import { createFileRoute } from "@tanstack/react-router";

import { ContactFooter } from "@/components/site/ContactFooter";
import { Education } from "@/components/site/Education";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { QuoteBand } from "@/components/site/QuoteBand";
import { Treatments } from "@/components/site/Treatments";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";
import { doctor, doctorFullName, registration } from "@/data/doctor";

const title = `${doctorFullName} — ${doctor.specialty}`;
const description = `${doctor.specialty} | ${registration}. Consultas, diagnóstico de precisão e tratamentos com tecnologia avançada. Agende sua consulta.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background pt-[80px]">
      <Navbar />
      <Hero />
      <Education />
      <QuoteBand />
      <Treatments />
      <ContactFooter />
      <WhatsappFloat />
    </main>
  );
}
