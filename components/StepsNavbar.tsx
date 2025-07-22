import { getKeyId } from '@/lib/ultils';
import classNames from 'classnames';

const stepsList = [
	'Preferences',
	'Bean type',
	'Quantity',
	'Grind option',
	'Deliveries',
];

interface StepsNavbarProps {
	activeStep: number;
	setActiveStep: (step: number) => void;
}

export default function StepsNavbar({
	activeStep,
	setActiveStep,
}: StepsNavbarProps) {
	function getStepClass(idx: number) {
		return classNames({
			'relative py-6 border-b-1': true,
			'text-primary after:content-[&#32;] after:absolute after:left-0 after:bottom-0 after:w-full after:border-primary/100 after:border-b-3':
				idx === activeStep,
		});
	}

	return (
		<ul className='shrink-0 text-xl text-charcoal/45 font-serif font-black'>
			{stepsList.map((step, idx) => {
				const key = getKeyId(step).concat('-step');
				return (
					<li
						key={key}
						onClick={() => setActiveStep(idx)}
						className={`${getStepClass(idx)}`}
					>
						{`${String(idx + 1).padStart(2, '0')} ${step}`}
					</li>
				);
			})}
		</ul>
	);
}
