import { type Action } from './actions';
import { GET_ALL_LESSONS_REQUEST, GET_ALL_LESSONS_SUCCESS, GET_ALL_LESSONS_ERROR } from './constants';
import { type ILesson, type ILessonPreview } from '../../global/types';

export const initialState = {
  error: null as any,
  lessonsList: [] as ILesson[],
  lessonsPreviews: [] as ILessonPreview[],
  loading: true
};

type ReduxState = typeof initialState;

export const lessonsReducer = (state: ReduxState = initialState, action: Action): ReduxState => {
  switch (action.type) {
    case GET_ALL_LESSONS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case GET_ALL_LESSONS_SUCCESS:
      return {
        ...state,
        lessonsList: action.payload,
        lessonsPreviews: action.payload.map((lesson, idx) => ({ id: lesson.id, title: lesson.title, index: idx })),
        loading: false
      };
    case GET_ALL_LESSONS_ERROR:
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
