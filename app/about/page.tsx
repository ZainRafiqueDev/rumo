import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { PageHero, Section, Card, CtaBanner } from '../components/PageShell';
import { team, values, milestones, stats } from '../libs/company';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story, mission and people behind Rumo.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Rumo"
        title="We build tools that give sellers their time back"
        subtitle="Rumo started with a simple observation: great salespeople spend most of their week on everything except selling."
      />

      <Section title="Our mission" narrow>
        <div className='flex flex-col gap-4 text-zinc-300 leading-relaxed'>
          <p>Sales is one of the most human jobs in business, and also one of the most burdened with repetitive work. Research, data entry, follow-up emails, forecast spreadsheets: each is necessary, and each takes a person away from the conversations that win deals.</p>
          <p>Rumo uses AI to take on that work. We tell reps where to focus, draft the messages, watch for churn and keep the pipeline honest, so people can do what people do best: build relationships and solve problems.</p>
          <p>We believe AI in sales should be transparent, respectful of customer data and genuinely useful from day one. That belief shapes every product decision we make.</p>
        </div>
      </Section>

      <Section>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {stats.map((s) => (
            <Card key={s.label} className='text-center'>
              <p className='text-4xl font-black text-fuchsia-500'>{s.value}</p>
              <p className='text-sm text-zinc-400 mt-1'>{s.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Our values">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className='font-bold text-lg mb-2'>{v.title}</h3>
              <p className='text-sm text-zinc-400'>{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Our journey">
        <div className='flex flex-col gap-4 w-full max-w-2xl'>
          {milestones.map((m) => (
            <div key={m.year} className='flex gap-6 items-start'>
              <span className='text-2xl font-black text-fuchsia-500 w-16 shrink-0'>{m.year}</span>
              <p className='text-zinc-300 border-l border-fuchsia-700 pl-6 pb-4'>{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Leadership team" subtitle="The people building Rumo.">
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
          {team.map((m) => (
            <Card key={m.name} className='flex flex-col gap-3'>
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-900 flex items-center justify-center text-xl font-bold'>
                {m.name.split(' ').map((p) => p[0]).join('')}
              </div>
              <div>
                <h3 className='font-bold'>{m.name}</h3>
                <p className='text-xs text-fuchsia-400'>{m.role}</p>
              </div>
              <p className='text-sm text-zinc-400'>{m.bio}</p>
            </Card>
          ))}
        </div>
        <p className='text-zinc-400'>Want to join us? <Link href="/careers" className='text-fuchsia-400 hover:text-fuchsia-300'>See open roles &rarr;</Link></p>
      </Section>

      <CtaBanner />
    </PageShell>
  );
}
