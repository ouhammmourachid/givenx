"use client";

import { useEffect, useRef, useState } from "react";
import Art from "../Art";

type Stage = { n: string; title: string; text: string };

const detail: Record<string, string> = {
  "01": "We map the workflows where AI and automation pay back first, check your data and platform readiness, and agree how success will be measured.",
  "02": "We modernise the cloud and data foundations those workflows depend on: landing zones, lakehouses, pipelines and the controls around them.",
  "03": "Small pods of engineers ship working AI into production, starting with one workflow and widening from there.",
  "04": "Guardrails, model governance and security are built into the delivery pipeline rather than reviewed at the end.",
  "05": "We run what we build with clear service levels, and keep cutting cost and toil every sprint.",
  "06": "Training, playbooks and floor support so the people who own the work actually change how they do it.",
};

/**
 * Six delivery stages. The left column sticks while the stages scroll past;
 * whichever stage crosses the middle of the viewport becomes active.
 */
export default function Stages({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const progress = (active + 1) / stages.length;

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <h2 className="display t-1">From first idea to daily use</h2>
          <p className="lede measure mt-6">One team carries the work through six stages, so nothing is lost in a hand-over.</p>
          <div className="relative mt-10 hidden aspect-[4/3] lg:block">
            {stages.map((s, i) => (
              <div key={s.n} className={`absolute inset-0 transition-opacity duration-700 ${active === i ? "opacity-100" : "opacity-0"}`}>
                <Art seed={i * 2 + 1} tone={i % 2 ? "cobalt" : "midnight"} className="h-full w-full ring-1 ring-white/10" />
              </div>
            ))}
          </div>
          <div className="mt-6 hidden h-[2px] w-full bg-white/10 lg:block" aria-hidden>
            <div className="h-full origin-left bg-cobalt transition-transform duration-700" style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </div>
      <ol className="lg:col-span-6 lg:col-start-7">
        {stages.map((s, i) => (
          <li
            key={s.n}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
            className={`border-t border-white/15 py-10 transition-opacity duration-500 lg:min-h-[44vh] lg:py-14 ${
              active === i ? "opacity-100" : "lg:opacity-35"
            }`}
          >
            <div className="flex items-baseline gap-6">
              <span className="display text-2xl text-sky tabular-nums">{s.n}</span>
              <div>
                <h3 className="display t-2">{s.title}</h3>
                <p className="mt-2 text-lg text-sky">{s.text}</p>
                <p className="mt-5 max-w-[52ch] text-white/70">{detail[s.n]}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
