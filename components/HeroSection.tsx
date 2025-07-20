import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className='relative flex items-center'>
			<Image
				src='/assets/home/desktop/image-hero-coffeepress.jpg'
				width={1280}
				height={600}
				alt='hero image'
			/>
			<article className='absolute'>
				<h1>Great coffee made simple.</h1>
				<p>
					Start your mornings with the world’s best coffees. Try our expertly
					curated artisan coffees from our best roasters delivered directly to
					your door, at your schedule.
				</p>
				<Link href='#how-it-works'>See how it works</Link>
			</article>
		</section>
	);
}
