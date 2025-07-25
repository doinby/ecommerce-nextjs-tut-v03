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

export interface activeStep {
	activeStep: number;
	setActiveStep: (idx: number) => void;
}

export interface selectedOptions {
	selectedItem: {
		stepTitle: string;
		option: {
			optionTitle: string;
			description: string;
		};
	}[];
}

export interface StepOptions {
	options: {
		optionTitle: string;
		description: string;
	}[];
}
