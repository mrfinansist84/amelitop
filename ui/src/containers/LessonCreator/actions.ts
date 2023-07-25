import { SAVE_LESSON_REQUEST, SAVE_LESSON_SUCCESS, SAVE_LESSON_ERROR, SET_WIDGET_LIST } from './constants';
// import { type ILesson } from '~/global/types';

export const saveLessonRequest = (data: any) => ({
  type: SAVE_LESSON_REQUEST,
  payload: data
});

export const saveLessonSuccess = (payload: any) => ({
  type: SAVE_LESSON_SUCCESS,
  payload
});

export const saveLessonError = (error: any) => ({
  type: SAVE_LESSON_ERROR,
  error
});

export const setWidgetsList = (widgetsList: any[]) => ({
  type: SET_WIDGET_LIST,
  widgetsList
});

export type Action =
  | ReturnType<typeof saveLessonRequest>
  | ReturnType<typeof saveLessonSuccess>
  | ReturnType<typeof saveLessonError>
  | ReturnType<typeof setWidgetsList>;
