'use client';

import HeroSection from '@/components/HeroSection';
import HowSection from '@/components/HowSection';
import { usePathname } from 'next/navigation';

const createAPlanContent = {
	image: '/assets/plan/desktop/image-hero-blackcup.jpg',
	headline: 'Create a plan',
	description:
		'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
};

export default function CreateAPlanPage() {
	const pathname = usePathname();
	console.log('pathname:', pathname);

	return (
		<>
			<HeroSection content={createAPlanContent} />
			<HowSection pathname={pathname} />
		</>
	);
}
