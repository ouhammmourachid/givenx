import Link from "next/link";
import { brand, services } from "@/content/site";
import Logo from "./Logo";
import { ButtonLink } from "./ui";

const company = [
  { label: "About us", href: "/about" },
  { label: "Success stories", href: "/success-stories" },
  { label: "Insights", href: "/insights" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-midnight text-white">
      <div className="shell border-b border-white/10 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="display t-1 lg:col-span-8">Have a problem worth engineering?</h2>
          <div className="lg:col-span-4 lg:justify-self-end">
            <p className="lede mb-6 max-w-sm">Tell us what you are trying to change. An engineer replies within two working days.</p>
            <ButtonLink href="/contact">Talk to an engineer</ButtonLink>
          </div>
        </div>
      </div>

      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="light" height={52} />
          <p className="mt-6 max-w-xs text-[15px] text-white/60">{brand.tagline}. AI, cloud and data engineering for organisations that want change to stick.</p>
        </div>
        <div className="lg:col-span-4">
          <p className="mb-4 text-sm text-sky">Services</p>
          <ul className="grid grid-cols-1 gap-2 text-[15px] sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="link-line text-white/80 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-4 text-sm text-sky">Company</p>
          <ul className="space-y-2 text-[15px]">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-line text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-4 text-sm text-sky">Contact</p>
          <a href={`mailto:${brand.email}`} className="link-line text-[15px] text-white/80 hover:text-white">
            {brand.email}
          </a>
          <p className="mt-2 text-[15px] text-white/60">Delivery hubs in 12 countries</p>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}</p>
        <a href="#top" className="link-line hover:text-white">
          Back to top
        </a>
      </div>

      {/* oversized X from the logo, cropped by the footer edge */}
      <svg aria-hidden viewBox="0 0 100 100" className="pointer-events-none absolute -bottom-40 -right-24 h-[420px] w-[420px] text-cobalt opacity-25" fill="none" stroke="currentColor" strokeWidth="9">
        <path d="M10 10 90 90M90 10 10 90" />
      </svg>
    </footer>
  );
}
