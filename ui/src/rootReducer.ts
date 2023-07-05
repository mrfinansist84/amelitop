import { combineReducers } from 'redux';
import { adminPageReducer } from './containers/AdminPage/reducer';
import { lessonsReducer } from './containers/LessonsPage/reducer';

export type IRootReducer = {
  adminPageReducer: ReturnType<typeof adminPageReducer>;
  lessonsReducer: ReturnType<typeof lessonsReducer>;
};

export const rootReducer = combineReducers({
  adminPageReducer,
  lessonsReducer
});
