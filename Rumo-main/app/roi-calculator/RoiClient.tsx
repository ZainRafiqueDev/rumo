"use client"

import { useState } from 'react';
import { Section, Card } from '../components/PageShell';

const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

function Slider({ label, value, min, max, step = 1, onChange, format }: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (n: number) => void; format?: (n: number) => string;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between text-sm'>
        <span className='text-zinc-400'>{label}</span>
        <span className='font-bold'>{format ? format(value) : value}</span>
      </div>
      <input type='range' min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className='accent-fuchsia-600' />
    </div>
  );
}

export default function RoiClient() {
  const [reps, setReps] = useState(15);
  const [dealSize, setDealSize] = useState(25000);
  const [dealsPerRep, setDealsPerRep] = useState(24);
  const [churnRate, setChurnRate] = useState(12);
  const [customers, setCustomers] = useState(300);
  const [acv, setAcv] = useState(12000);

  // Conservative assumptions based on average customer outcomes (see infoCards)
  const conversionLift = 0.2;
  const churnReduction = 0.3;

  const extraNewRevenue = reps * dealsPerRep * dealSize * conversionLift;
  const savedRevenue = customers * (churnRate / 100) * churnReduction * acv;
  const hoursSaved = reps * 11 * 48;
  const hourlyCost = 55;
  const timeValue = hoursSaved * hourlyCost;
  const cost = reps * 99 * 12;
  const total = extraNewRevenue + savedRevenue + timeValue;
  const roi = cost > 0 ? total / cost : 0;

  return (
    <Section>
      <div className='grid lg:grid-cols-2 gap-8 w-full max-w-5xl'>
        <Card className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>Your team</h2>
          <Slider label='Sales reps' value={reps} min={1} max={200} onChange={setReps} />
          <Slider label='Average deal size' value={dealSize} min={1000} max={250000} step={1000} onChange={setDealSize} format={fmt} />
          <Slider label='Deals closed per rep per year' value={dealsPerRep} min={1} max={100} onChange={setDealsPerRep} />
          <Slider label='Existing customers' value={customers} min={10} max={5000} step={10} onChange={setCustomers} />
          <Slider label='Average annual contract value' value={acv} min={1000} max={250000} step={1000} onChange={setAcv} format={fmt} />
          <Slider label='Annual churn rate' value={churnRate} min={1} max={40} onChange={setChurnRate} format={(n) => n + '%'} />
        </Card>

        <div className='flex flex-col gap-4'>
          <Card className='text-center bg-gradient-to-br from-fuchsia-900/60 to-transparent'>
            <p className='text-sm text-zinc-400'>Estimated annual value</p>
            <p className='text-5xl font-black text-fuchsia-400 my-2'>{fmt(total)}</p>
            <p className='text-sm text-zinc-300'>{roi.toFixed(1)}x return on an Enterprise investment of {fmt(cost)}/year</p>
          </Card>
          {[
            { label: 'Additional revenue from higher conversion (+20%)', value: fmt(extraNewRevenue) },
            { label: 'Revenue retained from lower churn (-30%)', value: fmt(savedRevenue) },
            { label: `Value of ${hoursSaved.toLocaleString()} hours saved`, value: fmt(timeValue) },
          ].map((r) => (
            <Card key={r.label} className='flex justify-between items-center gap-4'>
              <span className='text-sm text-zinc-300'>{r.label}</span>
              <span className='font-bold text-lg shrink-0'>{r.value}</span>
            </Card>
          ))}
          <p className='text-xs text-zinc-500'>
            Estimates are illustrative and based on average customer results (20% conversion lift, 30% churn reduction, 11 hours saved per rep per week valued at $55/hour). Your results will vary.
          </p>
        </div>
      </div>
    </Section>
  );
}
