import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { PageHero, Section } from '../components/PageShell';
import Faq from '../components/Faq';
import { faqGroups } from '../libs/faqs';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Rumo.',
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" subtitle="Can’t find what you’re looking for? Our team is happy to help." />
      {faqGroups.map((g) => (
        <Section key={g.group} title={g.group} narrow>
          <Faq items={g.items} />
        </Section>
      ))}
      <Section narrow>
        <p className='text-zinc-400'>Still have questions? <Link href='/contact' className='text-fuchsia-400 hover:text-fuchsia-300'>Contact us &rarr;</Link></p>
      </Section>
    </PageShell>
  );
}
