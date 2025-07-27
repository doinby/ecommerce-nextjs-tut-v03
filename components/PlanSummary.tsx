import { useActiveStep } from '@/lib/activeStep';
import { stepList } from '@/lib/data';
import { useStore } from '@/lib/store';
import classNames from 'classnames';
import React, { useState } from 'react';

export default function PlanSummary() {
	const resetStep = useActiveStep().resetStep;
	const resetOption = useStore((store) => store.resetOption);
	const store = useStore((store) => store.options);
	const [unselected, setUnselected] = useState<string[]>([]);
	// console.log('unselected:', unselected.length > 0);
	const [isError, setIsError] = useState(false);
	console.log('isError:', isError);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const storedSteps = store.map((item) => item.stepTitle);
		const filteredArr = stepList.filter((item) => !storedSteps.includes(item));
		setUnselected(filteredArr);
		setIsError(filteredArr.length > 0);
		e.preventDefault();
	};

	function reset() {
		resetStep();
		resetOption();
		setIsError(false);
	}

	function displayOption(query: string) {
		const matchedObj = store.find((item) => item.stepTitle === query);
		const className = classNames({
			'text-apricot underline underline-offset-3': matchedObj,
			'relative text-error': !matchedObj && isError,
		});

		if (!matchedObj && isError) {
			return (
				<span className={className}>
					<a href='#' className='cursor-pointer'>
						＿＿＿
					</a>
				</span>
			);
		}

		if (matchedObj) {
			return <span className={className}>{matchedObj.optionTitle}</span>;
		} else {
			return <span className={className}>＿＿＿</span>;
		}
	}

	return (
		<div className='flex flex-col items-center'>
			<div className='card w-full bg-accent text-accent-content'>
				<div className='card-body'>
					<div className='card-title flex justify-between'>
						<p className=''>Order Summary</p>
						<button
							type='reset'
							onClick={reset}
							className='btn text-apricot btn-link'
						>
							Reset Plan
						</button>
					</div>

					<h4 className='text-lg'>
						“I drink coffee as {displayOption(stepList[0])}, with a{' '}
						{displayOption(stepList[1])} type of bean.{' '}
						{displayOption(stepList[2])} ground ala {displayOption(stepList[3])}
						, sent to me {displayOption(stepList[4])}
						.”
					</h4>
				</div>

				<div className='card-actions'>
					<button
						type='submit'
						onClick={handleSubmit}
						className='btn btn-primary w-full'
					>
						Confirm my plan!
					</button>
				</div>
			</div>
		</div>
	);
}
