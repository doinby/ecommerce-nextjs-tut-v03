import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import { stripe } from '@/lib/stripe';
import Image from 'next/image';

export default async function Home() {
	const products = await stripe.products.list({
		expand: ['data.default_price'],
		limit: 5,
	});
	// console.log(products.data);

	return (
		<>
			<HeroSection />
			<ProductsSection products={products.data} />
			{/* <Image src={products.data[0].images[0]} width={300} height={300} alt='' /> */}
		</>
	);
}
