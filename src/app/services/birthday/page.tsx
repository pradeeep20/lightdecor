import { notFound } from "next/navigation";
import { ServiceSection } from "../components/ServiceSection";
import { getServiceBySlug } from "../config";

export default function BirthdayServicePage() {
  const service = getServiceBySlug("birthday");
  if (!service) return notFound();

  return <ServiceSection service={service} />;
}

