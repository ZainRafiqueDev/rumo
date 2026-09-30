import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { PageHero, Section, Card } from '../components/PageShell';
import { posts } from '../libs/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Playbooks, research and product news for modern sales teams.',
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Ideas for modern revenue teams"
        subtitle="Practical playbooks, honest research and product updates from the Rumo team."
      />

      <Section>
        <Link href={`/blog/${featured.slug}`} className='w-full group'>
          <Card className='flex flex-col gap-3 group-hover:border-fuchsia-600 transition-colors bg-gradient-to-br from-fuchsia-950/60 to-transparent'>
            <span className='text-xs uppercase tracking-widest text-fuchsia-400'>Featured &middot; {featured.category}</span>
            <h2 className='text-3xl font-bold'>{featured.title}</h2>
            <p className='text-zinc-400 max-w-2xl'>{featured.excerpt}</p>
            <p className='text-xs text-zinc-500'>{featured.author} &middot; {featured.date} &middot; {featured.readTime}</p>
          </Card>
        </Link>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className='group'>
              <Card className='h-full flex flex-col gap-3 group-hover:border-fuchsia-600 transition-colors'>
                <span className='text-xs uppercase tracking-widest text-fuchsia-400'>{p.category}</span>
                <h3 className='text-xl font-bold'>{p.title}</h3>
                <p className='text-sm text-zinc-400'>{p.excerpt}</p>
                <p className='text-xs text-zinc-500 mt-auto'>{p.author} &middot; {p.date} &middot; {p.readTime}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
