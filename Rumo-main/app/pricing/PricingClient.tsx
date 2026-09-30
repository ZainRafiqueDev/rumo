"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import pricingCards, { comparisonRows } from '../libs/PricingCards';
import { Section, Card } from '../components/PageShell';

export default function PricingClient() {
  const [annual, setAnnual] = useState(true);
  const [seats, setSeats] = useState(10);

  return (
    <>
      <Section>
        <div className='flex items-center gap-4'>
          <span className={annual ? 'text-zinc-500' : 'text-white'}>Monthly</span>
          <button
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual(!annual)}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${annual ? 'bg-fuchsia-700' : 'bg-zinc-700'}`}
          >
            <span className={`block w-6 h-6 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : ''}`} />
          </button>
          <span className={annual ? 'text-white' : 'text-zinc-500'}>
            Annual <span className='text-xs text-fuchsia-400 ml-1'>Save 20%</span>
          </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl'>
          {pricingCards.map((card) => {
            const price = annual ? Math.round(card.price * 0.8) : card.price;
            const featured = card.id === 2;
            return (
              <Card key={card.id} className={`flex flex-col gap-6 p-8 ${featured ? 'border-fuchsia-600' : ''}`}>
                {featured && <span className='text-xs uppercase tracking-widest text-fuchsia-400'>Most popular</span>}
                <div>
                  <h3 className='text-2xl font-bold'>{card.title}</h3>
                  <p className='text-sm text-zinc-500'>{card.oneliner}</p>
                </div>
                <p className='text-5xl font-bold'>
                  ${price} <span className='text-sm font-normal text-zinc-500'>/ user / month</span>
                </p>
                <p className='text-xs text-zinc-500 -mt-4'>{annual ? 'Billed annually' : 'Billed monthly'}</p>
                <Link href='/contact?topic=Free%20trial' className='bg-fuchsia-700 rounded p-3 text-center text-sm transition-colors hover:bg-fuchsia-800'>Try 7 days free!</Link>
                <ul className='flex flex-col gap-3'>
                  {card.benefits.map((b) => (
                    <li key={b} className='text-sm text-zinc-400 flex gap-2 items-center'><Check size={16} className='text-fuchsia-500 shrink-0' />{b}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <Card className='w-full max-w-4xl flex flex-col gap-4'>
          <h3 className='font-bold text-lg'>Estimate your monthly cost</h3>
          <label className='text-sm text-zinc-400'>Team size: <span className='text-white font-bold'>{seats} users</span></label>
          <input type='range' min={1} max={200} value={seats} onChange={(e) => setSeats(Number(e.target.value))} className='accent-fuchsia-600' />
          <div className='grid sm:grid-cols-2 gap-4 text-sm'>
            {pricingCards.map((c) => {
              const per = annual ? Math.round(c.price * 0.8) : c.price;
              return (
                <div key={c.id} className='flex justify-between border border-white/10 rounded p-3'>
                  <span className='text-zinc-400'>{c.title}</span>
                  <span className='font-bold'>${(per * seats).toLocaleString()} / month</span>
                </div>
              );
            })}
          </div>
        </Card>
      </Section>

      <Section title="Compare plans">
        <div className='w-full max-w-4xl overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b border-white/20 text-left'>
                <th className='py-3 pr-4'>Feature</th>
                <th className='py-3 px-4'>Pro</th>
                <th className='py-3 px-4'>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.feature} className='border-b border-white/10'>
                  <td className='py-3 pr-4 text-zinc-300'>{r.feature}</td>
                  {[r.pro, r.enterprise].map((v, i) => (
                    <td key={i} className='py-3 px-4'>
                      {v === true ? <Check size={18} className='text-fuchsia-500' /> : v === false ? <X size={18} className='text-zinc-600' /> : <span className='text-zinc-400'>{v}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
