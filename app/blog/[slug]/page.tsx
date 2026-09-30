import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell, { Card, CtaBanner } from '../../components/PageShell';
import { posts } from '../../libs/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <article className='w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8'>
        <Link href='/blog' className='text-sm text-fuchsia-400 hover:text-fuchsia-300'>&larr; All articles</Link>
        <header className='flex flex-col gap-3'>
          <span className='text-xs uppercase tracking-widest text-fuchsia-400'>{post.category}</span>
          <h1 className='text-4xl md:text-5xl font-black leading-tight'>{post.title}</h1>
          <p className='text-zinc-400 text-lg'>{post.excerpt}</p>
          <p className='text-xs text-zinc-500'>{post.author} &middot; {post.date} &middot; {post.readTime}</p>
        </header>

        {post.sections.map((s) => (
          <section key={s.heading} className='flex flex-col gap-3'>
            <h2 className='text-2xl font-bold'>{s.heading}</h2>
            {s.paragraphs.map((para, i) => (
              <p key={i} className='text-zinc-300 leading-relaxed'>{para}</p>
            ))}
          </section>
        ))}

        <div className='border-t border-white/10 pt-8 flex flex-col gap-4'>
          <h2 className='text-xl font-bold'>Keep reading</h2>
          <div className='grid sm:grid-cols-2 gap-4'>
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <Card className='h-full hover:border-fuchsia-600 transition-colors'>
                  <p className='font-semibold'>{p.title}</p>
                  <p className='text-xs text-zinc-500 mt-2'>{p.readTime}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <CtaBanner />
    </PageShell>
  );
}
