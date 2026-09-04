import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDemo, listDemos } from "@/demos";
import { HotelDemo } from "@/components/demo/HotelDemo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listDemos().map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) {
    return { title: "Demo not found — InfyCrest Solutions" };
  }
  return {
    title: `${demo.name} — ${demo.positioning}`,
    description: demo.metaDescription,
    openGraph: {
      title: `${demo.name} — ${demo.positioning}`,
      description: demo.metaDescription,
      images: [{ url: demo.hero.image.src, alt: demo.hero.image.alt }],
    },
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();

  return <HotelDemo demo={demo} />;
}
