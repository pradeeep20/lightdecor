"use client";

import Link from "next/link";
import { services } from "./config";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0c1428] to-[#060b16]" />
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <header className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Services
            </h1>
            <p className="text-lg text-white/75">
              Purpose-built lighting, decor, and production support for the
              moments that matter most. Choose a service to see what&apos;s
              included and how we deliver.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-amber-300">
                    {service.name}
                  </h2>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                    {service.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/75">{service.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {service.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between text-sm text-white/70">
                  <span>{service.startingAt}</span>
                  <span className="inline-flex items-center gap-1 text-amber-300 transition group-hover:gap-2">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

