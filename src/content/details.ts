/**
 * Service detail copy for /services/[slug]. Original GivenX Tech copy.
 */

type Detail = {
  capabilities: { title: string; text: string }[];
  outcomes: string[];
  storyTags: string[];
};

export const serviceDetails: Record<string, Detail> = {
  "artificial-intelligence": {
    capabilities: [
      { title: "Use-case discovery", text: "Two-week sprints with the people who run the workflow to find where AI saves real hours." },
      { title: "Agent engineering", text: "Multi-step agents with tool access, human approval points and full traceability." },
      { title: "LLMOps", text: "Evaluation suites, prompt and model versioning, cost tracking and rollback." },
      { title: "AI governance", text: "Risk classification, model cards and controls that satisfy auditors without slowing delivery." },
    ],
    outcomes: ["A production AI workflow inside 12 weeks", "Measured adoption, not just deployment", "A reusable platform for the next use case"],
    storyTags: ["AI"],
  },
  "business-transformation": {
    capabilities: [
      { title: "Operating model design", text: "Roles, decision rights and team shapes that fit how technology now gets built." },
      { title: "Process redesign", text: "End-to-end workflow mapping, then redesign with automation and AI where it pays." },
      { title: "Value tracking", text: "A small set of metrics agreed up front and reported every month." },
      { title: "Change management", text: "Communication, training and floor support that turn a launch into a habit." },
    ],
    outcomes: ["Value landing in the first quarter", "Clear ownership for every change", "Teams that can keep improving on their own"],
    storyTags: ["AI", "Managed Services"],
  },
  "cloud-native-architecture": {
    capabilities: [
      { title: "Landing zones", text: "Secure, automated foundations for every major public cloud." },
      { title: "Platform engineering", text: "Internal developer platforms with golden paths that make the right way the easy way." },
      { title: "Resilience", text: "Multi-region design, chaos testing and recovery plans you have actually rehearsed." },
      { title: "Observability", text: "Tracing, metrics and logs wired to service-level objectives." },
    ],
    outcomes: ["Faster lead time for product teams", "Fewer incidents and quicker recovery", "Cloud spend you can explain"],
    storyTags: ["Cloud"],
  },
  "cloud-native-app-development": {
    capabilities: [
      { title: "Modernisation", text: "Break monoliths into services at the pace your business can absorb." },
      { title: "New product builds", text: "Cross-functional squads that take a product from idea to launch." },
      { title: "Delivery automation", text: "CI/CD, infrastructure as code and automated testing from day one." },
      { title: "API platforms", text: "Well-designed APIs that partners and internal teams can build on." },
    ],
    outcomes: ["Weekly releases instead of quarterly", "Legacy costs retired step by step", "Engineering practices your team keeps"],
    storyTags: ["Cloud"],
  },
  "cloud-managed-services": {
    capabilities: [
      { title: "24/7 operations", text: "Monitoring, incident response and on-call with agreed service levels." },
      { title: "FinOps", text: "Monthly optimisation reviews and automated savings on idle and oversized resources." },
      { title: "Security operations", text: "Patching, posture management and threat detection as a continuous service." },
      { title: "Continuous improvement", text: "An automation backlog delivered every sprint, so toil keeps falling." },
    ],
    outcomes: ["Availability targets met month after month", "Lower and more predictable cloud spend", "Your engineers back on product work"],
    storyTags: ["Managed Services"],
  },
  cybersecurity: {
    capabilities: [
      { title: "Identity and access", text: "Passwordless sign-in, least privilege and automated access reviews." },
      { title: "Cloud security", text: "Posture management, workload protection and secure-by-default templates." },
      { title: "Detection and response", text: "Round-the-clock monitoring with response playbooks tested on your systems." },
      { title: "AI security", text: "Threat modelling, red-teaming and guardrails for AI applications and agents." },
    ],
    outcomes: ["Fewer and smaller incidents", "Audit evidence on demand", "Security that speeds delivery up"],
    storyTags: ["Cybersecurity"],
  },
  data: {
    capabilities: [
      { title: "Lakehouse platforms", text: "One governed platform for analytics, streaming and machine learning." },
      { title: "Data products", text: "Domain-owned datasets with contracts, quality checks and clear owners." },
      { title: "Governance", text: "Catalogues, lineage and policy-as-code that keep sensitive data safe." },
      { title: "Analytics enablement", text: "Self-service tools and training so teams answer their own questions." },
    ],
    outcomes: ["Trusted numbers in every meeting", "Data ready for AI use cases", "Legacy data marts retired"],
    storyTags: ["Data"],
  },
  "digital-workplace": {
    capabilities: [
      { title: "Collaboration platforms", text: "Email, chat, documents and meetings configured for how your teams work." },
      { title: "AI assistants", text: "Workplace copilots rolled out with data protection and usage guidance." },
      { title: "Device management", text: "Zero-touch provisioning and secure management for every device." },
      { title: "Adoption programmes", text: "Champions networks, training and feedback loops that drive real usage." },
    ],
    outcomes: ["Higher daily usage of the tools you pay for", "Faster onboarding for new joiners", "A secure workplace on any device"],
    storyTags: ["Managed Services"],
  },
  training: {
    capabilities: [
      { title: "Certification paths", text: "Structured routes to cloud, data and security certifications." },
      { title: "Hands-on labs", text: "Practical labs built on scenarios from your own environment." },
      { title: "Leadership programmes", text: "Short programmes that help leaders make sound technology decisions." },
      { title: "AI literacy", text: "Training that gives every employee safe, productive habits with AI tools." },
    ],
    outcomes: ["Certified teams in months, not years", "Less reliance on outside help", "Leaders who ask the right questions"],
    storyTags: ["AI"],
  },
  strategy: {
    capabilities: [
      { title: "Technology strategy", text: "Where to invest, what to stop and how to sequence the change." },
      { title: "AI readiness", text: "An honest assessment of data, platforms, skills and governance." },
      { title: "Architecture review", text: "Independent review of your target architecture and roadmap." },
      { title: "Vendor selection", text: "Structured, evidence-based selection of platforms and partners." },
    ],
    outcomes: ["A roadmap your board and engineers both believe", "Investment focused where it pays", "Decisions made in weeks, not quarters"],
    storyTags: ["Cloud", "AI"],
  },
  "sustainable-it": {
    capabilities: [
      { title: "Footprint measurement", text: "Carbon and energy baselines for cloud, data centres and devices." },
      { title: "Green architecture", text: "Design choices that cut energy use without cutting performance." },
      { title: "Responsible procurement", text: "Criteria and contracts that reward lower-impact suppliers." },
      { title: "Reporting", text: "Data you can use in sustainability reporting with confidence." },
    ],
    outcomes: ["Lower emissions from your digital estate", "Lower running costs", "Reporting backed by measured data"],
    storyTags: ["Cloud", "Managed Services"],
  },
};
