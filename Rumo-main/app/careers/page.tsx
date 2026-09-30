import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, Check } from 'lucide-react';
import PageShell, { PageHero, Section, Card } from '../components/PageShell';
import { jobs, perks, values } from '../libs/company';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the team building the future of AI-powered sales.',
};

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Help us build the future of selling"
        subtitle="We’re a remote-friendly team of builders, sellers and scientists who love hard problems."
      />

      <Section title="How we work">
        <div className='grid md:grid-cols-3 gap-6 w-full'>
          {values.slice(0, 3).map((v) => (
            <Card key={v.title}>
              <h3 className='font-bold mb-2'>{v.title}</h3>
              <p className='text-sm text-zinc-400'>{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Benefits & perks">
        <div className='grid sm:grid-cols-2 gap-3 w-full max-w-4xl'>
          {perks.map((p) => (
            <div key={p} className='flex gap-3 items-start text-zinc-300'>
              <Check className='text-fuchsia-500 shrink-0' size={18} />
              <span className='text-sm'>{p}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={`Open roles (${jobs.length})`}>
        <div className='flex flex-col gap-4 w-full max-w-4xl'>
          {jobs.map((j) => (
            <Card key={j.title} className='flex flex-col md:flex-row md:items-center gap-4 justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>{j.title}</h3>
                <p className='text-sm text-zinc-400'>{j.description}</p>
                <div className='flex flex-wrap gap-4 text-xs text-zinc-500'>
                  <span className='flex items-center gap-1'><Briefcase size={12} />{j.team}</span>
                  <span className='flex items-center gap-1'><MapPin size={12} />{j.location}</span>
                  <span>{j.type}</span>
                </div>
              </div>
              <Link
                href={`/contact?topic=${encodeURIComponent('Careers: ' + j.title)}`}
                className='px-5 py-2 rounded-full bg-fuchsia-700 hover:bg-fuchsia-800 text-sm text-center transition-colors shrink-0'
              >
                Apply
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
