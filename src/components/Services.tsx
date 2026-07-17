'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Smartphone,
  PenTool,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import content from '@/content/fr';
import CornerFrame from '@/components/CornerFrame';

// ─── Icon Map ────────────────────────────────────────────────────────────────

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  PenTool,
  ShieldCheck,
};

// ─── Animation Config ────────────────────────────────────────────────────────

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
    },
  },
};

// ─── Service Card ────────────────────────────────────────────────────────────

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
}) {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <div
        className="
          relative h-full bg-white p-7 sm:p-8 md:p-9
          rounded-card border border-border
          transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:border-accent
          hover:-translate-y-1.5
          hover:shadow-[0_12px_40px_rgba(32,32,32,0.08)]
        "
      >
        {/* ─── Corner accents — fade in on hover ─────────────────── */}
        {/* Top-left corner bracket */}
        <div className="absolute top-3.5 left-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <polyline points="0,14 0,0 14,0" stroke="#B4B4B4" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </div>
        {/* Bottom-right corner bracket */}
        <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <polyline points="14,0 14,14 0,14" stroke="#B4B4B4" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </div>

        {/* ─── Icon ──────────────────────────────────────────────── */}
        <div className="mb-6">
          <div
            className="
              w-12 h-12 flex items-center justify-center
              border border-border rounded-subtle
              transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:border-accent group-hover:bg-bg
            "
          >
            {IconComponent && (
              <IconComponent
                className="
                  w-[22px] h-[22px] text-primary
                  transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-110 group-hover:rotate-[-6deg]
                "
                strokeWidth={1.5}
              />
            )}
          </div>
        </div>

        {/* ─── Content ───────────────────────────────────────────── */}
        <h3 className="text-lg font-bold text-primary mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-secondary font-normal mb-6">
          {description}
        </p>

        {/* ─── "En savoir plus" link ─────────────────────────────── */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-primary transition-colors duration-300">
          <span>{link}</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            strokeWidth={2}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Services Section ────────────────────────────────────────────────────────

export default function Services() {
  const { services } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding bg-bg overflow-hidden"
    >
      {/* Decorative CornerFrame — subtle top-right accent */}
      <div
        className="absolute top-16 right-10 pointer-events-none opacity-[0.18] hidden lg:block"
        aria-hidden="true"
      >
        <CornerFrame
          color="#EAE8E8"
          size={60}
          thickness={1}
          className="w-44 h-44"
        />
      </div>

      <div className="container-wide">
        {/* ─── Section Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.span
            variants={sectionHeaderVariants}
            className="section-label block"
          >
            {services.sectionLabel}
          </motion.span>
          <motion.h2
            variants={sectionHeaderVariants}
            className="text-primary mb-5"
          >
            {services.title}
          </motion.h2>
          <motion.p
            variants={sectionHeaderVariants}
            className="text-secondary text-base md:text-lg leading-relaxed"
          >
            {services.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── 2×2 Cards Grid ─────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 max-w-4xl mx-auto"
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.items.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
