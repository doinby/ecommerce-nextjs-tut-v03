import { useState } from 'react';
import classNames from 'classnames';
import { getKeyId } from '@/lib/ultils';

interface StepContentCardsProps {
	options: {
		title: string;
		description: string;
	}[];
}

export default function StepContentCards({ options }: StepContentCardsProps) {
	const [selected, setSelected] = useState<number | undefined>();
	function getCardClass(idx: number) {
		return classNames({
			'card bg-neutral p-6': true,
			'bg-primary text-primary-content': idx === selected,
		});
	}

	return (
		<>
			{options.map(({ title, description }, idx) => {
				const key = getKeyId(title).concat('-card');
				return (
					<div
						key={key}
						onClick={() => setSelected(idx)}
						className={`${getCardClass(idx)}`}
					>
						<h4 className='card-title'>{title}</h4>
						<p className='card-content'>{description}</p>
					</div>
				);
			})}
		</>
	);
}
