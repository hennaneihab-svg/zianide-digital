'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CornerFrame from '@/components/CornerFrame';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark text-white overflow-hidden">
      <Header />
      
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <CornerFrame
            color="#B4B4B4"
            size={120}
            thickness={2}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[600px] opacity-[0.03]"
          />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-8xl md:text-[120px] font-bold text-accent mb-4 tracking-tighter leading-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Page introuvable
          </h2>
          <p className="text-accent text-base md:text-lg mb-12 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary text-sm font-bold tracking-wide rounded-subtle transition-all duration-300 hover:bg-bg hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
