'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import content from '@/content/fr';
import type { TeamPole } from '@/content/fr';

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

const cardVariants = (index: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM, delay: index * 0.15 },
  },
});

// ─── Team Section ────────────────────────────────────────────────────────────
export default function Team() {
  const { team } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative section-padding bg-primary overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#EAE8E8 1px, transparent 1px), linear-gradient(90deg, #EAE8E8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">

        {/* ─── Section Header ──────────────────────────────────────── */}
        <motion.div
          className="max-w-2xl mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span variants={fadeUpVariants} className="section-label-dark block">
            {team.sectionLabel}
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="text-white mb-4">
            {team.title}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-white/60 text-base md:text-lg leading-relaxed">
            {team.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── Pole Cards Grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {(team.members as TeamPole[]).map((pole, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants(i)}
              className="group"
            >
              <div className="relative h-full bg-white/5 border border-white/10 rounded-card p-8 sm:p-10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden">

                {/* Large index number — decorative background */}
                <span
                  className="absolute -bottom-6 -right-4 text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {pole.pole}
                </span>

                {/* ─── Top Row: Index + Pôle badge ─────────────── */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase">
                    {pole.pole}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                    Pôle
                  </span>
                </div>

                {/* ─── Title ───────────────────────────────────── */}
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 leading-tight">
                  {pole.title}
                </h3>

                {/* ─── Tagline ─────────────────────────────────── */}
                <p className="text-sm font-semibold italic text-accent/80 mb-5">
                  {pole.tagline}
                </p>

                {/* ─── Divider ─────────────────────────────────── */}
                <div className="w-8 h-px bg-white/20 mb-6 group-hover:w-16 transition-all duration-500" />

                {/* ─── Bio ─────────────────────────────────────── */}
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  {pole.bio}
                </p>

                {/* ─── Skill Tags ──────────────────────────────── */}
                <div className="flex flex-wrap gap-2">
                  {pole.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50 border border-white/10 rounded-full hover:border-white/30 hover:text-white/80 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
