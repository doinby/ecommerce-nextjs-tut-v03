import { useState } from 'react';
import classNames from 'classnames';
import { getKeyId } from '@/lib/ultils';
import { Option } from '@/lib/interfaces';
import { useStore } from '@/lib/store';

interface SelectedOption {
	stepTitle: string;
	optionTitle: string;
}

interface StepContentCardsProps {
	stepTitle: string;
	options: Option[];
}

export default function StepContentCards({
	stepTitle,
	options,
}: StepContentCardsProps) {
	const storedOptions = useStore((store) => store.options);
	const addOption = useStore((store) => store.addOption);

	const activeIdx = storedOptions.find(
		(option) => option.stepTitle === stepTitle
	)?.idx;

	function getCardClass(idx: number) {
		return classNames({
			'card bg-neutral p-6': true,
			'bg-primary text-primary-content': idx === activeIdx,
		});
	}

	return (
		<>
			{options.map(({ optionTitle, description }, idx) => {
				const key = getKeyId(optionTitle).concat('-card');
				return (
					<div
						key={key}
						onClick={() => addOption({ idx, stepTitle, optionTitle })}
						className={`${getCardClass(idx)}`}
					>
						<h4 className='card-title'>{optionTitle}</h4>
						<p className='card-content'>{description}</p>
					</div>
				);
			})}
		</>
	);
}
