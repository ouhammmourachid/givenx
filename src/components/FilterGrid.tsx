"use client";

import { useState } from "react";
import type { Insight, Story } from "@/content/site";
import { InsightCard, StoryCard } from "./cards";

type Props =
  | { kind: "stories"; items: Story[]; filters: string[] }
  | { kind: "insights"; items: Insight[]; filters: string[] };

/** Filter chips above a card grid. Filtering is instant and client-side. */
export default function FilterGrid(props: Props) {
  const [active, setActive] = useState("All");
  const key = (x: Story | Insight) => (props.kind === "stories" ? (x as Story).tag : (x as Insight).type);
  const items = props.items.filter((x) => active === "All" || key(x) === active);

  return (
    <>
      <div role="group" aria-label="Filter" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
        {["All", ...props.filters].map((f) => {
          const count = f === "All" ? props.items.length : props.items.filter((x) => key(x) === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`wide shrink-0 rounded-[3px] border px-4 py-2.5 text-[15px] font-medium transition-colors ${
                active === f ? "border-midnight bg-midnight text-white" : "border-rule hover:border-midnight"
              }`}
            >
              {f} <span className={`ml-1 tabular-nums ${active === f ? "text-sky" : "text-slate"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {props.kind === "stories"
          ? (items as Story[]).map((s) => <StoryCard key={s.slug} story={s} className="fade-in" />)
          : (items as Insight[]).map((i) => <InsightCard key={i.slug} insight={i} className="fade-in" />)}
      </div>
    </>
  );
}
