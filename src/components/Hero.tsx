'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import content from '@/content/fr';
import CornerFrame from '@/components/CornerFrame';
import { ZianideBackgroundPaths } from '@/components/ui/background-paths';

// ─── Animation Config (UI/UX Pro Max — Kinetic Typography + Exaggerated Minimalism) ──
const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
const SPRING = { type: 'spring', stiffness: 150, damping: 25 } as const;

// ─── Kinetic Letter Animation (from BackgroundPaths template pattern) ─────────
function KineticTitle({ line1, line2 }: { line1: string; line2: string }) {
  const words1 = line1.split(' ');
  const words2 = line2.split(' ');

  // All words together for letter indexing
  const renderWord = (word: string, wordIdx: number, globalOffset: number) => (
    <span key={wordIdx} className="inline-block mr-[0.25em] last:mr-0">
      {word.split('').map((letter, letterIdx) => (
        <motion.span
          key={`${wordIdx}-${letterIdx}`}
          className="inline-block"
          initial={{ y: 80, opacity: 0, rotateX: -30 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            ...SPRING,
            delay: (globalOffset + wordIdx * 0.08) + letterIdx * 0.025,
          }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );

  return (
    <div className="hero-title text-primary overflow-hidden" aria-label={`${line1} ${line2}`}>
      {/* Line 1 */}
      <div className="block overflow-hidden" style={{ perspective: '800px' }}>
        {words1.map((word, i) => renderWord(word, i, 0.3))}
      </div>
      {/* Line 2 — with a subtle underline accent below it */}
      <div className="block overflow-hidden mt-1 relative" style={{ perspective: '800px' }}>
        <span className="relative">
          {words2.map((word, i) => renderWord(word, i, 0.3 + words1.length * 0.08))}
          {/* Animated underline accent bar */}
          <motion.span
            className="absolute -bottom-2 left-0 h-[3px] bg-primary rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 1.6, ease: EASE_PREMIUM }}
            style={{ width: '100%', transformOrigin: 'left' }}
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
}

// ─── Scroll Indicator ─────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onClick={() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-secondary">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-4 h-4 text-accent" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
  const { hero } = content;

  // Parallax for CornerFrames
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 600], [0, -80]);
  const parallaxY2 = useTransform(scrollY, [0, 600], [0, -50]);
  const parallaxY3 = useTransform(scrollY, [0, 600], [0, -110]);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden"
    >
      {/* ─── Animated Background Paths (visible, dramatique) ──────────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      >
        <ZianideBackgroundPaths />
      </motion.div>

      {/* ─── Decorative Parallax CornerFrames ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-16 -right-16 md:top-8 md:right-12 lg:right-24"
          style={{ y: parallaxY1 }}
        >
          <CornerFrame
            color="#B4B4B4"
            size={80}
            thickness={1.5}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-40"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-24 -left-12 md:bottom-32 md:left-8 lg:left-20"
          style={{ y: parallaxY2 }}
        >
          <CornerFrame
            color="#B4B4B4"
            size={50}
            thickness={1}
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 opacity-30"
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute top-1/3 left-1/4"
          style={{ y: parallaxY3 }}
        >
          <CornerFrame
            color="#EAE8E8"
            size={30}
            thickness={1}
            className="w-20 h-20 lg:w-28 lg:h-28 opacity-50"
          />
        </motion.div>
      </div>

      {/* ─── Main Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-16 pt-32 pb-28 md:pt-36 md:pb-32">

        {/* Badge */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary border border-border rounded-subtle font-body">
            {hero.badge}
          </span>
        </motion.div>

        {/* ── KINETIC TITLE — full BackgroundPaths template treatment ── */}
        <div className="mb-8 md:mb-10">
          <KineticTitle line1={hero.title} line2={hero.titleHighlight} />
        </div>

        {/* Subtitle — Space Grotesk body font */}
        <motion.p
          className="font-body max-w-2xl text-base sm:text-lg md:text-xl text-secondary font-normal leading-relaxed mb-10 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 1.4 }}
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 1.6 }}
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white text-sm font-semibold tracking-wide rounded-subtle transition-colors duration-300 hover:bg-[#3a3a3a] cursor-pointer"
            >
              {hero.cta}
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-primary text-sm font-semibold tracking-wide rounded-subtle transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white cursor-pointer"
            >
              {hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap items-center gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 1.9 }}
        >
          {hero.trustIndicators.map((indicator, i) => (
            <React.Fragment key={i}>
              <span className="font-body text-xs sm:text-sm font-medium text-secondary tracking-wide px-3 sm:px-4 first:pl-0">
                {indicator}
              </span>
              {i < hero.trustIndicators.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-border" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ─── Scroll Indicator ─────────────────────────────────────────── */}
      <ScrollIndicator />
    </section>
  );
}
