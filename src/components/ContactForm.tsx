"use client";

import { useState } from "react";
import { brand } from "@/content/site";
import { XMark } from "./ui";

const topics = ["A new project", "AI and agents", "Cloud and platforms", "Data", "Cybersecurity", "Careers", "Something else"];

/**
 * Builds the message and opens it in the visitor's email app.
 * Swap the submit handler for a real endpoint when one exists.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (!name) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter an email address like name@company.com.";
    if (message.length < 10) next.message = "Tell us a little more, at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = `${f.get("topic")}: ${name}${f.get("company") ? `, ${f.get("company")}` : ""}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-2 w-full rounded-[3px] border border-rule bg-white px-4 py-3.5 text-midnight outline-none transition-colors focus:border-cobalt";

  if (sent) {
    return (
      <div className="fade-in border-t-2 border-cobalt pt-8" role="status">
        <p className="display t-2">Your email app should now be open.</p>
        <p className="mt-4 text-slate">
          Send the message from there and an engineer will reply within two working days. If nothing opened, write to{" "}
          <a href={`mailto:${brand.email}`} className="link-line font-semibold text-cobalt">
            {brand.email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="link-line mt-6 text-[15px] font-semibold">
          Edit the message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <label className="block text-[15px] font-medium">
        Name
        <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="err-name" />
        {errors.name && (
          <span id="err-name" className="mt-1.5 block text-sm text-cobalt-deep">
            {errors.name}
          </span>
        )}
      </label>
      <label className="block text-[15px] font-medium">
        Work email
        <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="err-email" />
        {errors.email && (
          <span id="err-email" className="mt-1.5 block text-sm text-cobalt-deep">
            {errors.email}
          </span>
        )}
      </label>
      <label className="block text-[15px] font-medium">
        Company <span className="font-normal text-slate">(optional)</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block text-[15px] font-medium">
        Topic
        <select name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-[15px] font-medium sm:col-span-2">
        What are you trying to change?
        <textarea name="message" rows={6} className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby="err-message" />
        {errors.message && (
          <span id="err-message" className="mt-1.5 block text-sm text-cobalt-deep">
            {errors.message}
          </span>
        )}
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn btn-primary">
          Write the email
          <XMark />
        </button>
        <p className="text-sm text-slate">This opens your email app with your message filled in.</p>
      </div>
    </form>
  );
}
