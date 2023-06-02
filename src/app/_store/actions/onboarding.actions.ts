import { createAction, props } from '@ngrx/store';

export const setActiveStep = createAction(
  '[Onboarding Component] Set Active Step',
  props<{ step: number }>()
);

export const setCompletedStep = createAction(
  '[Onboarding Component] Set Completed Step',
  props<{ step: number }>()
);
