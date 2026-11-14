import type { Metadata } from "next";
import Link from "next/link";
import Art from "@/components/Art";
import { PageHero, XMark } from "@/components/ui";
import { industries, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI, cloud, data, security and workplace services from GivenX Tech.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Everything it takes to ship and run modern technology"
        intro="Eleven practices, one delivery team. Start with the problem you have; we bring the specialists it needs."
      />

      <section className="section">
        <div className="shell grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col">
              <Art seed={s.art} className="aspect-[4/3] w-full" />
              <p className="mt-5 text-sm text-slate">{s.short}</p>
              <h2 className="display t-3 mt-2 flex items-start justify-between gap-4">
                <span className="link-line">{s.name}</span>
                <XMark className="mt-2 h-3 w-3 shrink-0 text-cobalt transition-transform duration-500 group-hover:rotate-90" />
              </h2>
              <p className="mt-3 text-[15px] text-slate">{s.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-paper">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <h2 className="display t-2 lg:col-span-5">Sectors we know well</h2>
          <ul className="flex flex-wrap gap-3 lg:col-span-7">
            {industries.map((i) => (
              <li key={i} className="wide rounded-[3px] border border-rule bg-white px-4 py-2.5 text-[15px] font-medium">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
