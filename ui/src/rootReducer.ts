import { combineReducers } from 'redux';
import { adminPageReducer } from './containers/AdminPage/reducer';

export type IRootReducer = {
  adminPageReducer: ReturnType<typeof adminPageReducer>
};

export const rootReducer = combineReducers({
  adminPageReducer
});
