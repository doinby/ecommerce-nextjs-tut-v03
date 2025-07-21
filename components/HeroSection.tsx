import Image from 'next/image';
import { ReactNode } from 'react';

type HeroSectionProps = {
	children?: ReactNode;
	content: {
		image: string;
		headline: string;
		description: string;
	};
};

export default function HeroSection({
	content: { image, headline, description },
	children,
}: HeroSectionProps) {
	return (
		<section className='relative flex items-center'>
			<Image
				src={image}
				width={1280}
				height={600}
				alt=''
				className='rounded-xl'
			/>
			<article className='w-[32%] mx-16 space-y-6 absolute text-accent-content'>
				<h1 className='text-6xl'>{headline}</h1>
				<p>{description}</p>
				{children}
			</article>
		</section>
	);
}
