import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';
import { User } from '../../models/user';

export const initialState: User = {
  email: '',
  mobile: '',
  role: 'patient',
  isActive: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setRole, (state, { role }) => (state = { ...state, role }))
);
