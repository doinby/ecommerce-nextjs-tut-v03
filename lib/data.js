export const stepList = [
	'Preferences',
	'Bean type',
	'Quantity',
	'Grind option',
	'Deliveries',
];

export const stepItems = [
	{
		stepTitle: 'Preferences',
		question: 'How do you drink your coffee?',
		options: [
			{
				optionTitle: 'Capsule',
				description: 'Compatible with Nespresso systems and similar brewers',
			},
			{
				optionTitle: 'Filter',
				description:
					'For pour over or drip methods like Aeropress, Chemex, and V60',
			},
			{
				optionTitle: 'Espresso',
				description:
					'Dense and finely ground beans for an intense, flavorful experience',
			},
		],
	},
	{
		question: 'What type of coffee?',
		options: [
			{
				optionTitle: 'Single origin',
				description:
					'Distinct, high quality coffee from a specific family-owned farm',
			},
			{
				optionTitle: 'Decaf',
				description:
					'Just like regular coffee, except the caffeine has been removed',
			},
			{
				optionTitle: 'Blended',
				description:
					'Combination of two or three dark roasted beans of organic coffees',
			},
		],
	},
	{
		question: 'How much would you like?',
		options: [
			{
				optionTitle: '250g',
				description:
					'Perfect for the solo drinker. Yields about 12 delicious cups.',
			},
			{
				optionTitle: '500g',
				description:
					'Perfect option for a couple. Yields about 40 delectable cups.',
			},
			{
				optionTitle: '1000g',
				description:
					'Perfect for offices and events. Yields about 90 delightful cups.',
			},
		],
	},
	{
		question: 'Want us to grind them?',
		options: [
			{
				optionTitle: 'Wholebean',
				description: 'Best choice if you cherish the full sensory experience',
			},
			{
				optionTitle: 'Filter',
				description:
					'For drip or pour-over coffee methods such as V60 or Aeropress',
			},
			{
				optionTitle: 'Cafetiére',
				description:
					'Course ground beans specially suited for french press coffee',
			},
		],
	},
	{
		question: 'How often should we deliver?',
		options: [
			{
				optionTitle: 'Every week',
				description: '$14.00 per shipment. Includes free first-class shipping.',
			},
			{
				optionTitle: 'Every 2 weeks',
				description: '$17.25 per shipment. Includes free priority shipping.',
			},
			{
				optionTitle: 'Every month',
				description: '$22.50 per shipment. Includes free priority shipping.',
			},
		],
	},
];

export const createAPlanHeroContent = {
	image: '/assets/plan/desktop/image-hero-blackcup.jpg',
	headline: 'Create a plan',
	description:
		'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
};
