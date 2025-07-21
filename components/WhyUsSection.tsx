import Image from 'next/image';
import { lazy } from 'react';

const cards = [
	{
		title: 'Best quality',
		description:
			'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
		image: '/assets/home/desktop/icon-coffee-bean.svg',
	},

	{
		title: 'Exclusive benefits',
		description:
			'Special offers and swag when you subscribe, including 30% off your first shipment.',
		image: '/assets/home/desktop/icon-gift.svg',
	},

	{
		title: 'Free shipping',
		description:
			'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
		image: '/assets/home/desktop/icon-truck.svg',
	},
];

export default function WhyUsSection() {
	return (
		<section className='relative pb-56 flex flex-col justify-center items-center bg-accent text-accent-content rounded-lg'>
			<article className='p-24 space-y-6 text-center'>
				<h2 className='text-5xl'>Why choose us?</h2>
				<p className='w-128'>
					A large part of our role is choosing which particular coffees will be
					featured in our range. This means working closely with the best coffee
					growers to give you a more impactful experience on every level.
				</p>
			</article>
			<article className='absolute top-[60%] grid grid-cols-[repeat(3,21rem)] gap-8'>
				{cards.map((card) => {
					const id = card.title
						.split(' ')
						.join('-')
						.toLowerCase()
						.concat('-card');
					return (
						<div key={id} className='card p-6 bg-primary text-primary-content'>
							<div className='card-body flex flex-col gap-6 items-center text-center'>
								<Image
									src={card.image}
									width={0}
									height={0}
									className='h-[56px] w-auto self-center'
									alt=''
									loading='lazy'
								/>
								<h3 className='card-title text-2xl'>{card.title}</h3>
								<p>{card.description}</p>
							</div>
						</div>
					);
				})}
			</article>
		</section>
	);
}
