"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface IFaq {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: IFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className='w-full flex flex-col gap-3'>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className='rounded bg-gray-900 bg-opacity-40 backdrop-blur-xl border border-white/10'>
            <button
              className='w-full flex items-center justify-between gap-4 text-left p-5 font-semibold'
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              {item.q}
              <ChevronDown className={`shrink-0 transition-transform ${open ? 'rotate-180 text-fuchsia-500' : ''}`} />
            </button>
            {open && <p className='px-5 pb-5 text-sm text-zinc-400 leading-relaxed'>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
