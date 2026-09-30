import type { Metadata } from 'next';
import PageShell, { PageHero, Section } from '../components/PageShell';
import { termsSections } from '../libs/legal';

export const metadata: Metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero title="Terms & Conditions" subtitle="Last updated: September 1, 2026" />
      <Section narrow>
        <div className='flex flex-col gap-8 w-full'>
          {termsSections.map((s) => (
            <section key={s.heading} className='flex flex-col gap-2'>
              <h2 className='text-xl font-bold'>{s.heading}</h2>
              {s.body.map((p, i) => <p key={i} className='text-zinc-400 leading-relaxed'>{p}</p>)}
            </section>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
