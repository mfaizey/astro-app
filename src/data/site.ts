export const site = {
  name: "UNFAIR",
  legal: "UNFAIR Collective Ltd.",
  tagline: "Growth collective & venture builder",
  claim: "We build the unfair advantage.",
  email: "hello@unfair.collective",
  phone: "+44 20 7946 0110",
  locations: ["London", "Lisbon", "New York"],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
  ],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Engagements", href: "/engagements" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 47, suffix: "", label: "Ventures built" },
  { value: 1.2, prefix: "$", suffix: "B", label: "Enterprise value created" },
  { value: 9, suffix: "", label: "Exits & acquisitions" },
  { value: 212, suffix: "", label: "Operators in the collective" },
];

export const ticker = [
  "Equity over invoices",
  "Small pods, unreasonable speed",
  "Distribution is the product",
  "We ship, then we scale",
  "No pitch theatre",
  "Owners, not vendors",
];

export type Engagement = {
  slug: string;
  index: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  model: string;
  duration: string;
};

export const engagements: Engagement[] = [
  {
    slug: "venture-build",
    index: "01",
    title: "Venture Build",
    short: "Zero to one, built and launched by us.",
    body: "You bring the insight. We bring the team that takes it to market — strategy, brand, product, engineering and distribution under one roof. We build alongside founders and take equity, because we only win when you do.",
    points: [
      "Product, brand and go-to-market built in parallel",
      "Founding team assembly from inside the collective",
      "Launch in weeks, not quarters",
      "Takes equity or hybrid fee + equity",
    ],
    model: "Equity / hybrid",
    duration: "3–9 months to launch",
  },
  {
    slug: "growth-pod",
    index: "02",
    title: "Growth Pod",
    short: "An embedded cross-functional team, in your building by Friday.",
    body: "A pod of strategist, creative, media buyer, engineer and analyst plugs into your company as one unit. One backlog, one dashboard, one number everyone is accountable for: compounding growth.",
    points: [
      "5–7 operators, dedicated, no account managers",
      "Shared OKRs with your leadership team",
      "Live performance dashboard from day one",
      "Quarterly pod review — renew or rotate out",
    ],
    model: "Retainer + performance",
    duration: "6-month minimum",
  },
  {
    slug: "brand-systems",
    index: "03",
    title: "Brand Systems",
    short: "Positioning that makes the market unfair for everyone else.",
    body: "We rebuild the narrative from category design down to the last component in your design system. Not a logo refresh — an operating system for how the company looks, sounds and competes.",
    points: [
      "Category and positioning strategy",
      "Identity, voice and messaging architecture",
      "Production-ready design system and site",
      "Internal rollout and enablement",
    ],
    model: "Fixed scope",
    duration: "6–10 weeks",
  },
  {
    slug: "equity-partnership",
    index: "04",
    title: "Equity Partnership",
    short: "We join the cap table and stay for the whole ride.",
    body: "For companies already moving: we convert part of our fee into equity and commit senior operators for the long term. We sit in the board meeting, own a growth line, and carry the risk with you.",
    points: [
      "Senior operators embedded for 12+ months",
      "Partial fee conversion into equity",
      "Board-level growth ownership",
      "Follow-on support across the raise lifecycle",
    ],
    model: "Fee ↔ equity conversion",
    duration: "12–36 months",
  },
];

export type Case = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  engagement: string;
  tagline: string;
  summary: string;
  accent: string;
  results: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
};

