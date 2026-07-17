/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zianide Digital — Brand Palette
        // Primary: Anthracite — logo, headings, dark backgrounds
        primary: '#202020',
        // Secondary: Gris moyen — secondary text, subtitles (Assombri pour contraste WCAG)
        secondary: '#737373',
        // Accent: Gris clair — accents, text on dark backgrounds
        accent: '#B4B4B4',
        // Border: Gris perle — dividers, separators, subtle borders
        border: '#EAE8E8',
        // Background: Blanc cassé — main light background
        bg: '#F4F3F3',
        // Background dark: Anthracite — dark sections
        'bg-dark': '#202020',
        // Pure white — cards, text on dark
        white: '#FFFFFF',
      },
      fontFamily: {
        // Archivo — bold headings (Exaggerated Minimalism, UI/UX Pro Max)
        sans: ['var(--font-archivo)', 'Archivo', 'system-ui', 'sans-serif'],
        // Space Grotesk — body text, subtle geometric feel
        body: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      // Framer Motion handles most animations, but these are useful for Tailwind transitions
      transitionDuration: {
        fast: '300ms',
        normal: '450ms',
        slow: '600ms',
      },
      transitionTimingFunction: {
        'ease-premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      borderRadius: {
        subtle: '4px',
        card: '6px',
      },
    },
  },
  plugins: [],
};
