import { notFound } from "next/navigation";
import { ServiceSection } from "../components/ServiceSection";
import { getServiceBySlug } from "../config";

export default function CorporateServicePage() {
  const service = getServiceBySlug("corporate");
  if (!service) return notFound();

  return <ServiceSection service={service} />;
}

