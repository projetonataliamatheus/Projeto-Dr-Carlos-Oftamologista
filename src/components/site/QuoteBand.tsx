import { doctor } from "@/data/doctor";
import { Reveal } from "./Reveal";

export function QuoteBand() {
  const { quote } = doctor;

  return (
    <section className="px-6 py-32 lg:py-52">
      <Reveal as="blockquote" className="mx-auto max-w-5xl text-center">
        <p className="text-3xl leading-[1.2] font-light tracking-tight text-espresso sm:text-4xl lg:text-[3.2rem]">
          {quote.before}
          <span className="font-medium italic">{quote.highlight1}</span>
          {quote.middle}
          <span className="font-medium italic">{quote.highlight2}</span>
          {quote.after}
          <span className="font-medium italic">{quote.highlight3}</span>
        </p>
      </Reveal>
    </section>
  );
}