import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import PageShell, { PageHero, Section, Card, CtaBanner } from '../components/PageShell';
import { features, featureHighlights } from '../libs/features';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Everything Rumo does to help your sales team sell more, faster.',
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Features"
        title="Everything your sales team needs to grow"
        subtitle="From the first touch to the renewal, Rumo gives every rep an AI teammate that knows what to do next."
      />

      <Section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {featureHighlights.map(({ icon: Icon, title, text }) => (
            <Card key={title} className='flex flex-col gap-3'>
              <div className='p-3 bg-fuchsia-700 rounded-full w-fit'><Icon size={20} /></div>
              <h3 className='font-bold'>{title}</h3>
              <p className='text-sm text-zinc-400'>{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="The full platform" subtitle="Twelve capabilities, one connected workspace.">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {features.map(({ id, icon: Icon, title, summary, details }) => (
            <Card key={id} className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-fuchsia-700 rounded-full'><Icon size={22} /></div>
                <h3 className='text-xl font-bold'>{title}</h3>
              </div>
              <p className='text-zinc-300'>{summary}</p>
              <ul className='flex flex-col gap-2'>
                {details.map((d) => (
                  <li key={d} className='flex gap-2 text-sm text-zinc-400'>
                    <Check size={16} className='text-fuchsia-500 shrink-0 mt-0.5' />
                    {d}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </PageShell>
  );
}
