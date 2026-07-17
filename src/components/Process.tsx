'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import content from '@/content/fr';

// ─── Animation Config ────────────────────────────────────────────────────────

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

// ─── Process Section ─────────────────────────────────────────────────────────

export default function Process() {
  const { process } = content;
  
  // Section refs for scroll tracking and in-view animations
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the timeline area
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    // Start tracking when the top of the timeline hits 70% of the screen height
    // End tracking when the bottom of the timeline hits 40% of the screen height
    offset: ['start 70%', 'end 40%'],
  });

  // Desktop horizontal line fill (width)
  const lineScaleX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  // Mobile vertical line fill (height)
  const lineScaleY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="processus"
      ref={sectionRef}
      className="relative section-padding bg-white overflow-hidden"
    >
      <div className="container-wide">
        {/* ─── Section Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span variants={fadeUpVariants} className="section-label block">
            {process.sectionLabel}
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="text-primary mb-4">
            {process.title}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-secondary text-base md:text-lg leading-relaxed">
            {process.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── Timeline ───────────────────────────────────────────── */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 md:px-0">
          
          {/* Background Lines (Empty State) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-border" aria-hidden="true" />
          <div className="md:hidden absolute left-[31px] top-4 bottom-4 w-px bg-border" aria-hidden="true" />

          {/* Animated Fill Lines */}
          <motion.div 
            className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-accent origin-left" 
            style={{ scaleX: lineScaleX }}
            aria-hidden="true"
          />
          <motion.div 
            className="md:hidden absolute left-[31px] top-4 bottom-4 w-[1.5px] bg-accent origin-top" 
            style={{ scaleY: lineScaleY }}
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={stepVariants}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="relative flex md:flex-col gap-6 md:gap-8 group"
              >
                {/* Step Circle Marker */}
                <div className="shrink-0 md:mx-auto relative">
                  <div className="w-14 h-14 md:w-14 md:h-14 flex items-center justify-center bg-white border border-border rounded-full group-hover:border-accent group-hover:shadow-[0_4px_20px_rgba(32,32,32,0.08)] transition-all duration-normal ease-premium relative z-10">
                    <span className="text-lg font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Subtle pulsing background on hover */}
                  <div className="absolute inset-0 bg-accent/5 rounded-full scale-50 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-slow ease-premium -z-10" />
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-0 md:text-center flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
