import {
  BarChart3,
  Bot,
  Code2,
  LayoutTemplate,
  Megaphone,
  MonitorCog,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "High-performing websites designed to turn attention into measurable business growth.",
    icon: LayoutTemplate,
    features: ["Conversion-focused UX", "Responsive by default", "Built for search", "Fast, scalable delivery"],
    visual: "website",
    bgImage: "/services/Service-card 2.png",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description: "Purpose-built software that removes operational friction and gives your team room to grow.",
    icon: Code2,
    features: ["Tailored workflows", "Secure architecture", "Clear product strategy", "Ongoing support"],
    visual: "software",
    bgImage: "/services/Service-card 1.jpg",
  },
  {
    slug: "pos-management-systems",
    title: "POS & Management Systems",
    description: "One clear system for sales, inventory, people, and the day-to-day work behind your business.",
    icon: MonitorCog,
    features: ["Live reporting", "Inventory control", "Role-based access", "Reliable operations"],
    visual: "pos",
    bgImage: "/services/Service-card 4.png",
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    description: "Helpful, always-on customer conversations that move leads from first message to action.",
    icon: Bot,
    features: ["Instant replies", "Lead qualification", "Smart follow-ups", "Team handoff"],
    visual: "automation",
    bgImage: "/services/Service-card 3.png",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "A practical growth strategy that connects the right message with the right people.",
    icon: BarChart3,
    features: ["Growth strategy", "Content direction", "Campaign reporting", "Audience insight"],
    visual: "marketing",
    bgImage: "/marketing-bg.png",
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    description: "Distinct, cohesive brand systems that make every customer touchpoint feel considered.",
    icon: Palette,
    features: ["Brand positioning", "Visual identity", "Design systems", "Launch support"],
    visual: "branding",
    bgImage: "/branding-bg.png",
  },
  {
    slug: "meta-ads-management",
    title: "Meta Ads Management",
    description: "Performance-minded paid social campaigns with creative, testing, and reporting under one roof.",
    icon: Megaphone,
    features: ["Creative testing", "Precise targeting", "Budget optimisation", "Clear reporting"],
    visual: "ads",
    bgImage: "/ads-bg.png",
  },
];

export const featuredServices = services.slice(0, 4);

export const featureIcons = [Rocket, ShieldCheck, Users, Sparkles];
