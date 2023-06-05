import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from './constants';

export const getAllUsersRequest = () => ({
  type: GET_ALL_USERS_REQUEST
});

export const getAllUsersSuccess = (userList: any) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: userList
});

export const getAllUsersError = (error: any) => ({
  type: GET_ALL_USERS_ERROR,
  payload: error
});

export type Actions =
    | ReturnType<typeof getAllUsersRequest>
    | ReturnType<typeof getAllUsersSuccess>
    | ReturnType<typeof getAllUsersError>;
