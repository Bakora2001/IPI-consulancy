export interface NavItem {
  label: string;
  href: string;
}

export interface PartnerOrg {
  id: string;
  name: string;
  category: "UN Agency" | "Development Bank" | "Bilateral Agency" | "Regional Trade" | "International NGO";
  whyEngage: string;
  whatIPIOtters: string;
  badgeColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "Business Development" | "Cost & Finance" | "Human Resources" | "Customer Care" | "General Advisory";
  tagline: string;
  description: string;
  keyPriorities: string[];
  deliverables: string[];
  iconName: string;
}

export interface StrategicObjective {
  number: number;
  title: string;
  goal: string;
  priorities: string[];
  fiveYearTarget: string;
}

export interface RoadmapYear {
  year: string;
  focus: string;
  keyOutcome: string;
  milestones: string[];
}

export interface ApproachStage {
  step: string;
  number: string;
  title: string;
  description: string;
  activities: string[];
}

// ── BRAND & COMPANY OVERVIEW ────────────────────────────────────────────────
export const COMPANY_INFO = {
  name: "IPI Consultancy",
  shortName: "IPI",
  tagline: "GROW · CONTROL · DEVELOP",
  subTagline: "Grow businesses. Control costs. Develop people.",
  location: "Build World Centre, Nyakuron West, Juba, South Sudan",
  email: "info@ipiconsultancy.com",
  phone: "+211 920 000 000 / +211 910 000 000",
  consultancyFocus: "South Sudan-focused business and management consultancy",
  strategicPeriod: "2026–2030",
  heroHeadline: "Empowering South Sudan Businesses to Grow, Control Costs & Develop People",
  aboutText:
    "IPI Consultancy is a South Sudan-focused business and management consultancy supporting organizations, businesses and entrepreneurs to improve performance, strengthen internal systems and achieve sustainable growth. We work at the intersection of private-sector development and organizational performance, helping businesses and development programmes translate ideas and investments into measurable commercial and operational results.",
  overallObjective:
    "To become a trusted and leading business consultancy in Juba, South Sudan, supporting businesses to achieve sustainable growth, improve cost efficiency and develop productive, well-managed human resources.",
};

// ── NAVIGATION LINKS ─────────────────────────────────────────────────────────
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Strategy 2026–2030", href: "/strategy" },
  { label: "Partners & Sectors", href: "/partners" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Contact", href: "/contact" },
];

// ── 5-STAGE APPROACH ─────────────────────────────────────────────────────────
export const APPROACH_STAGES: ApproachStage[] = [
  {
    step: "01",
    number: "01",
    title: "DIAGNOSE",
    description: "Understand the business, market, people and operational challenges.",
    activities: [
      "Operational & expenditure review",
      "Market position & competitor assessment",
      "Workforce capability & organizational audit",
      "Executive & management alignment sessions",
    ],
  },
  {
    step: "02",
    number: "02",
    title: "DESIGN",
    description: "Develop a practical intervention based on identified needs.",
    activities: [
      "Tailored growth & cost-control action plans",
      "SOPs and workflow restructuring",
      "Custom KPI frameworks & financial controls",
      "HR structures & job descriptions",
    ],
  },
  {
    step: "03",
    number: "03",
    title: "BUILD CAPACITY",
    description: "Train and coach staff, entrepreneurs and business owners.",
    activities: [
      "Executive & managerial leadership training",
      "Sales, marketing & customer care workshops",
      "Financial management for non-financial managers",
      "Practical coaching for local entrepreneurs",
    ],
  },
  {
    step: "04",
    number: "04",
    title: "IMPLEMENT",
    description: "Support the organization to put recommendations into practice.",
    activities: [
      "Hands-on execution support with leadership teams",
      "Rollout of HR policies and tracking systems",
      "Resource allocation & procurement streamlining",
      "Change management & milestone monitoring",
    ],
  },
  {
    step: "05",
    number: "05",
    title: "MEASURE",
    description: "Track agreed KPIs and assess results.",
    activities: [
      "Revenue growth & profitability reviews",
      "Cost-saving verification audits",
      "Employee productivity & retention analytics",
      "Continuous optimization recommendations",
    ],
  },
];

