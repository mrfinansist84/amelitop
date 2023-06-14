import {
  GET_ALL_USERS_REQUEST,
  UPDATE_USER_LIST,
  GET_ALL_USERS_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_ERROR,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_ERROR,
  TOGGLE_BANNER
} from './constants';
import { type User } from '../../global/types';

export const getAllUsersRequest = () => ({
  type: GET_ALL_USERS_REQUEST
});

export const getAllUsersError = (error: any) => ({
  type: GET_ALL_USERS_ERROR,
  payload: error
});

export const createUserRequest = (user: User) => ({
  type: CREATE_USER_REQUEST,
  payload: user
});

export const updateUserList = (userList: User[]) => ({
  type: UPDATE_USER_LIST,
  payload: userList
});

export const createUserError = (error: any) => ({
  type: CREATE_USER_ERROR,
  payload: error
});

export const updateUserRequest = (user: User) => ({
  type: UPDATE_USER_REQUEST,
  payload: user
});

export const updateUserError = (error: any) => ({
  type: UPDATE_USER_ERROR,
  payload: error
});

export const deleteUserRequest = (user: User) => ({
  type: DELETE_USER_REQUEST,
  payload: user
});

export const deleteUserError = (error: any) => ({
  type: DELETE_USER_ERROR,
  payload: error
});

export const updateUserStatusRequest = (status: boolean, userId: string) => ({
  type: UPDATE_STATUS_REQUEST,
  status,
  userId
});

export const updateUserStatusError = (error: any) => ({
  type: UPDATE_STATUS_ERROR,
  payload: error
});

export const toggleBannerAction = (state: boolean, status: string, message: string) => ({
  type: TOGGLE_BANNER,
  state,
  status,
  message
});

export type Actions =
    | ReturnType<typeof getAllUsersRequest>
    | ReturnType<typeof getAllUsersError>
    | ReturnType<typeof createUserRequest>
    | ReturnType<typeof updateUserList>
    | ReturnType<typeof createUserError>
    | ReturnType<typeof updateUserRequest>
    | ReturnType<typeof updateUserError>
    | ReturnType<typeof deleteUserRequest>
    | ReturnType<typeof deleteUserError>
    | ReturnType<typeof updateUserStatusRequest>
    | ReturnType<typeof updateUserStatusError>
    | ReturnType<typeof toggleBannerAction>;
