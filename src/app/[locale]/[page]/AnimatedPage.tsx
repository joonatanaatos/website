'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedPageProps {
  html: string;
}

function AnimatedPage({ html }: AnimatedPageProps) {
  const sections: ReactNode[] = [];
  if (typeof DOMParser === 'undefined') {
    return null;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const divs = doc.body.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    sections.push(
      <motion.div
        key={i}
        initial={{ opacity: 0, x: '-10rem' }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        dangerouslySetInnerHTML={{ __html: divs[i].innerHTML }}
      />,
    );
  }
  return <>{sections}</>;
}

export default AnimatedPage;
