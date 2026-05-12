import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bharava — Discover Odisha\'s Living History',
  description:
    'Bharava brings Odisha\'s heritage alive around you. Explore temples, forts, tribal culture, Buddhist monuments, and forgotten stories through immersive narrations and an interactive map.',
  keywords: 'Odisha heritage, Odisha history, Konark, Jagannath, Bhubaneswar temples, Odisha culture, travel app',
  openGraph: {
    title: 'Bharava — Odisha\'s Living Heritage',
    description: 'History exists around you. Discover Odisha.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
