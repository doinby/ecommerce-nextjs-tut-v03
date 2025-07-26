import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface activeStep {
	activeStep: number;
	setStep: (idx: number) => void;
	resetStep: () => void;
}

export const useActiveStep = create<activeStep>()(
	persist(
		(set) => ({
			activeStep: 0,
			setStep: (idx) =>
				set(() => ({
					activeStep: idx,
				})),
			resetStep: () => set({ activeStep: 0 }),
		}),
		{ name: 'activeStep' }
	)
);
