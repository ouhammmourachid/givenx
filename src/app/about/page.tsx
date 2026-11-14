import type { Metadata } from "next";
import Art from "@/components/Art";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { ButtonLink, PageHero } from "@/components/ui";
import { apart, apartCards, heroStats, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description: "Who GivenX Tech is, how we work and what we value.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Engineers who work inside your business, not beside it"
        intro="GivenX Tech helps organisations turn AI, cloud and data into everyday working practice. We embed senior teams with the people who own the problem, and we stay until the change holds."
        art={0}
      />

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal as="h2" className="display t-1 lg:col-span-5">
            Why we exist
          </Reveal>
          <div className="space-y-6 text-lg text-slate lg:col-span-6 lg:col-start-7">
            <p>
              Technology projects rarely fail for technical reasons. They fail in the gap between the people who design a change and the people who have to live with it.
            </p>
            <p>
              We started GivenX Tech to close that gap. Our engineers sit with planners, claims handlers, technicians and analysts, learn how the work really gets done, and build the tools around that reality.
            </p>
            <p className="text-midnight">The result is technology people choose to use, which is the only kind that pays back.</p>
          </div>
        </div>
      </section>

      <section className="on-dark section blueprint bg-midnight text-white">
        <div className="shell">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.rest} className="border-t border-white/15 pt-6">
                <dt className="sr-only">{s.strong || s.rest}</dt>
                <dd className="display text-[2.6rem] sm:text-5xl md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-3 max-w-[22ch] text-[15px] text-white/65">
                  <span className="font-semibold text-white">{s.strong}</span>
                  {s.rest}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal as="h2" className="display t-1">
            How we work
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {apart.map((a, i) => (
              <div key={a.title}>
                <Art seed={apartCards[i]?.art ?? i} className="aspect-[4/3] w-full" />
                <h3 className="display t-3 mt-6">{a.title}</h3>
                <p className="mt-3 text-slate">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section scroll-mt-24 bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal as="h2" className="display t-1">
              What we value
            </Reveal>
            <p className="lede mt-6">Five habits we hire for, and hold each other to.</p>
          </div>
          <ul className="lg:col-span-8">
            {values.map((v) => (
              <li key={v.title} className="grid gap-3 border-t border-rule py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                <h3 className="display t-3">{v.title}</h3>
                <p className="text-slate">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display t-2 lg:col-span-7">Want to build with us rather than buy from us?</h2>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <ButtonLink href="/careers" variant="ghost">
              See careers
            </ButtonLink>
            <ButtonLink href="/success-stories">Read success stories</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
