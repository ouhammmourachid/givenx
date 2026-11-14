import type { Metadata } from "next";
import Link from "next/link";
import Art from "@/components/Art";
import FilterGrid from "@/components/FilterGrid";
import { PageHero, formatDate } from "@/components/ui";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Expert views, research and news from GivenX Tech engineers.",
};

export default function InsightsPage() {
  const [lead, ...rest] = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  const types = Array.from(new Set(insights.map((i) => i.type)));

  return (
    <>
      <PageHero kicker="Insights" title="Field notes from people who build" intro="Practical writing on AI, cloud, data and security, plus news from GivenX Tech." />

      <section className="pt-16 md:pt-24">
        <div className="shell">
          <Link href={`/insights/${lead.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center">
            <Art seed={lead.art} className="aspect-[16/10] w-full lg:col-span-7" />
            <div className="lg:col-span-5">
              <p className="text-sm text-slate">
                Latest, {lead.type}, {formatDate(lead.date)}
              </p>
              <h2 className="display t-2 mt-3">
                <span className="link-line">{lead.title}</span>
              </h2>
              <p className="lede mt-5">{lead.excerpt}</p>
              <p className="mt-6 text-[15px]">
                <span className="font-semibold">{lead.author.name}</span>
                <span className="text-slate">, {lead.author.role}</span>
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <FilterGrid kind="insights" items={rest} filters={types} />
        </div>
      </section>
    </>
  );
}
