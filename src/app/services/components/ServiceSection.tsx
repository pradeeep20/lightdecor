import React from "react";
import Link from "next/link";
import type { ServiceDetail } from "../config";

type Props = {
  service: ServiceDetail;
};

const badgeColors = [
  "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-200",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-200",
  "from-sky-500/20 to-sky-500/5 border-sky-500/30 text-sky-200",
];

export function ServiceSection({ service }: Props) {
  const highlightColor =
    badgeColors[Math.abs(service.slug.length) % badgeColors.length];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#1e293b] via-[#0f172a] to-[#0b1224] opacity-90" />
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 -top-12 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-white/70 transition hover:text-white"
          >
            ← Back to Services
          </Link>

          <header className="mt-6 grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                {service.duration}
              </span>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                  {service.name}
                </h1>
                <p className="text-lg text-white/80">{service.tagline}</p>
              </div>
              <p className="text-base leading-relaxed text-white/70">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/15"
                >
                  Recent work
                </Link>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-100">
                  {service.startingAt}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-400"
                >
                  {service.primaryCta}
                </Link>
                {service.secondaryCta ? (
                  <Link
                    href="/portfolio"
                    className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    {service.secondaryCta}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 via-white/0 to-white/5 p-px backdrop-blur">
              <div className="h-full rounded-2xl bg-[#0c1428] p-6 sm:p-8 shadow-2xl shadow-black/30">
                <p className="text-sm font-semibold text-white/60">
                  What you get
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-white/85">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                    >
                      <span className="mt-0.5 text-amber-400">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <section className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide ${highlightColor}`}
              >
                Highlights
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-[#101b33] px-4 py-3"
                  >
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#15203a] via-[#0f172a] to-[#0b1224] p-6 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Engagement model
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {service.duration}
                  </p>
                </div>
                <div className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-100">
                  {service.startingAt}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/75">
                We tailor timelines to your venue, guest count, and approvals.
                Share your date and venue to receive a detailed run-of-show
                within 24 hours.
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                  Talk to the team
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  View case studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

