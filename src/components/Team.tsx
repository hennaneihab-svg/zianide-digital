'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

// Mirror slide animation (from left for even, from right for odd index)
const cardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -40 : 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_PREMIUM,
      delay: 0.1, // Slight delay so header appears first
    },
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
            {team.sectionLabel}
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="text-primary mb-4">
            {team.title}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-secondary text-base md:text-lg leading-relaxed">
            {team.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── Team Members Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.members.map((member, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants(i)}
              className="group h-full"
            >
              <div className="h-full bg-white p-8 sm:p-10 rounded-card border border-border hover:border-accent hover:shadow-[0_8px_30px_rgba(32,32,32,0.06)] transition-all duration-normal ease-premium flex flex-col items-center text-center">
                
                {/* ─── Avatar Placeholder ───────────────────────────── */}
                <div className="mb-8 relative">
                  <CornerFrame
                    color="#B4B4B4"
                    size={24}
                    thickness={1.5}
                    offset={-8}
                    className="absolute inset-0 text-transparent transition-colors duration-normal ease-premium group-hover:text-accent"
                  />
                  
                  {/* Elegant Initials Box */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-primary rounded flex items-center justify-center shadow-inner transition-transform duration-normal ease-premium group-hover:scale-105">
                    <span className="text-2xl sm:text-3xl font-bold text-bg tracking-widest uppercase">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* ─── Member Info ──────────────────────────────────── */}
                <h3 className="text-xl font-bold text-primary mb-2 tracking-tight">
                  {member.name}
                </h3>
                
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em] text-accent block mb-6 px-4 py-1.5 bg-bg rounded-subtle">
                  {member.role}
                </span>
                
                <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-sm mx-auto">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
