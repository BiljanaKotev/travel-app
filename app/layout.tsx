import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Head>
          <link rel='icon' href='/favicon.ico' type='image/x-icon' />
          {/* <meta name='viewport' content='width=device-width, initial-scale=1.0' /> */}
        </Head>
        <Navbar />
        <main className='relative overflow-hidden'> {children}</main>
        <Footer />
      </body>
    </html>
  );
}

