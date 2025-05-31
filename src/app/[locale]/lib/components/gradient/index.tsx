'use client';

import { Overlay, useMantineColorScheme } from '@mantine/core';

export default function Gradient() {
  const theme = useMantineColorScheme();
  const isDark = theme.colorScheme === 'dark';
  return (
    <Overlay
      zIndex={-1}
      gradient={
        isDark
          ? 'linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))'
          : 'linear-gradient(145deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1))'
      }
      fixed
    />
  );
}