// ── HIGH-PRIORITY ORGANIZATIONS IN SOUTH SUDAN ─────────────────────────────
export const HIGH_PRIORITY_ORGS: PartnerOrg[] = [
  {
    id: "undp",
    name: "UNDP South Sudan",
    category: "UN Agency",
    whyEngage: "Private-sector development, MSMEs, entrepreneurship, jobs and economic recovery",
    whatIPIOtters: "Business development, SME training, strategy, HR and market assessments",
    badgeColor: "#1A237E",
  },
  {
    id: "world-bank-ifc",
    name: "World Bank / IFC",
    category: "Development Bank",
    whyEngage: "Private-sector investment, MSME finance, business-enabling environment",
    whatIPIOtters: "Local business research, SME support, consulting and implementation",
    badgeColor: "#0288D1",
  },
  {
    id: "ilo",
    name: "ILO South Sudan",
    category: "UN Agency",
    whyEngage: "Enterprise development, employment, entrepreneurship and skills",
    whatIPIOtters: "Entrepreneurship training, business advisory and HR support",
    badgeColor: "#00796B",
  },
  {
    id: "unido",
    name: "UNIDO",
    category: "UN Agency",
    whyEngage: "SME/industrial development, value chains and private-sector capacity",
    whatIPIOtters: "Business development, value-chain studies and capacity building",
    badgeColor: "#303F9F",
  },
  {
    id: "giz",
    name: "GIZ South Sudan",
    category: "Bilateral Agency",
    whyEngage: "Economic development, employment, skills and private-sector programmes",
    whatIPIOtters: "Training, SME development and programme implementation",
    badgeColor: "#E65100",
  },
  {
    id: "trademark-africa",
    name: "TradeMark Africa",
    category: "Regional Trade",
    whyEngage: "Trade facilitation, SMEs and regional trade",
    whatIPIOtters: "SME/business development and market research",
    badgeColor: "#512DA8",
  },
  {
    id: "mercy-corps",
    name: "Mercy Corps South Sudan",
    category: "International NGO",
    whyEngage: "Economic recovery, entrepreneurship, livelihoods and financial inclusion",
    whatIPIOtters: "SME training, business coaching, market assessments",
    badgeColor: "#D32F2F",
  },
  {
    id: "nrc",
    name: "Norwegian Refugee Council (NRC)",
    category: "International NGO",
    whyEngage: "Livelihoods, employment and enterprise support",
    whatIPIOtters: "Entrepreneurship/enterprise training and business advisory",
    badgeColor: "#C2185B",
  },
  {
    id: "drc",
    name: "Danish Refugee Council (DRC)",
    category: "International NGO",
    whyEngage: "Livelihoods, economic recovery and resilience",
    whatIPIOtters: "Enterprise development and capacity-building services",
    badgeColor: "#7B1FA2",
  },
  {
    id: "crs",
    name: "Catholic Relief Services (CRS)",
    category: "International NGO",
    whyEngage: "Livelihoods, markets and economic development",
    whatIPIOtters: "Business training, value-chain and enterprise support",
    badgeColor: "#1976D2",
  },
  {
    id: "acted",
    name: "ACTED",
    category: "International NGO",
    whyEngage: "Economic recovery, market systems and livelihoods",
    whatIPIOtters: "Market research, SME support and field implementation",
    badgeColor: "#F57C00",
  },
  {
    id: "care",
    name: "CARE South Sudan",
    category: "International NGO",
    whyEngage: "Women's economic empowerment, livelihoods and entrepreneurship",
    whatIPIOtters: "Business training, HR and enterprise development",
    badgeColor: "#E91E63",
  },
  {
    id: "world-vision",
    name: "World Vision",
    category: "International NGO",
    whyEngage: "Livelihoods, resilience and economic empowerment",
    whatIPIOtters: "Entrepreneurship and business development training",
    badgeColor: "#FF6F00",
  },
];

// ── FIVE-YEAR STRATEGIC OBJECTIVES (2026–2030) ──────────────────────────────
export const STRATEGIC_OBJECTIVES: StrategicObjective[] = [
  {
    number: 1,
    title: "Business Development & Growth",
    goal: "Help businesses increase revenue, expand their markets and build sustainable business models.",
    priorities: [
      "Business growth and expansion strategies",
      "Market and competitor analysis",
      "Sales and marketing strategy",
      "Business model development",
      "Customer acquisition and retention",
      "Strategic planning & performance improvement",
      "Dedicated support for SMEs and emerging businesses",
    ],
    fiveYearTarget:
      "Build a strong portfolio of businesses with measurable improvements in sales, market reach, customer base and profitability.",
  },
  {
    number: 2,
    title: "Cost Control & Operational Efficiency",
    goal: "Help businesses reduce unnecessary expenditure while improving productivity and profitability.",
    priorities: [
      "Cost and expenditure analysis",
      "Operational efficiency reviews",
      "Process improvement & waste reduction",
      "Procurement and resource management",
      "Budgeting and financial controls",
      "Productivity improvement & performance monitoring",
    ],
    fiveYearTarget:
      "Help clients establish effective systems that enable them to control costs, reduce operational waste and improve profit margins.",
  },
  {
    number: 3,
    title: "Human Resource & Organizational Development",
    goal: "Help businesses attract, develop and retain productive employees.",
    priorities: [
      "HR policy and systems development",
      "Workforce planning & talent recruitment",
      "Job descriptions and organizational structures",
      "Performance management systems",
      "Staff training & leadership development",
      "Employee motivation, retention and team productivity",
    ],
    fiveYearTarget:
      "Help client organizations build accountable, skilled and high-performing teams aligned with business objectives.",
  },
  {
    number: 4,
    title: "Business Knowledge & Capability Development",
    goal: "Transfer practical knowledge and tools that enable business owners and managers to make better decisions.",
    priorities: [
      "Executive management training",
      "Business planning & financial management for non-finance managers",
      "Sales management & customer success training",
      "HR management & leadership development",
      "Business analytics, reporting & dashboarding",
      "Entrepreneurship and SME incubation programmes",
    ],
    fiveYearTarget:
      "Develop a recognized business knowledge and training platform serving entrepreneurs, SMEs and corporate organizations in South Sudan.",
  },
  {
    number: 5,
    title: "Build a Strong & Sustainable Consultancy",
    goal: "Establish a profitable, reputable and scalable consultancy business.",
    priorities: [
      "Build a strong consultancy brand in South Sudan",
      "Develop long-term client relationships & recurring contracts",
      "Build strategic partnerships with international development actors",
      "Develop a competent multi-disciplinary consultancy team",
      "Introduce digital consultancy tools & templates",
      "Expand services beyond Juba into key regional economic hubs",
    ],
    fiveYearTarget:
      "Position the consultancy as a trusted business growth partner in South Sudan, with a strong client base, experienced consultants and sustainable recurring revenue.",
  },
];

