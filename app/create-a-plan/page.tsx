'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import HowSection from '@/components/HowSection';
import StepsNavbar from '@/components/StepsNavbar';

const createAPlanContent = {
	image: '/assets/plan/desktop/image-hero-blackcup.jpg',
	headline: 'Create a plan',
	description:
		'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
};

export default function CreateAPlanPage() {
	const pathname = usePathname();
	const [activeStep, setActiveStep] = useState(0);

	return (
		<>
			<HeroSection content={createAPlanContent} />
			<HowSection pathname={pathname} />
			<div className='flex'>
				<StepsNavbar activeStep={activeStep} setActiveStep={setActiveStep} />
			</div>
		</>
	);
}
