import { Dispatch, SetStateAction } from 'react';
import { getKeyId } from '@/lib/ultils';
import classNames from 'classnames';
import StepContentCards from './StepContentCards';

const stepItems = [
	{
		question: 'How do you drink your coffee?',
		options: [
			{
				title: 'Capsule',
				description: 'Compatible with Nespresso systems and similar brewers',
			},
			{
				title: 'Filter',
				description:
					'For pour over or drip methods like Aeropress, Chemex, and V60',
			},
			{
				title: 'Espresso',
				description:
					'Dense and finely ground beans for an intense, flavorful experience',
			},
		],
	},
	{
		question: 'What type of coffee?',
		options: [
			{
				title: 'Single origin',
				description:
					'Distinct, high quality coffee from a specific family-owned farm',
			},
			{
				title: 'Decaf',
				description:
					'Just like regular coffee, except the caffeine has been removed',
			},
			{
				title: 'Blended',
				description:
					'Combination of two or three dark roasted beans of organic coffees',
			},
		],
	},
	{
		question: 'How much would you like?',
		options: [
			{
				title: '250g',
				description:
					'Perfect for the solo drinker. Yields about 12 delicious cups.',
			},
			{
				title: '500g',
				description:
					'Perfect option for a couple. Yields about 40 delectable cups.',
			},
			{
				title: '1000g',
				description:
					'Perfect for offices and events. Yields about 90 delightful cups.',
			},
		],
	},
	{
		question: 'Want us to grind them?',
		options: [
			{
				title: 'Wholebean',
				description: 'Best choice if you cherish the full sensory experience',
			},
			{
				title: 'Filter',
				description:
					'For drip or pour-over coffee methods such as V60 or Aeropress',
			},
			{
				title: 'Cafetiére',
				description:
					'Course ground beans specially suited for french press coffee',
			},
		],
	},
	{
		question: 'How often should we deliver?',
		options: [
			{
				title: 'Every week',
				description: '$14.00 per shipment. Includes free first-class shipping.',
			},
			{
				title: 'Every 2 weeks',
				description: '$17.25 per shipment. Includes free priority shipping.',
			},
			{
				title: 'Every month',
				description: '$22.50 per shipment. Includes free priority shipping.',
			},
		],
	},
];

interface StepsContentProps {
	activeStep: number;
	setActiveStep: Dispatch<SetStateAction<number>>;
	setInput: Dispatch<SetStateAction<number[]>>;
}

export default function StepContents({
	activeStep,
	setActiveStep,
	setInput,
}: StepsContentProps) {
	function getQuestionClass(idx: number) {
		return classNames({
			'collapse collapse-arrow': true,
			'collapse-open': idx === activeStep,
		});
	}

	return (
		<div className=''>
			{stepItems.map(({ question, options }, idx) => {
				const key = getKeyId(question).concat('-question');
				return (
					<article
						key={key}
						tabIndex={idx}
						onClick={() => setActiveStep(idx)}
						className={`${getQuestionClass(idx)}`}
					>
						<h3 className='collapse-title text-2xl'>{question}</h3>
						<div className='collapse-content grid grid-cols-3 gap-6'>
							<StepContentCards options={options} />
						</div>
					</article>
				);
			})}
		</div>
	);
}
