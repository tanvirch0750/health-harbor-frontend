import type { Metadata } from 'next';

import FooterComponent from '@/components/ui/Footer/Footer';
import Providers from '@/lib/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Health Harbor',
  description: 'Your Health is our main priority',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <main className=" min-h-screen">{children}</main>
          <FooterComponent />
        </body>
      </html>
    </Providers>
  );
}
