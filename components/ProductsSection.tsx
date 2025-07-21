import Stripe from 'stripe';
import Image from 'next/image';

type ProductsProps = {
	products: Stripe.Product[];
};

export default function ProductsSection({ products }: ProductsProps) {
	return (
		<section className='relative flex justify-center'>
			<h2 className='absolute bottom-[70%] lowercase text-[9rem]'>
				Our Collection
			</h2>
			<div className='flex gap-12'>
				{products &&
					products.map((product) => {
						return (
							<article
								key={product.id}
								className='w-64 flex flex-col items-center'
							>
								<Image
									src={product.images[0]}
									alt={`${product.name}'s product image`}
									width={200}
									height={200}
									className='z-2'
								/>
								<h3 className='text-2xl'>{product.name}</h3>
								<p className='text-center'>{product.description}</p>
							</article>
						);
					})}
			</div>
		</section>
	);
}
