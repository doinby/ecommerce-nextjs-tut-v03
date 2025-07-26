import { getKeyId } from '@/lib/ultils';
import classNames from 'classnames';
import StepContentCards from './StepContentCards';
import { stepItems } from '../lib/data';
import { useActiveStep } from '@/lib/activeStep';
import { ReactNode } from 'react';

export default function StepContents({ children }: { children: ReactNode }) {
	const activeStep = useActiveStep().activeStep;
	const setActiveStep = useActiveStep().setStep;

	function getQuestionClass(idx: number) {
		return classNames({
			'collapse collapse-arrow': true,
			'collapse-open': idx === activeStep,
		});
	}

	return (
		<div className='space-y-8'>
			{stepItems.map(({ stepTitle, question, options }, idx) => {
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
							<StepContentCards stepTitle={stepTitle} options={options} />
						</div>
					</article>
				);
			})}
			{children}
		</div>
	);
}
