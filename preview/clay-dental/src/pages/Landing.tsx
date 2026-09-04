import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ShieldCheck,
  Users,
  Star,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  BadgeCheck,
  SmilePlus,
  Wrench,
  HeartPulse,
  Stethoscope,
  Zap,
  CalendarHeart,
  Send,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { services } from "@/data/services";

/* ─── Animation helpers ────────────────────────────────────────── */

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

/* ─── Page data ────────────────────────────────────────────────── */

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#testimonials" },
];

const reasons = [
  {
    icon: Zap,
    title: "Advanced Technology",
    desc: "Digital X-rays, 3D cone-beam imaging, and laser-assisted diagnostics ensure precise, efficient treatment planning.",
  },
  {
    icon: HeartPulse,
    title: "Painless Procedures",
    desc: "Comprehensive sedation options and refined clinical techniques designed to eliminate discomfort at every stage.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Early morning, evening, and weekend appointments arranged around your professional and personal commitments.",
  },
  {
    icon: ShieldCheck,
    title: "Board-Certified Specialists",
    desc: "Every clinician holds active board certification and collectively brings over fifteen years of specialist experience.",
  },
  {
    icon: Stethoscope,
    title: "Whole-Patient Approach",
    desc: "Oral health evaluated in the context of systemic well-being — because dental care extends beyond the mouth.",
  },
  {
    icon: BadgeCheck,
    title: "Insurance and Financing",
    desc: "Accepted by all major insurance providers, with transparent pricing and flexible payment plans available.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    avatar: "SM",
    rating: 5,
    text: "After years of avoiding dental appointments, this clinic changed my perspective entirely. The clinical environment is impeccable and the team demonstrated genuine expertise at every step.",
    color: "clay-card-mint",
  },
  {
    name: "James O'Connor",
    avatar: "JO",
    rating: 5,
    text: "The teeth whitening treatment exceeded every expectation. The results are natural and lasting, and the entire experience was conducted with professionalism and care.",
    color: "clay-card-blue",
  },
  {
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    text: "My daughter's orthodontic treatment was managed with exceptional thoroughness. The specialist explained every phase clearly and the outcome has been outstanding.",
    color: "clay-card-peach",
  },
];

/* ─── Main Component ───────────────────────────────────────────── */

