export interface NavItem {
  label: string;
  href: string;
}

export interface PartnerOrg {
  id: string;
  name: string;
  category: "UN Agency" | "Development Bank" | "Bilateral Agency" | "Regional Trade" | "International NGO";
  whyEngage: string;
  whatIPIOffers: string;
  whatIPIOtters?: string; // backwards compatibility alias
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
  contactEmail?: string;
  departmentName?: string;
}

export interface StrategicObjective {
  number: number;
  title: string;
  goal: string;
  priorities: string[];
  fiveYearTarget: string;
}

export interface StrategicPhase {
  period: string;
  phase: string;
  points: string[];
}

export interface ApproachStage {
  step: string;
  number: string;
  title: string;
  description: string;
  activities: string[];
}

export interface DepartmentEmail {
  id: string;
  department: string;
  email: string;
  role: string;
}

export const DEPARTMENT_EMAILS: DepartmentEmail[] = [
  {
    id: "customer-care",
    department: "Customer Care",
    email: "customer@ipiconsultancy.com",
    role: "Client onboarding, customer support and inquiries",
  },
  {
    id: "admin",
    department: "Admin",
    email: "admin@ipiconsultancy.com",
    role: "General administration, official correspondences and operations",
  },
  {
    id: "finance",
    department: "Finance",
    email: "finance@ipiconsultancy.com",
    role: "Invoicing, financial audits, accounting and cost advisory",
  },
  {
    id: "business-development",
    department: "Business Development",
    email: "businessdevelopment@ipiconsultancy.com",
    role: "Strategic partnerships, growth proposals and market entry",
  },
  {
    id: "sales",
    department: "Sales",
    email: "sales@ipiconsultancy.com",
    role: "Consultancy packages, fee structures and bookings",
  },
  {
    id: "human-resources",
    department: "Human Resources",
    email: "hr@ipiconsultancy.com",
    role: "Workforce advisory, talent solutions and staffing",
  },
  {
    id: "general",
    department: "General",
    email: "general@ipiconsultancy.com",
    role: "General organization inquiries and institutional communications",
  },
];

// ── BRAND & COMPANY OVERVIEW ────────────────────────────────────────────────
export const COMPANY_INFO = {
  name: "IPI Consultancy",
  shortName: "IPI",
  meaning: "Ideal Professional Investment",
  fullName: "Ideal Professional Investment Ltd (IPI Consultancy)",
  tagline: "GROW · CONTROL · DEVELOP",
  subTagline: "Grow businesses. Control costs. Develop people.",
  location: "Build World Centre, Nyakuron West, Juba, South Sudan",
  building: "Build World Centre",
  area: "Nyakuron West",
  city: "Juba",
  country: "South Sudan",
  email: "general@ipiconsultancy.com",
  emails: {
    customerCare: "customer@ipiconsultancy.com",
    admin: "admin@ipiconsultancy.com",
    finance: "finance@ipiconsultancy.com",
    businessDevelopment: "businessdevelopment@ipiconsultancy.com",
    sales: "sales@ipiconsultancy.com",
    humanResources: "hr@ipiconsultancy.com",
    general: "general@ipiconsultancy.com",
  },
  phone: "+211 922 596464",
  phoneCall: "+211 922 596464",
  phoneCallAlt: "+211 922 596464",
  whatsApp: "+254 759 964753",
  whatsAppPrimary: "+254 759 964753",
  whatsAppSecondary: "+211 922 596464",
  whatsAppLink: "https://wa.me/254759964753",
  whatsAppSecondaryLink: "https://wa.me/211922596464",
  consultancyFocus: "South Sudan-focused business and management consultancy",
  strategicPeriod: "2026–2030",
  heroHeadline: "Empowering South Sudan Businesses to Grow, Control Costs & Develop People",
  aboutText:
    "IPI Consultancy is a South Sudan-focused business and management consultancy supporting organizations, businesses and entrepreneurs to improve performance, strengthen internal systems and achieve sustainable growth. We work at the intersection of private-sector development and organizational performance, helping businesses and development programmes translate ideas and investments into measurable commercial and operational results.",
  overallObjective:
    "To become a trusted and leading business consultancy in Juba, South Sudan, supporting businesses to achieve sustainable growth, improve cost efficiency and develop productive, well-managed human resources.",
  socials: {
    linkedin: "https://linkedin.com/company/ipi-consultancy-south-sudan",
    facebook: "https://facebook.com/ipiconsultancy",
    twitter: "https://x.com/ipiconsultancy",
    x: "https://x.com/ipiconsultancy",
    whatsapp: "https://wa.me/254759964753",
    whatsappSecondary: "https://wa.me/211922596464",
  },
};

