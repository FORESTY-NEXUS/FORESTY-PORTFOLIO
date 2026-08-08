import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Code,
  CreditCard,
  Globe,
  HeartHandshake,
  Megaphone,
  MessageCircle,
  PenTool,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Contact from "./ContactPage";
import Footer from "./Footer";
import "./GrowthJourney.css";

const problems = [
  [
    "Restaurants",
    "Customers forget to order when your menu only lives in a chat.",
  ],
  ["Salons", "Appointments disappear between DMs, calls, and busy staff."],
  ["Clinics", "Your reception spends the day repeating the same answers."],
  ["Real estate", "Buyers leave when there are no listings to explore."],
  [
    "Local stores",
    "Great products stay invisible without a professional home online.",
  ],
  [
    "Business owners",
    "Too much of your day goes into repetitive work instead of growth.",
  ],
];

const process = [
  [
    "01",
    "Tell us about your business",
    "We learn how you work, what is getting in the way, and where growth is being lost.",
  ],
  [
    "02",
    "We create the strategy",
    "Together, we choose the clearest path to more customers and less manual work.",
  ],
  [
    "03",
    "We build your growth engine",
    "Your website is shaped around enquiries, bookings, orders, and trust.",
  ],
  [
    "04",
    "You review everything",
    "You stay close to the process and approve every important decision before launch.",
  ],
  [
    "05",
    "We launch with care",
    "We make sure the experience is ready for the people who will use it every day.",
  ],
  [
    "06",
    "Your business starts growing",
    "Your new online presence starts working alongside you every hour of the week.",
  ],
];

// Updated array: 1. Clinic removed, 2. Nails fixed, 3. Perfumes fixed, 4. Added live links
const stories = [
  [
    "Restaurant",
    "Orders were handled one message at a time.",
    "A simple online menu gives customers a faster way to order.",
    "/zaiqa-hub.jpeg",
    "https://foresty-resturant.vercel.app",
  ],
  [
    "Nails",
    "Appointments were scattered across chats and calls.",
    "Customers can see services and request the right time themselves.",
    "/Frame 2.jpeg",
    "https://lily-nails.vercel.app",
  ],
  [
    "Perfumes",
    "Products relied entirely on social posts.",
    "A professional storefront turns attention into confident buying decisions.",
    "/mashab perfumes.png",
    "https://mashab-perfumes-k53u.vercel.app",
  ],
];

const plans = [
  [
    "Professional Business Website",
    "For businesses ready to look established and earn trust online.",
    "Give customers a clear reason to choose you.",
    [
      "A polished website built around your services",
      "Clear enquiry paths and WhatsApp connection",
      "Mobile-ready pages that feel effortless to use",
      "A foundation that helps people find you on Google",
    ],
  ],
  [
    "Business Growth Website",
    "For teams ready to remove friction from their customer journey.",
    "Turn more visits into bookings, orders, and enquiries.",
    [
      "Everything in the professional website",
      "Online booking or ordering journeys",
      "Payment and customer enquiry flows",
      "Automations that save your team time every week",
    ],
  ],
  [
    "Complete Business System",
    "For ambitious businesses that want operations to feel simpler.",
    "Bring your customer experience and daily work into one place.",
    [
      "A complete customer-facing website",
      "Custom dashboards for the work behind the scenes",
      "Customer, order, or booking management",
      "Reporting and automations built around your business",
    ],
  ],
];

const digitalSolutions = [
  {
    title: "Social Media Branding",
    icon: PenTool,
    copy: "Engaging visuals and consistent branding that makes your business memorable.",
  },
  {
    title: "Meta Ads",
    icon: Megaphone,
    copy: "Targeted campaigns that bring the right customers directly to your business.",
  },
  {
    title: "WhatsApp Automation",
    icon: MessageCircle,
    copy: "Automated replies and smart flows that handle customer inquiries instantly.",
  },
  {
    title: "POS Systems",
    icon: CreditCard,
    copy: "Modern point-of-sale solutions for seamless transactions and inventory.",
  },
  {
    title: "Business Software",
    icon: Briefcase,
    copy: "Custom tools to manage operations, teams, and day-to-day processes.",
  },
  {
    title: "AI Automation",
    icon: Bot,
    copy: "Smart systems that handle repetitive tasks so your team can focus on growth.",
  },
  {
    title: "Custom Software",
    icon: Code,
    copy: "Bespoke digital solutions built exactly around how your business works.",
  },
  {
    title: "Websites",
    icon: Globe,
    copy: "High-performance websites designed to convert visitors into loyal customers.",
  },
];

