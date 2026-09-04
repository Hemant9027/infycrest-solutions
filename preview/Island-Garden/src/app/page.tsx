import { redirect } from "next/navigation";
import { listDemos } from "@/demos";

export default function HomePage() {
  const first = listDemos()[0];
  redirect(first ? `/demo/${first.slug}` : "/demo");
}
