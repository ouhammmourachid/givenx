/**
 * GivenX Tech — site content.
 *
 * All copy here is original. Figures, testimonials and case studies are
 * SAMPLE CONTENT: replace them with your real numbers, clients and quotes
 * before going live.
 */

export const brand = {
  name: "GivenX Tech",
  tagline: "Engineering Change",
  email: "hello@givenx.tech",
};

export type NavLink = { label: string; href: string };
export type MegaColumn = { title: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href?: string;
  mega?: { columns: MegaColumn[]; promo: { title: string; text: string; cta: NavLink; art: number } };
};

export const services = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    short: "AI & Agents",
    art: 1,
    hero: "AI & Agentic Engineering: From First Idea to Daily Use",
    intro:
      "Most AI programmes stall between the demo and the day job. We design, build and run AI that sits inside your workflows, is governed from day one and is actually used by your teams.",
  },
  {
    slug: "business-transformation",
    name: "Business Transformation",
    short: "Strategy & Change",
    art: 2,
    hero: "Business Transformation That Survives Contact With Reality",
    intro:
      "We turn strategy into operating change: new processes, new roles and new tools, sequenced so that value lands early and keeps compounding.",
  },
  {
    slug: "cloud-native-architecture",
    name: "Cloud Native Architecture",
    short: "Platforms",
    art: 3,
    hero: "Cloud Native Architecture Built to Carry What Comes Next",
    intro:
      "Resilient, observable and cost-aware platforms that give your product teams speed without giving your operations team sleepless nights.",
  },
  {
    slug: "cloud-native-app-development",
    name: "Cloud Native App Development",
    short: "Apps",
    art: 4,
    hero: "Cloud Native Apps, Shipped Weekly",
    intro:
      "Product-minded engineering squads that modernise legacy applications and build new ones on managed services, with automation from commit to production.",
  },
  {
    slug: "cloud-managed-services",
    name: "Cloud Managed Services",
    short: "Run",
    art: 5,
    hero: "Managed Cloud Operations, Measured on Outcomes",
    intro:
      "24/7 operations, FinOps and continuous improvement for your cloud estate, so your engineers can spend their time on what differentiates you.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    short: "Security",
    art: 6,
    hero: "Cybersecurity for an AI-First Enterprise",
    intro:
      "Identity, cloud security, threat detection and AI governance designed together, so security becomes a reason to move faster rather than a reason to wait.",
  },
  {
    slug: "data",
    name: "Data",
    short: "Data Platforms",
    art: 7,
    hero: "Data Foundations Your AI Can Trust",
    intro:
      "Modern lakehouse platforms, governed data products and the quality controls that make analytics and AI dependable at scale.",
  },
  {
    slug: "digital-workplace",
    name: "Digital Workplace",
    short: "Workplace",
    art: 8,
    hero: "A Digital Workplace People Choose to Use",
    intro:
      "Collaboration, devices and AI assistants rolled out with the adoption programme that makes them stick.",
  },
  {
    slug: "training",
    name: "Training",
    short: "Academy",
    art: 9,
    hero: "Upskill Your Teams for the AI Era",
    intro:
      "Certification paths, hands-on labs and leadership programmes that build lasting capability inside your organisation.",
  },
  {
    slug: "strategy",
    name: "Strategy",
    short: "Advisory",
    art: 10,
    hero: "Technology Strategy With a Delivery Plan Attached",
    intro:
      "Clear choices on where to invest, what to stop and how to sequence the change, backed by architects who will help you build it.",
  },
  {
    slug: "sustainable-it",
    name: "Sustainable IT",
    short: "Green IT",
    art: 11,
    hero: "Sustainable IT That Cuts Carbon and Cost",
    intro:
      "Measure the footprint of your digital estate, then reduce it with architecture, procurement and usage changes that also lower your bill.",
  },
];