const businessSolutions = [
  {
    type: "Startups & Small Businesses",
    icon: Rocket,
    needs: [
      "Professional branding",
      "Online presence",
      "Customer awareness",
      "Marketing",
    ],
    recommended: ["Branding", "Social Media Design", "Website", "Meta Ads"],
  },
  {
    type: "Growing Businesses",
    icon: TrendingUp,
    needs: [
      "Better operations",
      "Customer management",
      "Inventory",
      "Automation",
    ],
    recommended: ["POS", "CRM", "Business Software", "WhatsApp Automation"],
  },
  {
    type: "Established Businesses",
    icon: Building2,
    needs: [
      "Scale efficiently",
      "Automate workflows",
      "Improve customer experience",
      "Build custom systems",
    ],
    recommended: [
      "Enterprise Software",
      "AI Automation",
      "Custom Software",
      "Advanced Integrations",
    ],
  },
];

const whyWorkWithUs = [
  {
    title: "Tailored Solutions",
    icon: Settings,
    copy: "We don't do cookie-cutter. Every solution is custom-built to match your exact business requirements and goals.",
  },
  {
    title: "Business-First Thinking",
    icon: Target,
    copy: "We focus on your revenue and operations first, then build the technology required to support them.",
  },
  {
    title: "Long-Term Support",
    icon: HeartHandshake,
    copy: "A launch is just the beginning. We stand by you to maintain, improve, and scale your systems over time.",
  },
  {
    title: "Scalable Technology",
    icon: TrendingUp,
    copy: "Our solutions grow with you, ensuring you never have to rebuild from scratch as your business expands.",
  },
  {
    title: "Modern Design",
    icon: Sparkles,
    copy: "Premium aesthetics that make your business look established, trustworthy, and instantly appealing.",
  },
  {
    title: "Reliable Development",
    icon: ShieldCheck,
    copy: "Secure, high-performance code that you can depend on, built with the best modern practices.",
  },
];

