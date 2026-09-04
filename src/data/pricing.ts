export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  cta: string;
  inverted?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Automation Starter",
    price: "₹4,999",
    description: "One focused automation workflow for repetitive business tasks.",
    cta: "Start an automation",
  },
  {
    name: "Windows Software",
    price: "₹9,999",
    description: "A focused Windows utility built around your exact process.",
    cta: "Build my software",
  },
  {
    name: "Business Automation",
    price: "₹19,999",
    description: "Connected workflows, dashboards and integrations for growing teams.",
    cta: "Automate my business",
  },
  {
    name: "Custom SaaS",
    price: "₹34,999",
    description:
      "A scalable SaaS foundation with roles, billing-ready flows and admin control.",
    cta: "Plan my SaaS",
  },
  {
    name: "Enterprise Tooling",
    price: "₹59,999+",
    description:
      "Serious internal tools, custom portals and multi-step operational systems.",
    cta: "Discuss enterprise",
  },
  {
    name: "Custom Build",
    price: "Let's Talk",
    description:
      "Have a complex product, platform or software idea? Let's scope it together.",
    cta: "Start the conversation",
    inverted: true,
  },
];
