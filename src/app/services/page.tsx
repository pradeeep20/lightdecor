"use client";

import Link from "next/link";

const services = [
  { name: "Wedding Decoration", slug: "wedding" },
  { name: "Birthday Decoration", slug: "birthday" },
  { name: "Corporate Event", slug: "corporate" },
  { name: "Festival Lighting", slug: "festival" },
  { name: "Sound & DJ Setup", slug: "dj" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-[#1e293b] border border-white/10 rounded-xl p-10 text-center hover:bg-[#243045] hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold text-yellow-400">
              {service.name}
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Click to view photos & videos
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