export const cases: Case[] = [
  {
    slug: "halo",
    client: "HALO",
    sector: "Consumer fintech",
    year: "2025",
    engagement: "Venture Build",
    tagline: "A bank for people who never trusted banks.",
    summary:
      "We co-founded, designed and launched HALO — brand, product and acquisition engine shipped together in 14 weeks.",
    accent: "#d6ff3d",
    results: [
      { value: "412K", label: "Accounts in 11 months" },
      { value: "0 → $18M", label: "Deposits" },
      { value: "4.9", label: "App store rating" },
    ],
    challenge:
      "The founders had regulatory clearance and a spreadsheet, nothing else. The category was owned by incumbents whose apps all looked, sounded and behaved identically — same blue, same stock photography, same promises nobody believed.",
    approach: [
      "Positioned HALO as the anti-bank: radical fee transparency, no dark patterns, public ledger of every charge.",
      "Built the identity, product UI and marketing site from one shared design system so brand and product never drifted.",
      "Shipped an invite-only launch with a referral loop that rewarded trust instead of spam.",
      "Ran creative as a weekly production line: 40 assets a week, kill the losers in 48 hours.",
    ],
    outcome:
      "HALO crossed 412,000 accounts in its first eleven months with a blended CAC 61% below category benchmark, and closed a $24M Series A eleven weeks ahead of schedule.",
  },
  {
    slug: "feldspar",
    client: "FELDSPAR",
    sector: "B2B infrastructure",
    year: "2024",
    engagement: "Brand Systems",
    tagline: "From invisible vendor to category standard.",
    summary:
      "Category design, narrative and a full rebuild of the go-to-market surface for a developer infrastructure company.",
    accent: "#4da3ff",
    results: [
      { value: "3.4×", label: "Qualified pipeline" },
      { value: "-38%", label: "Sales cycle length" },
      { value: "11", label: "Analyst mentions in year one" },
    ],
    challenge:
      "FELDSPAR's product was better than competitors who out-marketed them by an order of magnitude. They were described in every deal as 'the cheaper alternative' — a position with no margin in it.",
    approach: [
      "Defined the category — 'observability for event-driven systems' — and made the company its author.",
      "Rebuilt messaging around the economic buyer, not the engineer who signs up.",
      "Produced the reference content, benchmarks and templates the market started citing.",
      "Handed the internal team a system they could run without us.",
    ],
    outcome:
      "FELDSPAR now opens deals as the category default. Pipeline grew 3.4× in two quarters and the average sales cycle dropped by 38%.",
  },
  {
    slug: "kindred",
    client: "KINDRED",
    sector: "Marketplace",
    year: "2025",
    engagement: "Growth Pod",
    tagline: "Two-sided marketplace, one-sided burn rate.",
    summary:
      "An embedded growth pod rebuilt acquisition, activation and retention around a single liquidity metric.",
    accent: "#ff3ea5",
    results: [
      { value: "-62%", label: "Blended CAC" },
      { value: "+183%", label: "Week-4 retention" },
      { value: "2.7×", label: "Liquidity in top cities" },
    ],
    challenge:
      "KINDRED was buying demand into a market that couldn't serve it. Money spent on new listings expired unused while core cities starved of supply.",
    approach: [
      "Killed 70% of paid channels and moved the budget into supply-side density plays.",
      "Rebuilt onboarding to a nine-minute 'first match' path.",
      "Instrumented a single liquidity score everyone in the company reported against.",
      "Ran weekly creative sprints against live cohort data, not vanity dashboards.",
    ],
    outcome:
      "Blended CAC fell 62% while week-four retention climbed 183%. The company reached contribution-margin profitability in its three largest markets.",
  },
  {
    slug: "monolith",
    client: "MONOLITH",
    sector: "Climate hardware",
    year: "2024",
    engagement: "Equity Partnership",
    tagline: "Making a Series B impossible to skip.",
    summary:
      "We converted half our fee into equity, embedded two senior operators and rebuilt the company's story for institutional investors.",
    accent: "#ffb020",
    results: [
      { value: "4.1×", label: "Oversubscribed round" },
      { value: "$61M", label: "Series B raised" },
      { value: "19 days", label: "From open to close" },
    ],
    challenge:
      "MONOLITH had working hardware and a wall of engineering detail — but no narrative that made an investor understand why the next ten years belonged to them.",
    approach: [
      "Rebuilt the equity story around unit economics and deployment velocity.",
      "Produced the data room, benchmark report and demo film as one argument.",
      "Embedded a growth lead and a brand lead for the full raise cycle.",
      "Ran a targeted process with 34 funds instead of a wide blast.",
    ],
    outcome:
      "The round closed 4.1× oversubscribed at $61M in nineteen days, with two of our collective members joining the board as observers.",
  },
  {
    slug: "sunroom",
    client: "SUNROOM",
    sector: "Direct-to-consumer",
    year: "2023",
    engagement: "Venture Build",
    tagline: "Zero to $28M with no agency in the middle.",
    summary:
      "We built the brand, the product catalogue, the supply relationships and the growth engine — then handed it to a hired CMO.",
    accent: "#9d7bff",
    results: [
      { value: "$28M", label: "Revenue in 26 months" },
      { value: "38%", label: "Repeat purchase rate" },
      { value: "6", label: "Markets entered" },
    ],
    challenge:
      "A category with 400 lookalike brands, rising ad costs and customers trained to wait for a discount code.",
    approach: [
      "Built a product line with no discount ladder — price integrity as a brand promise.",
      "Made the unboxing and post-purchase flow the primary acquisition channel.",
      "Owned the audience through a content studio instead of renting it from platforms.",
      "Expanded market by market using one proven creative playbook.",
    ],
    outcome:
      "SUNROOM reached $28M revenue in 26 months with a 38% repeat rate and no paid-discount dependency. We handed the whole engine to their CMO in month 30.",
  },
  {
    slug: "parallax",
    client: "PARALLAX",
    sector: "AI software",
    year: "2025",
    engagement: "Growth Pod",
    tagline: "A product people signed up for and forgot.",
    summary:
      "We rebuilt activation around the moment users actually feel the product work, then engineered distribution on top of it.",
    accent: "#3ef2c1",
    results: [
      { value: "+183%", label: "Activation rate" },
      { value: "7.2%", label: "Free → paid conversion" },
      { value: "1.9%", label: "Monthly viral coefficient" },
    ],
    challenge:
      "Signups were healthy and silent. Users reached the dashboard, clicked twice and left — and the team was optimising ad creative to fix a product problem.",
    approach: [
      "Mapped the first session and moved the 'magic moment' from minute 14 to minute 90 seconds.",
      "Cut onboarding from eleven steps to three, with progressive disclosure after value.",
      "Turned shared reports into a branded, shareable artefact — the product became its own channel.",
      "Reallocated 40% of paid budget into product-led loops within one quarter.",
    ],
    outcome:
      "Activation rose 183%, free-to-paid conversion settled at 7.2% — double the category benchmark — and organic sharing now drives a fifth of all new accounts.",
  },
];

