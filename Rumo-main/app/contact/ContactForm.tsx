"use client"

import { useEffect, useState, FormEvent } from 'react';
import { Card } from '../components/PageShell';

const topics = ['Book a demo', 'Free trial', 'Pricing question', 'Support', 'Partnerships', 'Press', 'Other'];
const field = 'w-full px-4 py-3 rounded bg-gray-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 text-white';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '1-10', topic: topics[0], message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get('topic');
    if (topic) setForm((f) => ({ ...f, topic }));
  }, []);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend yet: this just confirms to the user.
    setSent(true);
  }

  if (sent) {
    return (
      <Card className='text-center py-16 flex flex-col gap-3'>
        <h2 className='text-2xl font-bold'>Thanks, {form.name.split(' ')[0] || 'there'}!</h2>
        <p className='text-zinc-400'>We’ve received your message about &ldquo;{form.topic}&rdquo; and will reply to {form.email} within one business day.</p>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-4'>
        <input className={field} placeholder='Full name' required value={form.name} onChange={(e) => update('name', e.target.value)} />
        <input className={field} type='email' placeholder='Work email' required value={form.email} onChange={(e) => update('email', e.target.value)} />
        <input className={field} placeholder='Company' value={form.company} onChange={(e) => update('company', e.target.value)} />
        <select className={field} value={form.size} onChange={(e) => update('size', e.target.value)}>
          {['1-10', '11-50', '51-200', '201-1000', '1000+'].map((s) => <option key={s} value={s}>{s} employees</option>)}
        </select>
        <select className={`${field} sm:col-span-2`} value={form.topic} onChange={(e) => update('topic', e.target.value)}>
          {!topics.includes(form.topic) && <option value={form.topic}>{form.topic}</option>}
          {topics.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <textarea className={`${field} sm:col-span-2`} rows={6} placeholder='How can we help?' required value={form.message} onChange={(e) => update('message', e.target.value)} />
        <button type='submit' className='sm:col-span-2 bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors rounded-full py-3 font-semibold'>Send message</button>
      </form>
    </Card>
  );
}
