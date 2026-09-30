import type { Metadata } from 'next';
import PageShell, { PageHero, Section, CtaBanner } from '../components/PageShell';
import Faq from '../components/Faq';
import PricingClient from './PricingClient';
import { pricingFaqs } from '../libs/faqs';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple per-user pricing with a 7-day free trial. Save 20% with annual billing.',
};

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with your team"
        subtitle="Start with a 7-day free trial. No credit card required. Cancel anytime."
      />
      <PricingClient />
      <Section title="Pricing questions" narrow>
        <Faq items={pricingFaqs} />
      </Section>
      <CtaBanner />
    </PageShell>
  );
}
