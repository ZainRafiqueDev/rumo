"use client"

import { useState, FormEvent } from 'react';
import Link from 'next/link';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/roi-calculator', label: 'ROI calculator' },
      { href: '/changelog', label: 'Changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/customers', label: 'Customers' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/security', label: 'Security' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms & Conditions' },
    ],
  },
];

export default function SiteFooter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setDone(true);
    setEmail('');
  }

  return (
    <footer className="text-white w-full pt-8 pb-4 border-t border-white/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div className="py-4">
          <h2 className="text-3xl font-black mb-3">Rumo<span className='text-fuchsia-500'>.</span></h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our <span className="text-white font-bold">newsletter</span> for monthly product news and sales playbooks.
          </p>
          {done ? (
            <p className='text-fuchsia-400 text-sm'>Thanks, you&apos;re subscribed!</p>
          ) : (
            <form onSubmit={onSubmit} className="flex items-center h-10">
              <input
                className="py-1 px-3 w-full h-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-gray-800 border-gray-200 border-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="bg-white hover:bg-gray-200 h-full py-2 px-6 text-black" type="submit">Ok</button>
            </form>
          )}
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6 py-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-lg font-bold mb-3">{col.title}</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-300">
                {col.links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="hover:text-fuchsia-500 transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">&copy; 2026 Rumo. All rights reserved.</p>
    </footer>
  );
}
