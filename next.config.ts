import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'files.stripe.com',
				port: '',
				pathname: '/links/**',
				search: '',
			},
		],
	},
};

export default nextConfig;
