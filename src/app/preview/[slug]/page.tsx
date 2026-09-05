import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewTemplate } from "@/components/new-template";
import { getPublishedCustomer } from "@/lib/new-customers";

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
  return <NewTemplate customer={customer} />;
}
