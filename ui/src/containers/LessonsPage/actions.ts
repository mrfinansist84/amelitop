import * as C from './constants';
import { type ILesson } from '~/global/types';

export const getAllLessonsRequest = () => ({
  type: C.GET_ALL_LESSONS_REQUEST
});

export const getAllLessonsSuccess = (payload: ILesson[]) => ({
  type: C.GET_ALL_LESSONS_SUCCESS,
  payload
});

export const getAllLessonsError = (error: any) => ({
  type: C.GET_ALL_LESSONS_ERROR,
  error
});

export const deleteLessonRequest = (id: number) => ({
  type: C.DELETE_LESSON_REQUEST,
  id
});

export const deleteLessonSuccess = (id: number) => ({
  type: C.DELETE_LESSON_SUCCESS,
  id
});

export const deleteLessonError = (error: any) => ({
  type: C.DELETE_LESSON_ERROR,
  error
});

export type Action =
  | ReturnType<typeof getAllLessonsRequest>
  | ReturnType<typeof getAllLessonsSuccess>
  | ReturnType<typeof getAllLessonsError>
  | ReturnType<typeof deleteLessonRequest>
  | ReturnType<typeof deleteLessonSuccess>
  | ReturnType<typeof deleteLessonError>;
