import { useActiveStep } from '@/lib/activeStep';
import { getKeyId } from '@/lib/ultils';
import classNames from 'classnames';
import { stepList } from '@/lib/data';

export default function StepsNavbar() {
	const activeStep = useActiveStep().activeStep;
	const setActiveStep = useActiveStep().setStep;

	function getStepClass(idx: number) {
		return classNames({
			'relative py-6 border-b-1': true,
			'text-primary after:content-[&#32;] after:absolute after:left-0 after:bottom-0 after:w-full after:border-primary/100 after:border-b-3':
				idx === activeStep,
		});
	}

	return (
		<ul className='shrink-0 w-48 text-xl text-charcoal/45 font-serif font-black'>
			{stepList.map((step, idx) => {
				const key = getKeyId(step).concat('-step');
				return (
					<li
						key={key}
						onClick={() => setActiveStep(idx)}
						className={`${getStepClass(idx)}`}
					>
						<p className='flex gap-4'>
							{`${String(idx + 1).padStart(2, '0')}`}
							<span>{step}</span>
						</p>
					</li>
				);
			})}
		</ul>
	);
}
