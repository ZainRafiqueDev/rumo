export interface IRelease {
  version: string;
  date: string;
  title: string;
  tag: 'New' | 'Improved' | 'Fixed';
  items: string[];
}

export const releases: IRelease[] = [
  {
    version: '3.4.0', date: 'September 15, 2026', title: 'Conversation Intelligence 2.0', tag: 'New',
    items: [
      'Multi-language transcription for 24 languages.',
      'Competitor tracking with win/loss comparisons.',
      'New talk-track library surfaces winning phrases from top performers.',
      'Call summaries now sync to Salesforce and HubSpot notes.',
    ],
  },
  {
    version: '3.3.2', date: 'August 28, 2026', title: 'Faster dashboards', tag: 'Improved',
    items: [
      'Pipeline dashboards now load 3x faster for large accounts.',
      'CSV exports support up to 1 million rows.',
      'Improved mobile layout for the lead list.',
    ],
  },
  {
    version: '3.3.0', date: 'August 4, 2026', title: 'Workflow Builder branching', tag: 'New',
    items: [
      'Add if/else branches and parallel paths to any workflow.',
      'New templates for partner deals and usage-based expansion.',
      'Version history with one-click rollback.',
    ],
  },
  {
    version: '3.2.1', date: 'July 12, 2026', title: 'Bug fixes', tag: 'Fixed',
    items: [
      'Fixed duplicated tasks created after CRM reconnects.',
      'Fixed timezone handling in send-time optimization.',
      'Resolved an issue with Outlook calendar invites.',
    ],
  },
  {
    version: '3.2.0', date: 'June 20, 2026', title: 'Health Score Explorer', tag: 'New',
    items: [
      'Interactive breakdown of every factor behind an account’s health score.',
      'Custom health models per segment.',
      'Renewal playbooks can now trigger from any date field.',
    ],
  },
  {
    version: '3.1.0', date: 'May 18, 2026', title: 'AI Content Studio', tag: 'New',
    items: [
      'Brand voice profiles with tone sliders and example libraries.',
      'Generate multi-touch sequences from a single brief.',
      'Built-in compliance checks for regulated industries.',
    ],
  },
  {
    version: '3.0.0', date: 'April 2, 2026', title: 'Rumo 3.0', tag: 'New',
    items: [
      'Completely redesigned interface.',
      'New forecasting engine with scenario planning.',
      'Real-time alerts across Slack, Teams and mobile.',
      'SSO and SCIM provisioning on Enterprise.',
    ],
  },
  {
    version: '2.9.0', date: 'February 10, 2026', title: 'Data Enrichment improvements', tag: 'Improved',
    items: [
      'Coverage expanded to 60 million companies.',
      'Improved email verification accuracy.',
      'Buying-committee mapping now suggests missing stakeholders.',
    ],
  },
];
