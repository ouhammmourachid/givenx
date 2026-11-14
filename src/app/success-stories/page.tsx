import type { Metadata } from "next";
import FilterGrid from "@/components/FilterGrid";
import { PageHero } from "@/components/ui";
import { stories } from "@/content/site";

export const metadata: Metadata = {
  title: "Success stories",
  description: "How GivenX Tech helped clients put AI, cloud and data to work.",
};

export default function StoriesPage() {
  const tags = Array.from(new Set(stories.map((s) => s.tag)));
  return (
    <>
      <PageHero
        kicker="Success stories"
        title="Work that made it into daily use"
        intro="A selection of recent engagements across retail, finance, energy, transport and the public sector."
        art={4}
      />
      <section className="section">
        <div className="shell">
          <FilterGrid kind="stories" items={stories} filters={tags} />
        </div>
      </section>
    </>
  );
}
