'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MoreHorizontal } from 'lucide-react';
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

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
};

// ─── Browser Mockup Component ────────────────────────────────────────────────

function BrowserMockup({ url, title }: { url: string; title: string }) {
  return (
    <div className="w-full bg-bg border border-border rounded-t-subtle overflow-hidden flex flex-col h-full">
      {/* Browser Chrome / Top Bar */}
      <div className="h-8 bg-white border-b border-border flex items-center px-3 gap-3 shrink-0">
        {/* Fake window buttons */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]" />
        </div>
        {/* Fake URL bar */}
        <div className="flex-1 bg-bg border border-border rounded text-[10px] text-accent px-2 py-0.5 truncate text-center font-mono select-none">
          {url.replace(/^https?:\/\//, '')}
        </div>
        <div className="w-4" /> {/* Spacer for symmetry */}
      </div>

      {/* Browser Viewport (Iframe) */}
      <div className="relative flex-1 bg-white overflow-hidden pointer-events-none">
        {/* Fallback loading background */}
        <div className="absolute inset-0 bg-bg flex items-center justify-center animate-pulse" />
        <iframe
          src={url}
          title={`Aperçu du site ${title}`}
          className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] border-none bg-white"
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

// ─── Portfolio Section ───────────────────────────────────────────────────────

export default function Portfolio() {
  const { portfolio } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative section-padding bg-bg overflow-hidden"
    >
      <div className="container-wide">
        {/* ─── Section Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span variants={fadeUpVariants} className="section-label block">
            {portfolio.sectionLabel}
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="text-primary mb-4">
            {portfolio.title}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-secondary text-base md:text-lg leading-relaxed">
            {portfolio.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── Projects Grid (3 columns) ──────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 xl:gap-12"
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {portfolio.projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group flex flex-col"
            >
              {/* ─── Mockup with CornerFrame ──────────────────────── */}
              <div className="mb-6 md:mb-8 relative px-2 pt-2 pb-2">
                {/* CornerFrame wrap — changes color on hover */}
                <CornerFrame
                  color="currentColor"
                  size={40}
                  thickness={1.5}
                  offset={-4}
                  className="absolute inset-0 text-[#EAE8E8] group-hover:text-[#B4B4B4] transition-colors duration-[450ms] ease-premium"
                />

                {/* Mockup Container — subtle zoom and shadow on hover */}
                <div className="relative aspect-[4/3] rounded-subtle overflow-hidden border border-border/50 bg-white transition-all duration-[450ms] ease-premium group-hover:scale-[1.02] group-hover:shadow-[0_16px_40px_rgba(32,32,32,0.08)]">
                  <BrowserMockup url={project.url} title={project.title} />
                </div>
              </div>

              {/* ─── Project Info ─────────────────────────────────── */}
              <div className="flex-1 flex flex-col">
                <div className="mb-3 flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    {project.sector}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-medium text-secondary uppercase tracking-widest border border-border rounded-subtle">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 tracking-tight" dir="auto">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary transition-colors duration-300 w-fit"
                >
                  <span>Voir le site</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── CTA Footer ─────────────────────────────────────────── */}
        <motion.div
          className="mt-20 md:mt-28 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <p className="text-lg md:text-xl font-bold text-primary mb-6">
            {portfolio.cta}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-sm font-medium tracking-wide rounded-subtle transition-all duration-300 hover:bg-[#3a3a3a] hover:scale-105 active:scale-95"
          >
            {portfolio.ctaButton}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
