'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import content from '@/content/fr';
import CornerFrame from '@/components/CornerFrame';

// ─── Constants ───────────────────────────────────────────────────────────────

const SCROLL_THRESHOLD = 20;

// ─── Animation Variants ──────────────────────────────────────────────────────

const headerVariants = {
  top: {
    backgroundColor: 'rgba(244, 243, 243, 0)',
    boxShadow: '0 0 0 0 rgba(0,0,0,0)',
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 1px 12px 0 rgba(32,32,32,0.06)',
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const mobileLinkVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Burger Icon Component ───────────────────────────────────────────────────

function BurgerIcon({ isOpen, color = '#202020' }: { isOpen: boolean; color?: string }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <motion.span
        className="block h-[2px] w-full origin-center"
        style={{ backgroundColor: color }}
        animate={
          isOpen
            ? { rotate: 45, y: 9, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
            : { rotate: 0, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
        }
      />
      <motion.span
        className="block h-[2px] w-full"
        style={{ backgroundColor: color }}
        animate={
          isOpen
            ? { opacity: 0, scaleX: 0, transition: { duration: 0.15 } }
            : { opacity: 1, scaleX: 1, transition: { duration: 0.3, delay: 0.1 } }
        }
      />
      <motion.span
        className="block h-[2px] w-full origin-center"
        style={{ backgroundColor: color }}
        animate={
          isOpen
            ? { rotate: -45, y: -9, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
            : { rotate: 0, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
        }
      />
    </div>
  );
}

// ─── Nav Link with Animated Underline ────────────────────────────────────────

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group text-sm font-medium text-primary tracking-wide hover:text-primary transition-colors duration-300"
    >
      {label}
      {/* Animated underline: draws left-to-right on hover */}
      <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </Link>
  );
}

// ─── Header Component ────────────────────────────────────────────────────────

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position for header background transition
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const { nav } = content;

  return (
    <>
      {/* ─── Header Bar ─────────────────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        variants={headerVariants}
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        initial="top"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ─── Logo ───────────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Zianide Digital — Accueil">
              <Logo className="w-9 h-9 md:w-10 md:h-10 text-primary" />
              <span className="text-primary font-bold text-base md:text-lg tracking-tight">
                {nav.logo}
              </span>
            </Link>

            {/* ─── Desktop Navigation ─────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
              {nav.links.map((link) => (
                <NavLink key={link.href} label={link.label} href={link.href} />
              ))}
            </nav>

            {/* ─── Desktop CTA Button ─────────────────────────────────── */}
            <div className="hidden lg:block">
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-medium tracking-wide rounded-subtle transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-secondary"
              >
                {nav.cta}
              </Link>
            </div>

            {/* ─── Mobile Burger Button ───────────────────────────────── */}
            <button
              className="lg:hidden relative z-50 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <BurgerIcon isOpen={isMobileMenuOpen} color={isMobileMenuOpen ? '#FFFFFF' : '#202020'} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── Mobile Fullscreen Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-primary flex flex-col"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* CornerFrame as decorative background element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <CornerFrame
                color="rgba(180, 180, 180, 0.08)"
                size={120}
                thickness={2}
                offset={0}
                className="w-72 h-72 md:w-96 md:h-96"
              />
            </div>

            {/* Navigation links — vertically centered */}
            <nav
              className="flex-1 flex flex-col items-center justify-center gap-1 px-8"
              aria-label="Navigation mobile"
            >
              {nav.links.map((link) => (
                <motion.div key={link.href} variants={mobileLinkVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-3 text-2xl md:text-3xl font-medium text-white/90 hover:text-white transition-colors duration-300 text-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA in mobile menu */}
              <motion.div variants={mobileLinkVariants} className="mt-8">
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center px-8 py-3 border border-white/30 text-white text-base font-medium tracking-wide rounded-subtle hover:bg-white/10 transition-all duration-300"
                >
                  {nav.cta}
                </Link>
              </motion.div>
            </nav>

            {/* Bottom brand mark */}
            <motion.div
              variants={mobileLinkVariants}
              className="pb-8 text-center"
            >
              <span className="text-xs font-light text-white/30 tracking-[0.3em] uppercase">
                {nav.logo}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
