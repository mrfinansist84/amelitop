import {
  GET_ACCESS_TOKEN_REQUEST,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
  LOGOUT_REQUEST,
  TOGGLE_BANNER,
  POLL_TOKEN_START,
  POLL_TOKEN_STOP
} from './constants';
import { type AuthParams } from '~/global/types';

interface LoginForm {
  email: string;
  password: string;
}

export const getAccessTokenRequest = (form: LoginForm) => ({
  type: GET_ACCESS_TOKEN_REQUEST,
  payload: form
});

export const getAccessTokenSuccess = (response: AuthParams) => ({
  type: GET_ACCESS_TOKEN_SUCCESS,
  accessToken: response.access,
  refreshToken: response.refresh
});

export const getAccessTokenError = (error: any) => ({
  type: GET_ACCESS_TOKEN_ERROR,
  payload: error
});

export const refreshTokenRequest = (accessToken: string) => ({
  type: REFRESH_TOKEN_REQUEST,
  payload: accessToken
});

export const refreshTokenSuccess = (response: AuthParams) => ({
  type: REFRESH_TOKEN_SUCCESS,
  accessToken: response.access,
  refreshToken: response.refresh
});

export const refreshTokenError = (error: any) => ({
  type: REFRESH_TOKEN_ERROR,
  payload: error
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});

export const toggleBannerAction = (state: boolean, status: string, message: string) => ({
  type: TOGGLE_BANNER,
  state,
  status,
  message
});

export const pollTokenStart = () => ({
  type: POLL_TOKEN_START
});

export const pollTokenStop = (error?: any) => ({
  type: POLL_TOKEN_STOP,
  payload: error
});

export type Actions =
  | ReturnType<typeof getAccessTokenRequest>
  | ReturnType<typeof getAccessTokenSuccess>
  | ReturnType<typeof getAccessTokenError>
  | ReturnType<typeof refreshTokenRequest>
  | ReturnType<typeof refreshTokenSuccess>
  | ReturnType<typeof refreshTokenError>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof toggleBannerAction>
  | ReturnType<typeof pollTokenStart>
  | ReturnType<typeof pollTokenStop>;
