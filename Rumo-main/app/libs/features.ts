import {
  Target, Mail, Brain, LineChart, Users, Zap, Shield, Bell, Workflow, Sparkles,
  MessageSquare, Phone, Calendar, RefreshCw, FileText, Search, LucideIcon,
} from 'lucide-react';

export interface IFeature {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
}

export const features: IFeature[] = [
  {
    id: 'lead-scoring',
    title: 'Predictive Lead Scoring',
    icon: Target,
    summary: 'Know which prospects are ready to buy before your competitors do.',
    details: [
      'Scores every lead from 0 to 100 using firmographic, behavioral and intent signals.',
      'Models retrain nightly on your closed-won and closed-lost history.',
      'Transparent score breakdowns so reps understand why a lead is hot.',
      'Automatic routing of top-scoring leads to your best-fit rep.',
    ],
  },
  {
    id: 'content',
    title: 'Automated Content Creation',
    icon: FileText,
    summary: 'Personalized emails, call scripts and one-pagers generated in seconds.',
    details: [
      'Drafts outreach tailored to the prospect’s role, industry and recent activity.',
      'Brand voice controls keep every message on-tone and compliant.',
      'Generates proposals, follow-ups and meeting recaps from call notes.',
      'Built-in A/B testing finds the subject lines and hooks that convert.',
    ],
  },
  {
    id: 'messaging',
    title: 'Personalized Messaging at Scale',
    icon: Mail,
    summary: 'One-to-one relevance across thousands of conversations.',
    details: [
      'Multi-step sequences across email, LinkedIn and SMS.',
      'Dynamic tokens pull live CRM and web data into each message.',
      'Smart send-time optimization per contact.',
      'Auto-pause the moment a prospect replies or books a meeting.',
    ],
  },
  {
    id: 'retention',
    title: 'Customer Retention Tools',
    icon: RefreshCw,
    summary: 'Spot churn risk early and win renewals with timely outreach.',
    details: [
      'Health scores combine product usage, support tickets and sentiment.',
      'Renewal playbooks trigger 120, 90 and 30 days before contract end.',
      'Expansion signals highlight accounts ready for upsell.',
      'Customers using Rumo retention tools see up to 30% less churn.',
    ],
  },
  {
    id: 'recommendations',
    title: 'Data-Driven Recommendations',
    icon: Brain,
    summary: 'A next-best-action for every deal, every day.',
    details: [
      'Daily prioritized task list for each rep.',
      'Deal risk detection flags stalled opportunities.',
      'Suggested stakeholders to add to multi-threaded deals.',
      'Coaching insights for managers based on real conversation data.',
    ],
  },
  {
    id: 'workflows',
    title: 'Customizable Sales Workflows',
    icon: Workflow,
    summary: 'Build the process that fits your team, not the other way around.',
    details: [
      'Drag-and-drop workflow builder with conditional branching.',
      'Templates for inbound, outbound, renewals and partner deals.',
      'Approval steps and guardrails for discounting.',
      'Versioning and rollback so changes are never risky.',
    ],
  },
  {
    id: 'alerts',
    title: 'Real-Time Alerts & Notifications',
    icon: Bell,
    summary: 'Never miss the moment a buyer shows interest.',
    details: [
      'Instant pings in Slack, Teams, email or mobile push.',
      'Triggers for pricing-page visits, email opens and champion job changes.',
      'Quiet hours and digest mode to prevent alert fatigue.',
      'Escalation rules when hot leads are not actioned in time.',
    ],
  },
  {
    id: 'analytics',
    title: 'Pipeline Analytics & Forecasting',
    icon: LineChart,
    summary: 'Forecasts you can actually trust.',
    details: [
      'AI-weighted forecasts that beat rep-submitted numbers.',
      'Funnel conversion, velocity and win-rate dashboards.',
      'Cohort analysis by segment, source and rep.',
      'Scheduled board-ready reports delivered to your inbox.',
    ],
  },
  {
    id: 'conversation',
    title: 'Conversation Intelligence',
    icon: MessageSquare,
    summary: 'Turn every call into searchable, actionable insight.',
    details: [
      'Automatic transcription and summaries for calls and meetings.',
      'Detects objections, competitor mentions and buying signals.',
      'Talk-to-listen ratios and pacing feedback for reps.',
      'Push action items directly into your CRM.',
    ],
  },
  {
    id: 'scheduling',
    title: 'Smart Scheduling',
    icon: Calendar,
    summary: 'Let buyers book time with the right rep instantly.',
    details: [
      'Round-robin and territory-based meeting routing.',
      'Calendar sync with Google and Outlook.',
      'Automated reminders that reduce no-shows by 25%.',
      'Embeddable booking widgets for your website and emails.',
    ],
  },
  {
    id: 'dialer',
    title: 'Power Dialer',
    icon: Phone,
    summary: 'More conversations, fewer clicks.',
    details: [
      'Click-to-call and auto-dial lists sorted by lead score.',
      'Local presence numbers to improve pick-up rates.',
      'Voicemail drop and AI-generated call notes.',
      'Compliance checks with do-not-call registries.',
    ],
  },
  {
    id: 'enrichment',
    title: 'Data Enrichment',
    icon: Search,
    summary: 'Complete, accurate records without manual research.',
    details: [
      'Auto-fill titles, company size, tech stack and funding data.',
      'Continuous verification keeps emails and phone numbers fresh.',
      'Duplicate detection and merge suggestions.',
      'Buying-committee mapping for every target account.',
    ],
  },
];

export const featureHighlights: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Zap, title: 'Live in a day', text: 'Connect your CRM and start seeing scored leads within hours, not months.' },
  { icon: Shield, title: 'Enterprise-grade security', text: 'SOC 2 Type II, SSO and role-based access control on every plan.' },
  { icon: Users, title: 'Built for teams', text: 'Shared playbooks, leaderboards and coaching tools for teams of any size.' },
  { icon: Sparkles, title: 'Always improving', text: 'Models learn from every deal you win or lose and get smarter each week.' },
];
