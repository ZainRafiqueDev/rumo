import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import PageShell, { PageHero, Section, Card, CtaBanner } from '../components/PageShell';
import { securityPractices } from '../libs/legal';

export const metadata: Metadata = {
  title: 'Security',
  description: 'How Rumo protects your data.',
};

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Security" title="Your data, protected" subtitle="Security isn’t a feature at Rumo. It’s the foundation everything else is built on." />
      <Section>
        <div className='grid md:grid-cols-2 gap-6 w-full'>
          {securityPractices.map((p) => (
            <Card key={p.title} className='flex gap-4'>
              <ShieldCheck className='text-fuchsia-500 shrink-0' />
              <div>
                <h3 className='font-bold mb-1'>{p.title}</h3>
                <p className='text-sm text-zinc-400'>{p.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <CtaBanner title="Need our security documentation?" subtitle="Request our SOC 2 report, pen-test summary or completed security questionnaire." />
    </PageShell>
  );
}
