import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import PageShell, { PageHero, Section, Card } from '../components/PageShell';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to the Rumo team about pricing, demos, support or partnerships.',
};

const channels = [
  { icon: Mail, title: 'Sales', text: 'sales@rumo.example', note: 'Demos, pricing and custom plans' },
  { icon: Mail, title: 'Support', text: 'support@rumo.example', note: 'Help with your account' },
  { icon: Phone, title: 'Phone', text: '+1 (555) 010-2030', note: 'Mon to Fri, 9am to 6pm ET' },
  { icon: MapPin, title: 'Office', text: '100 Market Street, New York, NY', note: 'Visits by appointment' },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your sales goals"
        subtitle="Book a demo, ask a question or tell us what you’re trying to achieve. We reply within one business day."
      />
      <Section>
        <div className='grid lg:grid-cols-3 gap-8 w-full max-w-5xl'>
          <div className='lg:col-span-2'><ContactForm /></div>
          <div className='flex flex-col gap-4'>
            {channels.map(({ icon: Icon, title, text, note }) => (
              <Card key={title} className='flex gap-4'>
                <div className='p-3 bg-fuchsia-700 rounded-full h-fit'><Icon size={18} /></div>
                <div>
                  <h3 className='font-bold'>{title}</h3>
                  <p className='text-sm'>{text}</p>
                  <p className='text-xs text-zinc-500'>{note}</p>
                </div>
              </Card>
            ))}
            <Card className='flex gap-4'>
              <div className='p-3 bg-fuchsia-700 rounded-full h-fit'><Clock size={18} /></div>
              <div>
                <h3 className='font-bold'>Response time</h3>
                <p className='text-sm text-zinc-400'>Usually within 4 business hours.</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
