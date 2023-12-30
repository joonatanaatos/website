import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorSchemeScript, MantineProvider, Overlay } from '@mantine/core';
import '@mantine/core/styles.css';
import Header from '@/app/[locale]/lib/components/header';
import { theme } from '@/util/theme';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joonatan Korpela',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Overlay
            zIndex={-1}
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))"
          />
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
