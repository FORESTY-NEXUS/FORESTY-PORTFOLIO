import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight, // Added for link indicators
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Contact from "./ContactPage";
import Footer from "./Footer";
import "./GrowthJourney.css";

const problems = [
  ["Restaurants", "Customers forget to order when your menu only lives in a chat."],
  ["Salons", "Appointments disappear between DMs, calls, and busy staff."],
  ["Clinics", "Your reception spends the day repeating the same answers."],
  ["Real estate", "Buyers leave when there are no listings to explore."],
  ["Local stores", "Great products stay invisible without a professional home online."],
  ["Business owners", "Too much of your day goes into repetitive work instead of growth."],
];

const process = [
  ["01", "Tell us about your business", "We learn how you work, what is getting in the way, and where growth is being lost."],
  ["02", "We create the strategy", "Together, we choose the clearest path to more customers and less manual work."],
  ["03", "We build your growth engine", "Your website is shaped around enquiries, bookings, orders, and trust."],
  ["04", "You review everything", "You stay close to the process and approve every important decision before launch."],
  ["05", "We launch with care", "We make sure the experience is ready for the people who will use it every day."],
  ["06", "Your business starts growing", "Your new online presence starts working alongside you every hour of the week."],
];

// Updated array: 1. Clinic removed, 2. Nails fixed, 3. Perfumes fixed, 4. Added live links
const stories = [
  [
    "Restaurant", 
    "Orders were handled one message at a time.", 
    "A simple online menu gives customers a faster way to order.", 
    "/zaiqa-hub.jpeg", 
    "https://foresty-resturant.vercel.app"
  ],
  [
    "Nails", 
    "Appointments were scattered across chats and calls.", 
    "Customers can see services and request the right time themselves.", 
    "/Frame 2.jpeg", 
    "https://lily-nails.vercel.app"
  ],
  [
    "Perfumes", 
    "Products relied entirely on social posts.", 
    "A professional storefront turns attention into confident buying decisions.", 
    "/mashab perfumes.png", 
    "https://mashab-perfumes-k53u.vercel.app"
  ],
];

const plans = [
  ["Professional Business Website", "For businesses ready to look established and earn trust online.", "Give customers a clear reason to choose you.", ["A polished website built around your services", "Clear enquiry paths and WhatsApp connection", "Mobile-ready pages that feel effortless to use", "A foundation that helps people find you on Google"]],
  ["Business Growth Website", "For teams ready to remove friction from their customer journey.", "Turn more visits into bookings, orders, and enquiries.", ["Everything in the professional website", "Online booking or ordering journeys", "Payment and customer enquiry flows", "Automations that save your team time every week"]],
  ["Complete Business System", "For ambitious businesses that want operations to feel simpler.", "Bring your customer experience and daily work into one place.", ["A complete customer-facing website", "Custom dashboards for the work behind the scenes", "Customer, order, or booking management", "Reporting and automations built around your business"]],
];

const faqs = [
  ["Why do I need a website if I already have Instagram?", "Instagram helps people discover you. Your own website gives them one trusted place to understand your offer, take action, and find you again without an algorithm deciding who sees you."],
  ["Will this help me get more customers?", "It gives interested people fewer reasons to leave. Every page is shaped around clarity, trust, and the next action—whether that is a call, booking, order, or enquiry."],
  ["How long does it take?", "The right timeline depends on what your business needs. We give you a clear plan with realistic milestones before work begins."],
  ["Can I update it myself?", "Yes. Where your team needs to manage content, products, listings, or bookings, we make that work straightforward and show you how to use it."],
  ["Do you provide support after launch?", "Yes. A launch is the beginning, not the disappearing act. We can stay involved as your business changes and grows."],
  ["Can customers order or book online?", "Absolutely. We create the right journey for appointments, reservations, orders, payments, or qualified enquiries—based on how your business works."],
];

function Reveal({ children, delay = 0, className = "" }) {
  return <Motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</Motion.div>;
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return <div className={`growth-faq-item ${open ? "is-open" : ""}`}><button type="button" className="growth-faq-question" onClick={() => setOpen(!open)} aria-expanded={open}><span>{question}</span><ChevronDown size={20} /></button><div className="growth-faq-answer"><p>{answer}</p></div></div>;
}

