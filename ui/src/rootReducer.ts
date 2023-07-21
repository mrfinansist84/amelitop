import { combineReducers } from 'redux';
import { adminPageReducer } from './containers/AdminPage/reducer';
import { authenticatedReducer } from './containers/Auth/reducer';
import { lessonCreatorReducer } from './containers/LessonCreator/reducer';
import { lessonsReducer } from './containers/LessonsPage/reducer';

export type IRootReducer = {
  adminPageReducer: ReturnType<typeof adminPageReducer>;
  authenticatedReducer: ReturnType<typeof authenticatedReducer>;
  lessonCreatorReducer: ReturnType<typeof lessonCreatorReducer>;
  lessonsReducer: ReturnType<typeof lessonsReducer>;
};

export const rootReducer = combineReducers({
  adminPageReducer,
  authenticatedReducer,
  lessonCreatorReducer,
  lessonsReducer
});

export default rootReducer;
