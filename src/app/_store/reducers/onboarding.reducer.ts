import { createReducer, on } from '@ngrx/store';
import { setActiveStep, setCompletedStep } from '../actions/onboarding.actions';

export const initialState = {
  activeStep: 1,
  completedSteps: new Array<number>(),
};

export const onboardingReducer = createReducer(
  initialState,
  on(
    setActiveStep,
    (state, { step }) => (state = { ...state, activeStep: step })
  ),
  on(setCompletedStep, (state, { step }) => {
    let steps = [...state.completedSteps, step];

    return (state = { ...state, completedSteps: steps });
  })
);
