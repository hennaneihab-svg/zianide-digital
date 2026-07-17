'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import content from '@/content/fr';
import CornerFrame from '@/components/CornerFrame';

// ─── Animation Config ────────────────────────────────────────────────────────

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

// Items alternate slide direction: odd from left, even from right
const itemVariants = (fromLeft: boolean) => ({
  hidden: {
    opacity: 0,
    x: fromLeft ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
});

// ─── Advantage Item ──────────────────────────────────────────────────────────

function AdvantageItem({
  number,
  title,
  description,
  index,
  isInView,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      className="group"
      variants={itemVariants(fromLeft)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.12 }}
    >
      <div className="flex gap-6 md:gap-8 items-start">
        {/* ─── Big Number ──────────────────────────────────────── */}
        <div className="shrink-0 relative">
          <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/[0.07] leading-none select-none">
            {number}
          </span>
          {/* Small accent line below number */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-px bg-accent/40" />
        </div>

        {/* ─── Text Content ────────────────────────────────────── */}
        <div className="pt-1 md:pt-2">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2.5 tracking-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-accent leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Separator line */}
      {index < 4 && (
        <div className="mt-8 md:mt-10 ml-[calc(3.5rem+1.5rem)] md:ml-[calc(4.5rem+2rem)] h-px bg-white/[0.06]" />
      )}
    </motion.div>
  );
}

// ─── Advantages Section ──────────────────────────────────────────────────────

export default function Advantages() {
  const { advantages } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="avantages"
      ref={sectionRef}
      className="relative section-padding bg-bg-dark overflow-hidden"
    >
      {/* ─── Decorative Background Elements ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large CornerFrame — top-right watermark */}
        <div className="absolute -top-8 -right-8 md:top-8 md:right-16 lg:right-24 opacity-[0.04]">
          <CornerFrame
            color="#B4B4B4"
            size={100}
            thickness={2}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]"
          />
        </div>

        {/* Small CornerFrame — bottom-left watermark */}
        <div className="absolute bottom-12 left-8 md:left-16 opacity-[0.04]">
          <CornerFrame
            color="#B4B4B4"
            size={50}
            thickness={1.5}
            className="w-36 h-36 md:w-48 md:h-48"
          />
        </div>

        {/* Logo watermark — center-right, very subtle */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-16 opacity-[0.025]">
          <div className="relative w-40 h-40">
            <Image
              src="/logos/zianide-logo-dark.svg"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* ─── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 container-wide">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16 md:mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={headerVariants}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent/70 mb-4 block"
          >
            {advantages.sectionLabel}
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5"
          >
            {advantages.title}
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-accent text-base md:text-lg leading-relaxed"
          >
            {advantages.subtitle}
          </motion.p>
        </motion.div>

        {/* Advantage Items — numbered list with alternating slide */}
        <div className="max-w-3xl space-y-8 md:space-y-10">
          {advantages.items.map((item, i) => (
            <AdvantageItem
              key={i}
              number={item.number}
              title={item.title}
              description={item.description}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
