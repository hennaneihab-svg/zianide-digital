'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import content from '@/content/fr';
import CornerFrame from '@/components/CornerFrame';

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

// Standard cards animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

// Highlighted card animation (scale effect)
const highlightedCardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.25, ease: EASE_PREMIUM },
};

// ─── Pricing Section ─────────────────────────────────────────────────────────

export default function Pricing() {
  const { pricing } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="tarifs"
      ref={sectionRef}
      className="relative section-padding bg-bg overflow-hidden"
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
            {pricing.sectionLabel}
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="text-primary mb-4">
            {pricing.title}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-secondary text-base md:text-lg leading-relaxed">
            {pricing.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── Pricing Cards Grid ─────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
        >
          {pricing.plans.map((plan, i) => {
            const isHighlighted = plan.highlighted;

            return (
              <motion.div
                key={i}
                variants={isHighlighted ? highlightedCardVariants : cardVariants}
                className={`group relative rounded-card border transition-all duration-500 ease-premium ${
                  isHighlighted
                    ? 'border-primary bg-primary text-white shadow-[0_16px_40px_rgba(32,32,32,0.15)] md:-mt-6 md:mb-6'
                    : 'border-border bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(32,32,32,0.06)] hover:-translate-y-2'
                }`}
              >
                {/* ─── CornerFrame for Highlighted Card ───────────── */}
                {isHighlighted && (
                  <>
                    <CornerFrame
                      color="#B4B4B4"
                      size={32}
                      thickness={1.5}
                      offset={12}
                      className="absolute inset-0 opacity-20 pointer-events-none"
                    />
                    {/* Hover lift for highlighted card */}
                    <div className="absolute inset-0 rounded-card transition-transform duration-500 ease-premium group-hover:-translate-y-2 pointer-events-none" />
                  </>
                )}

                <div className={`p-8 sm:p-10 relative z-10 transition-transform duration-500 ease-premium ${isHighlighted ? 'group-hover:-translate-y-2' : ''}`}>
                  {/* Highlighted badge */}
                  {isHighlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] bg-accent text-primary rounded-subtle shadow-sm">
                        Le plus choisi
                      </span>
                    </div>
                  )}

                  {/* Plan name */}
                  <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                    isHighlighted ? 'text-white' : 'text-primary'
                  }`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4 flex items-baseline flex-wrap gap-x-1.5">
                    <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${
                      isHighlighted ? 'text-white' : 'text-primary'
                    }`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm font-medium uppercase tracking-widest ${
                        isHighlighted ? 'text-white/60' : 'text-accent'
                      }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-8 ${
                    isHighlighted ? 'text-white/80' : 'text-secondary'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className={`h-px mb-8 ${
                    isHighlighted ? 'bg-white/10' : 'bg-border'
                  }`} />

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3.5">
                        <Check
                          className={`w-[18px] h-[18px] mt-0.5 shrink-0 ${
                            isHighlighted ? 'text-accent' : 'text-accent'
                          }`}
                          strokeWidth={2.5}
                        />
                        <span className={`text-sm font-medium ${
                          isHighlighted ? 'text-white/95' : 'text-primary/90'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#contact"
                      className={`flex items-center justify-center w-full py-3.5 px-6 text-sm font-bold tracking-wide rounded-subtle transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-white text-primary hover:bg-bg'
                          : 'bg-primary text-white hover:bg-[#3a3a3a]'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── Footer Note ────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-sm font-medium text-secondary mt-12 md:mt-16 max-w-2xl mx-auto"
        >
          {pricing.note}
        </motion.p>
      </div>
    </section>
  );
}
