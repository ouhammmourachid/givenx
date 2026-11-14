import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { StoryCard } from "@/components/cards";
import { Breadcrumb, ButtonLink, HeroFallback, PageHero, XMark } from "@/components/ui";
import { stories } from "@/content/site";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/success-stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = stories.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default function StoryPage({ params }: PageProps<"/success-stories/[slug]">) {
  return (
    <Suspense fallback={<HeroFallback />}>
      <StoryContent params={params} />
    </Suspense>
  );
}

async function StoryContent({ params }: Pick<PageProps<"/success-stories/[slug]">, "params">) {
  const { slug } = await params;
  const s = stories.find((x) => x.slug === slug);
  if (!s) notFound();
  const more = stories
    .filter((x) => x.slug !== s.slug && x.tag === s.tag)
    .concat(stories.filter((x) => x.tag !== s.tag))
    .slice(0, 3);

  const blocks = [
    { h: "The client", p: s.client },
    { h: "The challenge", p: s.challenge },
    { h: "What we built", p: s.solution },
  ];

  return (
    <>
      <PageHero
        kicker={<Breadcrumb items={[{ label: "Success stories", href: "/success-stories" }, { label: s.sector }]} />}
        title={s.title}
        intro={s.summary}
        art={s.art}
      />

      <section className="section">
        <div className="shell">
          <h2 className="text-[15px] text-slate">At a glance</h2>
          <ul className="mt-6 grid gap-8 border-t border-rule pt-8 md:grid-cols-3">
            {s.glance.map((g) => (
              <li key={g.title}>
                <p className="display t-3">{g.title}</p>
                <p className="mt-3 text-slate">{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            {blocks.map((b) => (
              <div key={b.h}>
                <h2 className="display t-2">{b.h}</h2>
                <p className="measure mt-5 text-lg text-slate">{b.p}</p>
              </div>
            ))}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="on-dark bg-midnight p-8 text-white lg:sticky lg:top-28">
              <h2 className="display t-3">Results</h2>
              <ul className="mt-6 space-y-4">
                {s.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 border-t border-white/15 pt-4">
                    <XMark className="mt-2 h-2.5 w-2.5 shrink-0 text-sky" strokeWidth={2.4} />
                    {r}
                  </li>
                ))}
              </ul>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 text-sm">
                <div>
                  <dt className="text-white/55">Sector</dt>
                  <dd className="mt-1 font-semibold">{s.sector}</dd>
                </div>
                <div>
                  <dt className="text-white/55">Practice</dt>
                  <dd className="mt-1 font-semibold">{s.tag}</dd>
                </div>
              </dl>
              <ButtonLink href="/contact" variant="light" className="mt-8 w-full justify-between">
                Start a similar project
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display t-2">More success stories</h2>
            <Link href="/success-stories" className="link-line text-[15px] font-semibold text-cobalt">
              All success stories
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {more.map((m) => (
              <StoryCard key={m.slug} story={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
