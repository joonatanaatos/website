'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedPageProps {
  html: string;
}

function AnimatedPage({ html }: AnimatedPageProps) {
  const sections: ReactNode[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  for (const div of doc.body.querySelectorAll('div')) {
    sections.push(
      <motion.div
        initial={{ opacity: 0, x: '-10rem' }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        dangerouslySetInnerHTML={{ __html: div.innerHTML }}
      />,
    );
  }
  return <>{sections}</>;
}

export default AnimatedPage;
