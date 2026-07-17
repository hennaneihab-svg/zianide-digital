'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  // Type of animation
  variant?: 'fadeUp' | 'fade' | 'slideRight' | 'slideLeft';
  // Use for staggered lists
  staggerChildren?: number;
  delayChildren?: number;
  // Is this the container for staggered children?
  isContainer?: boolean;
  // Is this a staggered child?
  isChild?: boolean;
  // Custom margin for intersection observer
  viewportMargin?: string;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  variant = 'fadeUp',
  staggerChildren,
  delayChildren,
  isContainer = false,
  isChild = false,
  viewportMargin = '-50px',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin as any });

  // Pre-defined variants
  const getVariants = (): Variants => {
    if (isContainer) {
      return {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerChildren || 0.12,
            delayChildren: delayChildren || 0,
          },
        },
      };
    }

    const transition = { duration, ease: EASE_PREMIUM, delay: isChild ? 0 : delay };

    switch (variant) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition },
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition },
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0, transition },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition },
        };
    }
  };

  if (isChild) {
    // If it's a child of a stagger container, we don't handle inView locally,
    // the parent orchestrates the `initial="hidden" animate="visible"` cascade.
    return (
      <motion.div variants={getVariants()} className={className}>
        {children}
      </motion.div>
    );
  }

  // Standard or Container element
  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
