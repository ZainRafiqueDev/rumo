"use client"

import { useState } from 'react';
import { Section, Card } from '../components/PageShell';
import { integrations, integrationCategories } from '../libs/integrations';

export default function IntegrationsClient() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const visible = integrations.filter(
    (i) =>
      (category === 'All' || i.category === category) &&
      (i.name + i.description).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Section>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${integrations.length} integrations…`}
        className='w-full max-w-md px-4 py-3 rounded-full bg-gray-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 text-white'
      />
      <div className='flex flex-wrap justify-center gap-2'>
        {integrationCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${category === c ? 'bg-fuchsia-700 border-fuchsia-700' : 'border-white/20 hover:bg-white/10'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className='text-zinc-500'>No integrations match your search.</p>
      ) : (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {visible.map((i) => (
            <Card key={i.name} className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded bg-gradient-to-br from-fuchsia-600 to-purple-900 flex items-center justify-center font-bold'>{i.name[0]}</div>
                <div>
                  <h3 className='font-bold'>{i.name}</h3>
                  <p className='text-xs text-fuchsia-400'>{i.category}</p>
                </div>
              </div>
              <p className='text-sm text-zinc-400'>{i.description}</p>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
