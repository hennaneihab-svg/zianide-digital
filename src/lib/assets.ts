/**
 * Utility to resolve static asset paths correctly for GitHub Pages deployment.
 * Prepend basePath ('/zianide-digital') in production so that images are loaded
 * from the correct sub-directory on GitHub Pages rather than the root domain.
 */
export const basePath = process.env.NODE_ENV === 'production' ? '/zianide-digital' : '';

export function getAssetPath(src: string): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
