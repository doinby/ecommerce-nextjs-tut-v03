import Link from 'next/link';

const cards = [
	{
		title: 'Pick your coffee',
		description:
			'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
	},
	{
		title: 'Choose the frequency',
		description:
			'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
	},
	{
		title: 'Receive and enjoy!',
		description:
			'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
	},
];

type HowSectionProps = {
	disableHeadline: boolean;
	backgroundColor: 'inherit' | 'bg-accent';
};

export default function HowSection({
	disableHeadline = false,
	backgroundColor = 'inherit',
}: HowSectionProps) {
	const textColor =
		backgroundColor === 'bg-accent' ? 'text-accent-content' : 'inherit';

	return (
		<section
			id='how-it-works'
			className={`${backgroundColor} ${textColor} px-6 space-y-10`}
		>
			{!disableHeadline && <h2 className='text-2xl'>How it works</h2>}
			<article className='grid grid-cols-[repeat(3,18rem)] gap-16'>
				{cards.map((card, idx) => {
					const id = card.title
						.split(' ')
						.join('-')
						.toLowerCase()
						.concat('-card');

					return (
						<div key={id} className='card py-6 space-y-10'>
							<h3 className='card-title text-7xl text-apricot'>
								{String(idx + 1).padStart(2, '0')}
							</h3>
							<h4 className='text-4xl'>{card.title}</h4>
							<p>{card.description}</p>
						</div>
					);
				})}
			</article>
			<Link href='/create-a-plan' className='btn btn-primary'>
				Create your plan
			</Link>
		</section>
	);
}
