export interface IFaqGroup {
  group: string;
  items: { q: string; a: string }[];
}

export const faqGroups: IFaqGroup[] = [
  {
    group: 'Getting started',
    items: [
      { q: 'How does the 7-day free trial work?', a: 'Sign up with your work email and you get full access to every feature in your chosen plan for seven days. No credit card is required, and you can cancel at any time. If you decide to continue, we’ll ask for billing details before the trial ends.' },
      { q: 'How long does it take to set up Rumo?', a: 'Most teams are live within a day. You connect your CRM, choose which fields to sync, and Rumo begins scoring leads immediately. Our customer success team is available to help with custom workflows and onboarding.' },
      { q: 'Do I need a data scientist to use Rumo?', a: 'No. Rumo is designed for sales, marketing and customer success teams. Models are trained and monitored automatically, and every recommendation is explained in plain language.' },
      { q: 'Which CRMs do you support?', a: 'Rumo integrates natively with Salesforce, HubSpot, Pipedrive, Microsoft Dynamics and Zoho CRM. We also offer an open REST API and webhooks for custom systems.' },
    ],
  },
  {
    group: 'Product',
    items: [
      { q: 'How accurate is predictive lead scoring?', a: 'Accuracy depends on the volume and quality of your historical data. Customers with at least 500 closed deals typically see models that rank the top 20% of leads with 3 to 5 times the average conversion rate. You can view model performance in the analytics dashboard at any time.' },
      { q: 'Can I customize the AI-generated content?', a: 'Yes. You can define brand voice guidelines, banned phrases, required disclaimers and approved claims. Every draft can be edited before sending, and you can require manager approval for specific templates.' },
      { q: 'Does Rumo send emails on my behalf?', a: 'Rumo can send through your connected Gmail or Microsoft 365 mailbox so messages come from you and land in the primary inbox. You stay in control with daily send limits, quiet hours and automatic pausing when a prospect replies.' },
      { q: 'How does the churn-reduction feature work?', a: 'Rumo combines product usage, support history, engagement and contract data into a health score. When an account’s health drops or a renewal approaches, Rumo triggers playbooks and alerts the account owner with recommended actions.' },
      { q: 'Can I build my own workflows?', a: 'Absolutely. The visual workflow builder supports triggers, conditions, delays, approvals and integrations. Enterprise customers can also use our API for fully custom automation.' },
    ],
  },
  {
    group: 'Pricing & billing',
    items: [
      { q: 'What’s the difference between Pro and Enterprise?', a: 'Pro includes predictive lead scoring, content generation, messaging at scale and retention tools. Enterprise adds data-driven recommendations, customizable workflows, real-time alerts, SSO, advanced permissions and priority support.' },
      { q: 'Is pricing per user?', a: 'Yes. Prices are per user per month. Annual billing saves 20% compared to paying monthly.' },
      { q: 'Can I change plans later?', a: 'You can upgrade, downgrade or cancel at any time. Changes are prorated automatically.' },
      { q: 'Do you offer discounts for startups or non-profits?', a: 'We do. Early-stage startups and registered non-profits can receive up to 50% off their first year. Contact our team to apply.' },
      { q: 'What payment methods do you accept?', a: 'All major credit cards, ACH transfer and invoiced payments for annual Enterprise contracts.' },
    ],
  },
  {
    group: 'Security & privacy',
    items: [
      { q: 'Is my data secure?', a: 'Yes. Rumo is SOC 2 Type II certified. Data is encrypted at rest with AES-256 and in transit with TLS 1.2+. We run regular third-party penetration tests and maintain a public security page.' },
      { q: 'Do you train AI models on my data?', a: 'Your data only trains models inside your own workspace. We never use customer data to train shared or third-party models.' },
      { q: 'Are you GDPR compliant?', a: 'Yes. We offer a Data Processing Agreement, support data subject requests and allow EU data residency on Enterprise plans.' },
      { q: 'Can I export or delete my data?', a: 'You can export your data in CSV or JSON at any time. On cancellation, we permanently delete your data within 30 days on request.' },
    ],
  },
  {
    group: 'Support',
    items: [
      { q: 'How can I reach support?', a: 'Email support@rumo.example or use in-app chat on weekdays. Enterprise customers get a dedicated Slack channel and a named customer success manager.' },
      { q: 'Do you offer training for my team?', a: 'Yes. Every plan includes live onboarding webinars and a library of on-demand tutorials. Enterprise plans include custom workshops for your team.' },
      { q: 'What are your uptime guarantees?', a: 'We target 99.95% uptime and publish a real-time status page. Enterprise agreements include contractual SLAs.' },
    ],
  },
];

export const pricingFaqs = [
  faqGroups[2].items[0],
  faqGroups[2].items[1],
  faqGroups[2].items[2],
  faqGroups[2].items[3],
  faqGroups[0].items[0],
  faqGroups[3].items[1],
];
