"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/customers', label: 'Customers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='w-full text-white sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/20'>
      <div className='max-w-7xl mx-auto h-16 px-4 flex items-center justify-between'>
        <Link href="/" className='font-black text-xl tracking-tight'>Rumo<span className='text-fuchsia-500'>.</span></Link>

        <ul className='hidden lg:flex gap-6 items-center'>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm transition-colors hover:text-fuchsia-500 ${pathname === l.href || pathname.startsWith(l.href + '/') ? 'text-fuchsia-500' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='hidden lg:flex items-center gap-3'>
          <Link href="/contact" className='text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors'>Contact</Link>
          <Link href="/pricing" className='text-sm px-4 py-2 rounded-full bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors'>Try 7 days free</Link>
        </div>

        <button className='lg:hidden p-2' aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className='lg:hidden border-t border-white/20 bg-black/90 px-4 py-4 flex flex-col gap-4'>
          {[...navLinks, { href: '/contact', label: 'Contact' }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className='text-base hover:text-fuchsia-500 transition-colors'>
              {l.label}
            </Link>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} className='text-center px-4 py-3 rounded-full bg-fuchsia-700'>Try 7 days free</Link>
        </div>
      )}
    </nav>
  );
}
