import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NewTemplate } from "@/components/new-template";
import { getPublishedCustomer, type NewCustomer } from "@/lib/new-customers";
import RestaurantTemplate from "@/components/restaurant-template";
import SmilecareDentalTemplate from "@/components/smilecare-dental-template";
import MedoraHealthTemplate from "@/components/medora-health-template";
import VelouraStudioTemplate from "@/components/veloura-studio-template";
import { RestaurantTemplate as AureliaRestaurantTemplate } from "@/components/aurelia-dining-template";
import { PremiumBarTemplate } from "@/components/afterglow-bar-template";
import CrumbHearthTemplate from "@/components/crumb-hearth-template";
import DashbiteTemplate from "@/components/dashbite-template";
import RoastRitualTemplate from "@/components/roast-ritual-template";
import NorthlineTemplate from "@/components/northline-template";
import ScaleflowTemplate from "@/components/scaleflow-template";
import LaunchlabTemplate from "@/components/launchlab-template";
import ForgeAthleticsTemplate from "@/components/forge-athletics-template";
import FrameSoulTemplate from "@/components/frame-soul-template";
import IslandVillaTemplate from "@/components/island-villa-template";
import type { PublishTemplateKey } from "@/lib/product-template-types";

const publishedTemplates: Record<
  PublishTemplateKey,
  (customer: NewCustomer) => ReactNode
> = {
  "smilecare-dental": () => <SmilecareDentalTemplate />,
  "medora-health": () => <MedoraHealthTemplate />,
  "veloura-studio": () => <VelouraStudioTemplate />,
  "aurelia-dining": (customer) => (
    <AureliaRestaurantTemplate customer={customer} />
  ),
  "afterglow-bar": (customer) => <PremiumBarTemplate customer={customer} />,
  "crumb-hearth": () => <CrumbHearthTemplate />,
  dashbite: () => <DashbiteTemplate />,
  "roast-ritual": () => <RoastRitualTemplate />,
  northline: () => <NorthlineTemplate />,
  scaleflow: () => <ScaleflowTemplate />,
  launchlab: () => <LaunchlabTemplate />,
  "forge-athletics": () => <ForgeAthleticsTemplate />,
  "frame-soul": () => <FrameSoulTemplate />,
  "island-villa": () => <IslandVillaTemplate />,
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const customer = await getPublishedCustomer(slug);
  if (!customer) return {};
  return {
    title: customer.SEO.title || customer.businessName,
    description: customer.SEO.description,
    keywords: customer.SEO.keywords,
    openGraph: {
      title: customer.SEO.title || customer.businessName,
      description: customer.SEO.description,
    },
  };
}

export default async function NewCustomerPreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const customer = await getPublishedCustomer(slug);
  if (!customer) notFound();
  const PublishedTemplate =
    publishedTemplates[customer.templateKey as PublishTemplateKey];
  if (PublishedTemplate) return PublishedTemplate(customer);
  if (customer.templateKey === "restaurant") return <RestaurantTemplate />;
  return <NewTemplate customer={customer} />;
}
