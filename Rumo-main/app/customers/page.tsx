import type { Metadata } from 'next';
import PageShell, { PageHero, Section, Card, CtaBanner } from '../components/PageShell';
import { caseStudies, testimonials, stats, logos } from '../libs/company';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Stories from the sales teams growing with Rumo.',
};

export default function CustomersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Customers"
        title="Trusted by 2,400+ sales teams"
        subtitle="From fast-growing startups to global enterprises, teams use Rumo to win more and waste less."
      />

      <Section>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {stats.map((s) => (
            <Card key={s.label} className='text-center'>
              <p className='text-4xl font-black text-fuchsia-500'>{s.value}</p>
              <p className='text-sm text-zinc-400 mt-1'>{s.label}</p>
            </Card>
          ))}
        </div>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 text-zinc-500 font-bold text-xl'>
          {logos.map((l) => <span key={l}>{l}</span>)}
        </div>
      </Section>

      <Section title="Case studies">
        <div className='flex flex-col gap-8 w-full'>
          {caseStudies.map((c) => (
            <Card key={c.slug} className='flex flex-col gap-5' >
              <div id={c.slug} className='flex flex-col gap-1'>
                <p className='text-xs uppercase tracking-widest text-fuchsia-400'>{c.industry}</p>
                <h3 className='text-2xl font-bold'>{c.headline}</h3>
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold mb-1'>The challenge</h4>
                  <p className='text-sm text-zinc-400'>{c.challenge}</p>
                </div>
                <div>
                  <h4 className='font-semibold mb-1'>The solution</h4>
                  <p className='text-sm text-zinc-400'>{c.solution}</p>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-4 border-t border-white/10 pt-4'>
                {c.results.map((r) => (
                  <div key={r.label} className='text-center'>
                    <p className='text-2xl md:text-3xl font-black text-fuchsia-500'>{r.value}</p>
                    <p className='text-xs md:text-sm text-zinc-400'>{r.label}</p>
                  </div>
                ))}
              </div>
              <p className='text-xs text-zinc-500'>{c.company}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What customers say">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {testimonials.map((t) => (
            <Card key={t.name} className='flex flex-col gap-4'>
              <p className='text-zinc-200'>&ldquo;{t.quote}&rdquo;</p>
              <div className='mt-auto'>
                <p className='font-semibold'>{t.name}</p>
                <p className='text-xs text-zinc-500'>{t.role}, {t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </PageShell>
  );
}
