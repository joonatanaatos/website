import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import { Box, ColorSchemeScript, Flex, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { LocaleTypes } from '@/i18n/settings';
import { theme } from '@/util/theme';
import './global.css';
import Footer from './lib/components/footer';
import { ClientHeader, ClientGradient } from './lib/components/client-layout';

const ptSans = PT_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joonatan Korpela',
  description: 'Portfolio',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={ptSans.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <ClientGradient />
          <Flex direction="column" justify="space-between" mih="100%">
            <Box>
              <ClientHeader />
              {children}
            </Box>
            <Footer locale={locale as LocaleTypes} />
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
