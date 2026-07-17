import React from 'react';

/**
 * Zianide Digital Logo
 * SVG vectoriel adaptatif : utilise 'currentColor' pour hériter de la couleur du texte.
 */
export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Zianide Digital Logo"
    >
      {/* ─── Brackets (Coins) ─── */}
      <path d="M 28 52 V 28 H 52" stroke="currentColor" strokeWidth="5" fill="none" />
      <path d="M 92 52 V 28 H 68" stroke="currentColor" strokeWidth="5" fill="none" />
      <path d="M 28 68 V 92 H 52" stroke="currentColor" strokeWidth="5" fill="none" />
      <path d="M 92 68 V 92 H 68" stroke="currentColor" strokeWidth="5" fill="none" />
      
      {/* ─── Lettre centrale Z ─── */}
      <text 
        x="60" 
        y="63" 
        dominantBaseline="central" 
        textAnchor="middle" 
        fontFamily="var(--font-archivo), system-ui, sans-serif" 
        fontWeight="900" 
        fontSize="54" 
        fill="currentColor"
        letterSpacing="-0.05em"
      >
        Z
      </text>
    </svg>
  );
}
