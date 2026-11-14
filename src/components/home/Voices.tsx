"use client";

import { useState } from "react";

type Voice = { quote: string; name: string; org: string };

/** One client quote at a time; moves only when the visitor asks it to. */
export default function Voices({ voices }: { voices: Voice[] }) {
  const [i, setI] = useState(0);
  const v = voices[i];
  const go = (d: number) => setI((x) => (x + d + voices.length) % voices.length);

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-9">
        <figure key={i} className="fade-in" style={{ animationDuration: "0.6s" }}>
          <blockquote className="display t-2">
            <p>&ldquo;{v.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-8 text-[15px]">
            <span className="font-semibold">{v.name}</span>
            <span className="text-slate">, {v.org}</span>
          </figcaption>
        </figure>
      </div>
      <div className="flex items-end gap-3 lg:col-span-3 lg:justify-end">
        <p className="mr-auto text-sm tabular-nums text-slate lg:mr-4" aria-live="polite">
          {i + 1} of {voices.length}
        </p>
        <button type="button" onClick={() => go(-1)} className="btn btn-ghost px-4" aria-label="Previous quote">
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M10 3 5 8l5 5" />
          </svg>
        </button>
        <button type="button" onClick={() => go(1)} className="btn btn-ghost px-4" aria-label="Next quote">
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="m6 3 5 5-5 5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
