export type ServiceDetail = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  primaryCta: string;
  secondaryCta?: string;
  duration: string;
  startingAt: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "wedding",
    name: "Wedding Decoration",
    tagline: "Elegant, story-led decor that feels like you.",
    description:
      "Bespoke wedding environments with floral design, ambient lighting, and guest-first layouts that keep the celebration flowing.",
    highlights: [
      "Concept-to-execution production",
      "Mood-driven lighting scenes",
      "Couple-first stage & mandap designs",
    ],
    deliverables: [
      "Floor plan & mood board",
      "Floral & fabric styling",
      "On-site showcaller & crew",
    ],
    primaryCta: "Plan my wedding decor",
    secondaryCta: "View recent weddings",
    duration: "6-12 weeks lead time",
    startingAt: "Starting at ₹1.8L",
  },
  {
    slug: "birthday",
    name: "Birthday Decoration",
    tagline: "Playful, camera-ready setups for milestone moments.",
    description:
      "Immersive themes, custom backdrops, and interactive lighting that make every photo pop and every guest feel celebrated.",
    highlights: [
      "Theme-to-photo-ops coherence",
      "Dynamic lighting & effects",
      "Kid-safe, venue-friendly installs",
    ],
    deliverables: [
      "Theme board & color palette",
      "Entrance + cake table feature",
      "Setup/teardown on the day",
    ],
    primaryCta: "Book a birthday setup",
    secondaryCta: "See birthday ideas",
    duration: "2-4 weeks lead time",
    startingAt: "Starting at ₹45K",
  },
  {
    slug: "corporate",
    name: "Corporate Event",
    tagline: "Branded experiences that impress clients and teams.",
    description:
      "From launches to offsites, we design lighting, staging, and signage that reinforce your message and keep schedules on track.",
    highlights: [
      "Brand-first staging & AV",
      "Wayfinding & signage packs",
      "Tight run-of-show management",
    ],
    deliverables: [
      "3D stage mockups",
      "Lighting + projection plan",
      "On-site technical director",
    ],
    primaryCta: "Schedule a walkthrough",
    secondaryCta: "Download corporate deck",
    duration: "4-8 weeks lead time",
    startingAt: "Starting at ₹2.2L",
  },
  {
    slug: "festival",
    name: "Festival Lighting",
    tagline: "Large-scale ambience with safe, power-aware rigs.",
    description:
      "Architectural washes, pixel mapping, and rigging plans tailored to public spaces so crowds feel energized and safe.",
    highlights: [
      "Power & load calculations",
      "IP-rated outdoor fixtures",
      "Live operator for show control",
    ],
    deliverables: [
      "Site recce & cabling map",
      "Fixture placement plan",
      "On-ground safety supervisor",
    ],
    primaryCta: "Request a site recce",
    secondaryCta: "Browse festival looks",
    duration: "6-10 weeks lead time",
    startingAt: "Starting at ₹3.5L",
  },
  {
    slug: "dj",
    name: "Sound & DJ Setup",
    tagline: "Punchy audio, balanced mixes, and a crowd-ready rig.",
    description:
      "PA systems, DJ consoles, and monitoring tuned to your venue with clean cable management and contingency-ready power.",
    highlights: [
      "Line-array or point-source options",
      "Sound checks & DJ changeovers",
      "Backup power + spare channels",
    ],
    deliverables: [
      "Venue acoustics check",
      "Front-of-house engineer",
      "Full rig setup & strike",
    ],
    primaryCta: "Lock in my AV package",
    secondaryCta: "See sample rider",
    duration: "2-6 weeks lead time",
    startingAt: "Starting at ₹65K",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

