/**
 * Zianide Digital — Contenu centralisé (Français)
 *
 * Tous les textes du site sont regroupés ici pour :
 *  1. Faciliter la maintenance et la relecture
 *  2. Préparer l'internationalisation (arabe RTL) — il suffira de créer un fichier ar.ts
 *     avec la même structure et de switcher dynamiquement.
 *
 * Convention : chaque section du site correspond à une clé de l'objet `content`.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavContent {
  logo: string;
  links: { label: string; href: string }[];
  cta: string;
  mobileMenuTitle: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  trustIndicators: string[];
}

export interface ServiceItem {
  icon: string; // Lucide icon name
  title: string;
  description: string;
  link: string;
}

export interface ServicesContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

export interface AdvantagesContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: AdvantageItem[];
}

export interface PortfolioProject {
  title: string;
  sector: string;
  badge: string;
  description: string;
  url: string;
}

export interface PortfolioContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  projects: PortfolioProject[];
  cta: string;
  ctaButton: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface TeamContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface PricingContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  note: string;
}

export interface ContactContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    submit: string;
    services: string[];
  };
  info: {
    email: string;
    phone: string;
    location: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
}

export interface FooterContent {
  baseline: string;
  sections: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  copyright: string;
  location: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    locale: string;
    dir: 'ltr' | 'rtl';
  };
  nav: NavContent;
  hero: HeroContent;
  services: ServicesContent;
  advantages: AdvantagesContent;
  portfolio: PortfolioContent;
  process: ProcessContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  footer: FooterContent;
}

// ─── Contenu FR ──────────────────────────────────────────────────────────────

const fr: SiteContent = {
  meta: {
    title: 'Zianide Digital — Studio de création web & digitale',
    description:
      'Studio algérien de création de sites web, applications sur mesure et identité visuelle. Basé à Tlemcen/Oran, 100% en ligne.',
    locale: 'fr-DZ',
    dir: 'ltr',
  },

  nav: {
    logo: 'Zianide Digital',
    links: [
      { label: 'Accueil', href: '#accueil' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'À propos', href: '#a-propos' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Devis gratuit',
    mobileMenuTitle: 'Menu',
  },

  hero: {
    badge: 'Studio digital basé en Algérie · 100\u00A0% en ligne',
    title: 'Votre entreprise mérite',
    titleHighlight: 'une présence digitale à la hauteur.',
    subtitle:
      'Sites web, applications sur mesure et identité visuelle — conçus par un studio réactif, basé à Tlemcen & Oran, à des tarifs de lancement accessibles. En français et en arabe.',
    cta: 'Demander un devis gratuit',
    ctaSecondary: 'Voir nos réalisations',
    trustIndicators: [
      '100\u00A0% en ligne',
      'Devis sous 24-48h',
      'Bilingue FR\u00A0/\u00A0AR',
      'Basés à Tlemcen & Oran',
    ],
  },

  services: {
    sectionLabel: 'Nos services',
    title: 'Ce que nous faisons',
    subtitle:
      'Quatre grandes expertises, un seul objectif : donner à votre entreprise la présence digitale qu\u2019elle mérite — du concept à la mise en ligne, puis bien au-delà.',
    items: [
      {
        icon: 'Globe',
        title: 'Sites web',
        description:
          'Sites vitrines et e-commerce, 100\u00A0% responsive et optimisés pour le référencement. Formulaire de contact, hébergement inclus la première année et design qui reflète vraiment votre activité.',
        link: 'En savoir plus',
      },
      {
        icon: 'Smartphone',
        title: 'Applications sur mesure',
        description:
          'Applications catalogue, vitrine ou avancées avec comptes utilisateurs, back-office et intégrations métier. Collaboration Android & iOS pour couvrir tous vos utilisateurs.',
        link: 'En savoir plus',
      },
      {
        icon: 'PenTool',
        title: 'Identité visuelle',
        description:
          'Création de logo, charte graphique et palette de couleurs adaptée à votre secteur. Déclinaisons pour les réseaux sociaux, le print et tous vos supports de communication.',
        link: 'En savoir plus',
      },
      {
        icon: 'ShieldCheck',
        title: 'Maintenance & suivi',
        description:
          'Forfaits mensuels tout compris : mises à jour, sauvegardes automatiques, monitoring sécurité et petites modifications. Votre site reste performant, vous n\u2019avez jamais à y penser.',
        link: 'En savoir plus',
      },
    ],
  },

  advantages: {
    sectionLabel: 'Pourquoi Zianide Digital',
    title: 'Les raisons concrètes de nous faire confiance',
    subtitle:
      'Pas de promesses vagues : voici ce qui nous différencie vraiment des agences classiques et des freelances.',
    items: [
      {
        number: '01',
        title: 'Des tarifs réellement accessibles',
        description:
          'Pas de local, pas de charges de bureau : notre structure 100\u00A0% en ligne nous permet de proposer des tarifs de lancement nettement inférieurs à ceux d\u2019une agence traditionnelle — sans rogner sur la qualité ni le suivi.',
      },
      {
        number: '02',
        title: 'Bilinguisme natif français / arabe',
        description:
          'Nous concevons aussi bien en français qu\u2019en arabe, RTL compris. Ce n\u2019est pas théorique : nous avons déjà livré un projet bilingue FR/AR complet, avec une interface soignée dans les deux sens de lecture.',
      },
      {
        number: '03',
        title: 'Une double compétence rare',
        description:
          'Un fondateur qui allie gestion, finance et développement web. Un autre qui apporte une expertise informatique avancée. Résultat : des devis réalistes, un vrai suivi de projet, et une exécution technique solide — pas juste du code.',
      },
      {
        number: '04',
        title: 'Réactivité directe, sans intermédiaire',
        description:
          'Vous échangez directement avec les fondateurs via WhatsApp ou les réseaux sociaux. Pas de chargé de compte, pas de ticket dans une file d\u2019attente : une réponse en quelques heures, pas en quelques jours.',
      },
      {
        number: '05',
        title: 'Transparence à chaque étape',
        description:
          'Devis détaillé avant le moindre engagement, acompte clair à la commande, jalons de validation à chaque phase. Vous savez exactement ce que vous payez, quand vous le recevrez, et où en est votre projet à tout moment.',
      },
    ],
  },

  portfolio: {
    sectionLabel: 'Portfolio',
    title: 'Nos réalisations',
    subtitle: 'Chaque projet est une vitrine de notre savoir-faire. Découvrez comment nous avons accompagné nos premiers clients.',
    projects: [
      {
        title: 'Huilerie Hennane',
        sector: 'Agroalimentaire / Production artisanale',
        badge: 'Bilingue FR/AR',
        description:
          'Entreprise familiale de Sabra (Tlemcen), produisant de l\u2019huile d\u2019olive traditionnelle pressée à froid depuis les années 1970. Le site raconte l\u2019histoire familiale et le savoir-faire à travers un storytelling immersif, entièrement bilingue français/arabe (RTL), pour valoriser ce patrimoine auprès d\u2019une clientèle plus large.',
        url: 'https://hennaneihab-svg.github.io/Huilerie-Hennane/',
      },
      {
        title: 'H2 Mecanic Corp',
        sector: 'Automobile / Mécanique',
        badge: 'Clientèle internationale',
        description:
          'Garage automobile en Alberta (Canada) avec plus de 15 ans d\u2019expérience. Ce site vitrine professionnel multi-pages en anglais présente les services, les tarifs clés, la localisation via carte intégrée et un système de prise de rendez-vous.',
        url: 'https://hennaneihab-svg.github.io/H2-mecanic-corp/',
      },
      {
        title: 'اقمشة وسكاي باب زير',
        sector: 'Commerce / Vente de tissus',
        badge: '100% Arabe / RTL',
        description:
          'Commerce de tissus (drap Vietnam, skaï, tissus unis) à Tlemcen, avec livraison nationale. Ce site catalogue orienté conversion est conçu entièrement en arabe (RTL), pensé pour une clientèle locale qui achète via les réseaux et la livraison.',
        url: 'https://younes15-reda.github.io/bab-zair-tissu/',
      },
      {
        title: 'Milybo DZ',
        sector: 'E-commerce / Vêtements bébé',
        badge: 'Bilingue FR/AR',
        description:
          'Boutique e-commerce de vêtements pour bébé (0-36 mois) en Algérie. Site bilingue français/arabe (RTL) avec catalogue produits dynamique (Firebase), système de panier, livraison cash à la livraison partout en Algérie et interface orientée conversion.',
        url: 'https://younes15-reda.github.io/Milybo/',
      },
    ],
    cta: 'Votre projet pourrait être le prochain.',
    ctaButton: 'Démarrer mon projet',
  },

  process: {
    sectionLabel: 'Comment ça marche',
    title: 'Un processus clair, de A à Z',
    subtitle: 'Pas de surprises : vous savez exactement où en est votre projet à chaque étape.',
    steps: [
      {
        step: '1',
        title: 'Premier contact',
        description:
          'Via WhatsApp, Instagram ou le formulaire du site, on échange de façon informelle sur votre besoin et vos objectifs.',
      },
      {
        step: '2',
        title: 'Devis & cahier des charges',
        description:
          'Vous recevez un devis clair sous 24-48h. Si vous validez, un acompte de 30 à 50\u00A0% lance officiellement le projet.',
      },
      {
        step: '3',
        title: 'Conception & développement',
        description:
          'On vous tient au courant par des points d\u2019étape réguliers. Vous validez le design et la version de test avant toute mise en ligne.',
      },
      {
        step: '4',
        title: 'Livraison & suivi',
        description:
          'Votre projet est en ligne ! On vous propose ensuite une maintenance mensuelle pour que vous n\u2019ayez plus jamais à vous en soucier.',
      },
    ],
  },

  team: {
    sectionLabel: 'L\u2019équipe',
    title: 'Deux passionnés, une vision commune',
    subtitle: 'Zianide Digital, c\u2019est l\u2019alliance d\u2019une double compétence au service de votre projet digital.',
    members: [
      {
        name: 'Hennane Ramy Ihab',
        role: 'Co-fondateur · Dév, Design & Gestion',
        bio: 'Étudiant en finance à l\u2019École Supérieure d\u2019Économie d\u2019Oran, Ramy allie gestion financière et création digitale. Il conçoit les sites, logos et identités visuelles, tout en gérant la relation client, les devis et le suivi de projet.',
        initials: 'RH',
      },
      {
        name: 'Iles Reda Younes',
        role: 'Co-fondateur · Expertise Technique',
        bio: 'Informaticien passionné, Reda est en charge du développement technique pointu. Architecture logicielle, back-office sur mesure, intégrations complexes et qualité du code : il garantit la robustesse technique de chaque projet.',
        initials: 'IR',
      },
    ],
  },

  pricing: {
    sectionLabel: 'Tarifs',
    title: 'Des offres claires pour démarrer',
    subtitle: 'Une grille de prix transparente, pensée pour accompagner la digitalisation des PME sans exploser leur budget.',
    plans: [
      {
        name: 'Essentiel',
        price: 'À partir de 20\u00A0000',
        period: 'DA',
        description: 'La solution parfaite pour une première présence en ligne professionnelle et rapide.',
        features: [
          'Site vitrine 3 à 5 pages',
          'Design 100% responsive',
          'Formulaire de contact',
          'Hébergement 1ère année inclus',
        ],
        cta: 'Demander un devis',
      },
      {
        name: 'Premium',
        price: 'À partir de 40\u00A0000',
        period: 'DA',
        description: 'Pour les PME qui veulent se démarquer avec un site plus riche et bilingue.',
        features: [
          'Design sur mesure',
          'Bilingue Français / Arabe',
          'Optimisation SEO de base',
          'Intégration réseaux sociaux',
        ],
        cta: 'Choisir Premium',
        highlighted: true,
      },
      {
        name: 'Sur mesure',
        price: 'Devis',
        period: 'personnalisé',
        description: 'Vous avez un projet plus vaste ? E-commerce, application web ou plateforme métier.',
        features: [
          'E-commerce complet',
          'Applications sur mesure',
          'Fonctionnalités avancées',
          'Maintenance dédiée',
        ],
        cta: 'Discuter du projet',
      },
    ],
    note: 'Tarifs de lancement pour nos premiers clients — devis gratuit et sans engagement.',
  },

  contact: {
    sectionLabel: 'Contact',
    title: 'Discutons de votre projet',
    subtitle: 'Réponse sous 24-48h. Devis gratuit et sans engagement.',
    form: {
      name: 'Votre nom complet',
      email: 'Email ou Téléphone',
      phone: '', // Unused in new design, combined with email
      service: 'Type de projet',
      message: 'Parlez-nous de votre projet, de vos objectifs...',
      submit: 'Envoyer ma demande',
      services: [
        'Site vitrine',
        'Site e-commerce',
        'Application sur mesure',
        'Identité visuelle',
        'Autre',
      ],
    },
    info: {
      email: 'contact@zianide.com',
      phone: '+213 55 41 82 982',
      location: 'Basés à Tlemcen & Oran, Algérie — intervention 100% à distance.',
      whatsapp: '+213554182982',
      instagram: '@ziande_digitale',
      facebook: 'Zianide Digital', // Placeholder
    },
  },

  footer: {
    baseline: 'Studio de création de sites web, d\u2019applications et d\u2019identité visuelle.',
    sections: [
      {
        title: 'Navigation',
        links: [
          { label: 'Accueil', href: '#accueil' },
          { label: 'Services', href: '#services' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Tarifs', href: '#tarifs' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Site vitrine', href: '#services' },
          { label: 'Site e-commerce', href: '#services' },
          { label: 'Application sur mesure', href: '#services' },
          { label: 'Identité visuelle', href: '#services' },
          { label: 'Maintenance', href: '#services' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'WhatsApp', href: 'https://wa.me/213554182982' },
          { label: 'Instagram', href: 'https://www.instagram.com/ziande_digitale?igsh=MTFjaHJtcnRoMnJq' },
          { label: 'Facebook', href: 'https://facebook.com/zianidedigital' },
          { label: 'contact@zianide.com', href: 'mailto:contact@zianide.com' },
        ],
      },
    ],
    copyright: '© 2026 Zianide Digital. Tous droits réservés.',
    location: 'Basés à Tlemcen & Oran, Algérie',
  },
};

export default fr;
