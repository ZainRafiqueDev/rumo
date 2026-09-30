import type { Metadata } from 'next';
import PageShell, { PageHero, CtaBanner } from '../components/PageShell';
import IntegrationsClient from './IntegrationsClient';

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Connect Rumo to your CRM, inbox, calendar, data warehouse and more.',
};

export default function IntegrationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Integrations"
        title="Works with the tools you already use"
        subtitle="Rumo plugs into your CRM, inbox, chat and data stack so your team never has to change how they work."
      />
      <IntegrationsClient />
      <CtaBanner title="Don’t see your tool?" subtitle="Our REST API and webhooks make custom integrations simple, or ask us to build it." />
    </PageShell>
  );
}
