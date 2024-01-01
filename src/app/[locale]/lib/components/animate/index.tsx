'use client';

import { motion } from 'framer-motion';

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
}

function Animate({ children, delay: d = 0 }: AnimateProps) {
  const duration = 0.5;
  const delay = (d * duration) / 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: '2rem' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
