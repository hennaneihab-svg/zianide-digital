'use client';

import React from 'react';

// ─── CornerFrame ─────────────────────────────────────────────────────────────
//
// Reusable SVG component reproducing the Zianide Digital brand motif:
// 4 corner brackets (⌐ style "L" shapes) forming an invisible rectangular frame.
//
// Usage:
//   <CornerFrame>
//     <img src="..." alt="..." />
//   </CornerFrame>
//
// Props:
//   color      — stroke color of the corner brackets (default: primary #202020)
//   size       — length of each bracket arm in px (default: 24)
//   thickness  — stroke width in px (default: 2)
//   offset     — inset from container edges in px (default: 0)
//   className  — additional CSS classes on the wrapper
//   children   — content to frame

interface CornerFrameProps {
  color?: string;
  size?: number;
  thickness?: number;
  offset?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function CornerFrame({
  color = '#202020',
  size = 24,
  thickness = 2,
  offset = 0,
  className = '',
  children,
}: CornerFrameProps) {
  // Each corner is a simple polyline forming an "L" shape.
  // We position them absolutely at the 4 corners of the container.

  const cornerStyle = (
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      width: size,
      height: size,
      pointerEvents: 'none',
    };

    switch (position) {
      case 'top-left':
        return { ...base, top: offset, left: offset };
      case 'top-right':
        return { ...base, top: offset, right: offset, transform: 'scaleX(-1)' };
      case 'bottom-left':
        return { ...base, bottom: offset, left: offset, transform: 'scaleY(-1)' };
      case 'bottom-right':
        return { ...base, bottom: offset, right: offset, transform: 'scale(-1, -1)' };
    }
  };

  const Corner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => (
    <svg
      style={cornerStyle(position)}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polyline
        points={`0,${size} 0,0 ${size},0`}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );

  return (
    <div className={`relative ${className}`}>
      <Corner position="top-left" />
      <Corner position="top-right" />
      <Corner position="bottom-left" />
      <Corner position="bottom-right" />
      {children}
    </div>
  );
}
