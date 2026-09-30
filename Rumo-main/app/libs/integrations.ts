export interface IIntegration {
  name: string;
  category: string;
  description: string;
}

export const integrationCategories = ['All', 'CRM', 'Email & Calendar', 'Communication', 'Data & Enrichment', 'Marketing', 'Support', 'Developer'];

export const integrations: IIntegration[] = [
  { name: 'Salesforce', category: 'CRM', description: 'Two-way sync of leads, contacts, accounts and opportunities with custom field mapping.' },
  { name: 'HubSpot', category: 'CRM', description: 'Sync deals and contacts, and write lead scores back to HubSpot properties.' },
  { name: 'Pipedrive', category: 'CRM', description: 'Push insights into your Pipedrive pipeline and trigger workflows from deal stages.' },
  { name: 'Microsoft Dynamics', category: 'CRM', description: 'Enterprise-ready connector with field-level permissions.' },
  { name: 'Zoho CRM', category: 'CRM', description: 'Connect leads and deals and automate follow-ups.' },
  { name: 'Gmail', category: 'Email & Calendar', description: 'Send sequences from your own inbox and log replies automatically.' },
  { name: 'Microsoft 365', category: 'Email & Calendar', description: 'Outlook email and calendar sync for teams on Microsoft.' },
  { name: 'Google Calendar', category: 'Email & Calendar', description: 'Smart scheduling with real-time availability.' },
  { name: 'Calendly', category: 'Email & Calendar', description: 'Capture booked meetings as CRM activities.' },
  { name: 'Slack', category: 'Communication', description: 'Real-time deal alerts, daily digests and slash commands.' },
  { name: 'Microsoft Teams', category: 'Communication', description: 'Notifications and approvals where your team already works.' },
  { name: 'Zoom', category: 'Communication', description: 'Record, transcribe and summarize Zoom meetings automatically.' },
  { name: 'Twilio', category: 'Communication', description: 'SMS and voice at scale with compliance built in.' },
  { name: 'LinkedIn Sales Navigator', category: 'Data & Enrichment', description: 'Import lists and log social touchpoints.' },
  { name: 'ZoomInfo', category: 'Data & Enrichment', description: 'Enrich records with firmographic and contact data.' },
  { name: 'Clearbit', category: 'Data & Enrichment', description: 'Real-time company and person enrichment.' },
  { name: 'Snowflake', category: 'Data & Enrichment', description: 'Bring product usage and billing data into your scoring models.' },
  { name: 'Segment', category: 'Data & Enrichment', description: 'Stream behavioral events for real-time intent signals.' },
  { name: 'Marketo', category: 'Marketing', description: 'Align lead handoff between marketing and sales.' },
  { name: 'Mailchimp', category: 'Marketing', description: 'Sync audiences and engagement data.' },
  { name: 'Google Analytics', category: 'Marketing', description: 'Attribute web behavior to pipeline and revenue.' },
  { name: 'Zendesk', category: 'Support', description: 'Factor support tickets into account health scores.' },
  { name: 'Intercom', category: 'Support', description: 'Capture conversations and surface churn risk.' },
  { name: 'Stripe', category: 'Support', description: 'Use billing events to detect expansion and churn signals.' },
  { name: 'REST API', category: 'Developer', description: 'Full programmatic access to leads, scores, and workflows.' },
  { name: 'Webhooks', category: 'Developer', description: 'Subscribe to events like score changes and churn alerts.' },
  { name: 'Zapier', category: 'Developer', description: 'Connect Rumo to 6,000+ apps without writing code.' },
];
