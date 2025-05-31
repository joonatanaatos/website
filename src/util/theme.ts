import { MantineColorsTuple, createTheme } from '@mantine/core';

const crimson: MantineColorsTuple = [
  '#ffe9f0',
  '#fed3db',
  '#f7a4b4',
  '#f1728b',
  '#ec4869',
  '#ea2f53',
  '#ea2147',
  '#d01339',
  '#bb0a31',
  '#a40029',
];

const black: MantineColorsTuple = [
  '#333333',
  '#2e2e2e',
  '#292929',
  '#242424',
  '#1f1f1f',
  '#1a1a1a',
  '#161616',
  '#101010',
  '#090909',
  '#000000',
];

export const theme = createTheme({
  primaryColor: 'crimson',
  colors: {
    crimson,
    black,
  },
  headings: {
    sizes: {
      h2: { fontSize: '1.8rem' },
      h3: { fontSize: '1.4rem' },
    },
  },
});
