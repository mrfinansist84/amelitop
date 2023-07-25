import { type Action } from './actions';
import { SAVE_LESSON_REQUEST, SAVE_LESSON_SUCCESS, SAVE_LESSON_ERROR, SET_WIDGET_LIST } from './constants';

export const initialState = {
  error: null as any,
  lesson: null as any,
  loading: false,
  widgetsList: [] as any[]
};

type ReduxState = typeof initialState;

export const lessonCreatorReducer = (
  state: ReduxState = initialState, action: Action): ReduxState => {
  switch (action.type) {
    case SAVE_LESSON_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case SAVE_LESSON_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case SAVE_LESSON_ERROR:
      return {
        ...state,
        error: null,
        loading: false
      };
    case SET_WIDGET_LIST:
      return {
        ...state,
        widgetsList: action.widgetsList
      };
    default: {
      return state;
    }
  }
};
