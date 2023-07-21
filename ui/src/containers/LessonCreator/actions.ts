import { SAVE_LESSON_REQUEST, SAVE_LESSON_SUCCESS, SAVE_LESSON_ERROR } from './constants';
import { type ILesson } from '~/global/types';

export const saveLessonRequest = (lesson: ILesson) => ({
  type: SAVE_LESSON_REQUEST,
  payload: lesson
});

export const saveLessonSuccess = (payload: any) => ({
  type: SAVE_LESSON_SUCCESS,
  payload
});

export const saveLessonError = (error: any) => ({
  type: SAVE_LESSON_ERROR,
  error
});

export type Action =
  | ReturnType<typeof saveLessonRequest>
  | ReturnType<typeof saveLessonSuccess>
  | ReturnType<typeof saveLessonError>;
