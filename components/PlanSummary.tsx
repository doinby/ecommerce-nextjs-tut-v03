import { useActiveStep } from '@/lib/activeStep';
import { stepList } from '@/lib/data';
import { useStore } from '@/lib/store';
import classNames from 'classnames';

export default function PlanSummary() {
	const resetStep = useActiveStep().resetStep;
	const resetOption = useStore((store) => store.resetOption);
	const store = useStore((store) => store.options);

	const plan = store.map((option) => {
		const key = option.stepTitle.split(' ')[0].toLowerCase();

		return stepList.includes(option.stepTitle)
			? { [key]: option.optionTitle }
			: undefined;
	});

	function displayOption(option: string) {
		const result = plan.find((item) => item && option in item)?.[option];
		const className = classNames({
			'text-apricot underline underline-offset-3': result,
		});
		if (result) {
			return <span className={className}>{result}</span>;
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
							onClick={() => {
								resetOption();
								resetStep();
							}}
							className='btn text-apricot btn-link'
						>
							Reset Plan
						</button>
					</div>

					<h4 className='text-lg'>
						“I drink coffee as {displayOption('preferences')}, with a{' '}
						{displayOption('bean')} type of bean. {displayOption('quantity')}{' '}
						ground ala {displayOption('grind')} , sent to me{' '}
						{displayOption('deliveries')}
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
