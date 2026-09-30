export interface ITestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: ITestimonial[] = [
  { quote: 'Rumo paid for itself in the first month. Our reps now spend their time on the 20% of leads that drive 80% of revenue.', name: 'Priya Natarajan', role: 'VP of Sales', company: 'Northwind Logistics' },
  { quote: 'The renewal alerts alone saved us three enterprise accounts we had no idea were at risk.', name: 'Marcus Webb', role: 'Head of Customer Success', company: 'Helio Software' },
  { quote: 'I used to spend Sunday nights writing follow-ups. Now Rumo drafts them and I just review and send.', name: 'Elena Rossi', role: 'Account Executive', company: 'Brightpath Health' },
  { quote: 'Our forecast accuracy went from 62% to 91% in two quarters. The board noticed.', name: 'David Okafor', role: 'CRO', company: 'Lumen Payments' },
  { quote: 'Setup took an afternoon. The CRM integration just worked, and the lead scores were useful on day one.', name: 'Sofia Andersson', role: 'RevOps Manager', company: 'Fjord Analytics' },
  { quote: 'The conversation intelligence helped us find the objection that was killing 1 in 4 deals. We fixed it in a week.', name: 'Tom Hargreaves', role: 'Sales Enablement Lead', company: 'Stackwell' },
];

export const stats = [
  { value: '20%', label: 'Average lift in conversion rate' },
  { value: '30%', label: 'Reduction in customer churn' },
  { value: '11 hrs', label: 'Saved per rep, every week' },
  { value: '2,400+', label: 'Sales teams on Rumo' },
];

export const logos = ['Northwind', 'Helio', 'Brightpath', 'Lumen', 'Fjord', 'Stackwell', 'Orbitly', 'Kestrel'];

export interface ICaseStudy {
  slug: string;
  company: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
}

export const caseStudies: ICaseStudy[] = [
  {
    slug: 'northwind-logistics',
    company: 'Northwind Logistics',
    industry: 'Freight & Logistics',
    headline: 'How Northwind grew pipeline 38% without hiring more reps',
    challenge: 'Northwind’s 40-person sales team was drowning in inbound inquiries and had no reliable way to tell a tire-kicker from a 7-figure shipper. Response times averaged 26 hours.',
    solution: 'They deployed Rumo predictive lead scoring with automatic routing and real-time alerts. High-intent leads now reach the right rep in under 5 minutes, and personalized sequences nurture the rest.',
    results: [
      { value: '+38%', label: 'Qualified pipeline' },
      { value: '5 min', label: 'Median response time' },
      { value: '+22%', label: 'Win rate' },
    ],
  },
  {
    slug: 'helio-software',
    company: 'Helio Software',
    industry: 'B2B SaaS',
    headline: 'Helio cut churn by 31% in two quarters',
    challenge: 'Customer success relied on quarterly check-ins and gut feel. By the time an account flagged unhappiness, the renewal was already lost.',
    solution: 'Rumo health scoring combined product usage, support tickets and sentiment, triggering renewal playbooks 120 days out and alerting CSMs to expansion signals.',
    results: [
      { value: '-31%', label: 'Gross churn' },
      { value: '+17%', label: 'Expansion revenue' },
      { value: '94%', label: 'Renewal rate' },
    ],
  },
  {
    slug: 'lumen-payments',
    company: 'Lumen Payments',
    industry: 'Fintech',
    headline: 'Lumen’s forecast accuracy jumped from 62% to 91%',
    challenge: 'Leadership could not trust rep-submitted forecasts, leading to missed hiring plans and stressful quarter ends.',
    solution: 'Rumo AI-weighted forecasting analyzed deal activity, stakeholder engagement and historical patterns to produce calibrated commit numbers every week.',
    results: [
      { value: '91%', label: 'Forecast accuracy' },
      { value: '-60%', label: 'Time spent on forecast calls' },
      { value: '+14%', label: 'Quota attainment' },
    ],
  },
  {
    slug: 'brightpath-health',
    company: 'Brightpath Health',
    industry: 'Healthcare Technology',
    headline: 'Brightpath reps reclaimed 12 hours a week',
    challenge: 'Account executives spent more time writing emails, updating the CRM and researching accounts than actually selling.',
    solution: 'Automated content creation, meeting summaries that sync to the CRM, and enrichment that researches every account automatically.',
    results: [
      { value: '12 hrs', label: 'Saved per rep weekly' },
      { value: '+41%', label: 'Meetings booked' },
      { value: '3x', label: 'Faster onboarding' },
    ],
  },
];