export const beliefs = [
  {
    n: "01",
    title: "Owners, not vendors",
    body: "A vendor waits for a brief. An owner sees the number move and acts. We take equity wherever we can, and we behave like it whether we do or not.",
  },
  {
    n: "02",
    title: "Equity over invoices",
    body: "Retainers reward activity. We would rather be paid when the company is worth more. Our incentives should be legible to anyone reading the cap table.",
  },
  {
    n: "03",
    title: "Distribution is the product",
    body: "Beautiful things that nobody sees are hobbies. We build the route to market in the same room as the thing itself — never after, never downstream.",
  },
  {
    n: "04",
    title: "Small pods, unreasonable speed",
    body: "Seven people with total ownership beat thirty with a status meeting. We keep pods small enough to fit around one table and fast enough to ship weekly.",
  },
  {
    n: "05",
    title: "Kill your best idea weekly",
    body: "Every piece of work gets a death date. If the data disagrees with us, the data wins. Sentiment is not a strategy and decks are not progress.",
  },
  {
    n: "06",
    title: "Leave the engine behind",
    body: "We are not trying to be necessary. Every engagement ends with a system your team can run without us — documented, instrumented and handed over.",
  },
];

export const process = [
  { n: "01", title: "Diagnose", body: "Two weeks inside the business. We interview, instrument and find the constraint that actually binds growth." },
  { n: "02", title: "Design", body: "One pod, one plan, one scoreboard. Strategy, creative and engineering sit together so nothing is lost in translation." },
  { n: "03", title: "Deploy", body: "Weekly shipping against live numbers. Work that does not move the metric gets cut in 48 hours." },
  { n: "04", title: "Hand over", body: "The system, the docs and the dashboard become yours. We rotate out or stay on as owners — your call." },
];

export const roles = [
  { title: "Senior Brand Strategist", team: "Brand Systems", location: "London / Remote", type: "Full-time" },
  { title: "Growth Engineer", team: "Growth Pods", location: "Lisbon / Remote", type: "Full-time" },
  { title: "Performance Creative Lead", team: "Growth Pods", location: "New York", type: "Full-time" },
  { title: "Product Designer", team: "Venture Build", location: "Remote (EU)", type: "Full-time" },
  { title: "Data Scientist, Attribution", team: "Intelligence", location: "London", type: "Full-time" },
  { title: "Pod Lead, Growth", team: "Growth Pods", location: "Lisbon / Remote", type: "Full-time" },
];

export const benefits = [
  { title: "Profit share, not perks", body: "Every permanent member of the collective holds a stake in the profits they help create." },
  { title: "Venture equity track", body: "Work on a venture build and you carry personal equity in what you ship. Not just the agency." },
  { title: "Four-day build weeks", body: "Fridays are for craft, courses and the thing you have been putting off. Clients never book them." },
  { title: "Two residencies a year", body: "The whole collective decamps for a week in Lisbon and a week somewhere colder to build together." },
];

export const clients = [
  "HALO", "FELDSPAR", "KINDRED", "MONOLITH", "SUNROOM", "PARALLAX",
  "ARBOR", "TIDEWATER", "HEXA", "NORTHWIND", "CIRCUIT", "LOWLAND",
];
