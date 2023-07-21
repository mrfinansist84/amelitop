import { GET_ALL_LESSONS_REQUEST, GET_ALL_LESSONS_SUCCESS, GET_ALL_LESSONS_ERROR } from './constants';
import { type ILesson } from '~/global/types';

export const getAllLessonsRequest = () => ({
  type: GET_ALL_LESSONS_REQUEST
});

export const getAllLessonsSuccess = (payload: ILesson[]) => ({
  type: GET_ALL_LESSONS_SUCCESS,
  payload
});

export const getAllLessonsError = (error: any) => ({
  type: GET_ALL_LESSONS_ERROR,
  error
});

export type Action =
  | ReturnType<typeof getAllLessonsRequest>
  | ReturnType<typeof getAllLessonsSuccess>
  | ReturnType<typeof getAllLessonsError>;
