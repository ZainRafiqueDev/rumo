import type { Metadata } from 'next';
import PageShell, { PageHero, CtaBanner } from '../components/PageShell';
import RoiClient from './RoiClient';

export const metadata: Metadata = {
  title: 'ROI calculator',
  description: 'Estimate the revenue Rumo could add for your sales team.',
};

export default function RoiPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="ROI calculator"
        title="See what Rumo could be worth to you"
        subtitle="Adjust the sliders to match your team. Estimates use the average results our customers see."
      />
      <RoiClient />
      <CtaBanner />
    </PageShell>
  );
}
