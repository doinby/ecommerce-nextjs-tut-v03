import { useActiveStep } from '@/lib/activeStep';
import { stepList, stepListId } from '@/lib/data';
import { useStore } from '@/lib/store';
import classNames from 'classnames';
import { getKeyId } from '@/lib/ultils';

export default function PlanSummary() {
	const resetStep = useActiveStep().resetStep;
	const resetOption = useStore((store) => store.resetOption);
	const store = useStore((store) => store.options);

	const plan = store.map(
		(option) =>
			stepList.includes(option.stepTitle) && {
				[getKeyId(option.stepTitle)]: option.optionTitle,
			}
	);

	function reset() {
		resetStep();
		resetOption();
	}

	function displayOption(option: string) {
		const result = plan.find((item) => item && option in item);
		const className = classNames({
			'text-apricot underline underline-offset-3': result,
		});
		if (result) {
			return <span className={className}>{result[option]}</span>;
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
						“I drink coffee as {displayOption(stepListId[0])}, with a{' '}
						{displayOption(stepListId[1])} type of bean.{' '}
						{displayOption(stepListId[2])} ground ala{' '}
						{displayOption(stepListId[3])} , sent to me{' '}
						{displayOption(stepListId[4])}
						.”
					</h4>
				</div>

				<div className='card-actions'>
					<button className='btn btn-primary w-full'>Confirm my plan!</button>
				</div>
			</div>
		</div>
	);
}
