'use client';

import React, { useRef, useState } from 'react';
import Logo from '@/components/Logo';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Instagram, MapPin } from 'lucide-react';
import content from '@/content/fr';
import CornerFrame from '@/components/CornerFrame';

// ─── Animation Config ────────────────────────────────────────────────────────
const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};
const slideRightVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_PREMIUM, delay: 0.2 } },
};
const slideLeftVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_PREMIUM, delay: 0.3 } },
};

// ─── Form State Types ─────────────────────────────────────────────────────────
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// ─── WhatsApp pre-filled URL builder ────────────────────────────────────────
function buildWhatsAppUrl(service?: string): string {
  const base = 'https://wa.me/213554182982';
  const text = service
    ? `Bonjour, je vous contacte via votre site web. Je suis intéressé par : ${service}.`
    : 'Bonjour, je vous contacte via votre site web et je souhaite discuter d\'un projet.';
  return `${base}?text=${encodeURIComponent(text)}`;
}

// ─── Contact Section ─────────────────────────────────────────────────────────
export default function Contact() {
  const { contact } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Form state
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const contactValue = data.get('email_phone') as string;

    const payload: Record<string, string> = {
      // ⚠️ IMPORTANT : Remplace par ta clé Web3Forms (crée un compte sur web3forms.com)
      access_key: '20bc7b20-b9d4-403c-a41a-6601438d09c1',
      name: data.get('name') as string,
      contact_info: contactValue, // Info brute pour le corps de l'email
      service: data.get('service') as string,
      message: data.get('message') as string,
      subject: 'Nouvelle demande depuis Zianide Digital',
      from_name: 'Zianide Digital',
    };

    // N'ajouter le champ 'email' spécifique que si c'est une vraie adresse mail.
    // Cela évite de créer un header Reply-To invalide avec un numéro de téléphone (ce qui déclenche les filtres Anti-Spam !)
    if (contactValue.includes('@')) {
      payload.email = contactValue;
    }

    try {
      const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Erreur inconnue');
      }

      setStatus('success');
      form.reset();
      setSelectedService('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur s'est produite. Veuillez réessayer."
      );
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative section-padding bg-bg overflow-hidden"
    >
      <div className="container-wide">

        {/* ─── Section Header ──────────────────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span variants={fadeUpVariants} className="section-label block">
            {contact.sectionLabel}
          </motion.span>
          <motion.h2 variants={fadeUpVariants} className="text-primary mb-4">
            {contact.title}
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-secondary text-base md:text-lg leading-relaxed">
            {contact.subtitle}
          </motion.p>
        </motion.div>

        {/* ─── Main Grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">

          {/* ── Left Column: Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideRightVariants}
          >
            {/* Success State */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                className="flex flex-col items-center justify-center text-center py-16 px-8 border border-border rounded-card bg-white h-full min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Demande envoyée !</h3>
                <p className="text-secondary leading-relaxed mb-8 max-w-sm">
                  Nous avons bien reçu votre message et vous répondrons sous 24 à 48h.
                  Vous allez recevoir un email de confirmation.
                </p>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-bold rounded-subtle hover:bg-[#20bd5a] transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discuter sur WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder=" "
                      disabled={status === 'submitting'}
                      className="w-full bg-white border border-border rounded-subtle px-4 pt-6 pb-2 text-primary focus:outline-none focus:border-primary transition-colors duration-300 peer disabled:opacity-60"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-secondary text-sm transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-primary peer-focus:font-medium peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-medium"
                    >
                      {contact.form.name}
                    </label>
                  </div>

                  {/* Email / Téléphone */}
                  <div className="relative">
                    <input
                      type="text"
                      id="email_phone"
                      name="email_phone"
                      required
                      placeholder=" "
                      disabled={status === 'submitting'}
                      className="w-full bg-white border border-border rounded-subtle px-4 pt-6 pb-2 text-primary focus:outline-none focus:border-primary transition-colors duration-300 peer disabled:opacity-60"
                    />
                    <label
                      htmlFor="email_phone"
                      className="absolute left-4 top-4 text-secondary text-sm transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-primary peer-focus:font-medium peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-medium"
                    >
                      {contact.form.email}
                    </label>
                  </div>
                </div>

                {/* Service Select */}
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-white border border-border rounded-subtle px-4 pt-6 pb-2 text-primary appearance-none focus:outline-none focus:border-primary transition-colors duration-300 peer disabled:opacity-60"
                    defaultValue=""
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="" disabled hidden></option>
                    {contact.form.services.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                  <label
                    htmlFor="service"
                    className="absolute left-4 top-4 text-secondary text-sm transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-primary peer-focus:font-medium peer-[&:not([value=''])]:-translate-y-2 pointer-events-none"
                  >
                    {contact.form.service}
                  </label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    disabled={status === 'submitting'}
                    className="w-full bg-white border border-border rounded-subtle px-4 pt-6 pb-2 text-primary focus:outline-none focus:border-primary transition-colors duration-300 peer resize-none disabled:opacity-60"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-secondary text-sm transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[11px] peer-focus:text-primary peer-focus:font-medium peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-medium"
                  >
                    {contact.form.message}
                  </label>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-subtle text-red-700 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                  className="w-full py-4 rounded-subtle font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 bg-primary text-white hover:bg-[#3a3a3a] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>{contact.form.submit}</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </motion.button>

              </form>
            )}
          </motion.div>

          {/* ── Right Column: Direct Contact ── */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideLeftVariants}
          >
            <div className="relative bg-primary text-white rounded-card p-8 sm:p-10 overflow-hidden shadow-[0_20px_50px_rgba(32,32,32,0.1)] h-full flex flex-col">

              <CornerFrame
                color="#B4B4B4"
                size={60}
                thickness={2}
                offset={16}
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
              />

              {/* Logo watermark */}
              <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none" aria-hidden="true">
                <div className="relative w-48 h-48">
                  <Logo className="w-full h-full text-white" />
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-8">Contact rapide</h3>

                {/* WhatsApp Button — with pre-filled message based on selected service */}
                <a
                  href={buildWhatsAppUrl(selectedService || undefined)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-subtle font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 mb-10"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Discuter sur WhatsApp</span>
                </a>

                {/* Social Links */}
                <div className="space-y-4 flex-1">
                  <a
                    href="https://www.instagram.com/ziande_digitale?igsh=MTFjaHJtcnRoMnJq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span className="font-medium tracking-wide">{contact.info.instagram}</span>
                  </a>
                </div>

                {/* Location */}
                <div className="pt-8 mt-8 border-t border-white/10 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    {contact.info.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
