"use client";

import Link from "next/link";
import { useState } from "react";
import { contactInfo } from "@/data/portfolio";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactContent() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = <K extends keyof ContactFormState>(
    key: K,
    value: ContactFormState[K]
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Failed to send your message.");
      }

      setStatus("success");
      setFeedback(result.message || "Message sent successfully.");
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Failed to send your message."
      );
    }
  };

  return (
    <div className="relative pt-28 pb-20 overflow-x-hidden">
      <div className="pointer-events-none absolute -right-8 top-20 h-[220px] w-[220px] rounded-full bg-[#e5a93c]/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] -z-10" />
      <div className="pointer-events-none absolute -left-10 top-1/2 h-[220px] w-[220px] rounded-full bg-neutral-800/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-xs font-medium">
          <Link
            href="/"
            className="text-[#e5a93c] transition-colors hover:text-[#f5b945]"
          >
            Home
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">Contact</span>
        </nav>

        <div className="mb-10 max-w-xl">
          <h1 className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contact Me
          </h1>
          <p className="text-sm text-neutral-400 sm:text-base">
            Let&apos;s connect! I&apos;m open to discussing new projects or opportunities.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <div className="rounded-3xl border border-neutral-800/90 bg-[#0c0f15] p-5 shadow-2xl">
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const isExternal = Boolean(info.href?.startsWith("http"));

                  return (
                    <div key={info.label} className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-[#141820] text-sm text-[#e5a93c]">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="mt-1 block break-words text-sm font-medium leading-relaxed text-neutral-200 transition-colors hover:text-[#e5a93c]"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-neutral-200">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800/90 bg-[#0c0f15] p-5 shadow-xl">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                <span>Availability</span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                Available for work. I&apos;m currently available for full-time, part-time,
                or freelance projects.
              </p>
            </div>
          </aside>

          <section className="rounded-3xl border border-neutral-800/90 bg-[#0c0f15] p-6 shadow-2xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Your message will be delivered directly to my inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-neutral-300">
                    Your Name
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-neutral-800 bg-[#0a1018] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#e5a93c]"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-neutral-300">
                    Your Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-neutral-800 bg-[#0a1018] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#e5a93c]"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-medium text-neutral-300">
                  Subject
                </span>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(event) => handleChange("subject", event.target.value)}
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-neutral-800 bg-[#0a1018] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#e5a93c]"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-medium text-neutral-300">
                  Message
                </span>
                <textarea
                  value={form.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder="Write your message..."
                  rows={7}
                  className="w-full resize-none rounded-xl border border-neutral-800 bg-[#0a1018] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#e5a93c]"
                  required
                />
              </label>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-[#e5a93c] px-6 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-[#f5b945] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                  <span aria-hidden="true">→</span>
                </button>

                <p
                  aria-live="polite"
                  className={`text-sm ${
                    status === "error" ? "text-rose-400" : "text-emerald-400"
                  }`}
                >
                  {feedback}
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}