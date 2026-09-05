import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NewTemplate } from "@/components/new-template";
import { getPublishedCustomer, type NewCustomer } from "@/lib/new-customers";
import RestaurantTemplate from "@/components/restaurant-template";
import SmilecareDentalTemplate, {
  demoDentalCustomer,
} from "@/components/smilecare-dental-template";
import MedoraHealthTemplate, {
  demoMedoraCustomer,
} from "@/components/medora-health-template";
import VelouraStudioTemplate from "@/components/veloura-studio-template";
import {
  demoAureliaCustomer,
  RestaurantTemplate as AureliaRestaurantTemplate,
} from "@/components/aurelia-dining-template";
import {
  PremiumBarTemplate,
  demoNewCustomer as demoBarCustomer,
} from "@/components/afterglow-bar-template";
import CrumbHearthTemplate, {
  demoBakeryCustomer,
} from "@/components/crumb-hearth-template";
import DashbiteTemplate, {
  demoDashBiteCustomer,
} from "@/components/dashbite-template";
import RoastRitualTemplate, {
  demoCafeCustomer,
} from "@/components/roast-ritual-template";
import NorthlineTemplate, {
  demoLaunchLabCustomer as demoNorthlineCustomer,
} from "@/components/northline-template";
import ScaleflowTemplate, {
  demoLaunchLabCustomer as demoScaleflowCustomer,
} from "@/components/scaleflow-template";
import LaunchlabTemplate, {
  demoLaunchLabCustomer,
} from "@/components/launchlab-template";
import { ForgeAthleticsTemplate } from "@/components/forge-athletics-template";
import FrameSoulTemplate, {
  demoFrameSoulCustomer,
} from "@/components/frame-soul-template";
import IslandVillaTemplate, {
  demoIslandCustomer,
} from "@/components/island-villa-template";
import DemoAgencyShell from "@/components/DemoAgencyShell";
import type { PublishTemplateKey } from "@/lib/product-template-types";

const publishedTemplates: Record<
  PublishTemplateKey,
  (customer: NewCustomer) => ReactNode
> = {
  "smilecare-dental": (customer) => (
    <SmilecareDentalTemplate
      customer={{
        ...demoDentalCustomer,
        id: customer.id,
        slug: customer.slug,
        businessName: customer.businessName,
      }}
    />
  ),
  "medora-health": (customer) => (
    <MedoraHealthTemplate
      customer={{
        ...demoMedoraCustomer,
        id: customer.id,
        slug: customer.slug,
        businessName: customer.businessName,
      }}
    />
  ),
  "veloura-studio": (customer) => (
    <VelouraStudioTemplate businessName={customer.businessName} />
  ),
  "aurelia-dining": (customer) => (
    <AureliaRestaurantTemplate
      customer={{
        ...demoAureliaCustomer,
        id: customer.id,
        slug: customer.slug,
        businessName: customer.businessName,
      }}
    />
  ),
  "afterglow-bar": (customer) => (
    <PremiumBarTemplate
      customer={{ ...demoBarCustomer, businessName: customer.businessName }}
    />
  ),
  "crumb-hearth": (customer) => (
    <CrumbHearthTemplate
      customer={{ ...demoBakeryCustomer, businessName: customer.businessName }}
    />
  ),
  dashbite: (customer) => (
    <DashbiteTemplate
      customer={{
        ...demoDashBiteCustomer,
        id: customer.id,
        slug: customer.slug,
        businessName: customer.businessName,
        hero: {
          ...(demoDashBiteCustomer.hero ?? {}),
          title:
            demoDashBiteCustomer.hero?.title?.replaceAll(
              "DashBite",
              customer.businessName,
            ) ?? customer.businessName,
        },
      }}
    />
  ),
  "roast-ritual": (customer) => (
    <RoastRitualTemplate
      customer={{ ...demoCafeCustomer, businessName: customer.businessName }}
    />
  ),
  northline: (customer) => (
    <NorthlineTemplate
      customer={{
        ...demoNorthlineCustomer,
        businessName: customer.businessName,
      }}
    />
  ),
  scaleflow: (customer) => (
    <ScaleflowTemplate
      customer={{
        ...demoScaleflowCustomer,
        businessName: customer.businessName,
      }}
    />
  ),
  launchlab: (customer) => (
    <LaunchlabTemplate
      customer={{
        ...demoLaunchLabCustomer,
        businessName: customer.businessName,
      }}
    />
  ),
  "forge-athletics": (customer) => (
    <ForgeAthleticsTemplate businessName={customer.businessName} />
  ),
  "frame-soul": (customer) => (
    <FrameSoulTemplate
      customer={{
        ...demoFrameSoulCustomer,
        businessName: customer.businessName,
      }}
    />
  ),
  "island-villa": (customer) => (
    <IslandVillaTemplate
      customer={{ ...demoIslandCustomer, businessName: customer.businessName }}
    />
  ),
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
  return (
    <DemoAgencyShell>
      {PublishedTemplate ? (
        PublishedTemplate(customer)
      ) : customer.templateKey === "restaurant" ? (
        <RestaurantTemplate />
      ) : (
        <NewTemplate customer={customer} />
      )}
    </DemoAgencyShell>
  );
}