// ── FIVE-YEAR IMPLEMENTATION ROADMAP ────────────────────────────────────────
export const IMPLEMENTATION_ROADMAP: RoadmapYear[] = [
  {
    year: "Year 1 – 2026",
    focus: "Establish",
    keyOutcome: "Build brand, services, systems and initial client base",
    milestones: [
      "Formalize operational base at Build World Centre, Juba",
      "Launch primary business development and cost control diagnostic packages",
      "Onboard founding roster of corporate and SME clients",
      "Initiate outreach to key development partners (UNDP, GIZ, World Bank)",
    ],
  },
  {
    year: "Year 2 – 2027",
    focus: "Grow",
    keyOutcome: "Increase clients and establish strong business development, cost-control and HR services",
    milestones: [
      "Scale client portfolio across commercial retail, services, and construction",
      "Launch standardized HR advisory & organizational restructuring services",
      "Deliver multi-cohort SME management training programs",
      "Achieve verified 15%+ cost reduction benchmarks across active client base",
    ],
  },
  {
    year: "Year 3 – 2028",
    focus: "Strengthen",
    keyOutcome: "Develop recurring contracts, training programs and strategic partnerships",
    milestones: [
      "Convert 50%+ of diagnostic clients into ongoing advisory retainer contracts",
      "Secure formal implementation partner agreements with international agencies",
      "Establish annual South Sudan Business Performance & Leadership Forum",
      "Introduce digital performance tracking portals for retainer clients",
    ],
  },
  {
    year: "Year 4 – 2029",
    focus: "Expand",
    keyOutcome: "Expand into additional sectors and locations within South Sudan",
    milestones: [
      "Establish operational outreach in Wau, Malakal, and Nimule trade corridor",
      "Expand sectoral expertise in agribusiness, logistics, and renewable infrastructure",
      "Double executive training capacity through specialized masterclasses",
      "Establish dedicated Women's Enterprise & Youth Incubation Unit",
    ],
  },
  {
    year: "Year 5 – 2030",
    focus: "Lead",
    keyOutcome: "Become a recognized and trusted business consultancy in South Sudan",
    milestones: [
      "Lead the market as the premier South Sudan-owned management consultancy",
      "Serve 250+ businesses and train 5,000+ managers and employees",
      "Publish comprehensive State of South Sudan Business Performance Report",
      "Maintain 90%+ client retention across multi-year transformation engagements",
    ],
  },
];

// ── CORE PERFORMANCE MEASURES ───────────────────────────────────────────────
export const PERFORMANCE_MEASURES = [
  { metric: "Businesses Supported", description: "Targeting 250+ SMEs & enterprises across South Sudan", icon: "Building2" },
  { metric: "Client Sales Growth", description: "Measurable revenue expansion through targeted market strategies", icon: "TrendingUp" },
  { metric: "Cost Savings Achieved", description: "Documented expenditure reductions via waste elimination", icon: "DollarSign" },
  { metric: "Profitability Improvement", description: "Direct margin enhancement and financial discipline", icon: "PieChart" },
  { metric: "Employees Trained", description: "5,000+ staff, supervisors and executives upskilled", icon: "Users" },
  { metric: "Productivity Gains", description: "Structured KPIs and accountable workforce management", icon: "Zap" },
  { metric: "Recurring Contracts", description: "Long-term partnership retainers ensuring sustained impact", icon: "RefreshCw" },
  { metric: "Client Retention Rate", description: "Maintaining >90% long-term client satisfaction and renewal", icon: "ShieldCheck" },
  { metric: "Geographical Reach", description: "Expanding from Juba into regional trade & state capitals", icon: "MapPin" },
];

