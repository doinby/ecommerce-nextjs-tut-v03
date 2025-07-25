'use client';

import { usePathname } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import HowSection from '@/components/HowSection';
import StepsNavbar from '@/components/StepsNavbar';
import StepContents from '@/components/StepContents';
import { createAPlanHeroContent } from '@/lib/data';

export default function CreateAPlanPage() {
	const pathname = usePathname();

	return (
		<>
			<HeroSection content={createAPlanHeroContent} />
			<HowSection pathname={pathname} />
			<section className='px-16 flex gap-16'>
				<StepsNavbar />
				<StepContents />
			</section>
		</>
	);
}
