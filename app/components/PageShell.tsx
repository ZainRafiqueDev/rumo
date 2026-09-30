import Link from 'next/link';
import { ReactNode } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <SiteNav />
      <main className='flex flex-col items-center'>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <header className='w-full relative overflow-hidden'>
      <div className='absolute inset-0 -z-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(192,38,211,0.35),transparent_70%)]' />
      <div className='relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center gap-4'>
        {eyebrow && <span className='text-xs uppercase tracking-widest text-fuchsia-400 font-semibold'>{eyebrow}</span>}
        <h1 className='text-4xl md:text-6xl font-black leading-tight'>{title}</h1>
        {subtitle && <p className='text-zinc-400 md:text-lg max-w-2xl'>{subtitle}</p>}
      </div>
    </header>
  );
}

export function Section({ title, subtitle, children, narrow }: { title?: string; subtitle?: string; children: ReactNode; narrow?: boolean }) {
  return (
    <section className={`w-full ${narrow ? 'max-w-3xl' : 'max-w-7xl'} mx-auto px-6 py-12 flex flex-col items-center gap-8`}>
      {(title || subtitle) && (
        <div className='text-center flex flex-col gap-2'>
          {title && <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>}
          {subtitle && <p className='text-zinc-400 max-w-2xl mx-auto'>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded bg-gray-900 bg-opacity-40 backdrop-blur-xl border border-white/10 p-6 ${className}`}>{children}</div>
  );
}

export function CtaBanner({
  title = 'Ready to stop wasting time and start growing?',
  subtitle = 'Start your 7-day free trial today. No credit card required.',
}: { title?: string; subtitle?: string }) {
  return (
    <section className='w-full max-w-5xl mx-auto px-6 py-12'>
      <div className='rounded-2xl p-10 md:p-14 text-center flex flex-col items-center gap-5 bg-gradient-to-br from-fuchsia-800 via-fuchsia-900 to-black border border-fuchsia-700/50'>
        <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
        <p className='text-zinc-300 max-w-xl'>{subtitle}</p>
        <div className='flex flex-wrap justify-center gap-3'>
          <Link href='/pricing' className='px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors'>Try 7 days free</Link>
          <Link href='/contact' className='px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition-colors'>Talk to sales</Link>
        </div>
      </div>
    </section>
  );
}
