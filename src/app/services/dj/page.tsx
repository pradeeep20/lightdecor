import { notFound } from "next/navigation";
import { ServiceSection } from "../components/ServiceSection";
import { getServiceBySlug } from "../config";

export default function DjServicePage() {
  const service = getServiceBySlug("dj");
  if (!service) return notFound();

  return <ServiceSection service={service} />;
}
