import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="on-dark blueprint relative flex min-h-[80svh] items-center overflow-hidden bg-midnight text-white">
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -right-20 top-1/2 h-[560px] w-[560px] -translate-y-1/2 text-cobalt opacity-60"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      >
        <path d="M10 10 90 90M90 10 10 90" />
      </svg>
      <div className="shell relative pt-24">
        <p className="text-sm text-sky">Error 404</p>
        <h1 className="display t-1 mt-4 max-w-[14ch]">This page is not on the drawing board</h1>
        <p className="lede measure mt-6">The link may be old or mistyped. Start again from the home page or browse our services.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Browse services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
