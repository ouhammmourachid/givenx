import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Get in touch",
  description: "Talk to a GivenX Tech engineer about your AI, cloud or data project.",
};

const steps = [
  { title: "We reply", text: "An engineer, not a salesperson, replies within two working days." },
  { title: "We listen", text: "A 45-minute call to understand the problem, the people and the constraints." },
  { title: "We propose", text: "A short written proposal with scope, team and a first milestone." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Get in touch" title="Tell us what you want to change" intro="Share a few lines about the problem. We will come back with questions, not a sales deck." />

      <section className="section">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="display t-3">What happens next</h2>
            <ol className="mt-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5 border-t border-rule py-6">
                  <span className="display text-xl text-cobalt tabular-nums">{i + 1}</span>
                  <div>
                    <h3 className="wide font-semibold">{s.title}</h3>
                    <p className="mt-1 text-[15px] text-slate">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="border-t border-rule pt-6">
              <p className="text-[15px] text-slate">Prefer email?</p>
              <a href={`mailto:${brand.email}`} className="link-line wide mt-1 inline-block text-lg font-semibold text-cobalt">
                {brand.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
