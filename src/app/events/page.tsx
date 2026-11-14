import type { Metadata } from "next";
import { PageHero, XMark } from "@/components/ui";
import { brand, events } from "@/content/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Briefings, roundtables and conferences hosted by GivenX Tech.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        kicker="Events"
        title="Meet the engineers behind the work"
        intro="Briefings, roundtables and hands-on sessions, in person and online. Places are limited, so register early."
      />

      <section className="section">
        <div className="shell">
          <ul className="border-b border-rule">
            {events.map((e) => {
              const subject = encodeURIComponent(`Registration: ${e.title}`);
              return (
                <li key={e.slug} className="grid gap-6 border-t border-rule py-8 md:grid-cols-12 md:items-center md:py-10">
                  <div className="flex items-baseline gap-3 md:col-span-2 md:block">
                    <p className="display text-6xl leading-none text-cobalt tabular-nums">{e.date}</p>
                    <p className="text-[15px] text-slate md:mt-2">
                      {e.day}, {e.month}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="display t-3">{e.title}</h2>
                    <p className="mt-2 flex items-center gap-2 text-[15px] text-slate">
                      <span className={`inline-block h-2 w-2 rounded-full ${e.online ? "bg-cobalt" : "bg-midnight"}`} aria-hidden />
                      {e.online ? "Online" : e.place}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:justify-self-end">
                    <a href={`mailto:${brand.email}?subject=${subject}`} className="btn btn-ghost">
                      Register
                      <XMark />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-slate">Registering opens your email app with the event name filled in.</p>
        </div>
      </section>
    </>
  );
}
