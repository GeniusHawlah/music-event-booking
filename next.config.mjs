/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // dynamicIO: true,
  },

  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1,
  },

  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
      // port: '',
      // pathname: '',
      // search: '',
    },
  ],
}


};

export default nextConfig;