// ── SERVICE PORTFOLIOS ─────────────────────────────────────────────────────
export const SERVICE_PORTFOLIOS: ServiceItem[] = [
  {
    id: "business-development",
    title: "Business Development & Sales",
    category: "Business Development",
    tagline: "Drive revenue growth, enter new markets and build resilient commercial models.",
    description:
      "We help businesses identify profitable opportunities, sharpen their value proposition, structure high-converting sales pipelines, and capture greater market share across South Sudan.",
    keyPriorities: [
      "Business growth and market expansion strategies",
      "Competitor intelligence & market research",
      "Sales channel design & commercial pipeline management",
      "Business model stress-testing & innovation",
      "Customer acquisition & retention architecture",
    ],
    deliverables: [
      "Comprehensive Market Opportunity Assessment",
      "Custom 12-Month Sales & Revenue Growth Roadmap",
      "Commercial Pitch & Value Proposition Playbook",
      "Customer Retention & Account Management SOPs",
    ],
    iconName: "TrendingUp",
  },
  {
    id: "cost-control",
    title: "Finance & Cost Control",
    category: "Cost & Finance",
    tagline: "Eliminate operational waste, optimize expenditure and protect profit margins.",
    description:
      "Our finance and cost-control interventions conduct rigorous expenditure forensics, institute strict budgeting controls, and optimize procurement to maximize cash flow and operational resilience.",
    keyPriorities: [
      "Forensic cost & expenditure audits",
      "Operational waste reduction & lean processes",
      "Procurement & vendor management optimization",
      "Cash flow forecasting & financial governance",
      "Performance monitoring dashboards",
    ],
    deliverables: [
      "Expenditure Audit & Cost Reduction Blueprint",
      "Custom Departmental Budgeting Templates",
      "Procurement & Inventory Control SOPs",
      "Executive Cash Flow Dashboard",
    ],
    iconName: "DollarSign",
  },
  {
    id: "human-resources",
    title: "Human Resources & Organizational Development",
    category: "Human Resources",
    tagline: "Build accountable, high-performing teams aligned with strategic objectives.",
    description:
      "We design end-to-end HR systems, job descriptions, performance appraisal metrics, and leadership coaching programs that transform workforce culture and drive employee productivity.",
    keyPriorities: [
      "HR policy manual & compliance frameworks",
      "Workforce planning & competitive salary benchmarking",
      "Structured job descriptions & organizational charts",
      "KPI-driven performance management systems",
      "Leadership development & staff motivation programs",
    ],
    deliverables: [
      "Institutional HR Policy Manual & Employee Handbook",
      "Standardized Job Descriptions & Grading Matrix",
      "Quarterly & Annual KPI Performance Appraisal Kit",
      "Staff Training & Leadership Development Curriculum",
    ],
    iconName: "Users",
  },
  {
    id: "customer-care",
    title: "Customer Care & Administration",
    category: "Customer Care",
    tagline: "Institutionalize service excellence, front-desk efficiency and admin agility.",
    description:
      "We refine customer touchpoints, administrative workflows, and front-office protocols to build an impeccable brand reputation that converts first-time buyers into loyal brand advocates.",
    keyPriorities: [
      "Customer service standards & response protocols",
      "Front-office and administrative workflow optimization",
      "Client satisfaction tracking & feedback loops",
      "Administrative record keeping & document management",
      "Service recovery & escalation guidelines",
    ],
    deliverables: [
      "Customer Service Standards Manual",
      "Administrative Standard Operating Procedures (SOPs)",
      "Customer Feedback & CSAT Survey Kit",
      "Front-Desk Staff Training Workshop",
    ],
    iconName: "Headphones",
  },
  {
    id: "general-advisory",
    title: "General Management & Strategic Advisory",
    category: "General Advisory",
    tagline: "Navigate complex business environments with seasoned strategic counsel.",
    description:
      "We provide board-level advisory, executive mentorship, change management guidance, and strategic planning sessions that equip business owners with clarity and decision-making confidence.",
    keyPriorities: [
      "5-Year Strategic Business Planning",
      "Corporate governance & advisory board structuring",
      "Change management & organizational transformation",
      "Risk assessment & business continuity planning",
      "Executive mentorship & strategy retreats",
    ],
    deliverables: [
      "5-Year Strategic Business Plan Document",
      "Corporate Governance Framework",
      "Business Continuity & Risk Mitigation Matrix",
      "Executive Strategy Retreat Facilitation",
    ],
    iconName: "Compass",
  },
];