export default function Landing() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="clay-bg min-h-screen overflow-x-hidden font-sans">
      {/* ─── Navbar ────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="clay-nav fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-400 shadow-lg">
              <SmilePlus className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-purple-900">
              Clay<span className="text-indigo-500">Dental</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-purple-800/70 transition-colors hover:bg-purple-100/60 hover:text-purple-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#appointment"
              className="clay-btn hidden bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex items-center gap-2"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="clay-btn flex h-10 w-10 items-center justify-center bg-white/80 text-purple-700 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 flex flex-col gap-1 rounded-2xl bg-white/70 p-4 backdrop-blur md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-purple-800 transition-colors hover:bg-purple-100/60"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMobileOpen(false)}
              className="clay-btn mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </a>
          </motion.div>
        )}
      </motion.nav>

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="relative px-4 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="clay-badge ml-auto mr-auto inline-flex items-center gap-2 bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-700 lg:ml-0 lg:mr-0">
                  <SmilePlus className="h-3.5 w-3.5" />
                  Modern Dental Care
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-purple-950 sm:text-5xl lg:text-6xl"
              >
                Dentistry Built on{" "}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Precision
                </span>{" "}
                and Care
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mx-auto mt-5 max-w-lg text-base text-purple-800/60 sm:text-lg lg:mx-0"
              >
                A clinical environment where advanced technology meets
                meticulous technique — designed for patients who expect
                excellence from every interaction.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                {[
                  { icon: BadgeCheck, label: "Certified Dentists", value: "12+" },
                  { icon: Users, label: "Patients Served", value: "5,000+" },
                  { icon: Star, label: "Google Rating", value: "4.9" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="clay-badge flex items-center gap-2.5 bg-white/80 px-4 py-2.5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100">
                      <badge.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-500">{badge.label}</p>
                      <p className="text-sm font-bold text-purple-900">{badge.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <a
                  href="#appointment"
                  className="clay-btn inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg"
                >
                  Schedule a Consultation
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="clay-btn inline-flex items-center gap-2 bg-white/80 px-7 py-3.5 text-sm font-bold text-purple-700"
                >
                  <Phone className="h-4 w-4" />
                  Call (555) 123-4567
                </a>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="clay-card relative overflow-hidden p-8 sm:p-10">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />

                <div className="relative flex flex-col items-center gap-6">
                  <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-purple-400 to-indigo-400 shadow-xl">
                    <SmilePlus className="h-14 w-14 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-900">
                      Trusted by 5,000+ Patients
                    </p>
                    <p className="mt-1 text-sm text-purple-600/60">
                      Delivering exceptional outcomes since 2010
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-3 gap-3">
                    {[
                      { n: "15+", l: "Years Exp." },
                      { n: "98%", l: "Success Rate" },
                      { n: "24/7", l: "Emergency" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="clay-badge flex flex-col items-center bg-white/70 px-2 py-3 text-center"
                      >
                        <span className="text-lg font-extrabold text-purple-700">
                          {s.n}
                        </span>
                        <span className="text-[11px] text-purple-500">{s.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services ──────────────────────────────────────────── */}
      <section id="services" className="px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="clay-badge mx-auto inline-flex items-center gap-2 bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700"
            >
              <Wrench className="h-3.5 w-3.5" />
              Our Specializations
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl"
            >
              Comprehensive Dental Services
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mt-3 max-w-xl text-purple-800/55"
            >
              Each treatment is delivered with clinical precision and a
              commitment to lasting results — explore our full range of
              specializations below.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((svc, i) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={svc.slug}
                  variants={fadeUp}
                  custom={i}
                >
                  <Link
                    to={`/service/${svc.slug}`}
                    className={`${svc.cardClass} group block h-full p-7 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 shadow-sm transition-transform group-hover:scale-110">
                      <SvcIcon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-900">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-purple-700/55">
                      {svc.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-500 transition-colors group-hover:text-purple-700">
                      View Details
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us ─────────────────────────────────────── */}
      <section id="why" className="px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="clay-badge inline-flex items-center gap-2 bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Why Clay Dental
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl"
              >
                The Standard of Care You Deserve
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-3 max-w-lg text-purple-800/55"
              >
                Clinical excellence is the foundation of every decision we make —
                from the technology we invest in to the protocols we follow.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  custom={i}
                  className="clay-card-cream flex gap-3.5 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                    <r.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-purple-900">{r.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-purple-700/50">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ──────────────────────────────────────── */}
      <section id="testimonials" className="px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="clay-badge mx-auto inline-flex items-center gap-2 bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-700"
            >
              <Star className="h-3.5 w-3.5" />
              Patient Testimonials
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl"
            >
              Recognized by Our Patients
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className={`${t.color} p-7`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-purple-800/65">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-purple-500">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Appointment Form ──────────────────────────────────── */}
      <section id="appointment" className="px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="clay-badge mx-auto inline-flex items-center gap-2 bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-700"
            >
              <CalendarHeart className="h-3.5 w-3.5" />
              Request an Appointment
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl"
            >
              Begin Your Consultation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mt-3 max-w-md text-purple-800/55"
            >
              Submit your details below and a member of our team will respond
              within two business hours to confirm your appointment.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="clay-card mt-10 p-8 sm:p-10">
              {formSent ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <BadgeCheck className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">
                    Request Submitted
                  </h3>
                  <p className="max-w-sm text-sm text-purple-700/55">
                    Thank you for reaching out. A member of our scheduling team
                    will be in touch shortly to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-purple-800">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="clay-input w-full border border-purple-200/50 px-4 py-3 text-sm text-purple-900 outline-none placeholder:text-purple-400/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-purple-800">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      className="clay-input w-full border border-purple-200/50 px-4 py-3 text-sm text-purple-900 outline-none placeholder:text-purple-400/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-purple-800">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="clay-input w-full border border-purple-200/50 px-4 py-3 text-sm text-purple-900 outline-none placeholder:text-purple-400/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-purple-800">
                      Preferred Date
                    </label>
                    <input
                      required
                      type="date"
                      className="clay-input w-full border border-purple-200/50 px-4 py-3 text-sm text-purple-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-purple-800">
                      Service of Interest
                    </label>
                    <select className="clay-input w-full border border-purple-200/50 px-4 py-3 text-sm text-purple-900 outline-none">
                      <option>General Consultation</option>
                      {services.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-purple-800">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your dental concerns or questions..."
                      className="clay-input w-full resize-none border border-purple-200/50 px-4 py-3 text-sm text-purple-900 outline-none placeholder:text-purple-400/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="clay-btn flex w-full items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3.5 text-sm font-bold text-white"
                    >
                      <Send className="h-4 w-4" />
                      Submit Appointment Request
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────── */}
      <footer className="px-4 pt-16 pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="clay-card p-8 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-400">
                    <SmilePlus className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-purple-900">
                    Clay<span className="text-indigo-500">Dental</span>
                  </span>
                </div>
                <p className="mt-3 max-w-xs text-sm text-purple-700/50">
                  Clinical excellence delivered in a setting designed for
                  comfort, trust, and lasting dental health.
                </p>
              </div>

              {/* Hours */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-purple-900">
                  <Clock className="h-4 w-4 text-purple-500" />
                  Clinic Hours
                </h4>
                <ul className="space-y-1.5 text-sm text-purple-700/55">
                  <li>Monday – Friday: 8:00 AM – 7:00 PM</li>
                  <li>Saturday: 9:00 AM – 4:00 PM</li>
                  <li>Sunday: Closed</li>
                  <li className="font-medium text-purple-700">
                    Emergency line available 24/7
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-purple-900">
                  <Phone className="h-4 w-4 text-purple-500" />
                  Contact
                </h4>
                <ul className="space-y-1.5 text-sm text-purple-700/55">
                  <li>
                    <a
                      href="tel:+15551234567"
                      className="transition-colors hover:text-purple-700"
                    >
                      (555) 123-4567
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@claydental.com"
                      className="transition-colors hover:text-purple-700"
                    >
                      hello@claydental.com
                    </a>
                  </li>
                  <li className="text-xs text-red-500 font-semibold">
                    Emergency: (555) 911-0000
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-purple-900">
                  <MapPin className="h-4 w-4 text-purple-500" />
                  Location
                </h4>
                <ul className="space-y-1.5 text-sm text-purple-700/55">
                  <li>123 Smile Avenue</li>
                  <li>Suite 200</li>
                  <li>Beverly Hills, CA 90210</li>
                  <li>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-purple-500 transition-colors hover:text-purple-700"
                    >
                      Get Directions
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-purple-700/40 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Clay Dental. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-700 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
