import { type Actions } from './actions';
import {
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_ERROR,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
  GET_ACCESS_TOKEN_REQUEST,
  TOGGLE_BANNER,
  LOGOUT_REQUEST
} from './constants';

export const initialState = {
  loading: false as boolean,
  error: null as any,
  accessToken: '' as string,
  refreshToken: '' as string,
  isAuthenticated: false as boolean,
  showBanner: false as boolean,
  bannerStatus: '' as string,
  bannerMessage: '' as string
}

type ReduxState = typeof initialState;

export const authenticatedReducer = (
  state: ReduxState = initialState, action: Actions): ReduxState => {
  switch (action.type) {
    case GET_ACCESS_TOKEN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case GET_ACCESS_TOKEN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      }
    }
    case GET_ACCESS_TOKEN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      }
    }
    case REFRESH_TOKEN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isAuthenticated: true
      }
    }
    case TOGGLE_BANNER: {
      return {
        ...state,
        showBanner: action.state,
        bannerStatus: action.status,
        bannerMessage: action.message,
        loading: false
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        accessToken: '',
        refreshToken: '',
        isAuthenticated: false
      }
    }
    default: {
      return state
    }
  }
};
