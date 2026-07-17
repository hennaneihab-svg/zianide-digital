'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import content from '@/content/fr';

export default function Footer() {
  const { footer } = content;

  return (
    <motion.footer
      className="bg-primary text-white pt-20 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-wide">
        
        {/* ─── Top Section: Logo & Columns ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          
          {/* Logo & Baseline (takes 4 cols on desktop) */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
            <Link href="#accueil" className="inline-flex items-center gap-4 text-white hover:text-white/80 transition-colors" aria-label="Accueil">
              <Logo className="w-10 h-10" />
              <span className="font-bold text-2xl tracking-tight">Zianide</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
              {footer.baseline}
            </p>
          </div>

          {/* Links Columns (takes 8 cols on desktop) */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <h4 className="text-white font-bold tracking-wide">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => {
                    const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto');
                    
                    return (
                      <li key={linkIdx}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative inline-block group"
                          >
                            {link.label}
                            {/* Simple underline hover effect */}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 ease-premium group-hover:w-full" />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative inline-block group"
                          >
                            {link.label}
                            {/* Simple underline hover effect */}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 ease-premium group-hover:w-full" />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Bottom Section: Copyright & Location ───────────────── */}
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs sm:text-sm font-medium">
            {footer.copyright}
          </p>
          <p className="text-white/50 text-xs sm:text-sm font-medium">
            {footer.location}
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
