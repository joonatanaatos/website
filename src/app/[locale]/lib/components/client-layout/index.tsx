'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../header'), { ssr: false });
const Gradient = dynamic(() => import('../gradient'), { ssr: false });

export function ClientHeader() {
  return <Header />;
}

export function ClientGradient() {
  return <Gradient />;
}