export const nav: NavItem[] = [
  {
    label: "Expertise",
    mega: {
      columns: [
        { title: "Services", links: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })) },
        {
          title: "Platforms",
          links: [
            { label: "Public Cloud", href: "/services/cloud-native-architecture" },
            { label: "Data & Analytics", href: "/services/data" },
            { label: "AI Platforms", href: "/services/artificial-intelligence" },
            { label: "Workflow Automation", href: "/services/business-transformation" },
            { label: "All services", href: "/services" },
          ],
        },
      ],
      promo: {
        title: "Engineering Change",
        text: "Senior engineers who build inside your teams, from the first idea to daily use.",
        cta: { label: "Read more about us", href: "/about" },
        art: 0,
      },
    },
  },
  { label: "Insights", href: "/insights" },
  { label: "Events", href: "/events" },
  {
    label: "About us",
    mega: {
      columns: [
        {
          title: "Company",
          links: [
            { label: "Company overview", href: "/about" },
            { label: "Success stories", href: "/success-stories" },
            { label: "News and press", href: "/insights" },
            { label: "Events", href: "/events" },
          ],
        },
        {
          title: "Responsibility",
          links: [
            { label: "Our values", href: "/about#values" },
            { label: "Sustainable IT", href: "/services/sustainable-it" },
            { label: "Get in touch", href: "/contact" },
          ],
        },
      ],
      promo: {
        title: "Who is GivenX Tech?",
        text: "Senior engineers and AI specialists who work inside your business, not beside it.",
        cta: { label: "Company overview", href: "/about" },
        art: 2,
      },
    },
  },
  {
    label: "Careers",
    mega: {
      columns: [
        {
          title: "Join us",
          links: [
            { label: "Life at GivenX", href: "/careers" },
            { label: "Students & graduates", href: "/careers#phases" },
            { label: "Experienced talent", href: "/careers#phases" },
            { label: "Tech & business leaders", href: "/careers#phases" },
          ],
        },
        {
          title: "Teams",
          links: [
            { label: "AI & Data", href: "/careers" },
            { label: "Cloud Engineering", href: "/careers" },
            { label: "Cybersecurity", href: "/careers" },
            { label: "Explore jobs", href: "/careers" },
          ],
        },
      ],
      promo: {
        title: "Build what lasts",
        text: "Build the next decade of technology with people who love the craft.",
        cta: { label: "Explore jobs", href: "/careers" },
        art: 4,
      },
    },
  },
  { label: "Get in touch", href: "/contact" },
];

export const heroStats = [
  { value: 350, suffix: "+", strong: "AI projects", rest: " delivered yearly with 120+ agents" },
  { value: 1200, suffix: "+", strong: "Certified engineers", rest: " across cloud, data and AI" },
  { value: 600, suffix: "+", strong: "", rest: "Clients served since 2012" },
  { value: 12, suffix: "", strong: "Countries", rest: " with local delivery teams" },
];

export const pillars = [
  { n: "01", title: "Strategise & Assess", text: "Tech & agentic strategy and readiness" },
  { n: "02", title: "Build & Modernise", text: "Cloud & data foundations" },
  { n: "03", title: "Deploy & Accelerate", text: "AI pods & platforms" },
  { n: "04", title: "Govern & Secure", text: "AI control & resilience" },
  { n: "05", title: "Run & Optimise", text: "Managed services" },
  { n: "06", title: "People Enablement", text: "Adoption & change management" },
];

export const platformCards = [
  { badge: "Cloud Platforms", title: "Multi-cloud architects on every engagement", mark: "Cloud" },
  { badge: "Data Platforms", title: "Lakehouse and streaming at scale", mark: "Data" },
  { badge: "AI Platforms", title: "Model-agnostic agent engineering", mark: "AI" },
  { badge: "Workflow Platforms", title: "Automation woven into daily work", mark: "Flow" },
];

export const toolkit = ["Agents", "LLMOps", "Vector Search", "Lakehouse", "Kubernetes", "Zero Trust", "Observability", "FinOps"];

export const apart = [
  { icon: "rocket", title: "Forward Deployed Engineers", text: "Our engineers embed with the team that owns the problem, so what we build fits how you actually work." },
  { icon: "spark", title: "Integrated Delivery Network", text: "Hubs across 12 countries give you the scale to run ambitious programmes with a local team in your market." },
  { icon: "globe", title: "Proven Client Satisfaction", text: "We track satisfaction on every engagement and publish the score to our teams every quarter." },
];

export const apartCards = [
  { value: "12+ Years", text: "Guiding clients through every tech wave. You get a partner who knows which bets pay off.", art: 3 },
  { value: "1,200", text: "Certified engineers. Your project is staffed by people who already know the platforms in your stack.", art: 5 },
  { value: "350+", text: "AI projects delivered yearly. Your project starts from proven components, not a blank page.", art: 7 },
];

