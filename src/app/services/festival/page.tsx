import { notFound } from "next/navigation";
import { ServiceSection } from "../components/ServiceSection";
import { getServiceBySlug } from "../config";

export default function FestivalServicePage() {
  const service = getServiceBySlug("festival");
  if (!service) return notFound();

  return <ServiceSection service={service} />;
}

