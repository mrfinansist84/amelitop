import { combineReducers } from 'redux';
import { adminPageReducer } from './containers/AdminPage/reducer';
import { lessonsReducer } from './containers/LessonsPage/reducer';
import { lessonCreatorReducer } from './containers/LessonCreator/reducer';

export type IRootReducer = {
  adminPageReducer: ReturnType<typeof adminPageReducer>;
  lessonsReducer: ReturnType<typeof lessonsReducer>;
  lessonCreatorReducer: ReturnType<typeof lessonCreatorReducer>;
};

export const rootReducer = combineReducers({
  adminPageReducer,
  lessonsReducer,
  lessonCreatorReducer
});
