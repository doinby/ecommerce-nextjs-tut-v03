export interface DefaultPrice {
	id: string;
	currency: 'aud';
	recurring: {
		interval: 'week';
		interval_count: number;
	};
	type: 'recurring';
	unit_amount: number;
}

export interface Product {
	active: boolean;
	created: number;
	default_price: DefaultPrice;
	description: string;
	id: string;
	images: string[];
	name: string;
	object: string;
}

export interface Option {
	optionTitle: string;
	description: string;
}

export interface StepItem {
	stepTitle: string;
	question: string;
	options: Option[];
}
