import { combineReducers } from 'redux';
import { adminPageReducer } from './containers/AdminPage/reducer';
import { lessonsReducer } from './containers/LessonsPage/reducer';
import { lessonCreatorReducer } from './containers/LessonCreator/reducer';
import { authenticatedReducer } from './containers/Auth/reducer';

export type IRootReducer = {
  adminPageReducer: ReturnType<typeof adminPageReducer>;
  lessonsReducer: ReturnType<typeof lessonsReducer>;
  lessonCreatorReducer: ReturnType<typeof lessonCreatorReducer>;
  authenticatedReducer: ReturnType<typeof authenticatedReducer>
};

export const rootReducer = combineReducers({
  adminPageReducer,
  lessonsReducer,
  lessonCreatorReducer,
  authenticatedReducer
});