export interface ITeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: ITeamMember[] = [
  { name: 'Amara Osei', role: 'Co-founder & CEO', bio: 'Former sales leader who spent a decade watching great reps drown in admin work. Founded Rumo to give time back to sellers.' },
  { name: 'Jonas Lindqvist', role: 'Co-founder & CTO', bio: 'Machine learning engineer with experience building large-scale recommendation systems before turning his attention to revenue.' },
  { name: 'Mei Tanaka', role: 'Chief Product Officer', bio: 'Product leader obsessed with workflows that feel effortless. Previously led product at two B2B SaaS unicorns.' },
  { name: 'Rafael Duarte', role: 'VP of Engineering', bio: 'Scales reliable infrastructure and leads a team of 40 engineers across three time zones.' },
  { name: 'Hannah Clarke', role: 'VP of Customer Success', bio: 'Helped hundreds of sales teams roll out new tools. Believes adoption is the only metric that matters.' },
  { name: 'Yusuf Demir', role: 'Head of Data Science', bio: 'PhD in statistics. Leads the research behind Rumo’s scoring and forecasting models.' },
  { name: 'Grace Nwosu', role: 'Head of Marketing', bio: 'Storyteller and demand gen nerd who runs Rumo’s content, community and events.' },
  { name: 'Liam O’Brien', role: 'Head of Security', bio: 'Former penetration tester who keeps customer data safe and our auditors happy.' },
];

export const values = [
  { title: 'Customers first', text: 'We measure ourselves by the revenue our customers generate, not by our own vanity metrics.' },
  { title: 'Clarity over complexity', text: 'Great software is obvious. If it needs a manual, we have more work to do.' },
  { title: 'Explainable AI', text: 'We never ship a black box. Every score and recommendation comes with reasons you can verify.' },
  { title: 'Respect for privacy', text: 'Your data is yours. We never train shared models on your confidential information.' },
  { title: 'Ship, learn, repeat', text: 'We release weekly, listen closely and aren’t afraid to change our minds.' },
  { title: 'Win together', text: 'Sales is a team sport, and so is building a company.' },
];

export const milestones = [
  { year: '2021', text: 'Rumo founded in a shared apartment with a laptop, a whiteboard and a lot of coffee.' },
  { year: '2022', text: 'First 50 customers onboarded. Launched predictive lead scoring.' },
  { year: '2023', text: 'Raised Series A. Released automated content creation and retention tools.' },
  { year: '2024', text: 'Crossed 1,000 customers and achieved SOC 2 Type II certification.' },
  { year: '2025', text: 'Launched conversation intelligence and the workflow builder.' },
  { year: '2026', text: 'Serving 2,400+ sales teams across 40 countries.' },
];

export interface IJob {
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
}

export const jobs: IJob[] = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote (Americas/EU)', type: 'Full-time', description: 'Build customer-facing features in TypeScript, React and Node. You will own projects from design to launch.' },
  { title: 'Machine Learning Engineer', team: 'Data Science', location: 'Remote', type: 'Full-time', description: 'Improve our lead scoring and forecasting models and ship them to production at scale.' },
  { title: 'Product Designer', team: 'Design', location: 'London or Remote', type: 'Full-time', description: 'Craft delightful, clear interfaces for sales teams who live in our product all day.' },
  { title: 'Enterprise Account Executive', team: 'Sales', location: 'New York, NY', type: 'Full-time', description: 'Sell Rumo to large revenue organizations. Use our own product to do it.' },
  { title: 'Customer Success Manager', team: 'Customer Success', location: 'Remote (US)', type: 'Full-time', description: 'Guide customers from onboarding to expansion and be their trusted advisor.' },
  { title: 'Content Marketing Manager', team: 'Marketing', location: 'Remote', type: 'Full-time', description: 'Own our blog, guides and case studies and help sales leaders grow.' },
  { title: 'Security Engineer', team: 'Security', location: 'Remote (EU)', type: 'Full-time', description: 'Strengthen our infrastructure, automate compliance and lead incident readiness.' },
  { title: 'Data Engineering Intern', team: 'Engineering', location: 'Remote', type: 'Internship', description: 'Six-month internship working on data pipelines with a dedicated mentor.' },
];

export const perks = [
  'Fully remote-friendly with optional hubs in London and New York',
  'Competitive salary and meaningful equity',
  'Premium health, dental and vision coverage',
  '25 days paid time off plus company-wide winter break',
  '$2,000 annual learning and development budget',
  'Home office stipend and latest-generation laptop',
  'Generous parental leave for all parents',
  'Twice-yearly team offsites in great places',
];
