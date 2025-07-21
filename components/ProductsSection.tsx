// active: true
// created: 1753009175
//  default_price: {
// id: 'price_1RmuyBRrXx3nlrwwBSsdwmU2',
//     currency: 'aud',
//     product: 'prod_SiLfDiJSfDMOPR',
//     recurring: {
//       interval: 'week',
//       interval_count: 3,
//     },
//     type: 'recurring',
//     unit_amount: 3500,
//   }
// description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
// id: "prod_SiLfDiJSfDMOPR"
// images: Array [ "https://files.stripe.com/links/MDB8YWNjdF8xUm1aUVJSclh4M25scnd3fGZsX3Rlc3RfVmhjRmEzOEFmbjV1MUROeGR2NUhZcjA5008fV0SHSh" ]
// name: "Danche"
// object: "product"

import { Product } from '@/lib/interfaces';
import Image from 'next/image';

type ProductsProps = {
	products: Product[];
};

export default function ProductsSection({ products }: ProductsProps) {
	return (
		<section className='relative flex justify-center'>
			<h2 className='absolute bottom-[70%] lowercase text-[9rem] font-bold font-serif'>
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
								<h3 className='text-2xl font-serif font-bold'>
									{product.name}
								</h3>
								<p className='text-center'>{product.description}</p>
							</article>
						);
					})}
			</div>
		</section>
	);
}
