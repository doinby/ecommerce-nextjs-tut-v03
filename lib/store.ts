import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Option {
	idx: number;
	stepTitle: string;
	optionTitle: string;
}

interface Options {
	options: Option[];
	resetOption: () => void;
	addOption: (option: Option) => void;
}

export const useStore = create<Options>()(
	persist(
		(set) => ({
			options: [],
			resetOption: () => set({ options: [] }),
			addOption: (option) =>
				set((state) => ({
					options: [
						...state.options.filter(
							(stateOption) => stateOption.stepTitle !== option.stepTitle
						),
						option,
					],
				})),
		}),
		{ name: 'optionsStore' }
	)
);
