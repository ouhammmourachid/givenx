import type { Metadata } from "next";
import Art from "@/components/Art";
import Reveal from "@/components/Reveal";
import { PageHero, XMark } from "@/components/ui";
import { brand, values } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join GivenX Tech: AI, data, cloud and security engineering careers.",
};

const paths = [
  { title: "Students and graduates", text: "A structured first year with a mentor, a certification budget and real client work from month two.", art: 9 },
  { title: "Experienced engineers", text: "Join a squad that ships to production. Choose depth in one platform or breadth across the stack.", art: 3 },
  { title: "Tech and business leaders", text: "Lead programmes, shape practices and grow the next generation of engineers.", art: 6 },
];

const teams = ["AI & Data", "Cloud Engineering", "Platform & DevOps", "Cybersecurity", "Digital Workplace", "Strategy & Change"];

const perks = [
  { title: "Learning time", text: "Paid time every month for courses, labs and certifications." },
  { title: "Real ownership", text: "Small teams, short decision paths and your name on what ships." },
  { title: "Flexible work", text: "Hybrid by default, with time on site when the client work needs it." },
  { title: "Mobility", text: "Move between practices and countries as your interests change." },
];

export default function CareersPage() {
  const mail = (subject: string) => `mailto:${brand.email}?subject=${encodeURIComponent(subject)}`;
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Do the best engineering work of your career"
        intro="We hire people who care about the craft and about the people who will use what they build."
        art={8}
      >
        <a href={mail("Application: GivenX Tech")} className="btn btn-primary">
          Send us your CV
          <XMark />
        </a>
      </PageHero>

      <section id="phases" className="section scroll-mt-24">
        <div className="shell">
          <Reveal as="h2" className="display t-1">
            Where you could fit
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {paths.map((p) => (
              <div key={p.title}>
                <Art seed={p.art} className="aspect-[4/3] w-full" />
                <h3 className="display t-3 mt-6">{p.title}</h3>
                <p className="mt-3 text-slate">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section bg-midnight text-white">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <h2 className="display t-1 lg:col-span-5">Teams that are hiring</h2>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {teams.map((t) => (
              <li key={t}>
                <a href={mail(`Application: ${t}`)} className="group flex items-center justify-between bg-midnight p-6 transition-colors hover:bg-midnight-2">
                  <span className="wide text-lg font-semibold">{t}</span>
                  <XMark className="h-3 w-3 text-sky transition-transform duration-500 group-hover:rotate-90" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal as="h2" className="display t-1 lg:col-span-4">
            Life at GivenX
          </Reveal>
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {perks.map((p) => (
              <li key={p.title} className="border-t-2 border-midnight pt-6">
                <h3 className="display t-3">{p.title}</h3>
                <p className="mt-3 text-slate">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="shell">
          <h2 className="display t-2">How we work together</h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <li key={v.title} className="border-t border-rule pt-5">
                <h3 className="wide font-semibold">{v.title}</h3>
                <p className="mt-2 text-[15px] text-slate">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
