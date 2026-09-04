"use client";

import { FormEvent, useEffect, useState } from "react";
import { Download, LogOut, Save, Trash2, Upload } from "lucide-react";

type Project = {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  thumbnail: string;
  previewUrl: string;
  priceLabel: string;
  technologies: string[];
  includes: string[];
};
type Request = {
  id: string;
  name: string;
  contact: string;
  businessType?: string;
  requirements?: string;
  demoName: string;
  status: string;
  notes?: string;
  createdAt: string;
};
type Plan = {
  name: string;
  price: string;
  description: string;
  cta: string;
  inverted?: boolean;
};
type Tab =
  | "overview"
  | "requests"
  | "projects"
  | "pricing"
  | "settings"
  | "profile";
const field =
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900";
const initialProject = {
  name: "",
  slug: "",
  category: "Business",
  tagline: "",
  description: "",
  previewUrl: "",
  priceLabel: "Custom quote",
  technologies: "Next.js, React, Tailwind CSS",
  includes: "Responsive design\nContact flow",
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [login, setLogin] = useState({ username: "admin", password: "" });
  const [tab, setTab] = useState<Tab>("overview");
  const [projects, setProjects] = useState<Project[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [counts, setCounts] = useState({
    projects: 0,
    requests: 0,
    unread: 0,
    subscribers: 0,
  });
  const [project, setProject] = useState(initialProject);
  const [image, setImage] = useState("");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [profile, setProfile] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");

  async function load() {
    const auth = await fetch("/api/admin/me");
    if (!auth.ok) {
      setLoggedIn(false);
      return;
    }
    setLoggedIn(true);
    const results = await Promise.all(
      ["overview", "projects", "requests", "pricing", "settings"].map((name) =>
        fetch(`/api/admin/${name}`).then((response) => response.json()),
      ),
    );
    setCounts(results[0].counts);
    setProjects(results[1]);
    setRequests(results[2]);
    setPlans(results[3]);
    setSettings(results[4]);
  }
  useEffect(() => {
    void load();
  }, []);
  async function signIn(event: FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    });
    if (!response.ok) {
      setMessage("Invalid username or password.");
      return;
    }
    setMessage("");
    await load();
  }
  function readImage(file?: File) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      setMessage("Image must be smaller than 3 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  }
  async function saveProject(event: FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...project,
        image,
        technologies: project.technologies.split(","),
        includes: project.includes.split("\n"),
      }),
    });
    const data = await response.json();
    setMessage(
      response.ok
        ? "Project published."
        : (data.error ?? "Could not save project."),
    );
    if (response.ok) {
      setProject(initialProject);
      setImage("");
      await load();
    }
  }
  async function deleteProject(id: string) {
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    await load();
  }
  async function updateRequest(item: Request) {
    await fetch("/api/admin/requests", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    await load();
  }
  async function savePlans() {
    const response = await fetch("/api/admin/pricing", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plans),
    });
    setMessage(response.ok ? "Pricing saved." : "Could not save pricing.");
  }
  async function saveSettings(event: FormEvent) {
    event.preventDefault();
    await fetch("/api/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setMessage("Site settings saved.");
  }
  async function updatePassword(event: FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
    const data = await response.json();
    setMessage(
      response.ok
        ? "Password updated."
        : (data.error ?? "Could not update password."),
    );
  }
  function exportRequests() {
    const csv = [
      "Name,Contact,Business,Project,Status,Created",
      ...requests.map((item) =>
        [
          item.name,
          item.contact,
          item.businessType ?? "",
          item.demoName,
          item.status,
          item.createdAt,
        ]
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(","),
      ),
    ].join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "infycrest-enquiries.csv";
    link.click();
  }

  if (loggedIn === null)
    return (
      <main className="grid min-h-screen place-items-center bg-neutral-50">
        Loading...
      </main>
    );
  if (!loggedIn)
    return (
      <main className="grid min-h-screen place-items-center bg-neutral-50 px-5">
        <form
          onSubmit={signIn}
          className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            InfyCrest / Admin
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Sign in
          </h1>
          <div className="mt-7 space-y-3">
            <input
              className={field}
              value={login.username}
              onChange={(event) =>
                setLogin({ ...login, username: event.target.value })
              }
              placeholder="Username"
            />
            <input
              className={field}
              type="password"
              value={login.password}
              onChange={(event) =>
                setLogin({ ...login, password: event.target.value })
              }
              placeholder="Password"
            />
          </div>
          <button className="mt-5 h-12 w-full rounded-full bg-neutral-900 text-sm font-semibold text-white">
            Sign in
          </button>
          {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
        </form>
      </main>
    );

  const nav: [Tab, string][] = [
    ["overview", "Overview"],
    ["requests", "Enquiries"],
    ["projects", "Collection"],
    ["pricing", "Pricing"],
    ["settings", "Site settings"],
    ["profile", "Admin profile"],
  ];
  return (
    <main className="min-h-screen bg-neutral-50 px-5 py-6 text-neutral-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between border-b border-neutral-200 pb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              InfyCrest / Admin workspace
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Manage your website
            </h1>
          </div>
          <button
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" });
              setLoggedIn(false);
            }}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold"
          >
            <LogOut className="size-4" />
            Sign out
          </button>
        </header>
        <nav className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
          {nav.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${tab === key ? "bg-neutral-900 text-white" : "border border-neutral-200 bg-white text-neutral-600"}`}
            >
              {label}
            </button>
          ))}
        </nav>
        {message && (
          <p className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {message}
          </p>
        )}
        {tab === "overview" && (
          <section className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Projects", counts.projects],
                ["Total enquiries", counts.requests],
                ["New / unread", counts.unread],
                ["Subscribers", counts.subscribers],
              ].map(([label, value]) => (
                <div
                  key={String(label)}
                  className="rounded-3xl border border-neutral-200 bg-white p-6"
                >
                  <p className="text-sm text-neutral-500">{label}</p>
                  <p className="mt-3 text-4xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Recent enquiries</h2>
              <div className="mt-4 divide-y divide-neutral-100">
                {requests.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex justify-between py-4">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-neutral-500">
                        {item.demoName} · {item.contact}
                      </p>
                    </div>
                    <span className="h-fit rounded-full bg-neutral-100 px-3 py-1 text-xs">
                      {item.status}
                    </span>
                  </div>
                ))}
                {!requests.length && (
                  <p className="py-4 text-sm text-neutral-500">
                    No enquiries mirrored yet.
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
        {tab === "requests" && (
          <section className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  Lead management
                </p>
                <h2 className="mt-2 text-xl font-semibold">
                  Contact and project requests
                </h2>
              </div>
              <button
                onClick={exportRequests}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-neutral-200 px-4 text-sm font-semibold"
              >
                <Download className="size-4" />
                Export CSV
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {requests.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-neutral-200 p-4"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        {item.contact} ·{" "}
                        {item.businessType || "Business type not supplied"}
                      </p>
                      <p className="mt-2 text-sm">
                        {item.requirements || "No requirements provided."}
                      </p>
                      <p className="mt-2 text-xs text-neutral-400">
                        {item.demoName}
                      </p>
                    </div>
                    <select
                      value={item.status}
                      onChange={(event) =>
                        updateRequest({ ...item, status: event.target.value })
                      }
                      className="h-10 rounded-xl border border-neutral-200 px-3 text-sm"
                    >
                      <option>New</option>
                      <option>Contacted</option>
                      <option>In Progress</option>
                      <option>Converted</option>
                      <option>Closed</option>
                    </select>
                  </div>
                  <textarea
                    defaultValue={item.notes}
                    onBlur={(event) =>
                      updateRequest({ ...item, notes: event.target.value })
                    }
                    placeholder="Internal notes"
                    className={`${field} mt-4 min-h-16`}
                  />
                </article>
              ))}
              {!requests.length && (
                <p className="text-sm text-neutral-500">
                  No enquiries available yet.
                </p>
              )}
            </div>
          </section>
        )}
        {tab === "projects" && (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                Collection
              </p>
              <h2 className="mt-2 text-xl font-semibold">Upload project</h2>
              <form
                onSubmit={saveProject}
                className="mt-6 grid gap-3 sm:grid-cols-2"
              >
                {(
                  [
                    ["name", "Project name"],
                    ["slug", "Slug"],
                    ["category", "Category"],
                    ["priceLabel", "Price label"],
                    ["tagline", "Short tagline"],
                    ["previewUrl", "Preview URL"],
                  ] as const
                ).map(([key, placeholder]) => (
                  <input
                    key={key}
                    required={key !== "previewUrl"}
                    className={`${field} ${key === "tagline" || key === "previewUrl" ? "sm:col-span-2" : ""}`}
                    value={project[key]}
                    onChange={(event) =>
                      setProject({ ...project, [key]: event.target.value })
                    }
                    placeholder={placeholder}
                  />
                ))}
                <textarea
                  required
                  className={`${field} min-h-24 sm:col-span-2`}
                  value={project.description}
                  onChange={(event) =>
                    setProject({ ...project, description: event.target.value })
                  }
                  placeholder="Description"
                />
                <input
                  className={`${field} sm:col-span-2`}
                  value={project.technologies}
                  onChange={(event) =>
                    setProject({ ...project, technologies: event.target.value })
                  }
                  placeholder="Technologies, comma separated"
                />
                <textarea
                  className={`${field} min-h-20 sm:col-span-2`}
                  value={project.includes}
                  onChange={(event) =>
                    setProject({ ...project, includes: event.target.value })
                  }
                  placeholder="Features, one per line"
                />
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-neutral-300 px-4 py-4 text-sm text-neutral-500 sm:col-span-2">
                  <Upload className="size-4" />
                  {image ? "Image selected" : "Upload preview image (max 3 MB)"}
                  <input
                    required
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/gif"
                    onChange={(event) => readImage(event.target.files?.[0])}
                    className="sr-only"
                  />
                </label>
                <button className="h-12 rounded-full bg-neutral-900 text-sm font-semibold text-white sm:col-span-2">
                  Publish project
                </button>
              </form>
            </section>
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                Published projects
              </p>
              <div className="mt-5 space-y-3">
                {projects.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-100 p-3"
                  >
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="size-14 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {item.category}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteProject(item.id)}
                      aria-label={`Delete ${item.name}`}
                      className="grid size-9 place-items-center rounded-full text-neutral-400 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
        {tab === "pricing" && (
          <section className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Pricing plans</h2>
              <button
                onClick={savePlans}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-900 px-4 text-sm font-semibold text-white"
              >
                <Save className="size-4" />
                Save
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 p-4"
                >
                  <input
                    className={field}
                    value={plan.name}
                    onChange={(event) =>
                      setPlans(
                        plans.map((item, i) =>
                          i === index
                            ? { ...item, name: event.target.value }
                            : item,
                        ),
                      )
                    }
                    placeholder="Plan name"
                  />
                  <input
                    className={`${field} mt-3`}
                    value={plan.price}
                    onChange={(event) =>
                      setPlans(
                        plans.map((item, i) =>
                          i === index
                            ? { ...item, price: event.target.value }
                            : item,
                        ),
                      )
                    }
                    placeholder="Price"
                  />
                  <textarea
                    className={`${field} mt-3 min-h-20`}
                    value={plan.description}
                    onChange={(event) =>
                      setPlans(
                        plans.map((item, i) =>
                          i === index
                            ? { ...item, description: event.target.value }
                            : item,
                        ),
                      )
                    }
                    placeholder="Description"
                  />
                  <input
                    className={`${field} mt-3`}
                    value={plan.cta}
                    onChange={(event) =>
                      setPlans(
                        plans.map((item, i) =>
                          i === index
                            ? { ...item, cta: event.target.value }
                            : item,
                        ),
                      )
                    }
                    placeholder="CTA label"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === "settings" && (
          <form
            onSubmit={saveSettings}
            className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold">Site settings</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {Object.entries(settings).map(([key, value]) => (
                <label
                  key={key}
                  className="text-sm font-semibold text-neutral-700"
                >
                  {key}
                  <input
                    className={`${field} mt-1.5 font-normal`}
                    value={value}
                    onChange={(event) =>
                      setSettings({ ...settings, [key]: event.target.value })
                    }
                  />
                </label>
              ))}
            </div>
            <button className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white">
              <Save className="size-4" />
              Save settings
            </button>
          </form>
        )}
        {tab === "profile" && (
          <form
            onSubmit={updatePassword}
            className="mt-8 max-w-xl rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold">Admin profile</h2>
            <p className="mt-3 text-sm text-neutral-500">
              Passwords are hashed before storage.
            </p>
            <div className="mt-6 space-y-3">
              <input
                required
                type="password"
                className={field}
                value={profile.currentPassword}
                onChange={(event) =>
                  setProfile({
                    ...profile,
                    currentPassword: event.target.value,
                  })
                }
                placeholder="Current password"
              />
              <input
                required
                minLength={8}
                type="password"
                className={field}
                value={profile.newPassword}
                onChange={(event) =>
                  setProfile({ ...profile, newPassword: event.target.value })
                }
                placeholder="New password, 8+ characters"
              />
            </div>
            <button className="mt-5 h-11 rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white">
              Update password
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
