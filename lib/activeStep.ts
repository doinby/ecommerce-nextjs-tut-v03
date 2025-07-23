import { create } from 'zustand';
import { activeStep } from './interfaces';

export const useActiveStep = create<activeStep>((set) => ({
	activeStep: 0,
	setActiveStep: (idx) =>
		set(() => ({
			activeStep: idx,
		})),
}));
