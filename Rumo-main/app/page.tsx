"use client"

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';
import infoCards from './libs/InfoCards';
import pricingCards from './libs/PricingCards';
import { CheckCheck, LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import Faq from './components/Faq';
import { CtaBanner } from './components/PageShell';
import { features } from './libs/features';
import { testimonials, stats, logos } from './libs/company';
import { faqGroups } from './libs/faqs';
import { posts } from './libs/posts';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    function handleMouseMove(event: { clientX: any; clientY: any; }) {
      setMousePosition({
        x: `${event.clientX}px`,
        y: `${event.clientY}px`
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='min-h-screen w-full relative'>
      <SiteNav />
      <main className='flex flex-col items-center justify-center'>
        <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0.6), transparent 40%)`
          }}
        >
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl text-white font-black md:text-8xl'>Rumo</h1>
              <h2 className='text-md text-white md:text-2xl'>Start growing today!</h2>
            </div>
            <p className='max-w-md text-white text-sm md:text-base text-zinc-500'>Rumo is an AI-powered sales optimization tool that provides data-driven insights to boost sales performance.</p>
            <div className='w-full flex items-center justify-center md:justify-start gap-4'>
              <Link href="/pricing" className='w-48 h-12 flex items-center justify-center text-sm sm:text-base bg-black text-white hover:bg-fuchsia-700 transition-colors rounded-full border'>Try 7 days free!</Link>
              <Link href="/contact" className='w-48 h-12 flex items-center justify-center text-sm text-white sm:text-base rounded hover:bg-white hover:bg-opacity-5 transition-colors'>Contact</Link>
            </div>
          </div>

          <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
            <Spline className="bg-black" scene='https://prod.spline.design/8glM91b9bsfBLBim/scene.splinecode' />
          </div>
        </header>


        <section id="stats" className="w-full max-w-7xl text-white px-8 py-16 flex flex-col items-center gap-10">
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
            {stats.map((s) => (
              <div key={s.label} className='text-center'>
                <p className='text-4xl md:text-5xl font-black text-fuchsia-500'>{s.value}</p>
                <p className='text-sm text-zinc-400 mt-1'>{s.label}</p>
              </div>
            ))}
          </div>
          <p className='text-xs uppercase tracking-widest text-zinc-500'>Trusted by fast-growing sales teams</p>
          <div className='flex flex-wrap justify-center gap-x-10 gap-y-3 text-zinc-500 font-bold text-xl'>
            {logos.map((l) => <span key={l}>{l}</span>)}
          </div>
        </section>

        <section id="features" className="w-full max-w-7xl text-white px-8 py-16 flex flex-col items-center gap-10">
          <div className='text-center flex flex-col gap-2'>
            <h3 className='text-4xl md:text-5xl font-bold'>Everything you need to sell smarter</h3>
            <p className='text-zinc-400 max-w-2xl mx-auto'>One platform for scoring, messaging, forecasting and retention.</p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
            {features.slice(0, 8).map(({ id, icon: Icon, title, summary }) => (
              <div key={id} className='rounded p-6 flex flex-col gap-3 bg-gray-900 bg-opacity-40 backdrop-blur-xl border border-white/10'>
                <div className='p-3 bg-fuchsia-700 rounded-full w-fit'><Icon size={20} /></div>
                <h4 className='font-bold'>{title}</h4>
                <p className='text-sm text-zinc-400'>{summary}</p>
              </div>
            ))}
          </div>
          <Link href="/features" className='px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors'>Explore all 12 features</Link>
        </section>

        <section id="how" className="w-full max-w-5xl text-white px-8 py-16 flex flex-col items-center gap-10">
          <h3 className='text-4xl md:text-5xl font-bold text-center'>Live in a day, not a quarter</h3>
          <div className='grid md:grid-cols-4 gap-6 w-full'>
            {[
              ['01', 'Connect', 'Link your CRM and inbox in a few clicks.'],
              ['02', 'Learn', 'Rumo studies your wins and losses.'],
              ['03', 'Act', 'Reps get prioritized leads and drafted outreach.'],
              ['04', 'Improve', 'Models sharpen with every deal.'],
            ].map(([n, t, d]) => (
              <div key={n} className='flex flex-col gap-2'>
                <span className='text-5xl font-black text-fuchsia-600/70'>{n}</span>
                <h4 className='font-bold text-lg'>{t}</h4>
                <p className='text-sm text-zinc-400'>{d}</p>
              </div>
            ))}
          </div>
          <Link href="/how-it-works" className='text-fuchsia-400 hover:text-fuchsia-300'>See how it works &rarr;</Link>
        </section>

        <section id="testimonials" className="w-full max-w-7xl text-white px-8 py-16 flex flex-col items-center gap-10">
          <h3 className='text-4xl md:text-5xl font-bold text-center'>Loved by revenue teams</h3>
          <div className='grid md:grid-cols-3 gap-6 w-full'>
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className='rounded p-6 flex flex-col gap-4 bg-gray-900 bg-opacity-40 backdrop-blur-xl border border-white/10'>
                <p className='text-zinc-200'>&ldquo;{t.quote}&rdquo;</p>
                <div className='mt-auto'>
                  <p className='font-semibold'>{t.name}</p>
                  <p className='text-xs text-zinc-500'>{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/customers" className='text-fuchsia-400 hover:text-fuchsia-300'>Read customer stories &rarr;</Link>
        </section>

        <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0.6), transparent 40%)`
          }}
        >
          <div className='absolute -z-10 h-full w-full overflow-hidden'>
            <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl" />
          </div>
          <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
            <h3 className='text-4xl  text-white md:text-5xl font-bold'>No More Time Wasted!</h3>
            <div className="w-full  text-white grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
              {infoCards.map((infoCard) => {
                return (
                  <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                    <p className="text-sm  text-white sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
                  </InfoCard>
                )
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="h-fit text-white min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0.6), transparent 40%)`
          }}
        >
          <h4 className="text-4xl text-white md:text-5xl font-bold">Pricing</h4>
          <div className='grid  text-white grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
            {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id} />
              )
            })}
          </div>
        </section>

        <section id="blog" className="w-full max-w-7xl text-white px-8 py-16 flex flex-col items-center gap-10">
          <h3 className='text-4xl md:text-5xl font-bold text-center'>From the blog</h3>
          <div className='grid md:grid-cols-3 gap-6 w-full'>
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className='rounded p-6 flex flex-col gap-3 bg-gray-900 bg-opacity-40 backdrop-blur-xl border border-white/10 hover:border-fuchsia-600 transition-colors'>
                <span className='text-xs uppercase tracking-widest text-fuchsia-400'>{p.category}</span>
                <h4 className='text-xl font-bold'>{p.title}</h4>
                <p className='text-sm text-zinc-400'>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className="w-full max-w-3xl text-white px-8 py-16 flex flex-col items-center gap-8">
          <h3 className='text-4xl md:text-5xl font-bold text-center'>Questions, answered</h3>
          <Faq items={faqGroups[0].items} />
          <Link href="/faq" className='text-fuchsia-400 hover:text-fuchsia-300'>See all FAQs &rarr;</Link>
        </section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[]
  oneliner: string;
}
function PricingCard({ title, price, benefits, oneliner }: IPricingCardProps) {
  return (
    <div className='h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 relative'>
      <div className='flex flex-col gap-2'>
        <div>
          <h6 className='text-2xl'>{title}</h6>
          <p className='text-sm text-zinc-500'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold'>
          ${price} <span className='text-sm font-normal text-zinc-500'>/ Month</span>
        </p>
      </div>
      <Link href="/contact?topic=Free%20trial" className='bg-fuchsia-700 rounded p-2 text-center text-sm transition-colors hover:bg-fuchsia-800'>Try 7 days free!</Link>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => (
          <p key={i} className='text-sm text-zinc-500 flex items-center gap-2'>
            <span>
              {/* Assuming CheckCheck is an icon component */}
              <CheckCheck />
            </span>
            {benefit}
          </p>
        ))}
      </div>
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="border-2 border-fuchsia-700 hover:border-white rounded-full absolute" style={{
          animation: 'rotate 2s linear infinite'
        }}></div>
      </div>
    </div>
  );
}
