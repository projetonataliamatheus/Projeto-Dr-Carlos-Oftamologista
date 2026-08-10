import { doctor } from "@/data/doctor";
import { Reveal } from "./Reveal";

export function QuoteBand() {
  const { quote } = doctor;

  return (
    <section className="px-6 py-24 lg:py-32">
      <Reveal as="blockquote" className="mx-auto max-w-4xl text-center">
        <p className="text-2xl leading-snug font-light tracking-tight text-espresso sm:text-3xl lg:text-[2.6rem]">
          {quote.before}
          <strong className="font-semibold">{quote.highlight1}</strong>
          {quote.middle}
          <strong className="font-semibold">{quote.highlight2}</strong>
          {quote.after}
          <strong className="font-semibold">{quote.highlight3}</strong>
        </p>
      </Reveal>
    </section>
  );
}