'use client';

import Link from 'next/link';
import { Button, Text } from '@mantine/core';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Button component={Link} href={href}>
      <Text>{children}</Text>
    </Button>
  );
}
