import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import {
  Box,
  ColorSchemeScript,
  Flex,
  MantineProvider,
  Overlay,
} from '@mantine/core';
import '@mantine/core/styles.css';
import Header from '@/app/[locale]/lib/components/header';
import { theme } from '@/util/theme';
import './global.css';
import Footer from './lib/components/footer';

const ptSans = PT_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joonatan Korpela',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={ptSans.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Overlay
            zIndex={-1}
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))"
            fixed
          />
          <Flex direction="column" justify="space-between" mih="100%">
            <Box>
              <Header />
              {children}
            </Box>
            <Footer locale={locale} />
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
