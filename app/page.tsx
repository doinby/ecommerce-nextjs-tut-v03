import HeroSection from '@/components/HeroSection';
import HowSection from '@/components/HowSection';
import ProductsSection from '@/components/ProductsSection';
import WhyUsSection from '@/components/WhyUsSection';
import { stripe } from '@/lib/stripe';
import Link from 'next/link';

const homeContent = {
	image: '/assets/home/desktop/image-hero-coffeepress.jpg',
	headline: 'Great coffee made simple.',
	description:
		'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
};

export default async function Home() {
	const products = await stripe.products.list({
		expand: ['data.default_price'],
		limit: 5,
	});
	// console.log(products.data);

	return (
		<>
			<HeroSection content={homeContent}>
				<Link href='#how-it-works' className='btn btn-primary'>
					See how it works
				</Link>
			</HeroSection>
			<ProductsSection products={products.data} />
			<WhyUsSection />
			<HowSection />
		</>
	);
}
