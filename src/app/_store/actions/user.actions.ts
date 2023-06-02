import { createActionGroup, props } from '@ngrx/store';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Set Role': props<{ role: string }>(),
  },
});
