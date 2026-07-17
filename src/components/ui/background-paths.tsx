"use client";

import { motion } from "framer-motion";

/**
 * ZianideBackgroundPaths — Implémentation complète du template BackgroundPaths
 * adaptée à la charte Zianide Digital.
 *
 * Fidèle au template original :
 * - 36 chemins SVG animés en pathLength + pathOffset (effet "dessin en boucle")
 * - Deux couches position=1 / position=-1 pour la profondeur et la symétrie
 * - Couleurs adaptées à la palette : anthracite (#202020) sur blanc cassé (#F4F3F3)
 * - Opacités plus élevées que l'ancienne version pour un impact visuel réel
 */

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    // Opacité progressive : les chemins du fond sont quasi-invisibles,
    // les premiers plans ont une présence réelle mais subtile.
    strokeOpacity: 0.03 + i * 0.018,
    strokeWidth: 0.4 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#202020"
            strokeWidth={path.strokeWidth}
            strokeOpacity={path.strokeOpacity}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [path.strokeOpacity * 0.5, path.strokeOpacity, path.strokeOpacity * 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: path.id * 0.08,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * Export principal — deux couches symétriques comme dans le template original
 */
export function ZianideBackgroundPaths() {
  return (
    <>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </>
  );
}
