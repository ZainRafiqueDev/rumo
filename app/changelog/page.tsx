import type { Metadata } from 'next';
import PageShell, { PageHero, Section, Card } from '../components/PageShell';
import { releases } from '../libs/changelog';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Everything we’ve shipped recently.',
};

const tagColor = { New: 'bg-fuchsia-700', Improved: 'bg-purple-700', Fixed: 'bg-zinc-700' } as const;

export default function ChangelogPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Changelog" title="What’s new in Rumo" subtitle="We ship improvements every week. Here are the highlights." />
      <Section narrow>
        <div className='flex flex-col gap-6 w-full'>
          {releases.map((r) => (
            <Card key={r.version} className='flex flex-col gap-3'>
              <div className='flex flex-wrap items-center gap-3'>
                <span className={`text-xs px-2 py-1 rounded-full ${tagColor[r.tag]}`}>{r.tag}</span>
                <span className='text-sm text-zinc-500'>v{r.version} &middot; {r.date}</span>
              </div>
              <h2 className='text-xl font-bold'>{r.title}</h2>
              <ul className='list-disc list-inside text-sm text-zinc-400 flex flex-col gap-1'>
                {r.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
