import Link from "next/link";
import Art from "@/components/Art";
import { InsightCard, StoryCard } from "@/components/cards";
import Counter from "@/components/Counter";
import HeroX from "@/components/home/HeroX";
import Stages from "@/components/home/Stages";
import Voices from "@/components/home/Voices";
import Reveal from "@/components/Reveal";
import { ButtonLink, XMark } from "@/components/ui";
import { apart, faqs, heroStats, industries, insights, pillars, services, stories, voices } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="on-dark blueprint relative flex min-h-[100svh] items-end overflow-hidden bg-midnight text-white">
        <HeroX />
        <div className="shell relative pb-16 pt-40 md:pb-24">
          <h1 className="display t-hero max-w-[12ch]">
            <span className="hero-line">
              <span style={{ "--d": "100ms" } as React.CSSProperties}>Engineering</span>
            </span>
            <span className="hero-line">
              <span style={{ "--d": "220ms" } as React.CSSProperties}>change that</span>
            </span>
            <span className="hero-line">
              <span style={{ "--d": "340ms" } as React.CSSProperties}>sticks.</span>
            </span>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="lede fade-in md:col-span-6" style={{ "--d": "800ms" } as React.CSSProperties}>
              AI, cloud and data engineers who work inside your business, from the first idea to the day your teams rely on it.
            </p>
            <div className="fade-in flex flex-wrap gap-3 md:col-span-6 md:justify-end" style={{ "--d": "950ms" } as React.CSSProperties}>
              <ButtonLink href="/contact">Talk to an engineer</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                See what we build
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- statement + numbers ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal as="p" className="display t-2 max-w-[24ch]">
            Most programmes stall between the strategy deck and the day job. We close that gap.
          </Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-rule pt-10 lg:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.rest}>
                <dt className="sr-only">{s.strong || s.rest}</dt>
                <dd className="display text-[2.6rem] text-cobalt sm:text-5xl md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-3 max-w-[22ch] text-[15px] text-slate">
                  <span className="font-semibold text-midnight">{s.strong}</span>
                  {s.rest}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- services index ---------- */}
      <section className="section bg-paper">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal as="h2" className="display t-1">
              What we build
            </Reveal>
            <Link href="/services" className="link-line text-[15px] font-semibold text-cobalt">
              All services
            </Link>
          </div>
          <ul className="mt-14 border-b border-rule">
            {services.map((s) => (
              <li key={s.slug} className="border-t border-rule">
                <Link href={`/services/${s.slug}`} className="index-row relative grid items-center gap-2 py-6 md:grid-cols-12 md:gap-6 md:py-7">
                  <span className="index-name display t-3 md:col-span-6">{s.name}</span>
                  <span className="text-[15px] text-slate md:col-span-4">{s.short}</span>
                  <span className="hidden justify-self-end md:col-span-2 md:block">
                    <XMark className="h-3 w-3 text-cobalt" />
                  </span>
                  <Art
                    seed={s.art}
                    className="index-art pointer-events-none absolute right-24 top-1/2 z-10 hidden h-36 w-48 -translate-y-1/2 lg:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- delivery stages ---------- */}
      <section className="on-dark section bg-midnight text-white">
        <div className="shell">
          <Stages stages={pillars} />
        </div>
      </section>

      {/* ---------- success stories ---------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal as="h2" className="display t-1 max-w-[16ch]">
              Work that made it into daily use
            </Reveal>
            <Link href="/success-stories" className="link-line text-[15px] font-semibold text-cobalt">
              All success stories
            </Link>
          </div>
        </div>
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scroll-padding-inline:16px] md:px-10 md:[scroll-padding-inline:40px]">
          {stories.slice(0, 6).map((s) => (
            <StoryCard key={s.slug} story={s} className="w-[82vw] shrink-0 snap-start sm:w-[420px]" />
          ))}
        </div>
      </section>

      {/* ---------- why us ---------- */}
      <section className="section bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal as="h2" className="display t-1 lg:col-span-5">
            Why teams pick GivenX
          </Reveal>
          <ul className="grid gap-10 lg:col-span-7">
            {apart.map((a) => (
              <li key={a.title} className="grid gap-3 border-t border-rule pt-8 md:grid-cols-[1fr_1.3fr] md:gap-8">
                <h3 className="display t-3">{a.title}</h3>
                <p className="text-slate">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- industries marquee ---------- */}
      <section aria-label="Industries we work in" className="marquee-wrap overflow-hidden border-y border-rule py-10">
        <div className="marquee" style={{ "--speed": "60s" } as React.CSSProperties}>
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {industries.map((name) => (
                <li key={name} className="display flex items-center gap-10 pr-10 text-5xl md:text-7xl">
                  {name}
                  <XMark className="h-6 w-6 text-cobalt md:h-8 md:w-8" strokeWidth={2.4} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ---------- voices ---------- */}
      <section className="section">
        <div className="shell">
          <p className="mb-10 text-[15px] text-slate">What clients say about working with us</p>
          <Voices voices={voices} />
        </div>
      </section>

      {/* ---------- insights ---------- */}
      <section className="section bg-paper">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal as="h2" className="display t-1">
              Field notes
            </Reveal>
            <Link href="/insights" className="link-line text-[15px] font-semibold text-cobalt">
              All insights
            </Link>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {insights
              .filter((i) => i.type !== "News")
              .slice(0, 3)
              .map((i) => (
                <InsightCard key={i.slug} insight={i} />
              ))}
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal as="h2" className="display t-1 lg:col-span-4">
            Questions we hear often
          </Reveal>
          <div className="border-b border-rule lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="border-t border-rule">
                <summary className="flex items-center justify-between gap-6 py-6">
                  <span className="wide text-lg font-semibold">{f.q}</span>
                  <XMark className="faq-x h-3.5 w-3.5 shrink-0 rotate-45 text-cobalt" strokeWidth={2} />
                </summary>
                <p className="measure pb-7 text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
