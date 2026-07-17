/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Active l'export HTML statique
  output: 'export',
  
  // Requis pour que le routage et les assets fonctionnent sur l'URL github.io/zianide-digital
  // S'applique uniquement en production pour ne pas casser le développement local (localhost:3000)
  basePath: isProd ? '/zianide-digital' : '',
  assetPrefix: isProd ? '/zianide-digital/' : '',

  // Requis pour l'export statique : désactive l'optimisation serveur d'images
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
