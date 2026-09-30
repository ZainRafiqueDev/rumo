import Link from 'next/link';
import PageShell from './components/PageShell';

export default function NotFound() {
  return (
    <PageShell>
      <div className='py-32 px-6 text-center flex flex-col items-center gap-4'>
        <p className='text-7xl font-black text-fuchsia-600'>404</p>
        <h1 className='text-2xl font-bold'>This page doesn’t exist</h1>
        <p className='text-zinc-400'>The page you’re looking for may have moved or never existed.</p>
        <Link href='/' className='px-6 py-3 rounded-full bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors'>Back to home</Link>
      </div>
    </PageShell>
  );
}