// ── NAVIGATION LINKS ─────────────────────────────────────────────────────────
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Strategic Roadmap", href: "/strategy" },
  { label: "Partners & Sectors", href: "/partners" },
  { label: "Data Privacy", href: "/privacy" },
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
    whatIPIOffers: "Business development, SME training, strategy, HR and market assessments",
    whatIPIOtters: "Business development, SME training, strategy, HR and market assessments",
    badgeColor: "#1A237E",
  },
  {
    id: "world-bank-ifc",
    name: "World Bank / IFC",
    category: "Development Bank",
    whyEngage: "Private-sector investment, MSME finance, business-enabling environment",
    whatIPIOffers: "Local business research, SME support, consulting and implementation",
    whatIPIOtters: "Local business research, SME support, consulting and implementation",
    badgeColor: "#0288D1",
  },
  {
    id: "ilo",
    name: "ILO South Sudan",
    category: "UN Agency",
    whyEngage: "Enterprise development, employment, entrepreneurship and skills",
    whatIPIOffers: "Entrepreneurship training, business advisory and HR support",
    whatIPIOtters: "Entrepreneurship training, business advisory and HR support",
    badgeColor: "#00796B",
  },
  {
    id: "unido",
    name: "UNIDO",
    category: "UN Agency",
    whyEngage: "SME/industrial development, value chains and private-sector capacity",
    whatIPIOffers: "Business development, value-chain studies and capacity building",
    whatIPIOtters: "Business development, value-chain studies and capacity building",
    badgeColor: "#303F9F",
  },
  {
    id: "giz",
    name: "GIZ South Sudan",
    category: "Bilateral Agency",
    whyEngage: "Economic development, employment, skills and private-sector programmes",
    whatIPIOffers: "Training, SME development and programme implementation",
    whatIPIOtters: "Training, SME development and programme implementation",
    badgeColor: "#E65100",
  },
  {
    id: "trademark-africa",
    name: "TradeMark Africa",
    category: "Regional Trade",
    whyEngage: "Trade facilitation, SMEs and regional trade",
    whatIPIOffers: "SME/business development and market research",
    whatIPIOtters: "SME/business development and market research",
    badgeColor: "#512DA8",
  },
  {
    id: "mercy-corps",
    name: "Mercy Corps South Sudan",
    category: "International NGO",
    whyEngage: "Economic recovery, entrepreneurship, livelihoods and financial inclusion",
    whatIPIOffers: "SME training, business coaching, market assessments",
    whatIPIOtters: "SME training, business coaching, market assessments",
    badgeColor: "#D32F2F",
  },
  {
    id: "nrc",
    name: "Norwegian Refugee Council (NRC)",
    category: "International NGO",
    whyEngage: "Livelihoods, employment and enterprise support",
    whatIPIOffers: "Entrepreneurship/enterprise training and business advisory",
    whatIPIOtters: "Entrepreneurship/enterprise training and business advisory",
    badgeColor: "#C2185B",
  },
  {
    id: "drc",
    name: "Danish Refugee Council (DRC)",
    category: "International NGO",
    whyEngage: "Livelihoods, economic recovery and resilience",
    whatIPIOffers: "Enterprise development and capacity-building services",
    whatIPIOtters: "Enterprise development and capacity-building services",
    badgeColor: "#7B1FA2",
  },
  {
    id: "crs",
    name: "Catholic Relief Services (CRS)",
    category: "International NGO",
    whyEngage: "Livelihoods, markets and economic development",
    whatIPIOffers: "Business training, value-chain and enterprise support",
    whatIPIOtters: "Business training, value-chain and enterprise support",
    badgeColor: "#1976D2",
  },
  {
    id: "acted",
    name: "ACTED",
    category: "International NGO",
    whyEngage: "Economic recovery, market systems and livelihoods",
    whatIPIOffers: "Market research, SME support and field implementation",
    whatIPIOtters: "Market research, SME support and field implementation",
    badgeColor: "#F57C00",
  },
  {
    id: "care",
    name: "CARE South Sudan",
    category: "International NGO",
    whyEngage: "Women's economic empowerment, livelihoods and entrepreneurship",
    whatIPIOffers: "Business training, HR and enterprise development",
    whatIPIOtters: "Business training, HR and enterprise development",
    badgeColor: "#E91E63",
  },
  {
    id: "world-vision",
    name: "World Vision",
    category: "International NGO",
    whyEngage: "Livelihoods, resilience and economic empowerment",
    whatIPIOffers: "Entrepreneurship and business development training",
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

// ── OUR STRATEGIC ROADMAP (REPLACES FIVE-YEAR IMPLEMENTATION ROADMAP) ─────────
export const STRATEGIC_ROADMAP: StrategicPhase[] = [
  {
    period: "2026–2027",
    phase: "Foundation",
    points: [
      "Establish IPI Consultancy in the South Sudan market.",
      "Build a strong team and operational systems.",
      "Develop partnerships with businesses, NGOs, and development organizations.",
      "Build a strong portfolio of successful client projects.",
    ],
  },
  {
    period: "2028",
    phase: "Growth",
    points: [
      "Expand consultancy services and client base.",
      "Strengthen private sector development and business advisory services.",
      "Increase strategic partnerships across South Sudan and East Africa.",
    ],
  },
  {
    period: "2029",
    phase: "Expansion",
    points: [
      "Expand into additional markets and sectors.",
      "Develop specialized consultancy solutions.",
      "Build stronger regional networks and partnerships.",
    ],
  },
  {
    period: "2030",
    phase: "Regional Positioning",
    points: [
      "Position IPI Consultancy as a recognized regional consultancy firm.",
      "Expand operations across East Africa.",
      "Work with larger institutions, governments, NGOs, and private-sector organizations.",
    ],
  },
];

// ── OUR LONG-TERM VISION ───────────────────────────────────────────────────
export const LONG_TERM_VISION =
  "To become a trusted African consultancy partner driving sustainable businesses, stronger institutions, and economic growth.";

// ── SERVICE PORTFOLIOS ─────────────────────────────────────────────────────
export const SERVICE_PORTFOLIOS: ServiceItem[] = [
  {
    id: "business-development",
    title: "Business Development & Sales",
    category: "Business Development",
    tagline: "Drive revenue growth, enter new markets and build resilient commercial models.",
    departmentName: "Business Development & Sales",
    contactEmail: "businessdevelopment@ipiconsultancy.com",
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
    departmentName: "Finance & Cost Advisory",
    contactEmail: "finance@ipiconsultancy.com",
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
    departmentName: "Human Resources & Talent",
    contactEmail: "hr@ipiconsultancy.com",
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
    departmentName: "Customer Care & Admin",
    contactEmail: "customer@ipiconsultancy.com",
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
    departmentName: "General Advisory & Operations",
    contactEmail: "general@ipiconsultancy.com",
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
