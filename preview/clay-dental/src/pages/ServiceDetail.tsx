import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CalendarHeart,
  SmilePlus,
  Check,
} from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: (i as number) * 0.12, ease: "easeOut" as const },
  }),
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return (
      <div className="clay-bg min-h-screen flex flex-col items-center justify-center px-4">
        <div className="clay-card p-10 text-center max-w-md">
          <h1 className="text-2xl font-bold text-purple-900 mb-3">
            Service Not Found
          </h1>
          <p className="text-sm text-purple-700/55 mb-6">
            The service you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="clay-btn inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  // Find adjacent services for next/prev navigation
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="clay-bg min-h-screen">
      {/* ─── Sticky Nav ───────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="clay-nav sticky top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-400 shadow-lg">
              <SmilePlus className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-purple-900">
              Clay<span className="text-indigo-500">Dental</span>
            </span>
          </Link>
          <a
            href="/#appointment"
            className="clay-btn hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Appointment
          </a>
        </div>
      </motion.nav>

      {/* ─── Breadcrumbs ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-purple-500/70">
          <Link to="/" className="transition-colors hover:text-purple-700">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/" className="transition-colors hover:text-purple-700">
            Services
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-purple-800 font-medium">{service.title}</span>
        </nav>
      </div>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="clay-card overflow-hidden p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.div variants={fadeUp} custom={0}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-400 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              <div className="flex-1">
                <motion.span
                  variants={fadeUp}
                  custom={0}
                  className="clay-badge inline-flex items-center gap-1.5 bg-purple-100 px-3 py-1 text-[11px] font-semibold text-purple-600 mb-3"
                >
                  {service.tagline}
                </motion.span>
                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl"
                >
                  {service.title}
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-3 max-w-2xl text-purple-800/60 leading-relaxed"
                >
                  {service.overview}
                </motion.p>
                <motion.div variants={fadeUp} custom={3} className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/#appointment"
                    className="clay-btn inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
                  >
                    <CalendarHeart className="h-4 w-4" />
                    Schedule a Consultation
                  </a>
                  <Link
                    to="/"
                    className="clay-btn inline-flex items-center gap-2 bg-white/80 px-6 py-3 text-sm font-semibold text-purple-700"
                  >
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    All Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Procedure & Benefits ─────────────────────────────── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-5">
          {/* Procedure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-3"
          >
            <motion.div variants={fadeUp} className="clay-card p-8">
              <h2 className="text-xl font-bold text-purple-900 mb-4">
                How the Procedure Works
              </h2>
              <p className="text-sm leading-relaxed text-purple-800/60">
                {service.procedure}
              </p>
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp} className="clay-card-mint p-8">
              <h2 className="text-xl font-bold text-purple-900 mb-4">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200">
                      <Check className="h-3 w-3 text-emerald-700" />
                    </div>
                    <span className="text-sm text-purple-800/60 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Ideal For ────────────────────────────────────────── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="clay-card-cream p-8">
              <h2 className="text-xl font-bold text-purple-900 mb-4">
                Ideal For
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.idealFor.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-200">
                      <Check className="h-3 w-3 text-purple-700" />
                    </div>
                    <span className="text-sm text-purple-800/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Related Services Navigation ──────────────────────── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-purple-900 mb-5">
            Other Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => {
                const SvcIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/service/${s.slug}`}
                    className={`${s.cardClass} group p-6 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 shadow-sm mb-3 transition-transform group-hover:scale-110">
                      <SvcIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-sm font-bold text-purple-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-purple-700/50 leading-relaxed">
                      {s.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-purple-500 transition-colors group-hover:text-purple-700">
                      View Details
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="clay-card bg-gradient-to-br from-purple-500 to-indigo-500 p-8 sm:p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold">
              Ready to Get Started?
            </h2>
            <p className="mt-2 text-sm text-white/80 max-w-md mx-auto">
              Schedule a consultation to discuss whether {service.title} is the
              right path for your dental health.
            </p>
            <a
              href="/#appointment"
              className="clay-btn mt-6 inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-bold text-purple-700"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer (minimal) ────────────────────────────────── */}
      <footer className="px-4 pt-8 pb-8 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-xs text-purple-700/40">
          <p>© {new Date().getFullYear()} Clay Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
