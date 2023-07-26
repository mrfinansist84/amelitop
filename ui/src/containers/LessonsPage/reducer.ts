import { type Action } from './actions';
import * as C from './constants';
import { type ILesson } from '~/global/types';

export const initialState = {
  error: null as any,
  lessonsList: [] as ILesson[],
  loading: true
};

type ReduxState = typeof initialState;

export const lessonsReducer = (state: ReduxState = initialState, action: Action): ReduxState => {
  switch (action.type) {
    case C.GET_ALL_LESSONS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case C.GET_ALL_LESSONS_SUCCESS:
      return {
        ...state,
        lessonsList: action.payload,
        loading: false
      };
    case C.GET_ALL_LESSONS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case C.DELETE_LESSON_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case C.DELETE_LESSON_SUCCESS:
      return {
        ...state,
        lessonsList: state.lessonsList.filter((lesson: ILesson) => lesson.id !== action.id),
        loading: false
      };
    case C.DELETE_LESSON_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default: {
      return state;
    }
  }
};
