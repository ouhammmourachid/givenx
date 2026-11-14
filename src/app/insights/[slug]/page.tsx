import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Art from "@/components/Art";
import { InsightCard } from "@/components/cards";
import { Breadcrumb, HeroFallback, formatDate } from "@/components/ui";
import { insights } from "@/content/site";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = insights.find((x) => x.slug === slug);
  return i ? { title: i.title, description: i.excerpt } : {};
}

export default function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  return (
    <Suspense fallback={<HeroFallback />}>
      <InsightContent params={params} />
    </Suspense>
  );
}

async function InsightContent({ params }: Pick<PageProps<"/insights/[slug]">, "params">) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) notFound();
  const related = insights.filter((x) => x.slug !== a.slug && x.topic === a.topic).slice(0, 3);
  const initials = a.author.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <section className="on-dark blueprint bg-midnight pb-16 pt-36 text-white md:pt-44">
        <div className="shell">
          <div className="fade-in text-sm text-sky">
            <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: a.type }]} />
          </div>
          <h1 className="display t-1 mt-6 max-w-[20ch]">
            <span className="hero-line">
              <span style={{ "--d": "80ms" } as React.CSSProperties}>{a.title}</span>
            </span>
          </h1>
          <div className="fade-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[15px]" style={{ "--d": "400ms" } as React.CSSProperties}>
            <div className="flex items-center gap-3">
              <span className="display grid h-11 w-11 place-items-center rounded-full bg-cobalt text-sm" aria-hidden>
                {initials}
              </span>
              <span>
                <span className="block font-semibold">{a.author.name}</span>
                <span className="text-white/60">{a.author.role}</span>
              </span>
            </div>
            <span className="text-white/60">
              <time dateTime={a.date}>{formatDate(a.date)}</time>
            </span>
          </div>
        </div>
      </section>

      <div className="shell">
        <Art seed={a.art} className="aspect-[21/9] w-full" />
      </div>

      <article className="shell py-16 md:py-24">
        <div className="mx-auto max-w-[68ch]">
          <p className="lede text-midnight">{a.excerpt}</p>
          {a.body.map((b, i) => (
            <div key={i} className="mt-8">
              {b.h && <h2 className="display t-3 mb-4 mt-14">{b.h}</h2>}
              <p className="text-[18px] leading-[1.75] text-midnight/85">{b.p}</p>
            </div>
          ))}
          <div className="mt-16 border-t border-rule pt-8">
            <p className="text-[15px] text-slate">Want to talk this through with the author?</p>
            <Link href="/contact" className="link-line mt-2 inline-block text-lg font-semibold text-cobalt">
              Get in touch with our team
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bg-paper">
          <div className="shell">
            <h2 className="display t-2">Keep reading</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {related.map((r) => (
                <InsightCard key={r.slug} insight={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
