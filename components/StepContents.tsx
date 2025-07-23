import { getKeyId } from '@/lib/ultils';
import classNames from 'classnames';
import StepContentCards from './StepContentCards';
import { stepItems } from '../lib/data';
import { useActiveStep } from '@/lib/activeStep';

export default function StepContents() {
	const activeStep = useActiveStep().activeStep;
	const setActiveStep = useActiveStep().setActiveStep;

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