export type Story = {
  slug: string;
  title: string;
  sector: string;
  tag: "AI" | "Data" | "Cybersecurity" | "Managed Services" | "Cloud";
  art: number;
  summary: string;
  glance: { title: string; text: string }[];
  client: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const stories: Story[] = [
  {
    slug: "retail-demand-forecasting-agents",
    title: "Agentic demand forecasting for a national retail chain",
    sector: "Retail",
    tag: "AI",
    art: 1,
    summary: "Forecasting agents that read sales, weather and promotions to cut stock-outs across 400 stores.",
    glance: [
      { title: "Forecasts that explain themselves.", text: "Planners see why a number changed, not just that it did." },
      { title: "Stock-outs down sharply.", text: "Store replenishment now reacts to local signals within hours." },
      { title: "Built to extend.", text: "The same agent framework now covers pricing and staffing." },
    ],
    client: "A national retail group operating hundreds of stores and a growing online channel.",
    challenge: "Forecasts were produced weekly in spreadsheets and missed local events, leaving shelves empty on peak days.",
    solution: "We embedded a squad with the planning team and built forecasting agents on a governed lakehouse, with human approval on every order change.",
    results: ["Forecast error reduced in pilot categories", "Replenishment cycle moved from weekly to daily", "Planners reclaimed a day a week"],
  },
  {
    slug: "insurer-claims-assistant",
    title: "A generative AI claims assistant for an insurer",
    sector: "Insurance",
    tag: "AI",
    art: 6,
    summary: "An assistant that drafts claim summaries and next steps, approved by handlers in one click.",
    glance: [
      { title: "Faster first response.", text: "Customers hear back the same day on routine claims." },
      { title: "Handlers stay in control.", text: "Every suggestion is reviewed, edited and logged." },
      { title: "Compliant by design.", text: "Audit trails and data residency met from the first release." },
    ],
    client: "A mid-sized property and casualty insurer.",
    challenge: "Claims handlers spent most of their time reading documents instead of helping customers.",
    solution: "We built a retrieval-augmented assistant over policy and claim documents, integrated into the existing claims tool.",
    results: ["Same-day response on routine claims", "Document reading time cut substantially", "Rolled out to all handlers in 10 weeks"],
  },
  {
    slug: "media-lakehouse-privacy",
    title: "Building privacy into a media group's lakehouse",
    sector: "Media",
    tag: "Data",
    art: 2,
    summary: "A privacy-first data platform that lets editors and advertisers use audience data safely.",
    glance: [
      { title: "One governed platform.", text: "Twelve legacy data marts consolidated into one lakehouse." },
      { title: "Consent everywhere.", text: "Consent is enforced at ingestion, not after the fact." },
      { title: "Self-service analytics.", text: "Editorial teams build their own dashboards." },
    ],
    client: "A broadcaster and digital publisher.",
    challenge: "Audience data was scattered and consent rules were applied inconsistently.",
    solution: "We designed a lakehouse with policy-as-code, automated PII detection and data products owned by domain teams.",
    results: ["Legacy marts retired", "Consent violations eliminated in audits", "Time-to-insight down from weeks to hours"],
  },
  {
    slug: "school-payments-service-automation",
    title: "Fast-tracking support for schools with AI-assisted service",
    sector: "Education",
    tag: "Managed Services",
    art: 9,
    summary: "AI triage and knowledge suggestions for a school payments provider's support desk.",
    glance: [
      { title: "Smarter triage.", text: "Tickets routed to the right team automatically." },
      { title: "Answers on hand.", text: "Agents get suggested replies from a curated knowledge base." },
      { title: "Run as a service.", text: "We operate and improve the platform every sprint." },
    ],
    client: "A provider of payments and communication tools for schools.",
    challenge: "Seasonal ticket peaks overwhelmed the support desk at the start of every term.",
    solution: "We added AI triage and knowledge suggestions to the service platform and took over its run and continuous improvement.",
    results: ["Peak backlog cleared within days", "Higher first-contact resolution", "Support costs flat despite growth"],
  },
  {
    slug: "rail-maintenance-assistant",
    title: "An intelligent assistant for train diagnostics and repair",
    sector: "Transport",
    tag: "AI",
    art: 4,
    summary: "A conversational assistant that guides technicians step by step through fault diagnosis.",
    glance: [
      { title: "Centralised knowledge.", text: "Manuals, incident histories and sensor data in one assistant." },
      { title: "Guided diagnostics in seconds.", text: "Technicians receive traceable, step-by-step answers." },
      { title: "A platform built to scale.", text: "A multi-agent architecture extends to new fleets and use cases." },
    ],
    client: "A rolling-stock manufacturer and maintainer.",
    challenge: "Diagnostic knowledge lived in the heads of a few senior technicians.",
    solution: "We built a multi-agent assistant over technical documentation and maintenance records with full answer traceability.",
    results: ["Faster fault diagnosis", "Onboarding time for new technicians reduced", "Extended to two more fleets"],
  },
  {
    slug: "bank-zero-trust",
    title: "Zero trust identity for a regional bank",
    sector: "Banking",
    tag: "Cybersecurity",
    art: 6,
    summary: "Passwordless access and continuous verification across 3,000 employees and 200 applications.",
    glance: [
      { title: "Passwordless.", text: "Phishing-resistant authentication for every employee." },
      { title: "Least privilege.", text: "Access reviewed and right-sized automatically." },
      { title: "Audit ready.", text: "Regulatory evidence generated on demand." },
    ],
    client: "A regional retail and business bank.",
    challenge: "A patchwork of identity systems created risk and slowed down every audit.",
    solution: "We unified identity, introduced conditional access and automated joiner-mover-leaver processes.",
    results: ["Phishing incidents dropped", "Audit preparation time cut by half", "200 apps on single sign-on"],
  },
  {
    slug: "manufacturer-cloud-migration",
    title: "Migrating a manufacturer's core systems to the cloud",
    sector: "Manufacturing",
    tag: "Cloud",
    art: 3,
    summary: "A phased migration of 300 workloads with zero unplanned downtime on the production line.",
    glance: [
      { title: "Zero line stoppages.", text: "Migrations scheduled around production windows." },
      { title: "Cost visibility.", text: "FinOps dashboards per plant and per product line." },
      { title: "Ready for AI.", text: "Sensor data now flows to a shared platform." },
    ],
    client: "An industrial manufacturer with plants in four countries.",
    challenge: "Ageing data centres and rising maintenance costs blocked new digital initiatives.",
    solution: "We ran a factory-model migration with automated landing zones and plant-by-plant cutovers.",
    results: ["Data centre exit completed", "Infrastructure costs reduced", "Foundation for predictive maintenance"],
  },
  {
    slug: "energy-managed-platform",
    title: "24/7 managed cloud for an energy provider",
    sector: "Energy",
    tag: "Managed Services",
    art: 5,
    summary: "Round-the-clock operations and FinOps for a critical customer platform.",
    glance: [
      { title: "Always on.", text: "Availability targets met every month since go-live." },
      { title: "Spend under control.", text: "Monthly optimisation reviews with the CFO's team." },
      { title: "Continuous improvement.", text: "Automation backlog delivered every sprint." },
    ],
    client: "A residential energy supplier.",
    challenge: "The in-house team was stretched between firefighting and building new features.",
    solution: "We took over operations with clear SLOs, automated runbooks and a shared improvement backlog.",
    results: ["Fewer high-severity incidents", "Cloud spend reduced", "In-house team refocused on product"],
  },
];

export type Insight = {
  slug: string;
  title: string;
  type: "Expert View" | "Whitepaper" | "News" | "Success Story";
  topic: string;
  art: number;
  date: string;
  author: { name: string; role: string };
  excerpt: string;
  body: { h?: string; p: string }[];
};

const articleBody = (topic: string) => [
  { p: `Every few years a technology arrives that changes what good looks like. In ${topic}, that moment is now. The organisations pulling ahead are not the ones with the most pilots; they are the ones that turned a handful of pilots into the way they work.` },
  { h: "Start with the work, not the model", p: "The fastest route to value is to pick a workflow that matters, sit with the people who run it and redesign it end to end. Technology choices follow from that, not the other way around." },
  { h: "Make governance a feature", p: "Teams move faster when the guardrails are clear. Decide early who approves what, how quality is measured and where the data lives, then automate those checks into the delivery pipeline." },
  { h: "Measure adoption, not deployment", p: "A tool that ships but is not used is a cost. Track weekly active users, task completion and time saved, and treat those numbers as the real definition of done." },
  { h: "What to do next", p: "Choose one high-value workflow, assemble a small cross-functional squad and give it twelve weeks. You will learn more from that than from a year of strategy decks." },
];

export const insights: Insight[] = [
  { slug: "taste-is-a-skill-in-the-age-of-ai", title: "Why Taste Is a Valuable Skill in the Age of AI", type: "Expert View", topic: "AI", art: 1, date: "2026-10-28", author: { name: "Lina Haddad", role: "Principal Engineer" }, excerpt: "When making things gets cheap, deciding what is worth making becomes the scarce skill.", body: articleBody("AI") },
  { slug: "automation-vs-decision-making", title: "The Difference Between AI Automation and AI Decision-Making", type: "Expert View", topic: "AI", art: 6, date: "2026-10-20", author: { name: "Marc Duval", role: "Head of AI Engineering" }, excerpt: "Automating a task and delegating a decision are different problems with different risks.", body: articleBody("AI") },
  { slug: "agent-ready-data-platforms", title: "AI & Agentic-ready Data Platforms: A Roadmap for 2026", type: "Expert View", topic: "Data", art: 2, date: "2026-10-14", author: { name: "Sara Okafor", role: "Data Platform Lead" }, excerpt: "Agents need data that is discoverable, governed and fresh. Here is how to get there.", body: articleBody("Data") },
  { slug: "cloud-optimisation-framework", title: "A Practical Framework for Cloud Cost Optimisation", type: "Expert View", topic: "Cloud", art: 3, date: "2026-10-03", author: { name: "Tom Varga", role: "FinOps Practitioner" }, excerpt: "Four levers that consistently reduce cloud spend without slowing teams down.", body: articleBody("Cloud") },
  { slug: "meeting-to-code-pipeline", title: "How Agentic AI Can Automate Your Meeting-to-Code Pipeline", type: "Expert View", topic: "AI", art: 4, date: "2026-09-25", author: { name: "Yasmine Benali", role: "Solutions Architect" }, excerpt: "From transcript to ticket to pull request, with humans approving every step.", body: articleBody("AI") },
  { slug: "cybersecurity-super-skills", title: "The 7 Super-Skills to Master Cybersecurity in 2026", type: "Expert View", topic: "Cybersecurity", art: 6, date: "2026-09-18", author: { name: "Erik Lund", role: "CISO Advisor" }, excerpt: "The skills that separate resilient security teams from busy ones.", body: articleBody("Cybersecurity") },
  { slug: "responsible-ai-five-aspects", title: "The Future of Responsible AI: 5 Aspects We Should Talk About", type: "Expert View", topic: "AI", art: 9, date: "2026-09-10", author: { name: "Nadia Rossi", role: "AI Governance Lead" }, excerpt: "Responsible AI is an engineering discipline, not a policy document.", body: articleBody("AI") },
  { slug: "digital-sovereignty-cto-guide", title: "Digital Sovereignty & Sovereign Cloud: A CTO's Guide", type: "Expert View", topic: "Cloud", art: 7, date: "2026-09-01", author: { name: "Pieter de Wit", role: "CTO Office" }, excerpt: "What sovereignty really requires, and where it is worth paying for.", body: articleBody("Cloud") },
  { slug: "roi-to-voi", title: "Rethinking Value: From ROI to VOI in the Age of AI", type: "Expert View", topic: "AI", art: 10, date: "2026-08-22", author: { name: "Lina Haddad", role: "Principal Engineer" }, excerpt: "Value of information is a better lens for AI investments than classic ROI.", body: articleBody("AI") },
  { slug: "tech-radar-2026", title: "GivenX Tech Radar 2026: 100+ Technologies Shaping the Future", type: "Whitepaper", topic: "AI", art: 0, date: "2026-08-10", author: { name: "GivenX Research", role: "Research Team" }, excerpt: "Our honest opinion on the technologies worth adopting, trialling or ignoring this year.", body: articleBody("technology") },
  { slug: "givenx-opens-new-hub", title: "GivenX Tech Opens a New Engineering Hub", type: "News", topic: "News", art: 5, date: "2026-10-21", author: { name: "Press Office", role: "Communications" }, excerpt: "A new hub expands our delivery capacity for AI and cloud programmes.", body: articleBody("delivery") },
  { slug: "givenx-launches-ai-academy", title: "GivenX Tech Launches Its AI Academy for Clients", type: "News", topic: "News", art: 8, date: "2026-10-07", author: { name: "Press Office", role: "Communications" }, excerpt: "Hands-on programmes to build AI capability inside client teams.", body: articleBody("training") },
  { slug: "givenx-security-operations-centre", title: "GivenX Tech Expands Its Security Operations Centre", type: "News", topic: "News", art: 6, date: "2026-09-23", author: { name: "Press Office", role: "Communications" }, excerpt: "Round-the-clock detection and response for cloud-first organisations.", body: articleBody("security") },
];

export const events = [
  { slug: "ai-in-legal", day: "Wed", date: "11", month: "Nov 2026", title: "Legal in the Age of Intelligence: Modernising Workflows with AI", place: "", art: 0, online: true },
  { slug: "agentic-enterprise-briefing", day: "Wed", date: "18", month: "Nov 2026", title: "The Agentic Enterprise: A C-Suite Briefing", place: "City Conference Centre", art: 0 },
  { slug: "ai-at-scale", day: "Tue", date: "24", month: "Nov 2026", title: "AI at Scale: Trust, Control & Sovereignty", place: "Riverside Forum, Main Hall", art: 6 },
  { slug: "cloud-day-2026", day: "Wed", date: "25", month: "Nov 2026", title: "GivenX Cloud Day 2026", place: "The Glasshouse Venue", art: 4 },
  { slug: "service-management-ai", day: "Mon", date: "30", month: "Nov 2026", title: "AI-Powered IT Service Management", place: "", art: 0, online: true },
  { slug: "data-leaders-roundtable", day: "Thu", date: "03", month: "Dec 2026", title: "Data Leaders Roundtable: Building Agent-Ready Platforms", place: "Harbour Business Club", art: 2 },
];

/** Sample testimonials — replace with real, approved client quotes. */
export const voices = [
  { quote: "They structured our approach from day one, and it felt like one team rather than a supplier.", name: "Head of Digital", org: "Retail client" },
  { quote: "Thanks to the partnership we improved decision-making and synergies between our departments.", name: "IT Project Manager", org: "Financial services client" },
  { quote: "Their engineers sat with our planners for weeks. The result is a tool people actually use.", name: "Operations Director", org: "Logistics client" },
  { quote: "Security stopped being the reason we waited and became part of how we ship.", name: "CISO", org: "Banking client" },
  { quote: "Clear, honest advice and a team that delivers what it promises.", name: "CTO", org: "Media client" },
  { quote: "We went from pilot to production in a quarter, with governance our auditors were happy with.", name: "Chief Data Officer", org: "Insurance client" },
];

export const industries = ["Retail", "Banking", "Insurance", "Energy", "Manufacturing", "Public Sector", "Media", "Transport", "Healthcare", "Telecoms"];

export const faqs = [
  { q: "Which technologies does GivenX Tech work with?", a: "We are platform-agnostic. Our teams hold certifications across the major public clouds, data platforms and AI model providers, and we choose the stack that fits your context." },
  { q: "What is Forward Deployed Engineering?", a: "Small squads of senior engineers and AI specialists who work inside the business unit that owns the problem. They learn the job, build the solution and stay until it is adopted." },
  { q: "Which industries does GivenX Tech work in?", a: "Retail, financial services, energy, manufacturing, media, transport and the public sector, among others." },
  { q: "How does GivenX Tech measure the success of an engagement?", a: "We agree adoption and business metrics up front, such as time saved, error rates or revenue impact, and report on them throughout the engagement." },
  { q: "Where does GivenX Tech operate?", a: "We deliver from hubs in 12 countries and work with clients across Europe, the Middle East and Africa." },
];

export const values = [
  { icon: "bulb", title: "Entrepreneurship", text: "Space to act and a standing fight against bureaucracy. Good ideas need one conversation, not an approval chain." },
  { icon: "rocket", title: "Ambition", text: "We aim to be the best in the areas we choose. Depth over breadth, and responsible tech as the standard." },
  { icon: "people", title: "Collaboration", text: "Knowledge moves across teams rather than up a hierarchy. AI is part of how we work together." },
  { icon: "heart", title: "Respect", text: "We treat everyone with respect, regardless of title. We welcome newcomers and make long-term choices." },
  { icon: "chat", title: "Frankness", text: "Trust thrives on open feedback. Everyone is encouraged to give and seek candid, constructive input." },
];
