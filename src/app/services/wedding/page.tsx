import { notFound } from "next/navigation";
import { ServiceSection } from "../components/ServiceSection";
import { getServiceBySlug } from "../config";

export default function WeddingServicePage() {
  const service = getServiceBySlug("wedding");
  if (!service) return notFound();

  return <ServiceSection service={service} />;
}