const faqs = [
  [
    "Do you only build websites?",
    "No. While we build high-performance websites, we also provide a complete range of digital solutions including custom business software, POS systems, Meta Ads management, WhatsApp automation, and social media branding.",
  ],
  [
    "Can you create custom business software?",
    "Yes. We build tailored dashboards, CRM systems, and management portals that fit exactly how your business operates, helping you streamline daily tasks.",
  ],
  [
    "Do you offer POS systems?",
    "Absolutely. We can develop or integrate modern point-of-sale systems connected directly to your online ordering and inventory management.",
  ],
  [
    "Can you automate WhatsApp messages?",
    "Yes. We set up smart WhatsApp automations to handle frequent customer questions, appointment bookings, and instantly send automated replies.",
  ],
  [
    "Do you manage Meta Ads?",
    "We do. We create and manage targeted Meta Ad campaigns designed to drive the right audience to your business and increase your conversions.",
  ],
  [
    "Can you help if I already have a website?",
    "Yes. We can improve your existing website's performance, integrate new automations, or provide ongoing digital marketing and social media support.",
  ],
  [
    "Can you design social media content for my business?",
    "We provide professional social media branding and design services to ensure your online presence is cohesive, engaging, and highly memorable.",
  ],
  [
    "Can my business get a completely custom solution?",
    "Definitely. Every business is different. We analyze your specific needs and build a custom digital strategy combining the right custom software development, automation tools, and marketing systems.",
  ],
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`growth-faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="growth-faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown size={20} />
      </button>
      <div className="growth-faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function GrowthJourney() {
  return (
    <div className="growth-journey">
      {/* Complete Digital Solutions */}
      <section id="digital-solutions" className="growth-section growth-surface">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-centered">
            <p className="growth-eyebrow">Complete Digital Solutions</p>
            <h2>Everything Your Business Needs. One Trusted Partner.</h2>
            <p>
              Whether you're launching a new business, growing an established
              one, or streamlining daily operations, FORESTY delivers the
              digital solutions that help businesses operate smarter, reach more
              customers, and grow with confidence.
            </p>
          </Reveal>
          <div className="growth-solution-grid">
            {digitalSolutions.map((sol, index) => (
              <Reveal
                key={sol.title}
                delay={index * 0.08}
                className="growth-solution-card group hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <sol.icon
                  size={26}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white"
                />
                <h3 className="group-hover:text-[#00ba61] transition-colors">
                  {sol.title}
                </h3>
                <p>{sol.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section id="business-solutions" className="growth-section growth-alt">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-split">
            <div>
              <p className="growth-eyebrow">
                Solutions Built Around Your Business
              </p>
              <h2>
                Instead of offering generic services, we build what{" "}
                <em>you need.</em>
              </h2>
            </div>
            <p>
              Every business is different. We analyze your specific operational
              bottlenecks and growth targets to implement the exact systems that
              will drive you forward.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessSolutions.map((sol, index) => (
              <Reveal
                key={sol.type}
                delay={index * 0.06}
                className="border border-white/10 bg-[#080a08] p-8 rounded-2xl hover:border-[#00ba61]/40 transition-colors duration-300 group"
              >
                <div className="mb-6 text-[#00ba61] group-hover:scale-110 transition-transform origin-left">
                  <sol.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-[#f4f7f2]">
                  {sol.type}
                </h3>

                <div className="mb-6">
                  <span className="block text-xs uppercase tracking-wider text-neutral-500 mb-3 font-mono">
                    Needs
                  </span>
                  <ul className="space-y-2">
                    {sol.needs.map((need) => (
                      <li
                        key={need}
                        className="text-sm text-neutral-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="block text-xs uppercase tracking-wider text-[#00ba61] mb-3 font-mono">
                    Recommended Solutions
                  </span>
                  <ul className="space-y-2">
                    {sol.recommended.map((rec) => (
                      <li
                        key={rec}
                        className="text-sm text-white font-medium flex items-center gap-2"
                      >
                        <Check size={14} className="text-[#00ba61]" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="growth-section growth-surface">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-split">
            <div>
              <p className="growth-eyebrow">The cost of standing still</p>
              <h2>
                How much business are you <em>losing</em> every month?
              </h2>
            </div>
            <p>
              When the customer journey is unclear, people do not wait around.
              They choose the business that makes the next step easier.
            </p>
          </Reveal>
          <div className="growth-problem-grid">
            {problems.map(([title, copy], index) => (
              <Reveal
                key={title}
                delay={index * 0.04}
                className="growth-problem-card"
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-section growth-alt">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-centered">
            <p className="growth-eyebrow">A simpler way forward</p>
            <h2>
              Imagine if your business could <em>do more</em> for you.
            </h2>
            <p>
              We build the place where people discover you, trust you, and take
              action—without creating more work for your team.
            </p>
          </Reveal>
          <div className="growth-solution-grid">
            <Reveal className="growth-solution-card">
              <TrendingUp size={22} />
              <h3>More customers, naturally</h3>
              <p>
                Be easy to find, easy to trust, and easy to contact when people
                are ready to buy.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="growth-solution-card">
              <Clock3 size={22} />
              <h3>A business open 24/7</h3>
              <p>
                Let customers view, enquire, order, or book while you serve the
                people already in front of you.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="growth-solution-card">
              <MessageCircle size={22} />
              <h3>Less back-and-forth</h3>
              <p>
                Turn common questions, appointments, and orders into a simple
                guided experience.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="growth-solution-card">
              <ShieldCheck size={22} />
              <h3>A stronger first impression</h3>
              <p>
                Give people the confidence to choose you before they speak to
                anyone else.
              </p>
            </Reveal>
          </div>
          <Reveal className="growth-outcome">
            <div>
              <p className="growth-eyebrow">What this can unlock</p>
              <h3>A calmer day-to-day. A stronger business.</h3>
            </div>
            <ul>
              {[
                "Accept orders and bookings around the clock",
                "Give customers answers before they need to call",
                "Present every service or product with confidence",
                "Spend more time growing, less time repeating yourself",
              ].map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why Businesses Work With Us */}
      <section
        id="why-work-with-us"
        className="growth-section"
        style={{ backgroundColor: "#0a0d0a" }}
      >
        <div className="growth-shell">
          <Reveal className="growth-heading growth-centered">
            <p className="growth-eyebrow">Why Businesses Work With Us</p>
            <h2>
              More than developers. A partner in your <em>growth.</em>
            </h2>
          </Reveal>
          <div
            className="growth-problem-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {whyWorkWithUs.map((reason, index) => (
              <Reveal
                key={reason.title}
                delay={index * 0.05}
                className="growth-problem-card group"
              >
                <reason.icon
                  size={26}
                  className="mb-8 text-[#00ba61] group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-[1.1rem] font-bold text-white mb-3 group-hover:text-[#00ba61] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-[0.9rem] text-neutral-400">{reason.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="growth-section growth-surface">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-centered">
            <p className="growth-eyebrow">No confusing process</p>
            <h2>
              From first conversation to <em>real momentum.</em>
            </h2>
          </Reveal>
          <div className="growth-process-grid">
            {process.map(([number, title, copy], index) => (
              <Reveal
                key={number}
                delay={index * 0.05}
                className="growth-process-card"
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="growth-section growth-alt">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-split">
            <div>
              <p className="growth-eyebrow">A better before and after</p>
              <h2>
                Small shifts can create <em>big relief.</em>
              </h2>
            </div>
            <p>
              Every business is different. The pattern stays the same: make it
              easier for customers to choose you and easier for your team to
              serve them.
            </p>
          </Reveal>

          <div className="growth-story-grid">
            {stories.map(([business, before, after, image, link], index) => (
              <Reveal key={business} delay={index * 0.06}>
                {/* 1. Wrapped entire card in a semantic external link wrapper */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="growth-story block group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 rounded-2xl overflow-hidden"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {/* 2. Added hover image scaling & centered overlay arrow */}
                  <div className="growth-story-image relative overflow-hidden">
                    <img
                      src={image}
                      alt={`${business} business example`}
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white text-black p-2.5 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="growth-story-copy">
                    {/* 3. Added top line with "Live Site" arrow badge */}
                    <div className="flex justify-between items-center mb-2">
                      <p className="growth-story-label m-0">{business}</p>
                      <div className="flex items-center gap-1 text-[11px] text-neutral-400 group-hover:text-white transition-colors duration-200 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                        <span>Live Site</span>
                        <ArrowUpRight
                          size={11}
                          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>
                    <div>
                      <span>Before</span>
                      <p>{before}</p>
                    </div>
                    <div>
                      <span>After</span>
                      <p>{after}</p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="growth-section growth-surface">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-centered">
            <p className="growth-eyebrow">Choose what moves you forward</p>
            <h2>
              Built for the next stage of your <em>business.</em>
            </h2>
            <p>
              We start with the business result you need—not a pre-packaged list
              of features you may never use.
            </p>
          </Reveal>
          <div className="growth-price-grid">
            {plans.map(([name, intro, result, items], index) => (
              <Reveal
                key={name}
                delay={index * 0.08}
                className={`growth-price-card ${index === 1 ? "is-featured" : ""}`}
              >
                {index === 1 && (
                  <span className="growth-popular">
                    <Sparkles size={14} /> Most chosen
                  </span>
                )}
                <span className="growth-number">0{index + 1}</span>
                <h3>{name}</h3>
                <p className="growth-price-intro">{intro}</p>
                <div className="growth-price-result">{result}</div>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="growth-link">
                  Talk about your business <ArrowRight size={16} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="growth-section growth-alt">
        <div className="growth-shell growth-belief">
          <Reveal>
            <p className="growth-eyebrow">Why Foresty exists</p>
            <h2>
              Every business deserves a website that helps generate revenue
              instead of just <em>existing.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              We believe a local business should be able to compete with bigger
              names without becoming a marketing expert or spending every
              evening in its inbox.
            </p>
            <p>
              Foresty plants the right online foundations, then shapes them
              around earning trust, bringing in leads, taking bookings, and
              keeping your business moving.
            </p>
            <p>
              Beyond websites, we help companies improve their online presence,
              automate repetitive tasks, optimize business operations, and build
              custom digital tools tailored to their goals. From social media
              branding and Meta Ads to WhatsApp automation and custom business
              software, we provide the complete digital solutions needed for
              your business growth.
            </p>
            <a href="#contact" className="growth-button">
              Let&apos;s grow your business <ArrowRight size={17} />
            </a>
          </Reveal>
        </div>
        <div className="growth-shell growth-badges">
          {[
            "Fast delivery",
            "Mobile friendly",
            "SEO ready",
            "WhatsApp integration",
            "Online payments",
            "Booking systems",
            "Order management",
            "Ongoing support",
          ].map((badge) => (
            <span key={badge}>
              <CircleCheck size={15} />
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section id="faq" className="growth-section growth-surface">
        <div className="growth-shell growth-faq">
          <Reveal>
            <p className="growth-eyebrow">Straight answers</p>
            <h2>
              Questions business owners <em>actually ask.</em>
            </h2>
            <p>
              If you are thinking about it, there is a good chance we have
              helped someone work through it before.
            </p>
          </Reveal>
          <div className="growth-faq-list">
            {faqs.map(([question, answer]) => (
              <FAQItem key={question} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
