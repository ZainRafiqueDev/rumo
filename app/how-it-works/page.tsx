import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { PageHero, Section, Card, CtaBanner } from '../components/PageShell';
import Faq from '../components/Faq';
import { faqGroups } from '../libs/faqs';

export const metadata: Metadata = {
  title: 'How it works',
  description: 'From connecting your CRM to closing more deals: how Rumo works in four steps.',
};

const steps = [
  {
    n: '01',
    title: 'Connect your data',
    text: 'Link your CRM, email and calendar in a few clicks. Rumo reads your historical deals, contacts and activities, and you control exactly which fields are synced.',
    bullets: ['OAuth connection, no engineers required', 'Field-level permissions', 'Historical backfill in under an hour'],
  },
  {
    n: '02',
    title: 'Rumo learns what winning looks like',
    text: 'Our models analyze your closed-won and closed-lost deals to understand which signals predict success for your business, not a generic benchmark.',
    bullets: ['Custom models per workspace', 'Explainable scores', 'Nightly retraining'],
  },
  {
    n: '03',
    title: 'Your team gets clear next steps',
    text: 'Every rep sees a prioritized list of leads, deals and renewals, each with drafted outreach, suggested talking points and the best time to reach out.',
    bullets: ['Daily priority list', 'One-click personalized drafts', 'Alerts in Slack, Teams or email'],
  },
  {
    n: '04',
    title: 'Measure, improve, repeat',
    text: 'Dashboards show how scoring, messaging and retention are changing your numbers. Outcomes flow back into the models so they keep getting sharper.',
    bullets: ['Pipeline and forecast analytics', 'A/B test results', 'Board-ready reports'],
  },
];

const timeline = [
  { when: 'Day 1', what: 'Connect your CRM and see your first scored leads.' },
  { when: 'Week 1', what: 'Reps begin using daily priority lists and AI drafts.' },
  { when: 'Week 4', what: 'Models are tuned on your data and workflows are live.' },
  { when: 'Quarter 1', what: 'Measurable lift in conversion, pipeline and retention.' },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How it works"
        title="From connected to closing in four steps"
        subtitle="No lengthy implementation. No data science team required. Just results."
      />

      <Section>
        <div className='flex flex-col gap-6 w-full max-w-4xl'>
          {steps.map((s) => (
            <Card key={s.n} className='flex flex-col md:flex-row gap-6'>
              <div className='text-6xl font-black text-fuchsia-600/70 md:w-28 shrink-0'>{s.n}</div>
              <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-bold'>{s.title}</h3>
                <p className='text-zinc-300'>{s.text}</p>
                <ul className='list-disc list-inside text-sm text-zinc-400 flex flex-col gap-1'>
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What to expect" subtitle="A typical rollout timeline.">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full'>
          {timeline.map((t) => (
            <Card key={t.when}>
              <p className='text-fuchsia-400 font-bold mb-2'>{t.when}</p>
              <p className='text-sm text-zinc-300'>{t.what}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Common questions" narrow>
        <Faq items={faqGroups[0].items} />
        <Link href="/faq" className='text-fuchsia-400 hover:text-fuchsia-300'>See all FAQs &rarr;</Link>
      </Section>

      <CtaBanner />
    </PageShell>
  );
}
