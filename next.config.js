/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active l'export HTML statique
  output: 'export',
  
  // Requis pour que le routage et les assets fonctionnent sur l'URL github.io/zianide-digital
  // (à commenter si tu utilises un vrai nom de domaine type zianide.com plus tard)
  basePath: '/zianide-digital',
  assetPrefix: '/zianide-digital/',

  // Requis pour l'export statique : désactive l'optimisation serveur d'images
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