export default function GrowthJourney() {
  return (
    <div className="growth-journey">
      <section id="what-we-do" className="growth-section growth-surface">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-split"><div><p className="growth-eyebrow">The cost of standing still</p><h2>How much business are you <em>losing</em> every month?</h2></div><p>When the customer journey is unclear, people do not wait around. They choose the business that makes the next step easier.</p></Reveal>
          <div className="growth-problem-grid">{problems.map(([title, copy], index) => <Reveal key={title} delay={index * 0.04} className="growth-problem-card"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="growth-section growth-alt">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-centered"><p className="growth-eyebrow">A simpler way forward</p><h2>Imagine if your business could <em>do more</em> for you.</h2><p>We build the place where people discover you, trust you, and take action—without creating more work for your team.</p></Reveal>
          <div className="growth-solution-grid">
            <Reveal className="growth-solution-card"><TrendingUp size={22} /><h3>More customers, naturally</h3><p>Be easy to find, easy to trust, and easy to contact when people are ready to buy.</p></Reveal>
            <Reveal delay={0.08} className="growth-solution-card"><Clock3 size={22} /><h3>A business open 24/7</h3><p>Let customers view, enquire, order, or book while you serve the people already in front of you.</p></Reveal>
            <Reveal delay={0.16} className="growth-solution-card"><MessageCircle size={22} /><h3>Less back-and-forth</h3><p>Turn common questions, appointments, and orders into a simple guided experience.</p></Reveal>
            <Reveal delay={0.24} className="growth-solution-card"><ShieldCheck size={22} /><h3>A stronger first impression</h3><p>Give people the confidence to choose you before they speak to anyone else.</p></Reveal>
          </div>
          <Reveal className="growth-outcome"><div><p className="growth-eyebrow">What this can unlock</p><h3>A calmer day-to-day. A stronger business.</h3></div><ul>{["Accept orders and bookings around the clock", "Give customers answers before they need to call", "Present every service or product with confidence", "Spend more time growing, less time repeating yourself"].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></Reveal>
        </div>
      </section>

      <section id="process" className="growth-section growth-surface">
        <div className="growth-shell"><Reveal className="growth-heading growth-centered"><p className="growth-eyebrow">No confusing process</p><h2>From first conversation to <em>real momentum.</em></h2></Reveal><div className="growth-process-grid">{process.map(([number, title, copy], index) => <Reveal key={number} delay={index * 0.05} className="growth-process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div>
      </section>

      <section id="projects" className="growth-section growth-alt">
        <div className="growth-shell">
          <Reveal className="growth-heading growth-split">
            <div>
              <p className="growth-eyebrow">A better before and after</p>
              <h2>Small shifts can create <em>big relief.</em></h2>
            </div>
            <p>Every business is different. The pattern stays the same: make it easier for customers to choose you and easier for your team to serve them.</p>
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
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {/* 2. Added hover image scaling & centered overlay arrow */}
                  <div className="growth-story-image relative overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${business} business example`} 
                      className="transition-transform duration-500 group-hover:scale-[1.03]" 
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
                        <ArrowUpRight size={11} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
        <div className="growth-shell"><Reveal className="growth-heading growth-centered"><p className="growth-eyebrow">Choose what moves you forward</p><h2>Built for the next stage of your <em>business.</em></h2><p>We start with the business result you need—not a pre-packaged list of features you may never use.</p></Reveal><div className="growth-price-grid">{plans.map(([name, intro, result, items], index) => <Reveal key={name} delay={index * 0.08} className={`growth-price-card ${index === 1 ? "is-featured" : ""}`}>{index === 1 && <span className="growth-popular"><Sparkles size={14} /> Most chosen</span>}<span className="growth-number">0{index + 1}</span><h3>{name}</h3><p className="growth-price-intro">{intro}</p><div className="growth-price-result">{result}</div><ul>{items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a href="#contact" className="growth-link">Talk about your business <ArrowRight size={16} /></a></Reveal>)}</div></div>
      </section>

      <section id="about" className="growth-section growth-alt">
        <div className="growth-shell growth-belief"><Reveal><p className="growth-eyebrow">Why Foresty exists</p><h2>Every business deserves a website that helps generate revenue instead of just <em>existing.</em></h2></Reveal><Reveal delay={0.12}><p>We believe a local business should be able to compete with bigger names without becoming a marketing expert or spending every evening in its inbox.</p><p>Foresty plants the right online foundations, then shapes them around earning trust, bringing in leads, taking bookings, and keeping your business moving.</p><a href="#contact" className="growth-button">Let&apos;s grow your business <ArrowRight size={17} /></a></Reveal></div>
        <div className="growth-shell growth-badges">{["Fast delivery", "Mobile friendly", "SEO ready", "WhatsApp integration", "Online payments", "Booking systems", "Order management", "Ongoing support"].map((badge) => <span key={badge}><CircleCheck size={15} />{badge}</span>)}</div>
      </section>

      <section id="faq" className="growth-section growth-surface"><div className="growth-shell growth-faq"><Reveal><p className="growth-eyebrow">Straight answers</p><h2>Questions business owners <em>actually ask.</em></h2><p>If you are thinking about it, there is a good chance we have helped someone work through it before.</p></Reveal><div className="growth-faq-list">{faqs.map(([question, answer]) => <FAQItem key={question} question={question} answer={answer} />)}</div></div></section>
      <Contact />
      <Footer />
    </div>
  );
}