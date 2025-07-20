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
			<article className='w-[32%] mx-16 space-y-6 absolute text-accent-content'>
				<h1 className='text-7xl font-bold font-serif'>
					Great coffee made simple.
				</h1>
				<p>
					Start your mornings with the world’s best coffees. Try our expertly
					curated artisan coffees from our best roasters delivered directly to
					your door, at your schedule.
				</p>
				<Link href='#how-it-works' className='btn btn-primary'>
					See how it works
				</Link>
			</article>
		</section>
	);
}
