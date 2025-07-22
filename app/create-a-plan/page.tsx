'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import HowSection from '@/components/HowSection';
import StepsNavbar from '@/components/StepsNavbar';
import StepContents from '@/components/StepContents';

const createAPlanContent = {
	image: '/assets/plan/desktop/image-hero-blackcup.jpg',
	headline: 'Create a plan',
	description:
		'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
};

export default function CreateAPlanPage() {
	const pathname = usePathname();
	const [activeStep, setActiveStep] = useState(0);
	const [input, setInput] = useState<number[]>([]);

	return (
		<>
			<HeroSection content={createAPlanContent} />
			<HowSection pathname={pathname} />
			<section className='px-16 flex gap-16'>
				<StepsNavbar activeStep={activeStep} setActiveStep={setActiveStep} />
				<StepContents
					activeStep={activeStep}
					setActiveStep={setActiveStep}
					setInput={setInput}
				/>
			</section>
		</>
	);
}
