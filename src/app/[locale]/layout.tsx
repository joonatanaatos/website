import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { PT_Sans } from 'next/font/google';
import { Box, ColorSchemeScript, Flex, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { LocaleTypes } from '@/i18n/settings';
import { theme } from '@/util/theme';
import './global.css';
import Footer from './lib/components/footer';

const Header = dynamic(() => import('./lib/components/header'), { ssr: false });
const Gradient = dynamic(() => import('./lib/components/gradient'), {
  ssr: false,
});

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
          <Gradient />
          <Flex direction="column" justify="space-between" mih="100%">
            <Box>
              <Header />
              {children}
            </Box>
            <Footer locale={locale as LocaleTypes} />
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
