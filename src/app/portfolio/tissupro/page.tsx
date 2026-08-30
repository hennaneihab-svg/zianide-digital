import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Users,
  Database,
  Calculator,
  Layers,
  CheckCircle2,
  Cpu,
  Monitor,
  ArrowUpRight,
} from 'lucide-react';
import CornerFrame from '@/components/CornerFrame';

export const metadata: Metadata = {
  title: 'TissuPro — Étude de Cas Logiciel | Zianide Digital',
  description:
    'Étude de cas complète du logiciel TissuPro : ERP Desktop et système de caisse sur mesure développé en Rust et Tauri 2.0 pour le commerce textile en Algérie par Zianide Digital.',
};

export default function TissuProCaseStudy() {
  return (
    <div className="bg-bg min-h-screen pt-28 pb-20 md:pt-36 md:pb-28">
      {/* ─── Top Ambient Texture ────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-96 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#202020 1px, transparent 1px), linear-gradient(90deg, #202020 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">

        {/* ─── Breadcrumb & Back Link ───────────────────────────────────── */}
        <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors duration-300 group"
          >
            <ArrowLeft
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={2}
            />
            <span>Retour aux réalisations</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[11px] font-semibold text-accent uppercase tracking-widest bg-white border border-border rounded-full">
              Étude de cas #2026-04
            </span>
            <span className="px-3 py-1 text-[11px] font-semibold text-primary uppercase tracking-widest bg-white border border-border rounded-full">
              Logiciel Desktop
            </span>
          </div>
        </div>

        {/* ─── Header & Hero Intro ──────────────────────────────────────── */}
        <div className="max-w-4xl mb-14 md:mb-18">
          <span className="section-label block mb-3">Ingénierie & Design Produit</span>
          <h1 className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.08]">
            TissuPro
          </h1>
          <p className="text-secondary text-lg sm:text-xl md:text-2xl leading-relaxed font-normal">
            Système de gestion commerciale, logistique et de caisse développé sur-mesure pour les
            acteurs du commerce textile de gros et demi-gros en Algérie.
          </p>
        </div>

        {/* ─── Specifications Grid (Spec Sheet) ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          <div className="bg-white p-6 rounded-card border border-border shadow-[0_4px_20px_rgba(32,32,32,0.03)] flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2 block">
              Client & Secteur
            </span>
            <span className="text-base font-bold text-primary">
              Commerce Textile & Mercerie
            </span>
          </div>

          <div className="bg-white p-6 rounded-card border border-border shadow-[0_4px_20px_rgba(32,32,32,0.03)] flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2 block">
              Rôle de Zianide Digital
            </span>
            <span className="text-base font-bold text-primary">
              Design UI/UX & Ingénierie Logicielle
            </span>
          </div>

          <div className="bg-white p-6 rounded-card border border-border shadow-[0_4px_20px_rgba(32,32,32,0.03)] flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2 block">
              Stack & Architecture
            </span>
            <span className="text-base font-bold text-primary">
              Rust, Tauri 2.0, React, SQLite
            </span>
          </div>

          <div className="bg-white p-6 rounded-card border border-border shadow-[0_4px_20px_rgba(32,32,32,0.03)] flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2 block">
              Mode de Déploiement
            </span>
            <span className="text-base font-bold text-primary">
              Windows Autonome (Zero-Cloud)
            </span>
          </div>
        </div>

        {/* ─── Hero Showcase Mockup ─────────────────────────────────────── */}
        <div className="mb-20 md:mb-28 relative">
          <div className="relative p-2 md:p-3">
            <CornerFrame
              color="#B4B4B4"
              size={50}
              thickness={1.5}
              offset={-6}
              className="absolute inset-0 text-[#B4B4B4] pointer-events-none"
            />

            <div className="relative rounded-card overflow-hidden border border-border bg-primary shadow-[0_20px_60px_rgba(32,32,32,0.12)]">
              {/* Window Header */}
              <div className="h-10 bg-[#202020] border-b border-white/10 flex items-center px-4 gap-3 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 text-center font-mono text-xs text-white/50 truncate select-none">
                  TissuPro v2.0 — Vue d'ensemble de l'interface logicielle
                </div>
                <div className="w-10" />
              </div>

              {/* Showcase Image */}
              <div className="relative aspect-[16/9] w-full bg-primary/20">
                <Image
                  src="/portfolio/tissupro/tissupro-showcase.jpg"
                  alt="TissuPro — Présentation Générale de l'Application"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section: Contexte & Problématique Métier ─────────────────── */}
        <div className="mb-20 md:mb-28">
          <div className="max-w-3xl mb-12">
            <span className="section-label block">01 / Contexte & Défis</span>
            <h2 className="text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              La réalité du terrain : pourquoi les logiciels standards échouent
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Le secteur du commerce de détail et de demi-gros de tissu en Algérie fait face à des
              contraintes opérationnelles très spécifiques que les logiciels de caisse conventionnels
              ne parviennent pas à traiter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-card border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-bg border border-border flex items-center justify-center mb-6 text-primary font-mono font-bold text-sm">
                  01
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  La perte de métrage (chutes et coupes)
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Un rouleau acheté pour 60 mètres n'offre souvent que 54 mètres réellement vendables une
                  fois les extrémités, les coupes d'échantillons et les défauts déduits. Ignorer cette perte
                  dans le système fausse entièrement le calcul des marges nettes.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-card border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-bg border border-border flex items-center justify-center mb-6 text-primary font-mono font-bold text-sm">
                  02
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  La fluctuation des coûts d'approvisionnement
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Deux rouleaux du même tissu achetés à des dates ou auprès de fournisseurs différents ont
                  des coûts d'achat distincts. Les logiciels classiques mélangent les lots, détruisant la
                  précision comptable de l'inventaire.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-card border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-bg border border-border flex items-center justify-center mb-6 text-primary font-mono font-bold text-sm">
                  03
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  L'encaissement en espèces & monnaie locale
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  La majorité des transactions s'effectue en liquide. Les vendeurs ont besoin d'une saisie
                  tactile ultra-rapide avec suggestions instantanées sur les coupures locales (500, 1000, 2000 DA)
                  et calcul immédiat du rendu de monnaie pour fluidifier la file d'attente.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-card border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-bg border border-border flex items-center justify-center mb-6 text-primary font-mono font-bold text-sm">
                  04
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  La fiabilité 100% hors-ligne (Zero-Cloud)
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Les coupures d'Internet ou les ralentissements réseau ne doivent en aucun cas paralyser
                  l'encaissement ou l'accès aux stocks. L'outil devait être autonome, instantané et
                  intégralement hébergé sur le matériel local.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section: Modules en Détail (Visual 2-Column Grid) ─────────── */}
        <div className="mb-20 md:mb-28">
          <div className="max-w-3xl mb-12">
            <span className="section-label block">02 / Démonstration de l'Interface</span>
            <h2 className="text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Aperçus des modules opérationnels
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Une interface pensée pour la clarté visuelle, la rapidité d'exécution et le confort d'utilisation
              au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Module 1: Dashboard */}
            <div className="flex flex-col group">
              <div className="relative p-2 mb-6">
                <CornerFrame
                  color="#B4B4B4"
                  size={36}
                  thickness={1.5}
                  offset={-4}
                  className="absolute inset-0 text-[#EAE8E8] group-hover:text-[#B4B4B4] transition-colors duration-300"
                />
                <div className="relative rounded-subtle overflow-hidden border border-border bg-primary aspect-[16/10] shadow-[0_10px_30px_rgba(32,32,32,0.06)]">
                  <Image
                    src="/portfolio/tissupro/tissupro-dashboard.jpg"
                    alt="Dashboard Financier & Analytics TissuPro"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>

              <div className="bg-white p-7 rounded-card border border-border flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">
                    Module 01 • Pilotage & Gestion
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Tableau de Bord Financier & Métriques Métier
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Suivi en temps réel du chiffre d'affaires journalier en Dinars Algériens, analyse fine des
                    marges nettes réelles par tissu et seuils d'alerte automatisés sur les rouleaux bientôt épuisés.
                  </p>
                </div>
              </div>
            </div>

            {/* Module 2: Caisse */}
            <div className="flex flex-col group">
              <div className="relative p-2 mb-6">
                <CornerFrame
                  color="#B4B4B4"
                  size={36}
                  thickness={1.5}
                  offset={-4}
                  className="absolute inset-0 text-[#EAE8E8] group-hover:text-[#B4B4B4] transition-colors duration-300"
                />
                <div className="relative rounded-subtle overflow-hidden border border-border bg-primary aspect-[16/10] shadow-[0_10px_30px_rgba(32,32,32,0.06)]">
                  <Image
                    src="/portfolio/tissupro/tissupro-caisse.jpg"
                    alt="Terminal Point de Vente et Encaissement TissuPro"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>

              <div className="bg-white p-7 rounded-card border border-border flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">
                    Module 02 • Point de Vente
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Caisse Tactile & Rendu de Monnaie Temps Réel
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Processus d'encaissement express avec suggestions dynamiques de coupures en espèces, calcul
                    immédiat de la monnaie à rendre et édition instantanée du ticket de caisse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section: Points Forts de l'Ingénierie (Bento Grid) ────────── */}
        <div className="mb-20 md:mb-28">
          <div className="max-w-3xl mb-12">
            <span className="section-label block">03 / Ingénierie & Architecture</span>
            <h2 className="text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Des choix techniques pensés pour la performance brute et la sécurité
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Comment nous avons combiné Rust, Tauri 2.0 et SQLite pour construire une solution légère,
              robuste et infalsifiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Bento Card 1 (Highlight - Span 2) */}
            <div className="md:col-span-2 bg-white p-8 sm:p-10 rounded-card border border-border relative overflow-hidden shadow-[0_4px_24px_rgba(32,32,32,0.04)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-subtle bg-primary text-white flex items-center justify-center">
                  <Calculator className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-accent tracking-widest uppercase block">
                    01 / Logique Métier Avancée
                  </span>
                  <h3 className="text-xl font-bold text-primary">
                    Déstockage HIFO Strict & Prix Réel Intégré
                  </h3>
                </div>
              </div>
              <p className="text-secondary text-sm sm:text-base leading-relaxed mb-4">
                Le moteur algorithmique intègre automatiquement une marge de sécurité métrage (pertes aux
                extrémités et défauts) ainsi que les frais logistiques (transport) directement dans le prix de revient
                au mètre.
              </p>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                L'algorithme <strong>HIFO (High In First Out)</strong> déstocke en priorité les rouleaux ayant le coût
                d'acquisition le plus élevé afin de préserver et sécuriser la rentabilité financière nette du commerçant.
              </p>
            </div>

            {/* Bento Card 2: Performance */}
            <div className="bg-white p-8 rounded-card border border-border shadow-[0_4px_24px_rgba(32,32,32,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-primary text-white flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-mono font-bold text-accent tracking-widest uppercase mb-1 block">
                  02 / Performance
                </span>
                <h3 className="text-lg font-bold text-primary mb-3">
                  Moteur Rust Ultra-Rapide
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Binaire natif compilé avec <strong>Tauri 2.0</strong> : un installeur léger de 1,8 Mo, un
                  démarrage en moins d'une seconde et une consommation de mémoire vive minimale comparé aux
                  applications web encapsulées classiques.
                </p>
              </div>
            </div>

            {/* Bento Card 3: Sécurité Matérielle */}
            <div className="bg-white p-8 rounded-card border border-border shadow-[0_4px_24px_rgba(32,32,32,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-primary text-white flex items-center justify-center mb-6">
                  <Lock className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-mono font-bold text-accent tracking-widest uppercase mb-1 block">
                  03 / Sécurité
                </span>
                <h3 className="text-lg font-bold text-primary mb-3">
                  Protection HMAC-SHA256
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Système de licence autonome lié à l'empreinte matérielle physique du poste (UUID carte mère + volume).
                  Clé infalsifiable 100% hors-ligne avec gestion de périodes de validité.
                </p>
              </div>
            </div>

            {/* Bento Card 4: Cloisonnement des rôles */}
            <div className="bg-white p-8 rounded-card border border-border shadow-[0_4px_24px_rgba(32,32,32,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-primary text-white flex items-center justify-center mb-6">
                  <Users className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-mono font-bold text-accent tracking-widest uppercase mb-1 block">
                  04 / Rôles & Confidentialité
                </span>
                <h3 className="text-lg font-bold text-primary mb-3">
                  Cloisonnement des Rôles
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Séparation stricte des privilèges : session Employé simplifiée pour les ventes quotidiennes sans
                  accès aux marges réelles, et console d'administration sécurisée par PBKDF2 pour le gérant.
                </p>
              </div>
            </div>

            {/* Bento Card 5: Base SQLite */}
            <div className="bg-white p-8 rounded-card border border-border shadow-[0_4px_24px_rgba(32,32,32,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-subtle bg-primary text-white flex items-center justify-center mb-6">
                  <Database className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-mono font-bold text-accent tracking-widest uppercase mb-1 block">
                  05 / Persistance Locale
                </span>
                <h3 className="text-lg font-bold text-primary mb-3">
                  Base SQLite Embarquée
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Toutes les données résident exclusivement sur la machine locale du client, garantissant l'intégrité
                  totale, la confidentialité commerciale et l'absence complète de dépendance Internet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section: Résultats & Valeur Ajoutée ───────────────────────── */}
        <div className="mb-20 md:mb-28 bg-white rounded-card border border-border p-8 sm:p-12 shadow-[0_8px_30px_rgba(32,32,32,0.04)]">
          <div className="max-w-2xl mb-10">
            <span className="section-label block">04 / Résultats & Impact</span>
            <h2 className="text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Une valeur ajoutée concrète dès le premier jour
            </h2>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              L'implémentation de TissuPro a transformé la gestion quotidienne du point de vente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h4 className="text-base font-bold text-primary mb-1">100% Autonomie Réseau</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  Fonctionnement continu sans interruption même en cas de coupure Internet complète.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h4 className="text-base font-bold text-primary mb-1">Visibilité Financière Exacte</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  Calcul précis des bénéfices nets réels par type de tissu en tenant compte des chutes et du transport.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h4 className="text-base font-bold text-primary mb-1">Fluidité en Caisse</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  Réduction drastique des temps d'encaissement et élimination des erreurs de calcul de monnaie.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom CTA Banner ────────────────────────────────────────── */}
        <div className="relative bg-primary text-white rounded-card p-10 sm:p-14 overflow-hidden shadow-[0_20px_50px_rgba(32,32,32,0.1)]">
          <CornerFrame
            color="#B4B4B4"
            size={70}
            thickness={2}
            offset={16}
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="text-[11px] font-mono font-bold text-white/50 tracking-[0.2em] uppercase block mb-3">
              Projet sur mesure
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 leading-tight">
              Vous avez un projet de logiciel ou d'outil interne sur mesure ?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              Chez Zianide Digital, nous concevons des applications adaptées aux règles métiers uniques de votre entreprise.
              Discutons ensemble de vos besoins opérationnels.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary text-sm font-bold tracking-wide rounded-subtle transition-all duration-300 hover:bg-[#EAE8E8] hover:scale-105 active:scale-95"
              >
                <span>Démarrer votre projet</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>

              <a
                href="https://wa.me/213554182982?text=Bonjour,%20j'ai%20découvert%20l'étude%20de%20cas%20TissuPro%20et%20je%20souhaite%20discuter%20d'un%20logiciel%20sur%20mesure."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white text-sm font-bold tracking-wide rounded-subtle transition-colors duration-300 border border-white/15"
              >
                <span>Échanger sur WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
