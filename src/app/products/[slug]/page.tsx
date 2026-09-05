import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ensureProductTemplateSeed,
  productTemplates,
} from "@/lib/product-templates";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

async function getProduct(slug: string) {
  await ensureProductTemplateSeed();
  return productTemplates().findOne({ slug, visible: true });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | InfyCrest Solutions`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const previewIsExternal = product.previewUrl.startsWith("http");
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="size-4" /> All products
        </Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
            <Image
              src={product.thumbnail}
              alt={`${product.name} template preview`}
              width={1200}
              height={750}
              className="h-auto w-full object-cover"
              priority
            />
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-2 border-t border-neutral-200 p-2">
                {product.gallery.slice(1).map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt=""
                    width={300}
                    height={190}
                    className="aspect-[16/10] rounded-xl object-cover"
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-neutral-200 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {product.category}
              </span>
              <span className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {product.businessType}
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              {product.description}
            </p>
            {product.price && (
              <p className="mt-6 text-2xl font-semibold text-neutral-900">
                Starting at {product.price}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {product.hasLivePreview && product.previewUrl ? (
                <a
                  href={product.previewUrl}
                  target={previewIsExternal ? "_blank" : undefined}
                  rel={previewIsExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-black"
                >
                  Preview Live Website <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-7 py-3.5 text-sm font-semibold text-neutral-400">
                  Preview Coming Soon
                </span>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-7 py-3.5 text-sm font-semibold text-neutral-900 hover:border-neutral-900"
              >
                {product.ctaText}
              </Link>
            </div>
            <div className="mt-12 border-t border-neutral-200 pt-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Template features
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-neutral-600"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-neutral-900" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {product.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
