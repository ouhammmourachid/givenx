import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Art from "@/components/Art";
import { StoryCard } from "@/components/cards";
import Reveal from "@/components/Reveal";
import { Breadcrumb, ButtonLink, HeroFallback, PageHero, XMark } from "@/components/ui";
import { serviceDetails } from "@/content/details";
import { services, stories } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.name, description: s.intro } : {};
}

export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<HeroFallback />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const index = services.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const s = services[index];
  const d = serviceDetails[slug];
  const related = stories.filter((st) => d.storyTags.includes(st.tag)).slice(0, 3);
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHero
        kicker={<Breadcrumb items={[{ label: "Services", href: "/services" }, { label: s.name }]} />}
        title={s.hero}
        intro={s.intro}
        art={s.art}
      >
        <ButtonLink href="/contact">Discuss your project</ButtonLink>
      </PageHero>

      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal as="h2" className="display t-2 lg:col-span-4">
            What we do
          </Reveal>
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {d.capabilities.map((c) => (
              <li key={c.title} className="border-t-2 border-midnight pt-6">
                <h3 className="display t-3">{c.title}</h3>
                <p className="mt-3 text-slate">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-dark section blueprint bg-midnight text-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="display t-1">What you can expect</h2>
            <ul className="mt-10 space-y-5">
              {d.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 border-t border-white/15 pt-5 text-xl">
                  <XMark className="mt-2 h-3 w-3 shrink-0 text-sky" strokeWidth={2.2} />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <Art seed={s.art + 3} tone="cobalt" className="aspect-square w-full lg:col-span-5 lg:col-start-8" />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="shell">
            <Reveal as="h2" className="display t-2">
              Related success stories
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {related.map((st) => (
                <StoryCard key={st.slug} story={st} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-rule">
        <Link href={`/services/${next.slug}`} className="group shell flex flex-col gap-2 py-14 md:flex-row md:items-end md:justify-between">
          <span className="text-[15px] text-slate">Next service</span>
          <span className="display t-1 transition-colors duration-300 group-hover:text-cobalt">{next.name}</span>
        </Link>
      </section>
    </>
  );
}
